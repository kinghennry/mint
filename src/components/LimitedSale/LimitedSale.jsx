import React, { useState } from "react";
import "./LimitedSale.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { AiOutlineClose } from "react-icons/ai";
import CountDownTimer from "./CountDownTimer";
// https://www.figma.com/file/BYFzRa2rmSQNSHvbVoBVGD/Climate-Ape?node-id=172%3A83

function LimitedSale() {
  const [open, setOpen] = useState(false);

  //   timer
  const FIVE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterFiveDays = NOW_IN_MS + FIVE_DAYS_IN_MS;

  const onOpenModal = () => {
    setOpen(!open);
  };
  const onCloseModal = () => {
    setOpen(!open);
  };
  return (
    <section className="limited-sale" id="mint">
      <div className="container">
        {/* start modal */}
        <Modal open={open} onClose={onCloseModal} center className="moda">
          <div style={{ maxWidth: "400px" }}>
            <div className="modal-header flex ai sb">
              <h2 className="modal-text" id="modal-head">
                Connect a wallet
              </h2>
              <AiOutlineClose onClick={onCloseModal} className="modal-icon" />
            </div>
            <div className="modal-item">
              <h5 className="modal-text" id="modal-desc">
                By Connecting a Wallet,you agree to Uniswap labs{" "}
                <span style={{ color: "blue" }}>Terms of Service</span> and
                acknowledge that you have read and understand the Uniswap{" "}
                <span style={{ color: "blue" }}>Protocol Disclaimer</span>.
              </h5>
            </div>
            <div className="modal-flex">
              <div className="modal-item flex ai sb">
                <h5 className="modal-text">Metamask</h5>
                <div className="modal-img">
                  <img src="Assets/MetaMask.png" alt="metamask" />
                </div>
              </div>
              <div className="modal-item flex ai sb">
                <h5 className="modal-text">WalletConnect</h5>
                <div className="modal-img">
                  <img src="Assets/WalletConnect.png" alt="WalletConnect" />
                </div>
              </div>
              <div className="modal-item flex ai sb">
                <h5 className="modal-text">Coinbase Wallet</h5>
                <div className="modal-img">
                  <img
                    style={{ width: "35px", marginLeft: "10px" }}
                    src="Assets/Coinbase.svg"
                    alt="coinbase"
                  />
                </div>
              </div>
              <div className="modal-item flex ai sb">
                <h5 className="modal-text">Fortmatic</h5>
                <div className="modal-img">
                  <img
                    style={{ width: "30px", marginLeft: "10px" }}
                    src="Assets/Fortmatic.png"
                    alt="Fortmatic"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
        {/* end modal */}
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
              <div className="mint-timer flex-box se">
                <CountDownTimer targetDate={dateTimeAfterFiveDays} />
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
            <button className="max-btn" onClick={onOpenModal}>
              Set Max
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LimitedSale;
