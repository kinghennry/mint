import React from "react";
// import man from "../../images/pruda.jpg";
// import woman from "../../images/jonam.jpg";
import "./hero.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__flex">
          <div className="hero__text">
            <Breadcrumb title="Features" desc="JOIN THE CLUB" />
            <p>
              The Climate Cape(CAPE) is an icon and growing brand.
              <br />
              The Focus is to combine the real world with the virtual world by
              planting trees in areas of need,funding renewable energy
              developments in rural areas and funding fauna based projects
              globally.
            </p>
          </div>
          <div className="hero__imgDiv">
            <div className="hero__img purple">
              {/* <img src={man} alt="man" /> */}
            </div>
            <div className="hero__img blue">
              {/* <img src={woman} alt="man" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
