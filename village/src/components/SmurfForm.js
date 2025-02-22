import React, { Component } from 'react';
import axios from "axios"
import "./smurfForm.scss"
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api [x]
    this.props.addSmurf(this.state)

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  addSmurf = data => {
    axios
      .post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      })
      .then(response => {
        // console.log(response)
        this.setState({
          name: '',
          age: '',
          height: '',
        })
      })
      .catch(err => console.log(err))
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h2>Add your Smurfs!</h2>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
