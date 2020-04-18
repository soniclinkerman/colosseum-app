import React, { Component } from 'react';
import './App.css';
import {cardTypes} from "./cardTypes";
import CardList from './components/CardList';
import Card from './components/Card';
import 'tachyons';
import Wrapper from './components/Wrapper';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
   
      
    }
  }
  render(){


    return (
      <div className="tc cards">
    
        <Wrapper>
        <CardList cardTypes={cardTypes}/>
        <Navigation/>

        </Wrapper>
 
      </div>
    );
    
  }

}

export default App;
