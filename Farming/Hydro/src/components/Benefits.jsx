import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./styles/Benefits.css";
import img1 from "./Images/conserve.jpg";
import img2 from "./Images/Max.jpg";
import img3 from "./Images/Max.jpg";
const Benefits = () => {
  return (
    <>
      ANand
      <Carousel className="abc">
        <div className="carosel">
          <img src={img1} />
        </div>
        <div className="carosel">
          <img src={img2} />
        </div>
        <div className="carosel">
          <img src={img3} />
        </div>
      </Carousel>
    </>
  );
};

export default Benefits;
