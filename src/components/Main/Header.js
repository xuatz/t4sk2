import React, { Component } from "react";
import { Link } from "@reach/router";

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
          <Link to="/">Dashboard</Link>
          <li style={styles.li}>
            <a href="bikes">Audit</a>
          </li>
          <Link to="admin">Admin</Link>
          <li style={styles.li}>
            <a onClick={() => alert("hi")}>Admin</a>
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
