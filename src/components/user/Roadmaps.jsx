import React from "react";
import "./Roadmap.css";
import { BsPercent } from "react-icons/bs";

const Roadmaps = () => {
  return (
    <section className="limited-sale" id="roadmap">
      <div className="container">
        <div className="roadmap">
          <h4 className="title text-bg">Climate Ape</h4>
          <h1 className="desc" style={{ margin: "12px 0 19px" }}>
            ROADMAP
          </h1>
          <div className="roadmap-flex flex-box" id="first-border">
            <div className="roadmap-text roadmap-px">
              <h3 className="desc flex-box phase-one">
                10
                <span style={{ paddingTop: "3px" }} className="flex-box">
                  <BsPercent />
                </span>{" "}
                &nbsp; Phase 1: The beginning
              </h3>
              <p className="roadmap-desc">
                To us, the community comes first. The goal is to make our drop
                as successful as possible, to have the freedom to develop
                Climate Ape. We will announce our drop release date once we are
                satisfied with the project’s quality and technical parts. We
                will also be working tirelessly with our community to guarantee
                our social media platforms are at a high aesthetic standard and
                create new concepts over time.
              </p>
            </div>
            <div className="roadmap-image">
              <img src="/Assets/Group.png" alt="group" />
            </div>
          </div>
          {/*  */}
          <div className="roadmap-flex flex ">
            <div className="roadmap-textone roadmap-px" id="second-border">
              <h3 className="desc flex-box">
                20
                <span style={{ marginTop: "5px" }}>
                  <BsPercent />
                </span>{" "}
              </h3>
              <h5 className="roadmap-title">
                member exclusive merch unlocking!.
              </h5>
              <p className="roadmap-desc">
                We're working with a high-end/quality and sustainable
                manufacturer to release the first merch collection of the
                Climate Ape that will be available only for the NFT holder.
                Through detailed design guidance, we will ensure that all merch
                is unique and provides a statement before, during, and after the
                launch of this drop. You can already see some of the pieces on
                our Climate Ape...
              </p>
            </div>
            <div className="roadmap-text2 roadmap-px">
              <h3 className="desc flex-box">
                40
                <span style={{ marginTop: "5px" }}>
                  <BsPercent />
                </span>{" "}
              </h3>
              <h5 className="roadmap-title">
                Climate Ape provides a unique piece to your home.
              </h5>
              <p className="roadmap-desc">
                Each holder (for more than 30 days) will receive a canvas of
                their own NFT delivered, free of charge.
              </p>
            </div>
          </div>
          <div className="roadmap-flex flex ">
            <div className="roadmap-textone roadmap-px"></div>
            <div className="roadmap-text2 roadmap-px" id="third-border">
              <h3 className="desc flex-box">
                50
                <span style={{ marginTop: "5px" }}>
                  <BsPercent />
                </span>{" "}
              </h3>
              <h5 className="roadmap-title">
                Funding our first renewable energy project.
              </h5>
              <p className="roadmap-desc">
                At Climate Ape, we are all about renewable energy development,
                sustainability, climate change and giving back to the community.
                At the same time, we love the NFT space and It has allowed us to
                connect with the younger generations. To keep that appreciation
                of the space going, we are going to introduce a list of projects
                that we aim to assist funding. As a member of the Climate Ape,
                you will have the opportunity to submit a vote to fund a
                specific project from the list.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="roadmap-flex flex row-reverse">
            <div className="roadmap-textone roadmap-px" id="fourth-border">
              <h3 className="desc flex-box">
                100
                <span style={{ marginTop: "5px" }}>
                  <BsPercent />
                </span>{" "}
              </h3>
              <h5 className="roadmap-title">The World Must know who we are</h5>
              <p className="roadmap-desc">
                We want to show you that you made the best choice to be part of
                the Climate Ape community and grow your investment. So at this
                point we will launch our brand publicly with royalties for
                holders of each NFT sold.
              </p>
            </div>
            <div className="roadmap-text2 roadmap-px">
              <h3 className="desc flex-box">
                70{" "}
                <span style={{ marginTop: "5px" }}>
                  <BsPercent />
                </span>{" "}
              </h3>
              <h5 className="roadmap-title">We are arranging an event!</h5>
              <p className="roadmap-desc">
                As we all know, Climate Ape is a growing community. As members,
                we want to connect with our community, so, we will be hosting a
                pilot IRL event for our holders. The first event will take place
                within 6-months after the drop, and the community will vote to
                choose the location between different cities in the world. After
                discussion with some of the most influential people in the NFT
                and Crypto industry, we are currently working to bring them to
                the event. The event will be private and only for our holders.
                Food and drinks will be provided for all holders. Legendary
                holders will be invited to the event with an all inclusive
                package (flight, hotel, food, drinks and special activities).
                Imagine yourself with all Climate Ape members, holding a glass
                of champagne and hanging out discussing new ways to grow Climate
                Ape. Since we know that some of our Members will not be able to
                attend, we will broadcast the event LIVE, and soon in the
                metaverse...
              </p>
            </div>
          </div>
          {/*  */}
          <div className="roadmap-flex flex-box">
            <div className="roadmap-textone roadmap-px" id="fifth-border">
              <h3 className="desc flex-box">
                110
                <span style={{ marginTop: "5px" }}>
                  <BsPercent />
                </span>{" "}
              </h3>
              <h5 className="roadmap-title">
                The Metaverse is coming, so our NFT collection needs to scale up
              </h5>
              <p className="roadmap-desc">
                Once we complete all of the stages, phase two will begin. After
                all, what is a better way to have your Climate Ape than in the
                metaverse? Don't miss the train. Stay tuned. Much more is
                coming..
              </p>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Roadmaps;
