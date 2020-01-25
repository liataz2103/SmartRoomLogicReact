import React, { Component } from 'react'
import './App.css';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Room from './components/Room';
import Nav from './components/Nav';

export default class App extends Component {

  state = {
    flag: false,
    rooms: [],
    singleRoom: [],
    productsForRoom: []
  };

  creattRoom = (name, color, type, product,) => {
    let addedRooms = [...this.state.rooms];
    addedRooms.push({name: name, color:color, type:type, product:product})
    console.log(addedRooms);
    this.setState({rooms: [...addedRooms]});  
   
    // this.setState({
    //   rooms: [{name: name,  color:color}]
    // }) 
  }


  goToRoom = (index, roomIdentifier) => {
    let filteredRooms = [...this.state.rooms.filter((item, i) =>{
      return i === index;
    })]
    this.setState({singleRoom: [...filteredRooms]});
  }
  
  render() {
  return (
    <div className="App">
      
      <h1>Smart House</h1>
      <Router>
      <Nav/>
      <Route exact path='/addroom' component={() =>{return <Add addRoom={this.creattRoom}/>}}/>
        <Route exact path='/room' component={() =>{return <Room singleRoom = {this.state.singleRoom}/>}}/> 
        <Route exact path='/' component={() =>{return <Home rooms={this.state.rooms} goToRoom={this.goToRoom}  />}}/>
      
        <Switch>
        
      
        </Switch>
      </Router>
     
    </div>
  );
}
}