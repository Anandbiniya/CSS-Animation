import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <h1 className={styles.title}>Home</h1>
        <p>
          {" "}
          <Link to="/login/" className={styles.link}>
            Login
          </Link>
        </p>
        <p>
          {" "}
          <Link to="/signup/" className={styles.link}>
            SignUp
          </Link>
        </p>
        <p>
          {" "}
          <Link to="/dashboard/" className={styles.link}>
            DashBoard
          </Link>
        </p>
        <p>
          {" "}
          <Link to="/dropdown/" className={styles.link}>
            DropDown
          </Link>
        </p>
      </Container>
    );
  }
}

export default Home;
