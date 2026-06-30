import React from "react";
import images from "../data/images";

export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={images.logo}
            alt="Logo"
            style={{ height: "80px", objectFit: "contain" }}
          />
          
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <button className="btn btn-outline-success"   onClick={() => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  }}>
              
              Get Quote
            </button>

            <button className="btn btn-success" style={{ backgroundColor:"#0a412f"}}>
              +1 778-710-0061
            </button>
          </div>
        </div>

      </div>
    </nav>
   

      


  );
}
