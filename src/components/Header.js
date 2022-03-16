import React from "react";
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="header">
      <span className="logo">
        <ion-icon name="flash"></ion-icon>
      </span>
      <h1 className="brand">MirrorBot</h1>
    </div>
  );
};

export default Header;
