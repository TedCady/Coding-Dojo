<!DOCTYPE html>
<html>
<head>
	<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="container">
		<p class="error"><c:out value="${error}"/></p>
		<form method="post" action="/submit">
			<label>What is the code? <input type="text" name="code"></label>
			<button>Try Code</button>
		</form>
	</div>

</body>
</html>