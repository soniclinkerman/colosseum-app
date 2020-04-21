import React from "react";
import "./navigation.css"
import Logo from "../images/Logo.png"

const Navigation = () => {
    return(
        <div>
                <ul>
                    <div>
                    <li><img className="logo" src={Logo} alt="logo"/></li>
                    <li><b>Lv. 20</b></li>
                    </div>
                    <li>Create Guild</li>
                    <li>Account/Settings</li>
                </ul>
        </div>
    )
}

export default Navigation