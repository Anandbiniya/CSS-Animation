import React, { Component } from "react";
import styles from "./MainHeader.module.css";

const HoverableDiv = React.memo(
  ({ isHovering, handleMouseOver, handleMouseOut }) => {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <h3>CATEGORIES</h3>
       
        {isHovering && (
          <div>
            Hovering ri ght meow!
            <span role="img" aria-label="cat">
              🐱
            </span>
          </div>
        )}
      </div>
    );
  }
);

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOverOne = this.handleMouseOverOne.bind(this);
    this.handleMouseOutOne = this.handleMouseOutOne.bind(this);
    this.handleMouseOverTwo = this.handleMouseOverTwo.bind(this);
    this.handleMouseOutTwo = this.handleMouseOutTwo.bind(this);
    this.state = {
      isHoveringOne: false,
      isHoveringTwo: false,
    };
  }
  handleMouseOverOne() {
    this.setState(() => ({
      isHoveringOne: true,
    }));
  }
  handleMouseOutOne() {
    this.setState(() => ({
      isHoveringOne: false,
    }));
  }
  handleMouseOverTwo() {
    this.setState(() => ({
      isHoveringTwo: true,
    }));
  }
  handleMouseOutTwo() {
    this.setState(() => ({
      isHoveringTwo: false,
    }));
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_logo_small.webp?v=1672379935" />
        </div>
        <div className={styles.category}>
          <div>
          <h3>Daily Deals</h3>
            <HoverableDiv
              isHovering={this.state.isHoveringOne}
              handleMouseOver={this.handleMouseOverOne}
              handleMouseOut={this.handleMouseOutOne}
            />
          </div>
          <div>
            <HoverableDiv
              isHovering={this.state.isHoveringTwo}
              handleMouseOver={this.handleMouseOverTwo}
              handleMouseOut={this.handleMouseOutTwo}
            />
          </div>
        </div>
        <div className={styles.searchCart}>Search bar and cart</div>
      </div>
    );
  }
}

export default MainHeader;
