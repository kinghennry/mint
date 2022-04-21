import PropTypes from "prop-types";
import React from "react";
import "./breadcrumb.css";

const Breadcrumb = ({ title, desc, ct }) => {
  return (
    <div className={`${ct ? "page-title ct" : "page-title"}`}>
      <h4 className="title text-bg">{title}</h4>
      {/* {desc && <h1 className="desc">{desc}</h1>} */}
      <h1 className="desc">{desc}</h1>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Breadcrumb;
