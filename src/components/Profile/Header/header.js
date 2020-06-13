import React from "react";
import "../profile.css";

const Header = ({name, username, image, description, hashtag}) => {
    return(
        <div className="profile">


            <div className= "profile-header">
                <img className ="profile-img" src={image}/>
            </div>

             <div className="profile-credentials">
                <p className="profile-name"><strong>{name}</strong></p>
                <a href="#" className="profile-username" > @{username}</a>
            </div>

             <div class="profile-bio">
                <p className="description">{description}</p>
            </div>

            <p className="profile-hashtag"><strong>#{hashtag}</strong></p>

        </div>
    )
}

export default Header