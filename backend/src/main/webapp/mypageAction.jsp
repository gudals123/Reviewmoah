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
    System.out.println("<<<a>>>");
    System.out.println(Body);
    System.out.println("이거야"+Body);
    //System.out.println(userDAO.splitBody(Body, 1)); 
    System.out.println("<<<a>>>");
	
    response.setContentType("application/json; charset=utf-8");
     
	ReviewDAO reviewDAO = new ReviewDAO();
     
    
	String json;
	//내 정보
    ArrayList<User> mylist = userDAO.getUserData((String) session.getAttribute("userID"));
    ObjectMapper objectMapper2 = new ObjectMapper();
	String profileJson = objectMapper2.writeValueAsString(mylist);
	
	if(Body.equals("profile")){
		response.getWriter().write(profileJson);
	}
	
	//리뷰 정보
	ArrayList<Review> list = reviewDAO.getOneReviews((String) session.getAttribute("userID"));
	ObjectMapper objectMapper = new ObjectMapper();
	String reviewJson = objectMapper.writeValueAsString(list);
	if(Body.equals("review")){
		response.getWriter().write(reviewJson);
	}
	
    //response.setContentType("application/json; charset=utf-8");
    
%>
	