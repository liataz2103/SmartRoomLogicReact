import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class Room extends Component {

    constructor( props ){
        super( props );
        this.goToRooms = this.goToRooms.bind(this);
      }
    
    static propTypes = {
        singleRoom: propTypes.array.isRequired,
        prods: propTypes.array.isRequired,
        sendProdToRoom: propTypes.func.isRequired,
        activateProd: propTypes.func.isRequired
    }


    state = {
        addProductClicked: false,
        selected: "",
        products: []    
    }
 

     setChoosenProduct = (e) => {
        if(e.target.value !== "choose"){
            this.setState({selected: e.target.value})
        }
    }

    
    
        

    addProdToRoom = ()=>{
        this.setState({addProductClicked:false})
        // take from selected
        let selected = this.state.selected
        // each time add is clicked we push the item and update state with the list
        let prodList = [...this.state.products]
        if (selected === "stereo" && prodList.includes("stereo") === false) {
            prodList.push(selected)
            this.setState({products: [...prodList]})
          } else if (selected === "heater" && this.props.singleRoom.type === "bathRoom") {
            prodList.push(selected)
            this.setState({products: [...prodList]})
          } else if (selected === "lamp" || selected === "air-conditioner") {
            prodList.push(selected)
            this.setState({products: [...prodList]})
          }else {
              alert("noooooo")
          }    
    }

    goToRooms = () =>{
        let prods = [...this.state.products]
        let singles = [...this.props.singleRoom]
        let roomName = singles[0].name
        // console.log(roomName)
        // console.log(roomName);
        prods.map((prod) => {
            this.props.sendProdToRoom(prod, roomName)
       }) 
     }
    
        
  

    renderSection = () => {
        if (this.state.addProductClicked === true){
            
            return(
                <div>
                <select className="form-control" onChange ={this.setChoosenProduct}>
                    <option  value="choose">Add Product</option>
                    <option  value="air-conditioner">Air-Conditioner </option>
                    <option  value="heater">Heater</option>
                    <option  value="stereo">Stereo</option>
                    <option  value="lamp">Lamp</option>
                 </select> 
                 <button onClick = {this.addProdToRoom}>Add</button>
                 </div>
                 
                    
            )
    }else {
        
    }
}
    // trial = () => {
    //     let temp = [...this.props.singleRoom]
    //     console.log(temp[0].products)
    // }

    
 

    render() {
        let list = [];
        this.props.singleRoom.map((item, index)=> {
            list.push(
                <div style={{width: "300px", border: "1px solid black"}}>
                    <h1>Room</h1>
                        <p>Name :{item.name}</p>
                        <p>Type :{item.type}</p>
                        <button onClick={() => {this.setState({ addProductClicked: true});}}>Add Product</button>
                        <Link to="/" onClick = {this.goToRooms}> >To Activate products go to rooms </Link>
                </div>
            )

        })


        let prods = [];
        this.state.products.map((prod)=> {
            prods.push(
                <div className="prodSection" >
                    <div style={{width: "100px", border:"1px solid black", backgroundColor: "red"}}>
                        {prod}
                    </div>
        
                </div>
            )
        })

        let temp = [...this.props.singleRoom]
        let roomProds = [];
        temp[0].products.map((prodItem, i)=>{
            roomProds.push(
            <div><button onClick={() => {this.props.activateProd(i, this.props.singleRoom[0].name);}} style={{width: "100px", border:"1px solid black", backgroundColor: `${prodItem.color}`}}>{prodItem.name}</button></div>

            )
        })

        // let roomProds = [];
        //     this.props.singleRoom[0].products.map((prodItem) => {
        //         roomProds.push(
        //             <div ><button style={{width: "100px", border:"1px solid black", backgroundColor: "red"}}>{prodItem}</button></div>
    
        //         )
        //     })
    

        
        

        
        
    

        return (
            <div className="container">
                {list}
                {prods}
                {/* {roomProds} */}
                {roomProds}
             
                
                
                <button onClick={this.trial}>ClickMe</button>
                
                <div className="addProductSection">{this.renderSection()}</div>
                
                

                            
            </div>
        )
    }
}
