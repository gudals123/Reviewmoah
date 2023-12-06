<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="user.UserDAO" %>
<%@ page import="java.io.PrintWriter"%>
<% request.setCharacterEncoding("UTF-8"); %>
<jsp:useBean id="user" class="user.User" scope="page"/>
<jsp:setProperty name="user" property="userID"/>
<jsp:setProperty name="user" property="userPW"/>
<jsp:setProperty name="user" property="userName"/>
<jsp:setProperty name="user" property="userIntro"/>
<jsp:setProperty name="user" property="userCgvID"/>
<jsp:setProperty name="user" property="userCgvPW"/>
<jsp:setProperty name="user" property="userMegaID"/>
<jsp:setProperty name="user" property="userMegaPW"/>
<jsp:setProperty name="user" property="userLotteID"/>
<jsp:setProperty name="user" property="userLottePW"/>


	<%
	String userID = null;
	/*
	if(session.getAttribute("userID") != null){
		userID = (String) session.getAttribute("userID");
	}
	*/
    UserDAO userDAO = new UserDAO();
    
    String Body = userDAO.getBody(request);
    user.setUserID(userDAO.splitBody(Body, 1)); 
    user.setUserPW(userDAO.splitBody(Body, 2));
    user.setUserName(userDAO.splitBody(Body, 3));
    user.setUserIntro(userDAO.splitBody(Body, 4));
    user.setUserCgvID(userDAO.splitBody(Body, 5));
    user.setUserCgvPW(userDAO.splitBody(Body, 6));
    user.setUserMegaID(userDAO.splitBody(Body, 7));
    user.setUserMegaPW(userDAO.splitBody(Body, 8));
    user.setUserLotteID(userDAO.splitBody(Body, 9));
    user.setUserLottePW(userDAO.splitBody(Body, 10));
	
	if(userID != null){
		response.setContentType("application/json; charset=utf-8");
        
        // JSON 응답 생성
        String reJson = "{\r\n"
        + "    \"result1\":\"이미 로그인되었습니다\"\r\n"
        + "}";
        response.getWriter().write(reJson);
	}
	if(user.getUserID() == null || user.getUserPW() == null || user.getUserName() == null){
		response.setContentType("application/json; charset=utf-8");
        
        // JSON 응답 생성
        String reJson = "{\r\n"
        + "    \"result1\":\"아이디,비밀번호,닉네임이 입력되지 않았습니다\"\r\n"
        + "}";
        response.getWriter().write(reJson);
	}else{
		int result = userDAO.join(user);
		if(result == -1){
response.setContentType("application/json; charset=utf-8");
	        
	        // JSON 응답 생성
	        String reJson = "{\r\n"
	        + "    \"result1\":\"이미 존재하는 아이디입니다\"\r\n"
	        + "}";
	        response.getWriter().write(reJson);
		}else{
			session.setAttribute("userID", user.getUserID());
	        response.setContentType("application/json; charset=utf-8");
	        
	        // JSON 응답 생성
	        String reJson = "{\r\n"
	        + "    \"result1\":\"회원가입 성공\"\r\n"
	        + "}";
	        response.getWriter().write(reJson);
		}
	}
	%>