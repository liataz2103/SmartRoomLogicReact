import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Room from './Room';

export default class Home extends Component {
        static propTypes = {
            rooms: propTypes.array.isRequired,
            goToRoom: propTypes.func.isRequired,
            
           
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

       

        return (
            <div>
                <div className="rooms">
                    {addedRooms}
                

                </div>
                <Link to="/addroom" className="btn btn-success"style = {{fontSize: '20px'}}>+</Link>
                

            </div>
        )
    }
}
