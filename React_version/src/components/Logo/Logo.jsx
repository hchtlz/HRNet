import React from "react";
import { Link } from "react-router-dom";
import './Logo.css';
import Image from "../../assets/logo.svg";

export default function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <img src={Image} alt="Logo" />
      </div>
    </Link>
  );
}
