import React, { Component } from "react";
import styles from "./MainHeader.module.css";

const HoverableDiv = React.memo(({ handleMouseOver, handleMouseOut }) => {
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <h3>CATEGORIES</h3>
    </div>
  );
});
const HoverableDivTwo = React.memo(({ handleMouseOver, handleMouseOut }) => {
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <h3>CATEGORIES</h3>
    </div>
  );
});
const HoverText = () => {
  return (
    <div>
      Hovering ri ght meow!
      <span role="img" aria-label="cat">
        🐱
      </span>
    </div>
  );
};
const HoverTextTwo = () => {
  return (
    <div>
      Hovering ri ght meow!
      <span role="img" aria-label="cat">
        🐱
      </span>
    </div>
  );
};

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = {
      isHovering: false,
    };
  }
  handleMouseOver() {
    this.setState(() => ({
      isHovering: true,
    }));
  }
  handleMouseOut() {
    this.setState(() => ({
      isHovering: false,
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
            {/* <HoverText /> gets shown when mouse is over <HoverableDiv /> */}
            <HoverableDiv
              handleMouseOver={this.handleMouseOver}
              handleMouseOut={this.handleMouseOut}
            />
            {this.state.isHovering && <HoverText />}
          </div>
          <div>
            {/* <HoverText /> gets shown when mouse is over <HoverableDiv /> */}
            <HoverableDivTwo
              handleMouseOver={this.handleMouseOver}
              handleMouseOut={this.handleMouseOut}
            />
            {this.state.isHovering && <HoverTextTwo />}
          </div>
        </div>
        <div className={styles.searchCart}>Search bar and cart</div>
      </div>
    );
  }
}

export default MainHeader;
