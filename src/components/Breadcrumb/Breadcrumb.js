import PropTypes from "prop-types";
import React from "react";
import "./breadcrumb.css";

const Breadcrumb = ({ title, desc, ct }) => {
  return (
    <div className={`${ct ? "page-title ct" : "page-title"}`}>
      <h4 className="title">{title}</h4>
      <h1 className="desc">{desc}</h1>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentTwo: PropTypes.string,
  image: PropTypes.string,
};

export default Breadcrumb;
