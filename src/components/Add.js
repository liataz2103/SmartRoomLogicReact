import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

export default class Add extends Component {
    static propTypes = {
        addRoom: propTypes.func.isRequired
    }



    state={
        type: "",
        name: "",
        color: "",

    }

    setRoomColor = (e) => {
        this.setState({color: e.target.value})
    }

    validateName =(char) => {
        if (char.target.value.length > 0) {
            this.setState({name: char.target.value})
        }
    }

    validChoice = (e) =>{
        if (e.target.value === "Choose"){
            this.setState({error:"invalid"})
        }else{
            this.setState({type:e.target.value })
        }

    }

    createValidation = () => {
        var type = this.state.type
        var name = this.state.name
        var color= this.state.color
        if(type === "" || name === "" || color=== ""){
            alert("Error")
        }else{
            this.props.addRoom(name, color, type);
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div style={{width: "30%", margin: '25px auto'}}>
                        <form>
                            <div className="form-group">
                            <select className="form-control" onChange = {this.validChoice}>
                                <option  value="choose">Choose</option>
                                <option  value="bedroom">Bedroom</option>
                                <option  value="bathRoom">BathRoom</option>
                                <option  value="kitchen">Kitchen</option>
                            </select> 
                            </div>
                            <div class="form-group">
                                <input onChange = {this.validateName} className="form-control" type="text" name="name"  maxlength="5" placeholder="Room Name"/>

                            </div>
                            <div class="form-group">
                                <input onChange = {this.setRoomColor} className="form-control" type="text" name="color" placeholder="Room Color"/>
                            </div>
                            <div class="form-group">
                                <Link onClick={this.createValidation} to="/" className="btn btn-lg btn-primary btn-block">Create</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
