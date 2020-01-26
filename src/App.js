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

  creattRoom = (name, color, type, products) => {
    let addedRooms = [...this.state.rooms];
    addedRooms.push({name: name, color:color, type:type, products:[]})
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

  sendProdToRoom = (prod, roomName) => {
    let temp = [...this.state.rooms]
    // let room = temp.filter((element) =>{
    //   return element.name === roomName;
    // });
    temp.map((element) =>{
      if(element.name === roomName){
        element.products.push({name: prod, color: "red"})
    
    
      }
    })
  }

  activateProd = (index, name) => {
    let temp = [...this.state.rooms];
    temp.map((element) =>{
      if(element.name === name){
        element.products.map((item, i)=>{
          if(i === index){
            if (item.color === "red"){
              item.color = "green"
            }else{
              item.color = "red"
            }
          }
        })    
      }
    })
    this.setState({rooms: [...temp]})
    
  }
  
  render() {
  return (
    <div className="App">
      
      <h1>Smart House</h1>
      <Router>
      <Route exact path='/addroom' component={() =>{return <Add addRoom={this.creattRoom}/>}}/>
      <Route exact path='/room' component={() =>{return <Room sendProdToRoom={this.sendProdToRoom} singleRoom = {this.state.singleRoom} activateProd={this.activateProd} />}}/> 
      <Route exact path='/' component={() =>{return <Home rooms={this.state.rooms} goToRoom={this.goToRoom} prods={this.state.productsForRoom} />}}/>
      
        <Switch>
        
      
        </Switch>
      </Router>
     
    </div>
  );
}
}