import React from "react";
import "./header.css";
//j'importe mes dependences
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="header__portfolio" to="/">
        Portfolio.
      </Link>
      <Link className="header__menu" to="/menu">
        Menu
      </Link>
    </header>
  );
}

export default Header;
