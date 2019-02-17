import React, { Component } from "react";

const styles = {
  container: {
    background: "lime",
    // height: "50px",
    // padding: "0px 10px",
    display: "flex",
    flexWrap: "wrap"
    // alignItems: "center",
    // justifyContent: "space-between"
  },
  item: {
    flex: "1"
  }
};

class Stats extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div styles={styles.item} />
        <div styles={styles.item}>asdhagsdjsadasjdl lakjsdhas</div>
        <div styles={styles.item}>asdhagsdjsadasjdl lakjsdhas</div>
        <div styles={styles.item}>asdhagsdjsadasjdl lakjsdhas</div>
        <div styles={styles.item}>asdhagsdjsadasjdl lakjsdhas</div>
        <div styles={styles.item}>asdhagsdjsadasjdl lakjsdhas</div>
        <div styles={styles.item}>asdhagsdjsadasjdl lakjsdhas</div>
        <div styles={styles.item}>asdhagsdjsadasjdl lakjsdhas</div>
        <div styles={styles.item}>asdhagsdjsadasjdl lakjsdhas</div>
      </div>
    );
  }
}

export default Stats;
