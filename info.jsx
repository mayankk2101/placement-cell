import React from "react";
import image from "../../utilities/images/Job Interview illustration concept.jpeg";
import adobe from "../../utilities/images/Adobe-logo.png";
import microsoft from "../../utilities/images/RWCZER.avif";
import wipro from "../../utilities/images/wipro-logo-new-og-502x263.jpg";
import infoysis from "../../utilities/images/Logo-Infosys.jpg";
import amazon from "../../utilities/images/Amazon-Logo.png";

function info() {
  return (
    <>
      <div className="container-fluid info">
        <div className="info-text">
          <h1>
            <b>Placement Portal</b>
          </h1>
          <p>
            The Placement cell plays an important role in locating job
            opportunities for under graduates passing out from the college by
            keeping in touch with reputed firms and industrial establishments.{" "}
            <br />
            the placement cel operates round the year to facilitate contacts
            between companies and graduates. <br />
            the number of students placed through the campus interviews is
            constantly rising.
          </p>
          <button className="btn btn-outline-info">Get Started</button>
        </div>
        <img src={image} alt="studying child" />
      </div>

      <div className="companies">
        <img src={adobe} alt="adobe" />
        <img src={microsoft} alt="adobe" />
        <img src={amazon} alt="adobe" />
        <img src={infoysis} alt="adobe" />
        <img src={wipro} alt="adobe" />
      </div>
    </>
  );
}

export default info;
