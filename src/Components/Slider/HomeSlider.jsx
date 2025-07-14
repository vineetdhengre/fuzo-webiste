import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainSlider() {
  return (
    <>
    
       <Carousel controls={false} interval={5000}>
      <Carousel.Item>
        <a href="/gifting" target = "_blank"> 
            <img
          className="d-block w-100"
          src="/assets/main_slider_images/test-1.png"
          alt="First slide"
        />
        </a>
        
      </Carousel.Item>
      <Carousel.Item>
        <a href="/product" target = "_blank"> 
            <img
          className="d-block w-100"
          src="/assets/main_slider_images/test-2.png"
          alt="Second slide"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/product" target = "_blank"> 
            <img
          className="d-block w-100"
          src="/assets/main_slider_images/slide-3.png"
          alt="third slide"
        />
        </a>
      </Carousel.Item>
    </Carousel>
    </>
  );
}