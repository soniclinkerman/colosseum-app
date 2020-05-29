import React, { Component } from 'react';
import {cardTypes} from "../../data/cardTypes";
import CardList from '../../components/CardList/CardList';
import 'tachyons';
import Wrapper from '../../components/Wrapper/Wrapper';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import SignIn from '../../components/Sign-In/SignIn';
import SignUp from '../../components/Sign-Up/Sign-Up';

class Main extends Component{
  constructor(props){
    super(props);
    this.state= {
      route: "signIn"
    }
  }

  onRouteChange = (route) =>{
    this.setState({route: route})
  }

  render(){

    return (
      <div className="tc">
                <Wrapper>
        <CardList cardTypes={cardTypes}/>
        <Navigation/>
        </Wrapper> 

        {/* {this.state.route === "home" ?

  
        : (this.state.route === "register") ?

        <SignUp onRouteChange={this.onRouteChange}/>
        :
        <SignIn onRouteChange={this.onRouteChange}/>

        }  */}
      </div>
    );
    
  }

}

export default Main;
