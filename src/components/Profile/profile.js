import React, { Component } from "react";
import Header from "./Header/header";
import profile_image from "./ak_logo.jpeg";
import Settings from "./Settings/settings";
import Edit from "./Edit/edit";


class Profile extends Component {

    render(){
        return(
            <div>
                <Settings/>
                <Edit onSubmit={this.onNameChange}/>
                <Header name={this.state.name} />
                
                {/* <Header
                name={this.state.name} 
                username={"soniclinkerman"}
                image={profile_image}
                description={"Created that one app people use. Interview Game Developers. Fingerstyle Guitar."}
                hashtag={"Dontwaitbeyou"}
                /> */}

            </div>
            )
        }
}

export default Profile