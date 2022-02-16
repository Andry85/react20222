import React, {Component} from 'react';
import './App.css';



class App extends Component {

  constructor() {
    super();

    this.state = {
      string: "Hello Andry"
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({string: "Hello Peter"})}>Change text</button>
      </div>
    );
  }
}

export default App;
