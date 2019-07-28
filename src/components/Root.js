import React, { Component } from 'react';
import Main from './Main';
import Public from './Public';
import Main2 from './Main2';

class Root extends Component {
  state = {
    isLoggedIn: false,
  };

  login = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <>
        <Main2 />
        {/* {true ? <Main logout={this.loggout} /> : <Public login={this.login} />} */}
      </>
    );
  }
}

export default Root;
