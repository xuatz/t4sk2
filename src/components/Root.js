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
        {this.state.isLoggedIn ? (
          <Main logout={this.loggout} />
        ) : (
          <Public login={this.login} />
        )}
      </>
    );
  }
}

export default Root;
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Root);
