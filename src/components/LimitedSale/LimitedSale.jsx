import React from "react";
import "./LimitedSale.css";
function LimitedSale() {
  return (
    <section className="limited-sale">
      <div className="container">
        <div className="limitedSale-flex">
          <div className="mint">
            <h4 className="title text-bg">Mint</h4>
            <h1 className="desc" style={{ margin: "12px 0 0" }}>
              Mint Climate Ape
            </h1>
            <div className="mint-prices flex ai sb">
              <div className="mint-item">
                <h4 className="title text-bg" style={{ fontSize: "18px" }}>
                  Minted
                </h4>
                <span className="desc" style={{ fontSize: "14px" }}>
                  2285/10000
                </span>
              </div>
              <div className="mint-item">
                <h4 className="title text-bg" style={{ fontSize: "18px" }}>
                  Price
                </h4>
                <span className="desc" style={{ fontSize: "14px" }}>
                  0.06 ETH
                </span>
              </div>
              <div className="mint-item">
                <h4 className="title text-bg" style={{ fontSize: "18px" }}>
                  Max
                </h4>
                <span className="desc" style={{ fontSize: "14px" }}>
                  5 per wallet
                </span>
              </div>
            </div>
            {/*  */}
            <div className="mint-result">
              <h4 className="title ct text-bg" style={{ fontSize: "18px" }}>
                Mint Ends In
              </h4>
              <div className="mint-timer flex ai se">
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  10
                  <small style={{ fontWeight: "400" }}>Days</small>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  12
                  <small style={{ fontWeight: "400" }}>Hours</small>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  32
                  <small style={{ fontWeight: "400" }}>Min</small>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "600" }}>
                  18
                  <small style={{ fontWeight: "400" }}>Sec</small>
                </div>
              </div>
            </div>
            <span className="desc min-style" style={{ fontSize: "13px" }}>
              Mint end 01 May 2022. 2pm EST
            </span>
          </div>
          <div className="sale">
            <h2 className="desc ct">Limited Sale</h2>
            <div className="price flex ai sb">
              <div className="price-ima" style={{ width: "70px" }}>
                <img src="/Assets/image 21.svg" alt="imag21" />
              </div>
              <div className="price-tag">
                <h5>Price per NFT</h5>
                <span>0.08 ETH Each</span>
              </div>
            </div>
            <div className="calc flex sb ai">
              <div className="price-calc ">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <button
                className="max-btn"
                style={{
                  width: "unset",
                  margin: "0px",
                  padding: "10px 20px",
                }}
              >
                Set Max
              </button>
            </div>
            {/*  */}
            <div className="total flex ai  sb">
              <div>
                <h4>Total</h4>
              </div>
              <div>
                <h4>0.08ETH</h4>
              </div>
            </div>
            <hr />
            <button className="max-btn">Set Max</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LimitedSale;
