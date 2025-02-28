import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1 className="project-title">Project Menu</h1>
      <div className="project-menu">
        <Link to="/regaccountdemo">
          <button>Regaccountdemo</button>
        </Link>
        <Link to="/regaccountvalidiation">
          <button>Regaccountvalidiation</button>
        </Link>
        <Link to="/validate-form-login">
          <button>Validate-Form-Login</button>
        </Link>
        <Link to="/validateformloginformik">
          <button>ValidateFormLoginFormik</button>
        </Link>
        <Link to="/router1">
          <button>Router1</button>
        </Link>
        <Link to="/router2">
          <button>Router2</button>
        </Link>
        <Link to="/contactform">
          <button>ContactForm</button>
        </Link>
        <Link to="/bookmanager">
          <button>BookManager</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
