import React from "react";
import "./../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTh,
  faFile,
  faUsers,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <Router>
      <>
        <div className="sidebar">
          <div class="logo-details">
            <span className="logo_name">My City Admin</span>
          </div>

          <ul className="nav-links">
            <li>
              <Link className="link">
                <FontAwesomeIcon icon={faHome} />
                <span className="kink_name">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link className="link">
                <FontAwesomeIcon icon={faTh} />
                <span className="kink_name">Products</span>
              </Link>
            </li>
            <li>
              <Link className="link">
                <FontAwesomeIcon icon={faFile} />
                <span className="kink_name">Orders</span>
              </Link>
            </li>
            <li>
              <Link className="link">
                <FontAwesomeIcon icon={faUsers} />
                <span className="kink_name">Users</span>
              </Link>
            </li>
          </ul>

          {/* <div className="close-tab">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div> */}
        </div>
      </>
    </Router>
  );
}

export default SideBar;
