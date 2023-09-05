import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from 'react-router-dom';


function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100">
      <div>
        <a href="d-flex align-items-center">
          <i className="bi bi-bootstrap fs-5 me-2"></i>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column p-0 m-0">
          <li className="nav-item p-1">
            <Link to="/" className="nav-link text-white">
              <i className="bi bi-house me-2 fs-5"></i>
              <span className="fs-5">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="/add-tc" className="nav-link text-white">
              <i className="bi bi-folder-plus me-2 fs-5"></i>
              <span className="fs-5">Add TC</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="modify-tc" className="nav-link text-white">
              <i className="bi bi-pencil-square me-2 fs-5"></i>
              <span className="fs-5">Modify TC</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="search-tc" className="nav-link text-white">
              <i className="bi bi-search me-2 fs-5"></i>
              <span className="fs-5">Search TC</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-secondary" />
        <i className="bi bi-person fs-4"></i>
        <span className="fs-5">User</span>
      </div>
    </div>
  );
}

export default Sidebar;
