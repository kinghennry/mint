import React from "react";
import "./Slider.css";
import { images } from "./data";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 7,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 2,
};
const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <Carousel {...carouselParams}>
          {images.map((item) => {
            const { id, bg, pic, height } = item;
            return (
              <article key={id} className="flex">
                <div className="team__img" style={{ background: `${bg}` }}>
                  <img className={`${height}`} src={pic} alt="image" />
                </div>
              </article>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
