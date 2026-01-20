// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/videobelajar.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        
        {/* LEFT: Logo */}
        <div className="header-left">
          <Link to="/" className="logo" aria-label="videobelajar">
            <img src={logo} alt="videobelajar" className="logo-img" />
          </Link>
        </div>

        {/* CENTER: Nav */}
        <nav className="header-center" aria-label="main navigation">
          <Link to="/kategori" className="nav-link">
            Kategori
          </Link>
        </nav>

        {/* RIGHT: Login & Register */}
        <div className="header-right">
          <Link to="/login" className="btn-login">
            Login
          </Link>

          <Link to="/register" className="btn-register">
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}
