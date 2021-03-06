import React, { Component } from 'react';
import 'tachyons';
import Main from './containers/Main/Main';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Challenges from './containers/Challenges/Challenges';
import SignUp from './components/Sign-Up/Sign-Up';
import Profile from './components/Profile/profile';
import Edit from './components/Profile/Edit/edit';

class App extends Component{
  render(){
    return (
      <div className="tc">
 
        <Router>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/profile/edit" exact component={Edit}/>



          {/* <Route path="/" exact component={Main}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/challenge/:id" component={Challenges}/> */}
        </Router>
      </div>
    );
  }
}

export default App;
