import React, { Component } from "react";

const styles = {
  headerContainer: {
    padding: "0px 10px",
    display: "flex",
    alignItems: "center"
  },
  item: {
    flex: "1"
  },
  li: {
    display: "inline",
    paddingRight: "10px"
  }
};

class Public extends Component {
  render() {
    return (
      <header>
        <div style={styles.headerContainer}>
          <div
            style={{
              ...styles.item,
              fontSize: "40px",
              fontWeight: "bold"
            }}>
            T4sk
          </div>
          <nav
            style={{
              ...styles.item,
              background: "gold",
              borderRadius: "16px",
              flex: "8",
              textAlign: "left"
            }}>
            <ol>
              <li style={styles.li}>
                <a href="bikes">Features</a>
              </li>
              <li style={styles.li}>
                <a href="bikes">Features</a>
              </li>
              <li style={styles.li}>
                <a href="bikes">Features</a>
              </li>
            </ol>
          </nav>
          <div
            style={{
              ...styles.item,
              flex: "2",
              display: "flex",
              justifyContent: "space-evenly"
            }}>
            <a href="bikes">Create an account or </a>
            <button onClick={this.props.login}>Login</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Public;
