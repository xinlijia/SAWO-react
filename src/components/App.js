import React, { Component } from 'react';
import Stage from '../containers/Stage.js'
import './App.css';

// Main App Struct
class App extends Component {

  	render() {

    	return (
            <div className="App">
                <Stage />
            </div>
    	);
	}
}

export default App;
