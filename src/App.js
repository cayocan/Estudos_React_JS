import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import ThirdComponent from "./components/learning-examples/ThirdComponent";
import FourthComponent from "./components/learning-examples/FourthComponent";
import Counter from './components/counter/Counter';

function App() {
    return (
        <div className="App">
            <header className="App-header">			
		    <Counter/>                
            </header>
        </div>
    );
}

export default App;
