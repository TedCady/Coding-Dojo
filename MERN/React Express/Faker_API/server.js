// Create a new project folder "Faker_API" and with your terminal, navigate into your new folder
// Create a package.json file using the "npm init -y" command in your terminal
// install express and faker
// Create a server.js file
// In your server.js file, Import express and faker
const express = require('express');
const faker = require('faker')
const app = express();
const port = 8000;
// Create an api route "/api/companies/new" that returns a new company
// Create an api route "/api/user/company" that returns both a new user and a new company
// Run your server.js file using nodemon
// Using Postman, test your new GET routes

// Create 2 classes: User, Company with the same attributes as listed above
class User {
    constructor(){
        this._id=faker.random.number();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.random.alphaNumeric(16);
    }
}
class Company {
    constructor(){
        this._id=faker.random.number();
        this.name=faker.company.companyName();
        this.address={
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// Create an api route "/api/users/new" that returns a new user
app.get('/api/users/new', (req, res) => {
    res.json(new User);
})

app.get('/api/company/new', (req, res) => {
    res.json(new Company);
})

app.get('/api/user/company', (req, res) => {
    let output = {
        User: new User,
        Company: new Company
    }
    res.json(output);
})

app.listen(port, console.log(new User))