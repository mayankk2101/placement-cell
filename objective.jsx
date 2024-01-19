import React from "react";
import image from "../../utilities/images/M88_Job Interview Illustrations on Yellow Images Creative Store.jpeg";
import tick from "../../utilities/images/3d-round-blue-tick-check-mark-approved-complete-ok-icon-realistic-render-design-vector.jpg";

function objectives() {
  return (
    <>
      <div className="container-fluid objectives">
        <div>
          <h1>Objectives</h1>
          <p>Our Placement Portal serves various objectives:</p>
          <p>
            <img src={tick} alt="tick" />
            Developing the students to meet the industies recruitment process.
          </p>
          <p>
            <img src={tick} alt="tick" />
            To motivate the students to develop Technical knowledge and soft
            skills in terms of career planning,goal setting.
          </p>
          <p>
            <img src={tick} alt="tick" />
            To produce world class professionals who have excellent analytical
            skills,communication skills,team building spirit and ability to work
            in cross cultural enviornment.
          </p>
        </div>
        <img src={image} alt="man with a microscope" />
      </div>
    </>
  );
}

export default objectives;
