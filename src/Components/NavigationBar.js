import React, { useEffect, useState, version } from "react";
import '../App.css'
 

 

function NavigationBar() {
 

  return (
    <div>
      <div className="d-flex  flex-column h-100">
        <nav className="navbar topnav-right navbar-expand-lg">
          <div className="container-fluid">
            <a href= "/" ><h3><b>CARS N COFFE</b></h3></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse me-auto "
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav ms-auto fw-bold fs-6">
                <a className="nav-item nav-link current" href="/">
                  Home
                </a>
                <a className="nav-item nav-link  current" href="/shop">
                  {" "}
                  Shop
                </a>
                <a className="nav-item nav-link  current" href="/events">
                  {" "}
                  Events
                </a>

                <a className="nav-item nav-link  current" href="/gallery">
                  {" "}
                  Gallery
                </a>


                <a className="nav-item nav-link  current" href="/contact-us">
                  {" "}
                  Contact Us
                </a>

                {/* <a className="nav-item nav-link  current" href="/auth/login">Login</a> */}

                {/* <a className="nav-item nav-link  current"  href="/auth/signup">SignUp</a> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
