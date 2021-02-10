import "../assets/Log.css";
import React from "react";
import image from "../assets/images/cells.webp";

const FormPage = () => {
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}

        {/* <!-- Icon --> */}
        <div class="fadeIn first">
          <img src={image} id="icon" alt="User Icon" />
        </div>

        {/* <!-- Login Form --> */}
        <form>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="password"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>

        {/* <!-- Remind Passowrd --> */}
        <div id="formFooter">
          <a class="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
