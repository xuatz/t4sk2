import React, { Component } from "react";

const styles = {
  headerContainer: {
    background: "orange",
    height: "50px",
    padding: "0px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  item: {
    flex: "1"
  },
  li: {
    display: "inline",
    paddingRight: "10px"
  }
};

class Header extends Component {
  render() {
    return (
      <div style={styles.headerContainer}>
        <ol>
          <li style={styles.li}>
            <a href="bikes">Dashboard</a>
          </li>
          <li style={styles.li}>
            <a href="bikes">Audit</a>
          </li>
        </ol>
        <button
          style={{ flex: "0 0 auto", textAlign: "right" }}
          onClick={this.props.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Header;
