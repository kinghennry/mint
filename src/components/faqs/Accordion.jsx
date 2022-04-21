import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import sub from "../../images/Line 16.svg";

function Accordion({ title, answer }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article
      className={`accordion_item ${showInfo ? "accordion_item--active" : ""}`}
    >
      <div className="question flex sb ai">
        <span className="question__text">{title}</span>

        {showInfo ? (
          //   <FiChevronUp
          //     className={`icon ${showInfo ? "icon--active" : ""}`}
          //     onClick={() => {
          //       setShowInfo(!showInfo);
          //     }}
          //   />
          <>
            <img
              src={sub}
              alt="sub"
              onClick={() => {
                setShowInfo(!showInfo);
              }}
            />
          </>
        ) : (
          <>
            <BsPlusCircle
              className="acc__icon"
              onClick={() => {
                setShowInfo(!showInfo);
              }}
            />
          </>
        )}
      </div>

      <div className="answer">{showInfo && <p>{answer}</p>}</div>
    </article>
  );
}

export default Accordion;
