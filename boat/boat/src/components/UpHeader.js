import React, { Component } from "react";
import styles from "./UpHeader.module.css";
class UpHeader extends Component {
  render() {
    return (
      <div  className={styles.container}>
        <a href="https://google.com" className={styles.link}>
          <p className={styles.text}    >
            boAt's first-ever neckband with 150HRS playback is here! Bag Rockerz
            Trinity @ ₹1499. Shop Now!
          </p>
        </a>
      </div>
    );
  }
}

export default UpHeader;
