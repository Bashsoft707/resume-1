import React, {Component} from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component'
import { Time } from './components/time/time.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '', 
      date: new Date()
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));

    setInterval(() => {
      this.tick()
    }, 1000);
  }

  tick(){
    this.setState({date: new Date()})
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value});
  }  

  render() {
    const { monsters, searchField } = this.state;
    const FilterdMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monster' handleChange={this.handleChange} />
        <Time handleClock={this.state.date.toLocaleTimeString()} />
        <CardList monsters={FilterdMonsters}></CardList>
      </div>
    );
  }
}

export default App;
