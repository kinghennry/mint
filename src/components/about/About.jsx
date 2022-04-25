import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about_flex">
          <div className="about__img">
            <div className="flex ai ">
              <div className="about__image" style={{ background: "#FE99D5" }}>
                <img src="/Assets/nft-two.png" alt="nft-two" />
              </div>
              <div
                className="about__image nft-3"
                style={{ background: "#C798FE" }}
              >
                <img src="/Assets/nft-three.png" alt="nft-three" />
              </div>
            </div>
            <div className="flex ai mt">
              <div
                className="about__image"
                style={{
                  background:
                    "linear-gradient(90deg, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)",
                }}
              >
                <img src="/Assets/nft-one.png" alt="nft-one" />
              </div>
              <div
                className="about__image nft-four"
                style={{ background: "#C8FF99" }}
              >
                <img src="/Assets/nft-four.png" alt="nft-four" />
              </div>
            </div>
          </div>
          <div className="about__text">
            <h4 className="title text-bg">About Us</h4>
            <h1
              className="desc"
              style={{ margin: "20px 0 10px", lineHeight: "30px" }}
            >
              WELCOME TO THE
              <br />
              <span style={{ margin: "16px 0 0px", display: "block" }}>
                CLIMATE APE
              </span>
            </h1>

            <p style={{ fontWeight: "200" }}>
              The Climate Ape (CAPE) is dedicated to creating awareness about
              Climate Change.
              <br />
              The focus is to combine the real world with the virtual world by
              planting trees, funding renewable energy developments and hosting
              annual virtual conferences based on Climate Change.
              <br />
              For each Climate Ape NFT purchased, a percentage of the revenue
              will be used to fund the focus.
              <br />
              As we all can see, the world is quickly becoming digitalised and
              let's be honest it's exciting and daunting at the same time.
              <br />
              As we all can see, the world is quickly becoming digitalised and
              let's be honest it's exciting and daunting at the same time
              <br />
              We look forward to owning new gadgets and jumping on board with
              the latest digital trends and whilst we do that in parallel it's
              critical that we take care of our home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
