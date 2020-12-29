<!DOCTYPE html>
<html>
<head>
	<%@ page isErrorPage="true" %>    
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
	<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<c:if test="${s}">
	<a href="/dashboard">Dashboard</a>
</c:if>
	    
<table>
	<div class="top">
		<a href="/songs/new">Add New</a>
		<span>
			<form action="/search" method="post">
				<input t	ype="text" name="creator">
				<input type="submit" value="Search">
			</form>
		</span>
	</div>
    <thead>
        <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Creator</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${Songs}" var="song">
        <tr>
            <td><a href="/songs/${song.id}">${song.name}</a></td>
            <td>${song.rating}</td>
            <td>${song.creator}</td>
            <td>
            	<div class="form">
    	        	<form action="/songs/${song.id}" method="post"><input type="hidden" name="_method" value="delete"><input type="submit" value="Delete"></form>
	            	<form action="/songs/${song.id}/edit" method="get"><input type="submit" value="Edit"></form>
            	</div>
            </td>
        </tr>
        </c:forEach>
    </tbody>
</table>
</body>
</html>