<!DOCTYPE html>
<html>
<head>
	<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="container">
		<form action="/submit" method="post">
			<label>Your Name: <input type="text" name="name"></label>
			<label>Dojo Location: <input type="text" name="location"></label>
			<label>Favorite Language: <input type="text" name="language"></label>
			<label>Comment (optional): <input type="text" name="comment"></label>
			<button>Submit</button>
		</form>
	</div>

</body>
</html>