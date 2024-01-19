import React from "react";
import "./login.css";
import Input from "./input";

var loginPage = true;

function login() {
  return (
    <>
      <div className="login">
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <div class="fadeIn first">
              <h1>Placement Portal</h1>
            </div>

            <form>
              <Input
                type="text"
                id="login"
                class="fadeIn second"
                name="login"
                placeholder="username"
              />
              <Input
                type="text"
                id="password"
                class="fadeIn third"
                name="login"
                placeholder="password"
              />
              <Input
                type="submit"
                class="fadeIn fourth"
                value={loginPage ? "login" : "register"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
