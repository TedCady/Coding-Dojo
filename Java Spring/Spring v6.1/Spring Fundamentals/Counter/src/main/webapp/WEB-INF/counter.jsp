<!DOCTYPE html>
<html>
<head>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
</head>
<body>
	<ul style="none">
		<li>You have visited <a href="/">http://localhost:8080/</a> <c:out value="${count}"/> times</li>
		<li><a href="/">Test another visit?</a></li>
	</ul>
</body>
</html>
