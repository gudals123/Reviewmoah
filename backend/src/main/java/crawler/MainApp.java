package crawler;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MainApp {
    public static void crawl(String user) {

        // JDBC 드라이버 로드
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return; // 드라이버 로드에 실패하면 더 진행하지 않음
        }

        // CGV 아이디 검사
        String cgvTheaterValue = "Cgv";
        if (checkTheaterIdNotNull(user, cgvTheaterValue)) {
            MovieCrawler.main(new String[]{}, cgvTheaterValue, user);
        } else {
            System.out.println("CGV id is null for the user: " + user);
        }

        // Megabox 아이디 검사
        String megaboxTheaterValue = "Mega";
        if (checkTheaterIdNotNull(user, megaboxTheaterValue)) {
            MovieCrawler.main(new String[]{}, megaboxTheaterValue, user);
        } else {
            System.out.println("Megabox id is null for the user: " + user);
        }
    }

    private static boolean checkTheaterIdNotNull(String user, String theaterValue) {
        // 사용자의 상영관 아이디를 가져오는 메서드
        String theaterId = getUserTheaterId(user, theaterValue);

        // 상영관 아이디가 널이 아닌 경우에만 true를 반환
        return theaterId != null;
    }

    private static String getUserTheaterId(String user, String theaterValue) {
        // JDBC 연결 정보
        String jdbcUrl = "jdbc:mysql://localhost/reviewmoah";
        String dbUser = "root";
        String dbPassword = "passwd";

        String theaterId = null;

        try {
            // 데이터베이스 연결
            Connection connection = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword);

            // 쿼리 작성
            String query = "SELECT user" + theaterValue + "ID FROM user WHERE userID = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, user);

            // 쿼리 실행 및 결과 처리
            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                // 상영관 아이디 가져오기
                theaterId = resultSet.getString("user" + theaterValue + "ID");
            }

            // 리소스 정리
            resultSet.close();
            preparedStatement.close();
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return theaterId;
    }
}
