import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/admin-members",
    "/admin-residential",
    "/admin-contactlist",
  ];

  if (hideNavbarRoutes.some(route => location.pathname.startsWith(route))) {
    return null;
  }



  return (
    <div>
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

              <li className="nav-item dropdown ">
                <a className="nav-link" href="/about-Us" >
                  About Us ▸
                </a>

                {/* <a
    className="nav-link dropdown-toggle dropdown-toggle-split"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <span className="visually-hidden">Toggle Dropdown</span>
  </a> */}

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/constitution">
                      Constitution
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="/Events">
                  Event ▸
                </a>

                <ul className="dropdown-menu dropdown-menu-start shadow">

                  {/* 2025 Events */}
                  <li className="dropdown-submenu mobile-box">
                    <input type="checkbox" id="toggle-2025" className="submenu-toggle" />
                    <label htmlFor="toggle-2025" className="dropdown-item box">
                      2025 Events

                      <span className="toggle-arrow"></span>
                    </label>

                    <ul className="dropdown-menu stacked-box">
                      {/* Dandiya Night */}
                      <li className="dropdown-submenu mobile-box">
                        <input type="checkbox" id="toggle-dandiya" className="submenu-toggle" />

                        <label htmlFor="toggle-dandiya" className="dropdown-item box label-with-link">
                          <a href="/DandiyaNight" className="box-link">
                            Dandiya Night
                          </a>
                          <span className="toggle-arrow"></span>
                        </label>

                        <ul className="dropdown-menu stacked-box">
                          <li>
                            <a className="dropdown-item box" href="/DandiyaNightRegistration">
                              Dandiya Registration
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item box " href="/StallBooking">
                              Stall Booking
                            </a>
                          </li>
                        </ul>
                      </li>




                      <li>
                        <a className="dropdown-item box" href="/AGM2025">AGM 2025</a>
                      </li>
                      <li>
                        <a className="dropdown-item box" href="#">Children’s Day</a>
                      </li>
                    </ul>
                  </li>

                </ul>
              </li>






              <li className="nav-item dropdown">
                <a className="nav-link" href="/AGMs">AGM's ▸</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/AGMViewDetails2025">AGM View Details 2025</a></li>
                  <li><a className="dropdown-item" href="/AGMArchiveSection">AGM Archive Section</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="/Memberdirectory">
                  Member Directory ▸
                </a>
                <ul className="dropdown-menu">
                  {/* <li><a className="dropdown-item" href="/Memberdirectory">Member Directory Page</a></li> */}
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

    </div>
  );
};

export default Navbar;