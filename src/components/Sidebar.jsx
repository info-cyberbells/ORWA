import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { toast } from "react-toastify";


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully");
    setTimeout(() => {
      navigate("/admin-login");
    }, 1500);
  };
  return (
    <div className="col-lg-2 col-md-3 col-12 sidebar-nav">
      <h4 className="logo">
        <a className="mx-auto" href="/admin-residential">
          <img src="/images/logo.png" width="80" alt="Logo" />
        </a>
      </h4>

      <ul className="sidebar-menu">
  
        <li>
          <NavLink to="/admin-members" className="sidebar-link">
            <i className="bi bi-person-badge"></i>
            <span>Members</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-residential" className="sidebar-link">
            <i className="bi bi-house-door"></i>
            <span>Residential</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-contactlist" className="sidebar-link">
            <i className="bi bi-telephone"></i>
            <span>Contact-List</span>
          </NavLink>
        </li>

        

        <li>
          <button onClick={handleLogout} className="sidebar-link logout-btn">
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </button>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;