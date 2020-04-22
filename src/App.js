import React, { Component } from 'react';
import {cardTypes} from "./components/cardTypes";
import CardList from './components/CardList/CardList';
import 'tachyons';
import Wrapper from './components/Wrapper/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import SignIn from './components/Sign-In/SignIn';
import SignUp from './components/Sign-Up/Sign-Up';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      route: "signIn"
    }
  }
  render(){


    return (
      <div className="tc">
    
        {/* <Wrapper>
        <CardList cardTypes={cardTypes}/>
        <Navigation/>

        </Wrapper> */}
        <SignUp/>
 
 
      </div>
    );
    
  }

}

export default App;
