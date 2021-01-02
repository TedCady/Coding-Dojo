import React, { Component } from 'react';

class IncrementAge extends Component{
    render(){
        return(
            <button onClick={this.ag}>Birthday Button for {this.props.name}</button>
        );
    }
}