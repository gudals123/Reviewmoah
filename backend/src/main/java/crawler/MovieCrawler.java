package crawler;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class MovieCrawler {

    public static void main(String[] args,String theater,String user) {
    	
    	// ChromeDriver 상대 경로 지정
    	String chromeDriverPath = "C:\\Users\\namtaeu\\JSP-workspace\\Reviewmoah\\driver\\chromedriver.exe";

    	// Selenium WebDriver 설정
    	System.setProperty("webdriver.chrome.driver", chromeDriverPath);
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        WebDriver driver = new ChromeDriver(options);

        String jdbcUrl = "jdbc:mysql://localhost/reviewmoah";
        String dbUser = "root";
        String dbPassword = "passwd";

        // 웹 페이지 열기
        
        
        String loginUrl = "";
        if ("Cgv".equals(theater)) {
            loginUrl = "https://www.cgv.co.kr/user/login";
        } else if ("Mega".equals(theater)) {
            loginUrl = "https://www.megabox.co.kr/";
        }
        driver.get(loginUrl);

        // 로그인
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return;
        }
        String userId = "";
        String password = "";

        // 데이터베이스 연결
        try (Connection connection = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword)) {
            // SQL 쿼리 작성
            String sql = "SELECT userCgvID, userCgvPW FROM user WHERE userID = ?";
            if ("Mega".equals(theater)) {
                sql = "SELECT userMegaID, userMegaPW FROM user WHERE userID= ?";
            }

            // PreparedStatement를 사용하여 SQL 쿼리 실행
            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                // 바인딩 변수 설정
                preparedStatement.setString(1, user);

                // 쿼리 실행 및 결과 가져오기
                try (ResultSet resultSet = preparedStatement.executeQuery()) {
                    // 결과가 있는 경우
                    if (resultSet.next()) {
                        // 결과를 변수에 저장
                        String dId = resultSet.getString("user"+theater +"ID");
                        String dPassword = resultSet.getString("user"+theater + "PW");

                        // 변수에 저장된 값을 사용
                        userId = dId;
                        password = dPassword;
                    } else {
                        System.out.println("해당하는 레코드가 없습니다.");
                    }
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        if ("Mega".equals(theater)) {
            WebElement loginLink = driver.findElement(By.cssSelector(".before a[title='로그인']"));
            loginLink.click();
            driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);

            WebElement userIdInput = driver.findElement(By.id("ibxLoginId"));
            userIdInput.sendKeys(userId);

            WebElement passwordInput = driver.findElement(By.id("ibxLoginPwd"));
            passwordInput.sendKeys(password);

            // 로그인 버튼 클릭
            WebElement loginButton2 = driver.findElement(By.id("btnLogin"));
            loginButton2.click();
            driver.navigate().refresh();
        }else if("Cgv".equals(theater)) {
        	 WebElement userIdInput = driver.findElement(By.id("txtUserId"));
             userIdInput.sendKeys(userId);

             WebElement passwordInput = driver.findElement(By.id("txtPassword"));
             passwordInput.sendKeys(password);

             // 로그인 버튼 클릭
             WebElement loginButton = driver.findElement(By.id("submit"));
             loginButton.click();
        }

        // 대기 시간 설정
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        // 타겟 페이지로 이동
        String targetPageUrl = "";
        if ("Cgv".equals(theater)) {
            targetPageUrl = "http://www.cgv.co.kr/movies/point/my-list.aspx";
        } else if ("Mega".equals(theater)) {
            targetPageUrl = "https://www.megabox.co.kr/mypage/moviestory?cd=one";
        }
        driver.get(targetPageUrl);

        // 상위 클래스로 리뷰 목록을 찾기
        
        List<WebElement> reviewElements = driver.findElements(By.className("sect-viw-rated"));
        if ("Mega".equals(theater)) {
        	reviewElements = driver.findElements(By.cssSelector(".my-appraisal.myOne.myMovieStory ul li"));
        }

        // 리뷰 데이터를 테이블에 저장하는 부분
        try (Connection connection = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword)) {
            for (WebElement reviewElement : reviewElements) {
                // 리뷰 데이터 추출
                ReviewData reviewData = extractReviewData(connection, reviewElement, theater,user);
                
             // 중복된 영화 제목이 없을 경우에만 저장
                if (!isReviewExists(connection, user, reviewData.getMovieTitle())) {
                    saveReviewToDatabase(connection, reviewData,user);
                    System.out.println("리뷰가 저장되었습니다.");
                } else {
                    System.out.println("이미 존재하는 리뷰입니다. 저장하지 않습니다.");
                }


                System.out.println("------------");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        // 브라우저 닫기
        driver.quit();
    }

    // 리뷰 데이터를 객체로 추출하는 메서드
    private static ReviewData extractReviewData(Connection connection, WebElement reviewElement, String theater,String user) {
        WebElement movieTitleElement;
        WebElement reviewContentElement;
        WebElement posterElement;

        if ("Cgv".equals(theater)) {
            movieTitleElement = reviewElement.findElement(By.cssSelector(".title strong"));
            reviewContentElement = reviewElement.findElement(By.cssSelector(".box-contents p"));
            posterElement = reviewElement.findElement(By.cssSelector(".box-image img"));
        } else if ("Mega".equals(theater)) {
        	movieTitleElement = reviewElement.findElement(By.cssSelector(".tit a"));
        	reviewContentElement = reviewElement.findElement(By.cssSelector(".txt.oneData"));
        	posterElement = reviewElement.findElement(By.cssSelector(".img.posterImg img"));
        } else {
            throw new IllegalArgumentException("Invalid theater type");
        }

        String movieTitle = movieTitleElement.getText();
        String reviewContent = reviewContentElement.getText();
        String posterSrc = posterElement.getAttribute("src");
        String writerId = user;

        // 영화 상영관 설정
        return new ReviewData(movieTitle, reviewContent, posterSrc, writerId);
    }
 

    // 리뷰 데이터를 테이블에 저장하는 메서드
    private static void saveReviewToDatabase(Connection connection, ReviewData reviewData,String user) {
        try {
            String sql = "INSERT INTO review (reviewContent,movieIMG, movieName, userID, reviewAvailable) VALUES (?, ?, ?, ?, ?)";

            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                preparedStatement.setString(1, reviewData.getReviewContent());
                preparedStatement.setString(2, reviewData.getPosterSrc());
                preparedStatement.setString(3, reviewData.getMovieTitle());
                preparedStatement.setString(4, user);
                preparedStatement.setInt(5, 1);
               

                preparedStatement.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // 영화 제목,리뷰 작성자 중복 여부를 확인하는 메서드
    private static boolean isReviewExists(Connection connection, String user, String movieTitle) {
        try {
            String sql = "SELECT COUNT(*) FROM review WHERE userID = ? AND movieName = ?";
            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                preparedStatement.setString(1, user);
                preparedStatement.setString(2, movieTitle);

                try (ResultSet resultSet = preparedStatement.executeQuery()) {
                    if (resultSet.next()) {
                        int count = resultSet.getInt(1);
                        return count > 0;
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    // 리뷰 데이터 클래스 정의
    static class ReviewData {
        private String movieTitle;
        private String reviewContent;
        private String posterSrc;
        private String writerId;

        public ReviewData(String movieTitle, String reviewContent, String posterSrc, String writerId) {
            this.movieTitle = movieTitle;
            this.reviewContent = reviewContent;
            this.posterSrc = posterSrc;
            this.writerId = writerId;
        }

        public String getMovieTitle() {
            return movieTitle;
        }

        public String getReviewContent() {
            return reviewContent;
        }

        public String getPosterSrc() {
            return posterSrc;
        }

        public String getWriterId() {
            return writerId;
        }


    }

	public static void main(String strings) {
		
	}
}