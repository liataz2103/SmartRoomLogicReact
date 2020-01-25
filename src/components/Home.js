import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Home extends Component {
        static propTypes = {
            rooms: propTypes.array.isRequired,
            goToRoom: propTypes.func.isRequired,
            prods: propTypes.array.isRequired
            
           
        }
        state = {
            roomIndex: 0
        }

      
    
    render() {
        let addedRooms = []
        
        {this.props.rooms.map((room, i) => {
            let backgroundColor = room.color
            addedRooms.push(
                <Link to="/room" onClick={()=>{this.props.goToRoom(i, this.state.roomIndex); this.setState({roomIndex:i})}}>
                <div style={{backgroundColor:`${backgroundColor}`, width: "100px"}}>
                    <p>{room.name}{i}</p>
                </div>
                </Link>
            )
        })}

        let prods = []
        
        {this.props.prods.map((prod, i) => {
            prods.push(
                <div>
                    <p>{prod}</p>
                </div>

            )
        })}



       

        return (
            <div>
                <div className="rooms">
                    {addedRooms}
                    {prods}
                

                </div>
                <Link to="/addroom" className="btn btn-success"style = {{fontSize: '20px'}}>+</Link>
                

            </div>
        )
    }
}
