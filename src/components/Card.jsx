import React from "react";
import "./Card.css"

const Card = ({profile, type, name, exp}) => {
    return(
        <div className ="card dib  ma4 grow shadow-5 card-layout">
            <img src={profile} className="profile-img"/>

            <div>
                <h3>Best {name}</h3>
                <p class="exp">{exp}xp</p>
            </div>

            <img src={type} className="icon"/>

        </div>
    )
    
}

export default Card