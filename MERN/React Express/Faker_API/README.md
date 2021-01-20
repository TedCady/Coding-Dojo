[![Preview Video](https://img.youtube.com/vi/TGLmPHKXV_M.jpg)](https://youtu.be/TGLmPHKXV_M)

To solidify the concepts of making our own api, we are going to create an api that generates a random user on a GET request. We will be using Postman to make our GET requests.

In this assignment, we will be using 2 javascript libraries to create a simple API that generates a User and/or Company depending on the route:

Express (Server)
Faker (Fake data generator)

Go ahead and follow the checklist below using the 2 classes below:

User class
<br />- _id
<br />- firstName
<br />- lastName
<br />- phoneNumber
<br />- email
<br />- password

Company class
<br />- _id
<br />- name
<br />- address
<br />- street
<br />- city
<br />- state
<br />- zipCode
<br />- country

Faker
The faker library has a ton of methods we can use to populate specific fields with randomly generated data. Look through the faker documentation and search through the methods to choose the ones that you would use to populate each field.

Here is an example of how we can use faker

- [x] Create a new project folder "Faker_API" and with your terminal, navigate into your new folder
- [x] Create a package.json file using the "npm init -y" command in your terminal
- [x] install express and faker
- [x] Create a server.js file
- [x] In your server.js file, Import express and faker
- [x] Create 2 classes: User, Company with the same attributes as listed above
- [x] Create an api route "/api/users/new" that returns a new user
- [x] Create an api route "/api/companies/new" that returns a new company
- [x] Create an api route "/api/user/company" that returns both a new user and a new company
- [x] Run your server.js file using nodemon
- [x] Using Postman, test your new GET routes