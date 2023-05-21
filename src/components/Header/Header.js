import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="col-7 col-lg-6">
        <div className="col-12 col-lg-12 d-flex justify-content-center my-4">
          <Link to="/">
            <h1>CRAVE NOSH</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
