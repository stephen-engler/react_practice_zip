import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const newNumberlist = [...numberlist, newNumber];
//removes the brackets

/*
const bowler = {
  name: 'me',
  score: 99
}
const newBowler = {
  ...bowler,
  score: 101,
}
*/
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        name: 'stephen',
        city:'minneapolis',
        zip: '55418',
        state: 'minnesotat'
      },  
      userInput: {
        name: '',
        city: '',
        zip: '',
      }
    }
    //bind this to this needed for interact with dom\
    //can use arrow functions but not standard yet
    //this.handleChange=this.handleChange.bind(this);
    //this.changeCity = this.changeCity.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
//function that returns a funciton
//doesn't need a bind because of arrow function
//arrow functions take in the this 
//currying!!!!!!
  handleChangeFor =(propertyName)=>{
     return (event)=>{

        this.setState({
          userInput: {
            ...this.state.userInput,
            [propertyName]: event.target.value,
          },
        })
     }
  }
  // handleChange (event){
  //   console.log(event.target.value);
  //   //this.state.user = event.target.value;
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       name:event.target.value,

  //       },
      
  //   })
  // }


  // changeCity (event){
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       city: event.target.value,
  //       }
  //   })
  // }
  handleSubmit =(event)=>{
    console.log(this.state.userInput);
    //clear the inputs
    this.setState({
      user: {
        ...this.state.userInput
      },
      userInput: {
        name: '',
        city: '',
        zip: '',
      }
    })
    event.preventDefault();
  }
  //anytime state changes, render is called 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
            <div>
              <input value = {this.state.userInput.name} onChange={this.handleChangeFor('name')}/>
              You typed: {this.state.user.name}
              <br/>
              <input value = {this.state.userInput.city} onChange={this.handleChangeFor('city')}/>
              city: {this.state.user.city}
              <br/>
              <input value = {this.state.userInput.zip} onChange={this.handleChangeFor('zip')}/>
              zip: {this.state.user.zip}
            </div>
            <input type = "submit" value = "submit"/>
        </form>
      </div>
    );
  }
}

export default App;
