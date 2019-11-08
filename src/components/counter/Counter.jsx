import React, { Component } from "react";
import "./Counter.css";
import PropTypes from "prop-types";

//Default export component class from FirstComponent.jsx Module
export default class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} />
                <CounterButton by={5} incrementMethod={this.increment} />
                <CounterButton by={10} incrementMethod={this.increment} />
            </div>
        );
    }

    increment(by) {
        //console.log(`Increment from parent - ${by}`);
        this.setState({
            counter: this.state.counter + by
        });
    }
}

class CounterButton extends Component {
    //Define the initial state in a constructor
    //state => counter = 0
    constructor() {
        super();

        this.state = {
            counter: 0
        };

        /*
            We can not use binding when we
            transform normal functions in
            arrow functions: 
            render = () => {};
            increment = () => {};
            decrement = () =>{};
        */
        this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count">{this.state.counter}</span>
                <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        );
    }

    increment(by) {
        //Update state - counter++
        this.setState({
            counter: this.state.counter + this.props.by
        });

        this.props.incrementMethod(this.props.by);
    }

}

CounterButton.defaultProps = {
    by: 1
};

CounterButton.propTypes = {
    by: PropTypes.number
};
