import React from "react";
import "./footer.css";
import fb from "../../images/Icon Button.svg";
import yb from "../../images/Icon Button2.svg";
import tw from "../../images/Icon Button3.svg";
import partner1 from "../../images/image 18.svg";
import partner2 from "../../images/image 19.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer__flex ">
        <div className="footer__header">
          <h2 className="footer__text">Climate Ape</h2>
          <div className="footer__socials">
            <Link>
              <img src={fb} alt="fb" />
            </Link>
            <Link>
              <img src={yb} alt="yb" />
            </Link>
            <Link>
              <img src={tw} alt="tw" />
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
            Copyright 2021. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
