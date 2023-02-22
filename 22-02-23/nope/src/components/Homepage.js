import React, { Component } from "react";
import styles from "./HomePage.module.css";

export class Homepage extends Component {
  handleContactClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScGKmX4N5_JbCRIYOfbrVbonkwLJkjKW_8LQE2lnz9322-Srw/viewform?usp=sf_link",
      "_blank"
    );
  };

  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                About
              </a>
            </li>
            <li>
              <button
                className={styles.contactBtn}
                onClick={this.handleContactClick}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>

        {/* Content */}
        <main className={styles.content}>
          <h1>Welcome to the Homepage!</h1>
          <p>This is the main content of the page.</p>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2023</p>
        </footer>
      </div>
    );
  }
}

export default Homepage;
