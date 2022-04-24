import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero"  id='features'>
      <div className="container">
        <div className="hero__box">
          <div>
            <h4 className="title" style={{ color: "white" }}>
              Features
            </h4>
            <h1 className="desc" style={{ color: "white", margin: "20px 0" }}>
              JOIN THE CLUB
            </h1>
          </div>
          <div className="hero__text">
            <p>
              The Climate Ape (CAPE) is an icon and growing brand. The focus is
              to combine the real world with the virtual world by planting trees
              in areas of need, funding renewable energy developments in rural
              areas and funding fauna based projects globally.
              <br />
              CAPE is growing a community and for each Climate Ape NFT
              purchased, a percentage of the revenue will be used to fund the
              focus.
              <br />
              As we can all see, The world is quickly becoming digitalised and
              let's be honest it's exciting and daunting at the same time
              <br />
              We look forward to owning new gadgets and jumping on board with
              the latest digital trends and whilst we do that in parallel it's
              critical that we make care of our time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
