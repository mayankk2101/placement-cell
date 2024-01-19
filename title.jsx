import React from "react";
import image from "../../utilities/images/Job Interview.jpeg";
import { Link } from "react-router-dom";

function title() {
  return (
    <>
      <div className="get-started container-fluid">
        <img src={image} alt="interview gif" />
        <h1 className="image-text">
          Welcome to <span>Placement Cell</span>
        </h1>
        <p>We Will Support You In Your Entire Placement Journey</p>
        <Link className="btn btn-outline-info" to="/login">
          Get Started
        </Link>
      </div>
    </>
  );
}

export default title;
