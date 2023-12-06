package user;

import java.sql.Connection;


//---
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import review.Review;

//---
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class UserDAO {
	
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	public UserDAO() {
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
	
	
	public static String getBody(HttpServletRequest request) throws IOException { //추가함
		 
        String body = null;
        StringBuilder stringBuilder = new StringBuilder();
        BufferedReader bufferedReader = null;
 
        try {
            InputStream inputStream = request.getInputStream();
            if (inputStream != null) {
                bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                char[] charBuffer = new char[128];
                int bytesRead = -1;
                while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                    stringBuilder.append(charBuffer, 0, bytesRead);
                }
            }
        } catch (IOException ex) {
            throw ex;
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException ex) {
                    throw ex;
                }
            }
        }
 
        body = stringBuilder.toString();
        return body;
    }
	
	
	public static String getLoginRequest(HttpServletRequest request,int num) throws IOException { //추가함 오류나서 일단 사용x
        String loginRequest = getBody(request);
        String[] splited = loginRequest.split("\"");
        return splited[4*num-1];
    }
	
	public static String splitBody(String Body, int num) throws IOException { //바디의 요소를 꺼내옴
		String[] splited = Body.split("\"");
        return splited[4*num-1];
    }
	
	public ArrayList<User> getUserData(String userID) {//모든 리뷰를 가
	    String SQL = "SELECT * FROM user ";
	    ArrayList<User> list = new ArrayList<User>();
	    System.out.println("<<<c>>>");
	    try {
	        PreparedStatement pstmt = conn.prepareStatement(SQL);
	        ResultSet rs = pstmt.executeQuery();
	        System.out.println("<<<d>>>");
	        while (rs.next()) {
	        	System.out.println("<<<d>>>");
	            User user = new User();
	            String userid=rs.getString(1);
	            if(userid.equals(userID)) {
	            	user.setUserID(userid);
		            user.setUserPW(rs.getString(2));
		            user.setUserName(rs.getString(3));
		            user.setUserIntro(rs.getString(4));
		            System.out.println(userid+"bbb"+userID);
		            list.add(user);
	            }
	           
	        }

	        // Optional: 결과셋 리소스 해제
	        rs.close();
	        pstmt.close();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }

	    return list;
	}
	

	public int login(String userID, String userPW) {
		String SQL = "SELECT userPW FROM USER WHERE userID = ?";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				System.out.println("rs.next()는 true다");
				if(rs.getString(1).equals(userPW)) {
					return 1; // 로그인 성공
				}
				else
					return 0; // 비밀번호 불일치
			}
			return -1; // 아이디 없음
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -2; // DB 오류
	}
	
	public int join(User user) {
		String SQL = "INSERT INTO USER VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1,  user.getUserID());
			pstmt.setString(2,  user.getUserPW());
			pstmt.setString(3,  user.getUserName());
			pstmt.setString(4,  user.getUserIntro());
			pstmt.setString(5,  user.getUserCgvID());
			pstmt.setString(6,  user.getUserCgvPW());
			pstmt.setString(7,  user.getUserMegaID());
			pstmt.setString(8,  user.getUserMegaPW());
			pstmt.setString(9,  user.getUserLotteID());
			pstmt.setString(10,  user.getUserLottePW());
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1; //db오류
	}
	
	public String getName(String UserID) {
		String SQL = "SELECT userName FROM USER WHERE userID = ?";
		String userName = null;
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.executeUpdate();
			int count = pstmt.executeUpdate();
			
			rs = pstmt.executeQuery();
			while(rs.next()) {
				userName = rs.getString(3);
			}
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return userName;
		}
	}
