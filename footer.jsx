import React from "react";

var date = new Date();
var year = date.getFullYear();

function footer() {
  return (
    <>
      <div className="footer ">
        <div>
          <p>{year} © Copyright CGC Landran. All Rights Reserved</p>
          <p>
            <span>CGC-Placement Cell</span>
          </p>
        </div>
        <div>
          <a
            class="fa-brands fa-facebook-f"
            href="https://www.facebook.com/ChandigarhGroupOfCollegesLandran/"
          >
            {" "}
          </a>
          <a
            class="fa-brands fa-square-instagram"
            href="https://www.instagram.com/cgc_landran_punjab/?hl=en"
          >
            {" "}
          </a>
          <a
            class="fa-brands fa-twitter"
            href="https://twitter.com/cgcpunjab?lang=en"
          >
            {" "}
          </a>
          <a
            class="fa-brands fa-linkedin"
            href="https://www.linkedin.com/school/cgcpunjab/?originalSubdomain=in"
          >
            {" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default footer;
