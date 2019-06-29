import React, { Component } from 'react';
import axios from "axios";
import './App.scss';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios.get("http://localhost:3333/smurfs").then(response=>{
      this.setState({
        smurfs: response.data})
        // console.log(response)
    })
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <NavLink exact to="/" className="navlink">Home</NavLink>
          <NavLink to="/add-smurf" className="navlink">Add Smurfs</NavLink>
        </nav>
        <Route exact
          path="/add-smurf:id"
          render={()=>
        <SmurfForm addSmurf={this.addSmurf} />
          }
        />
        <Route exact
          path="/"
          render={()=>
        <Smurfs smurfs={this.state.smurfs} />
        }
        />
      </div>
    );
  }
}

export default App;
