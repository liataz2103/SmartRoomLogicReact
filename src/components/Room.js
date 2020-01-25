import React, { Component } from 'react';
import propTypes from 'prop-types';



export default class Room extends Component {
    
    static propTypes = {
        singleRoom: propTypes.array.isRequired,
        prods: propTypes.array.isRequired,
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
    }
}
 

    render() {
        let list = [];
        this.props.singleRoom.map((item, index)=> {
            list.push(
                <div style={{width: "300px", border: "1px solid black"}}>
                    <h1>Room</h1>
                        <p>Name :{item.name}</p>
                        <p>Type :{item.type}</p>
                        <button onClick={() => {this.setState({ addProductClicked: true});}}>Add Product</button>
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
    

        return (
            <div className="container">
                {list}
                {prods}
                

                
                <div className="addProductSection">{this.renderSection()}</div>

                            
            </div>
        )
    }
}
