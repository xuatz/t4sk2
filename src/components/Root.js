import React, { Component } from "react";
import Main from "./Main";
import Public from "./Public";

class Root extends Component {
  state = {
    isLoggedIn: false
  };

  login = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  loggout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    return (
      <>
        {true ? (
          <Main logout={this.loggout} />
        ) : (
          <Public login={this.login} />
        )}
      </>
    );
  }
}

export default Root;
