import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if user is logged in by checking token in localStorage
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div>
      {/* Only show navbar if user is NOT logged in */}
      {!isLoggedIn && (
        <nav className="navbar navbar-expand-lg bg-white py-1 shadow-sm">
          <div className="container-fluid">

            {/* Logo - always visible */}
            <a className="mx-auto" href="/">
              <img src="/images/logo.png" width="80" alt="Logo" />
            </a>

            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">

                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About Us
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/Aboutus">About Us Page</a></li>
                    <li><a className="dropdown-item" href="/Constitution">Constitution</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Event
                  </a>
                  <ul className="dropdown-menu dropdown-menu-start shadow">
                    <li><a className="dropdown-item fw-semibold" href="/Events">Events Page</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><h6 className="dropdown-header text-black">2025 Events ▸</h6></li>
                    <li><a className="dropdown-item fw-medium" href="/DandiyaNight">Dandiya Night ▸</a></li>
                    <li><a className="dropdown-item" href="/AGM2025">AGM 2025</a></li>
                    <li><a className="dropdown-item" href="#">Children's Day</a></li>
                    <li><a className="dropdown-item" href="/DandiyaNightRegistration">Dandiya Registration</a></li>
                    <li><a className="dropdown-item" href="/StallBooking">Stall Booking</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/AGMs" data-bs-toggle="dropdown">AGM's</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/AGMs">AGMs Page</a></li>
                    <li><a className="dropdown-item" href="/AGMViewDetails2025">AGM View Details 2025</a></li>
                    <li><a className="dropdown-item" href="/AGMArchiveSection">AGM Archive Section</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Member Directory
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/Memberdirectory">Member Directory Page</a></li>
                    <li><a className="dropdown-item" href="/JoinUs">JoinUs</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/ContactUs">Contact</a>
                </li>
              </ul>

              {/* Right Buttons */}
              <div className="d-flex gap-2">
                <a href="/Volunteer" className="btn btn-outline-success custom-btn">Volunteer</a>
                <a href="/ApplicationFrom" className="btn btn-danger custom-btn">Join Us</a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;