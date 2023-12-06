<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="user.UserDAO" %>
<%@ page import="java.io.PrintWriter"%>
<%@ page import="review.ReviewDAO"%>
<%@ page import="review.Review"%>
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
    //System.out.println(userDAO.splitBody(Body, 1)); 
    System.out.println("<<<a>>>");
	
    response.setContentType("application/json; charset=utf-8");
     
	ReviewDAO reviewDAO = new ReviewDAO();
     
     ArrayList<Review> list = reviewDAO.getAllReviews();
     //ArrayList<Review> list = reviewDAO.getList(1);//db리스트 출력
	ObjectMapper objectMapper = new ObjectMapper();
	String json = objectMapper.writeValueAsString(list);
	System.out.println(json);
	response.getWriter().write(json);
    //response.setContentType("application/json; charset=utf-8");
    
	%>
	