import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const Сarousel = ({ detailsData }) => {
  return (
    <div className="carousel">
      <Carousel showThumbs={false}>
        <div>
          <img src={detailsData.img1} alt="" />
        </div>
        <div>
          <img src={detailsData.img2} alt="" />
        </div>
        <div>
          <img src={detailsData.img3} alt="" />
        </div>
        <div>
          <img src={detailsData.img4} alt="" />
        </div>
        <div>
          <img src={detailsData.img5} alt="" />
        </div>
        <div>
          <img src={detailsData.img6} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Сarousel;