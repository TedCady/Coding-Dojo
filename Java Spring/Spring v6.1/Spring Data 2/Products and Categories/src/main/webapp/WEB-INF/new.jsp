<!DOCTYPE html>
<html>
<head>
	<%@ page isErrorPage="true" %>    
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
	<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>    
	<div>
		<a href="/dashboard">Dashboard</a>
	</div>
    
	<h1>New Song</h1>
	<form:form action="/songs" method="post" modelAttribute="song">
		<div class="errors">
		</div>
	    <p>
	        <form:label path="name">Name</form:label>	        
			<form:errors path="name"/>
	        <form:input path="name"/>
	    </p>
	    <p>
	        <form:label path="creator">Creator</form:label>	        
			<form:errors path="creator"/>
	        <form:textarea path="creator"/>
	    </p>
	    <p>
	        <form:label path="rating">Rating</form:label>
	        <form:errors path="rating"/>
	        <form:input type="number" path="rating"/>
	    </p> 
	    <input type="submit" value="Submit"/>
	</form:form> 
</body>
</html>