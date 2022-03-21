import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';



class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    })

    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="search monsters" 
          onChange={(event)=> {
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return {searchField}
            });
        }} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
