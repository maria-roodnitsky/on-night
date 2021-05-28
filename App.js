import React, { Component } from 'react';
import MainTabBar from './navigation/main_tab_bar';
import Landing from './navigation/landing'
import {View} from 'react-native';

// disable really annoying in app warnings
console.disableYellowBox = true;

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }

  signup = (fields) => {
    // axios.post(`${ROOT_URL}/signup`, fields).then((response) => {
    //   this.setState({authenticated: true});
    // }).catch((error) => {
    //   dispatch(authError(`Sign In Failed: ${error.response.data}`));
    // });
    this.setState({authenticated: true});
  }

  render () {
    if (this.state.authenticated) {
      return <MainTabBar />
    } else {
      return <Landing signup={this.signup}/>
    }
  }
}

export default App;