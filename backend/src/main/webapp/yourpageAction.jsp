<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="user.UserDAO" %>
<%@ page import="java.io.PrintWriter"%>
<%@ page import="review.ReviewDAO"%>
<%@ page import="review.Review"%>
<%@ page import="user.User"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.fasterxml.jackson.databind.ObjectMapper" %>
<jsp:useBean id="user" class="user.User" scope="page"/>
<% request.setCharacterEncoding("UTF-8"); %>

<%
	UserDAO userDAO = new UserDAO();
    String Body = userDAO.getBody(request);
	
    response.setContentType("application/json; charset=utf-8");
     
	ReviewDAO reviewDAO = new ReviewDAO();
	System.out.println("바디="+Body);
	String[] splited = Body.split(",");
	String yourID = splited[0];
	String choiceData = splited[1];
    System.out.println("yourID"+ yourID);
    System.out.println("choiceData"+ choiceData);
    System.out.println("request.getRequestURL()="+ request.getContextPath());
	
	
	String json;
	//내 정보
    
	
	if(choiceData.equals("profile")){
		ArrayList<User> mylist = userDAO.getUserData(yourID);
	    ObjectMapper objectMapper2 = new ObjectMapper();
		String profileJson = objectMapper2.writeValueAsString(mylist);
		response.getWriter().write(profileJson);
	}
	
	//리뷰 정보
	
	if(choiceData.equals("review")){
		ArrayList<Review> list = reviewDAO.getOneReviews(yourID);
		ObjectMapper objectMapper = new ObjectMapper();
		String reviewJson = objectMapper.writeValueAsString(list);
		response.getWriter().write(reviewJson);
	}
	
    //response.setContentType("application/json; charset=utf-8");
    
%>
	