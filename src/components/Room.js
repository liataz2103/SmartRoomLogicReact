import React, { Component } from 'react';
import propTypes from 'prop-types';



export default class Room extends Component {
    // constructor() {
    //     super()
    //     this.addProdToRoom = this.addProdToRoom.bind(this)
        
    //   }
    
                
    
    static propTypes = {
        singleRoom: propTypes.array.isRequired,
        prods: propTypes.array.isRequired,
        sendProdToRoom: propTypes.func.isRequired,
        productsForRoom: propTypes.array.isRequired
        
        
    }

    state = {
        addProductClicked: false,
        selected: "",
        products: []    
    }
 

     setChoosenProduct = (e) => {
        //  let temp = [...this.state.selected]
        //  if(e.target.value != "choose"){
        //      temp.push(e.target.value)
        //      this.setState({selected: [...temp]})
        //  }

        if(e.target.value != "choose"){
            this.setState({selected: e.target.value})
        }
      
    }

    addProdToRoom = ()=>{
        // set addProductClicked back to false
        // this.setState({addProductClicked: false});
        // let prodList= [...this.state.selected];
        // prodList.push(this.state.selected )
        // console.log(prodList)
        this.props.sendProdToRoom(this.state.selected);
        
        // if(tempProd.length === 0 && this.state.selected != "heater"){
        //    tempProd.push(this.state.selected );

        // }else if (tempProd.length > 0 && tempProd.length <5){
        //     if(this.state.selected  === "stereo" && (!tempProd.includes(this.state.selected ))){
        //         tempProd.push(this.state.selected )
        //     }else if (this.state.selected  === "heater" && this.props.singleRoom.name === "kitchen" && (!tempProd.incudes(this.state.selected ))) {
        //         tempProd.push(this.state.selected )
        //     }else{
        //         tempProd.push(this.state.selected )
        //     }
    
                             
        //     }else{
        //         alert("error");

        //     }

        // this.setState({products:[...tempProd]});
        // this.props.sendProdToRoom(this.state.products);


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
        this.props.productsForRoom.map((prod)=> {
            prods.push(
                <div className="prodSection" >
                    <div style={{width: "100px", border:"1px solid black"}}>
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
