import React, { Component } from 'react';

class PersonCard extends Component{
    person = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        age: this.props.age,
        hairColor: this.props.hairColor,
        id: this.props.firstName + this.props.lastName + this.props.hairColor
    }
    render(){
        return(
            <div class="person">
                <h1>{this.person.lastName}, {this.person.firstName}</h1>
                <p>Age: <span>{this.person.age}</span></p>
                <p>Hair Color: {this.person.hairColor}</p>
                <button onClick={this.increment}>Birthday Button for {this.person.firstName} {this.person.lastName}</button>
            </div>
        );
    }
    increment = () => {
        this.setState({person: this.person.age = this.person.age + 1});
    }
}
export default PersonCard;