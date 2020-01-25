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

  creattRoom = (name, color, type, products,) => {
    let addedRooms = [...this.state.rooms];
    addedRooms.push({name: name, color:color, type:type, products:[],})
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
    this.state.productsForRoom.map((prod)=>{
      return <div>{prod}</div>

    })


  }

  sendProdToRoom = (prod, roomName) => {
    let temp = [...this.state.rooms]
    // let room = temp.filter((element) =>{
    //   return element.name === roomName;
    // });
    temp.map((element) =>{
      if(element.name === roomName){
        element.products.push(prod)
      }
    })
    console.log(temp)

    
    
    
   
  }
  
  render() {
  return (
    <div className="App">
      
      <h1>Smart House</h1>
      <Router>
      <Route exact path='/addroom' component={() =>{return <Add addRoom={this.creattRoom}/>}}/>
      <Route exact path='/room' component={() =>{return <Room sendProdToRoom={this.sendProdToRoom} singleRoom = {this.state.singleRoom} />}}/> 
      <Route exact path='/' component={() =>{return <Home rooms={this.state.rooms} goToRoom={this.goToRoom} prods={this.state.productsForRoom} />}}/>
      
        <Switch>
        
      
        </Switch>
      </Router>
     
    </div>
  );
}
}