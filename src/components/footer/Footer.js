import React from "react";
import "./footer.css";
import partner1 from "../../images/image 18.svg";
import partner2 from "../../images/image 19.svg";
import { Link } from "react-scroll";
import { Link as Linker } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      {/* <div className="footer__flex ">
        <div className="footer__header">
          <h2 className="footer__text">Climate Ape</h2>
          <div className="footer__socials">
            <Link>
              <img src="/Assets/fb.svg" alt="fb" />
            </Link>
            <Link>
              <img src="/Assets/linkedin.svg" alt="linked" />
            </Link>
            <Link>
              <img src="/Assets/web.svg" alt="web" />
            </Link>
          </div>
        </div>
        <div className="footer_sponsor">
          <h5 className="footer__desc">Official Partner</h5>
          <div className="footer__logo">
            <img src={partner1} alt="partner" id="res" />
          </div>
          <div className="footer__logo">
            <img src={partner2} alt="partner2" />
          </div>
        </div>
        <div className="footer_cr">
          <button className="footer__btn">Join Our Discord</button>
          <div className="copyright__link">
            Copyright 2022. All Rights Reserved.
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="footer-flexbox">
          <div className="footer-header">
            <h2 className="logo">Climate Ape</h2>
            <p className="footer-desc mint-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <button className="footer-btn">Join Our Discord</button>
            <p className="footer-copyright mint-txt" id="desktop-cy">
              &#169; {new Date().getFullYear()} Climate Ape. All Rights
              Reserved.
            </p>
          </div>
          {/*  */}
          <div className="footer-links">
            <div className="footer-link-one">
              <h5 className="footer-ptner">Information</h5>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link mint-txt"
              >
                About
              </Link>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link mint-txt"
              >
                Features
              </Link>
              <Link
                to="story"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link mint-txt"
              >
                Story
              </Link>
              <Link
                to="mint"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link mint-txt"
              >
                Mint
              </Link>
            </div>
            <div className="footer-link-two">
              <Link
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link mint-txt"
                id="link"
              >
                Roadmap
              </Link>
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link mint-txt"
              >
                Teams
              </Link>
              <Link
                to="faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link mint-txt"
              >
                FAQs
              </Link>
            </div>
            <div className="footer-sponsor">
              <h5 className="footer-ptner">Official Partner</h5>
              <div className="footer-logo">
                <img src={partner1} alt="partner" id="res" />
              </div>
              <div className="footer-logo">
                <img src={partner2} alt="partner2" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="footer-newsletter">
            <div className="footer-subscrip">
              <h5 className="footer-ptner ptner-text">Subscribe</h5>
              <div className="footer-input">
                <input type="text" placeholder="Email Address" />
                <AiOutlineArrowRight className="footer-input-icon" />
              </div>
              <p className="newsletter-desc mint-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti.
              </p>
            </div>
            <div className="footer-socials">
              <Linker>
                <img src="/Assets/facebook.svg" alt="fb" />
              </Linker>
              <Linker>
                <img src="/Assets/linkedin.svg" alt="lk" />
              </Linker>
              <Linker>
                <img src="/Assets/web.svg" alt="web" />
              </Linker>
            </div>
          </div>
          <p className="footer-copyright mint-txt" id="mobile-cy">
            &#169; {new Date().getFullYear()} Climate Ape. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
