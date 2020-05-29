import React, { Component } from "react";
import {Link} from "react-router-dom"
import { cardTypes } from "../../data/cardTypes";
import "./challenges.css";

class Challenges extends Component{
    constructor(props){
        super();
        this.state= {
            challenges: []
        }
    }

    render(){
        let x = cardTypes[this.props.match.params.id - 1]
        return(
            <div>
                 <nav>
                    <Link  to={"/"}>
                    <li className="go-back-link">Go Back</li>
                    </Link>
                </nav>

                <div className="challenge">
                    <h1 className="title">{x.name}</h1>
                    <div className="images">
                        <Link to="/winner">
                        <img src={x.image1}/>
                        </Link>

                        <Link to="/lose">
                        <img src={x.image2}/>
                        </Link>
                        
                    </div>
                    <h2>Exp: {x.exp}</h2>
                </div>

            </div>
        )
    }
}

export default Challenges