import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list-component/card-list-component';
import { Search } from './components/search-component/search-component';

class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        cops: [], 
        searchField: ''
      };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ cops: users}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { cops, searchField } = this.state;
    const FilteredCops = cops.filter(cop => 
      cop.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>RoboCop</h1>
        <Search placeholder="search cops" handleChange={this.handleChange} />
        <CardList cops={FilteredCops}></CardList>
      </div>
    );
  }
}

export default App;
