import React from "react";
import Homepage from "./components/homePage/homepage";
import Loginpage from "./components/loginPage/login";
import Navbar from "./components/homePage/navbar";
import contact from "./components/contactPage/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route exact path="/login" Component={Loginpage} />
          <Route exact path="/contact" Component={contact} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
