<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="user.UserDAO" %>
<%@ page import="crawler.MainApp" %>
<%@ page import="java.io.PrintWriter"%>
<% request.setCharacterEncoding("UTF-8"); %>
<jsp:useBean id="user" class="user.User" scope="page"/>
<jsp:setProperty name="user" property="userID"/>
<jsp:setProperty name="user" property="userPW"/>
<%
    String userID = null;
    UserDAO userDAO = new UserDAO();
    
    String Body = userDAO.getBody(request);
    user.setUserID(userDAO.splitBody(Body, 1)); 
    user.setUserPW(userDAO.splitBody(Body, 2)); 
    
    int result = userDAO.login(user.getUserID(), user.getUserPW());
    
    if(result == 1){
        session.setAttribute("userID", user.getUserID());
        response.setContentType("application/json; charset=utf-8");
        
        // JSON 응답 생성
        String reJson = "{\r\n"
        + "    \"result1\":\"로그인 성공\"\r\n"
        + "}";

        
        response.getWriter().write(reJson);
        
        // 크롤링 등 추가 작업 수행a
        userID = user.getUserID();
        //크롤링 오류 MainApp.crawl(userID);
    } else {
        // 에러 발생 시 알림 메시지 출력
        PrintWriter script = response.getWriter();
        script.println("<script>");
        
        if(result == 0){
            script.println("alert('비밀번호가 틀렸습니다')");
        } else if(result == -1){
            script.println("alert('존재하지 않는 아이디입니다.')");
        } else if(result == -2){
            script.println("alert('DB오류')");
        }
        
        script.println("history.back()");
        script.println("</script>");
    }
%>
