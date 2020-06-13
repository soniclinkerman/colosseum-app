import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
    return(
        <div class="settings">
         <Link to="/profile/edit">  <i class="fas fa-cog setting-icon"></i></Link> 
        </div>
    )

}

export default Settings