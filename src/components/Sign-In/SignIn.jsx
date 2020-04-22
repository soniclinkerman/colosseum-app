import React from "react";
import "./Sign-In.css"
import Logo from"../images/Logo.png"
import Sword from"../images/Sword.png"
import Shield from"../images/Shield.png"
import People from"../images/People.png"


const SignIn = ({onRouteChange}) => {
    return(
        <div className="centering">
            <div className="form">
            
            <form className="form-layout-sign">
                
                <div className="sign-in-title">
                    <h1 class="title">Colosseum</h1>
                    <img src={Logo} class="logo"/>
                </div>

                <div className="top">
                    <input className="input-type" type="text" placeholder="Username"/>
                </div>
        

                <div>
                    <input className="input-type" type="password" placeholder="Password"/>
                </div>

                <input 
                onClick={() => onRouteChange("home")}
                type="submit" 
                class="sub" 
                value="Login"/>
            </form>

            <div class="sign-up-section">
                    <p onClick={() => onRouteChange("register")}>
                        Don't have an account? <span>Sign up!</span>
                    </p>
            </div>

            

            <div class="bottom-sec">
            <img src={Shield} class="icon"/>
            <img src={People} class="icon"/>
            <img src={Sword} class="icon"/>
            </div>

            <footer>
                <p class="copyright">Zaltick © 2020</p>
            </footer>

            </div>


        </div>
    )

}

export default SignIn