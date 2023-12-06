package review;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;


public class ReviewDAO {

	private Connection conn;
	private ResultSet rs;
	
	
	public ReviewDAO() { //DB연결
		try {
			String dbURL = "jdbc:mysql://localhost/ReviewMoah?"
					+ "allowPublicKeyRetrieval=true&useUnicode=true&"
					+ "characterEncoding=utf8&useSSL=false&serverTimezone=UTC";
			String dbID = "root";
			String dbPW = "passwd";
			Class.forName("com.mysql.cj.jdbc.Driver");
			conn = DriverManager.getConnection(dbURL, dbID, dbPW);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public String getDate() {	//날짜 받아옴
		String SQL = "SELECT NOW()";
		try {
			PreparedStatement pstmt = conn.prepareStatement(SQL);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				return rs.getString(1);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return ""; //DB오류
	}
	
	public int getNext() {	//
		String SQL = "SELECT reviewID FROM review ORDER BY reviewID DESC";
		try {
			PreparedStatement pstmt = conn.prepareStatement(SQL);
			rs = pstmt.executeQuery(); //rs는 리뷰 아이디 값(이 경우 첫번째부터)
			if(rs.next()) {//next는 다음 거 존재여부
				return rs.getInt(1) + 1; //첫번째 reviewid다음 즉 지금이3이면 4를 반환
			}
			return 1; // 첫번째 리뷰인 경우
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1; //DB오류
	}
	
	public int write(String movieName, String userID, String reviewContent) {//DB에 저장
		String SQL = "INSERT INTO review VALUES (?, ?, ?, ?, ?, ?, ?)";
		try {
			PreparedStatement pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, getNext());			//reviewID
			pstmt.setString(2, userID);			//userID
			pstmt.setString(3, reviewContent);	//reviewContent
			pstmt.setString(4, movieName);		//movieName
			pstmt.setString(5, null);			//movieIMG
			pstmt.setString(6, getDate());		//reviewDATE
			pstmt.setInt(7, 1);					//reviewAvailable
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1; //DB오류
	}
	
	
	public int pluswrite(String movieName, String userID, String reviewContent) {//DB에 저장
		String SQL = "INSERT INTO review VALUES (?, ?, ?, ?, ?, ?, ?)";
		try {
			PreparedStatement pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, getNext());			//reviewID
			pstmt.setString(2, userID);			//userID
			pstmt.setString(3, reviewContent);	//reviewContent
			pstmt.setString(4, movieName);		//movieName
			pstmt.setString(5, null);			//movieIMG
			pstmt.setString(6, getDate());		//reviewDATE
			pstmt.setInt(7, 1);					//reviewAvailable
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1; //DB오류
	}
	
	
	
	public ArrayList<Review> getList(int pageNumber){ //DB에서 모든 리뷰를 리뷰아이디 순서로 받아오는 함수
		String SQL = "SELECT * FROM review WHERE reviewID < ? AND reviewAvailable = 1 ORDER BY reviewID DESC LIMIT 10";
		ArrayList<Review> list = new ArrayList<Review>();
		try {
			PreparedStatement pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, getNext() - (pageNumber -1) * 10);
			rs = pstmt.executeQuery();
			System.out.println("ooo");
			while(rs.next()) {
				System.out.println("qq");
				Review review = new Review();
				review.setReviewID(rs.getInt(1));
				review.setUserID(rs.getString(2));
				review.setReviewContent(rs.getString(3));
				review.setMovieName(rs.getString(4));
				review.setMovieIMG(rs.getString(5));
				review.setReviewDATE(rs.getString(6));
				review.setReviewAvailable(rs.getInt(7));
				list.add(review);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	
	public ArrayList<Review> getAllReviews() {//모든 리뷰를 가
	    String SQL = "SELECT * FROM review WHERE reviewAvailable = 1 ORDER BY reviewID DESC";
	    ArrayList<Review> list = new ArrayList<Review>();

	    try {
	        PreparedStatement pstmt = conn.prepareStatement(SQL);
	        ResultSet rs = pstmt.executeQuery();

	        while (rs.next()) {
	            Review review = new Review();
	            review.setReviewID(rs.getInt(1));
	            review.setUserID(rs.getString(2));
	            review.setReviewContent(rs.getString(3));
	            review.setMovieName(rs.getString(4));
	            review.setMovieIMG(rs.getString(5));
	            review.setReviewDATE(rs.getString(6));
	            review.setReviewAvailable(rs.getInt(7));
	            list.add(review);
	        }

	        // Optional: 결과셋 리소스 해제
	        rs.close();
	        pstmt.close();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }

	    return list;
	}
	
	public ArrayList<Review> getOneReviews(String userID) {//모든 리뷰를 가
	    String SQL = "SELECT * FROM review WHERE reviewAvailable = 1 ORDER BY reviewID DESC";
	    ArrayList<Review> list = new ArrayList<Review>();
	    System.out.println("<<<c>>>");
	    try {
	        PreparedStatement pstmt = conn.prepareStatement(SQL);
	        ResultSet rs = pstmt.executeQuery();
	        System.out.println("<<<d>>>");
	        while (rs.next()) {
	        	System.out.println("<<<d>>>");
	            Review review = new Review();
	            review.setReviewID(rs.getInt(1));
	            String userid=rs.getString(2);
	            review.setUserID(userid);
	            review.setReviewContent(rs.getString(3));
	            review.setMovieName(rs.getString(4));
	            review.setMovieIMG(rs.getString(5));
	            review.setReviewDATE(rs.getString(6));
	            review.setReviewAvailable(rs.getInt(7));
	            System.out.println(userid+"bbb"+userID);
	            if(userid.equals(userID))list.add(review);
	        }

	        // Optional: 결과셋 리소스 해제
	        rs.close();
	        pstmt.close();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }

	    return list;
	}
	
	
	public ArrayList<Review> getOneList(int pageNumber, String userID){ //DB에서 특정 사람의 리뷰를 리뷰아이디 순서로 받아오는 함수n
		String SQL = "SELECT * FROM review WHERE reviewID < ? AND reviewAvailable = 1 AND  ORDER BY reviewID DESC LIMIT 10";
		ArrayList<Review> list = new ArrayList<Review>();
		try {
			PreparedStatement pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, getNext() - (pageNumber -1) * 10);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				Review review = new Review();
				review.setReviewID(rs.getInt(1));
				String user_id=rs.getString(2);
				review.setUserID(user_id);
				review.setReviewContent(rs.getString(3));
				review.setMovieName(rs.getString(4));
				review.setMovieIMG(rs.getString(5));
				review.setReviewDATE(rs.getString(6));
				review.setReviewAvailable(rs.getInt(7));
				if(userID==user_id) list.add(review); //아이디가 일치하는 사람만 리스트에 저장
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	
	public boolean nextPage(int pageNumber) { // 페이징 함수
		String SQL = "SELECT * FROM review WHERE reviewID < ? AND reviewAvailable = 1";
		ArrayList<Review> list = new ArrayList<Review>();
		try {
			PreparedStatement pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, getNext() - (pageNumber -1) * 10);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				return true;
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
}
