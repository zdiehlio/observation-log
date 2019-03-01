import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    newAnimal: [],
    currentAnimal: ''
  }

  handleChange = (event) => {
    this.setState({currentAnimal: event.target.value})
    console.log(this.state.currentAnimal)
  }

  addAnimal = (event) => {
    event.preventDefault()
    this.setState({newAnimal: this.state.newAnimal.push(this.state.currentAnimal)})
  }
  
  newAnimal = this.state.newAnimal.map(val => {
    return(
      <tr>
        <td>{val}</td>
      </tr>
    )
  })

  render() {

    return (
      <div className="App">
        <header>
          NA Cetacean Observation Log
        </header>
        <div>
          <form>
            <input value={this.state.currentAnimal} placeholder='Animal' name='animal' onChange={this.handleChange}></input>
            <button onClick={this.addAnimal}>Add</button>
          </form>
          <table>
            <tr>
              <th>Time</th>
              <th>Animal(s) Involved</th>
              <th>Fecal</th>
              <th>Urine</th>
              <th>Regurgitation</th>
              <th>Comments</th>
            </tr>
            {this.newAnimal}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
