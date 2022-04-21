import React from "react";
import "./faqs.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import data from "./data";
import Accordion from "./Accordion";

function Faqs() {
  const [questions, setQuestions] = React.useState(data);
  return (
    <section className="faqs">
      <div className="container px py ">
        <Breadcrumb title="FAQs" ct />
        <div className="accordion">
          {questions.map((question) => {
            return <Accordion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
