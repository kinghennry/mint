import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

function Accordion({ title, answer }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article
      className={`accordion-item ${showInfo ? "accordion-item-active" : ""}`}
    >
      <div className="question">
        <span className="question__text">{title}</span>

        {showInfo ? (
          <>
            <AiOutlineMinus
              className="acc-white"
              onClick={() => {
                setShowInfo(!showInfo);
              }}
            />
          </>
        ) : (
          <>
            <BsPlusCircle
              className="acc-icon"
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
