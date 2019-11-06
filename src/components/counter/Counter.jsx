import React, { Component } from "react";
import "./Counter.css";

//Default export component class from FirstComponent.jsx Module
export default class Counter extends Component {
    //Define the initial state in a constructor
    //state => counter = 0
    constructor() {
        super();
        this.state = {
            counter: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <button onClick={this.increment}>+1</button>
                <span className="count">{this.state.counter}</span>
                <button onClick={this.decrement}>-1</button>
            </div>
        );
    }

    increment() {
        //Update state - counter++
        this.state.counter++;
        this.setState({ counter: this.state.counter++ });
    }

    decrement() {
        //Update state - counter--
        this.state.counter--;
        this.setState({ counter: this.state.counter-- });
    }
}
