import React, { Component } from 'react';
import 'tachyons';
import Main from './containers/Main/Main';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Challenges from './containers/Challenges/Challenges';
import SignUp from './components/Sign-Up/Sign-Up';
import Profile from './components/Profile/profile';
import Edit from './components/Profile/Edit/edit';
import Header from './components/Profile/Header/header';

class App extends Component{
  constructor() {
    super();

    this.state = {
      name: "",
    };
  }

  onNameChange = (name) => this.setState({ name });
  
  render(){
    return (
      <div className="tc">
 
        <Router>
        <Header name="this.state.name" />
        <Route render={() => <Edit onSubmit={this.onNameChange} />} /> //local input 
        {/* {/* <Route path="/profile" exact component={Profile}/> */}
        {/* <Route path="/profile/edit" exact component={Edit}/> */} */}
          {/* <Route path="/" exact component={Main}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/challenge/:id" component={Challenges}/> */}
        </Router>
      </div>
    );
  }
}

export default App;
