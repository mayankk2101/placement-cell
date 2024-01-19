import React from "react";
import image from "../../utilities/images/01_09_2018_12_14_47_3921f8a8ec35336e271c8638ee64f77e_dmnb0pyu12.webp";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <span className="navbar-brand">
          <img src={image} alt="logo" width="200" />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                login
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/login" className="dropdown-item">Admin</Link>
                </li>
                <li>
                  <span className="dropdown-item">Student</span>
                </li>
                <li>
                  <span className="dropdown-item">Placement cell</span>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Register
              </span>
              <ul className="dropdown-menu">
                <li>
                  <spam className="dropdown-item">Admin</spam>
                </li>
                <li>
                  <spam className="dropdown-item">Student</spam>
                </li>
                <li>
                  <spam className="dropdown-item">Placement cell</spam>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span className="nav-link btn btn-info">FAQ</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
