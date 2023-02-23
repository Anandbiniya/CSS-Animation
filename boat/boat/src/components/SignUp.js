import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  OnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSignupClick = () => {
    const userData = {
      user: this.state.username,
      password: this.state.password,
    };
    console.log("Sign up " + userData.user + " " + userData.password);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1 className={styles.title}>Sign up</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  className={styles.input}
                  type="text"
                  name="username"
                  placeholder="Enter User Name"
                  value={this.state.username}
                  onChange={this.OnChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>
              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  className={styles.input}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.password}
                  onChange={this.OnChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button
              className={styles.button}
              color="primary"
              onClick={this.onSignupClick}
            >
              Sign up
            </Button>
            <p className="mt-2">
              Already have account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SignUp;
