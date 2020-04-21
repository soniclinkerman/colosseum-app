import React, { Component } from 'react';
import {cardTypes} from "./components/cardTypes";
import CardList from './components/CardList/CardList';
import 'tachyons';
import Wrapper from './components/Wrapper/Wrapper';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import SignIn from './components/Sign-In/SignIn';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
   
      
    }
  }
  render(){


    return (
      <div className="tc">
    
        {/* <Wrapper>
        <CardList cardTypes={cardTypes}/>
        <Navigation/>

        </Wrapper> */}
        <SignIn/>
 
      </div>
    );
    
  }

}

export default App;
