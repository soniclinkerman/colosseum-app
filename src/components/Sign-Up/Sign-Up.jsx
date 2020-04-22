import React from "react";
import "./Sign-Up.css"
import Logo from"../images/Logo.png"
import Sword from"../images/Sword.png"
import Shield from"../images/Shield.png"
import People from"../images/People.png"

const SignUp = () => {
    return(
        <div className="centering">
            <div className="form">
            
            <form className="form-layout">
                
                <div className="sign-in-title">
                    <h1 class="title">Colosseum</h1>
                    <img src={Logo} class="logo"/>
                </div>

                <div className="top">
                    <input className="input-type" type="email" placeholder="Email"/>
                </div>

                <div className="top">
                    <input className="input-type" type="email" placeholder="First name"/>
                </div>

                <div className="top">
                    <input className="input-type" type="text" placeholder="Username"/>
                </div>
        

                <div>
                    <input className="input-type" type="password" placeholder="Password"/>
                </div>

                <input type="submit" class="sub" value="Login"/>
            </form>

            <div class="sign-up-section">
                    <p>Don't have an account? <a href="#">Sign up!</a></p>
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

export default SignUp