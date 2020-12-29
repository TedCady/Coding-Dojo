<!DOCTYPE html>
<html>
<head>
	<%@ page isErrorPage="true" %>    
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
	<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>    
	<div class="container">
		<div class="top">
		<a href="/">Dashboard</a>
		</div>
		<div class="middle">
			<form action="/questions" method="post">
			    <p>
			        <label>Question: </label>
			        <input type="text" name="question" <c:if test="${!questionReturn.isBlank()}"> value="${questionReturn}"</c:if>>
			        <label style="color:red;">${questionError}</label>
			    </p>
			    <p>
			        <label>Tags</label>
			        <input type="text" name="tags" <c:if test="${!tagReturn.isBlank()}"> value="${tagReturn}"</c:if>>
			        <label style="color:red;">${tagError}</label>
			    </p>
			    <input type="submit" value="Submit"/>
			</form> 		
		</div>
		<div class="bottom">
			
		</div>				
	</div>
</body>
</html>