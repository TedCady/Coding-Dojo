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
		<div class="w3-container w3-teal" style="margin-bottom:20px;">
			<h1>Questions Dashboard</h1>
		</div>
		<div class="w3-container">
			<table class="w3-table w3-striped w3-hoverable w3-bordered">
				<thead>
					<tr class="w3-teal">
						<th>Questions</th>
						<th>Tags</th>
					</tr>
				</thead>
			<c:forEach items="${questions}" var="question">
				<tr>
					<td><a href="${question.id}" class="w3-hover-purple w3-no-decoration"><c:out value="${question.question}"/></a></td>
					<td>
						<c:forEach items="${question.tags}" var="tag">
							<span><c:out value="${tag.tag}"/></span>
						</c:forEach>
					</td>
				</tr>
			</c:forEach>
			</table>
		</div>
		<div class="w3-container">
			<form action="/new">
			<button class="w3-button w3-hover-purple w3-block w3-padding-large w3-teal">Ask a Question</button>
			</form>
		</div>				
	</div>
</body>
</html>