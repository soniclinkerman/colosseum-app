import React, { Component } from "react";
import "../profile.css";
import { Link } from "react-router-dom";

class Edit extends Component{
    constructor(){
        super();
        this.state={
            name: "",
        }
    }

    handleInputChange = (e) =>{this.setState({name: e.target.value})}

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.name)
    }

    render(){
        return(
            
               <form onSubmit={this.handleSubmit}>
                   {/* <h1>Edit Page</h1> */}
                   <input type="text" onChange={this.handleInputChange}/>


                    {/* <Link to="/profile"> <input type="submit" value="Submit" onClick={this.handleData} /></Link> */}
                 </form>
        )
    }
}


export default Edit
