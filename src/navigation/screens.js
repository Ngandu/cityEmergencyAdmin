import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTh,
  faFile,
  faUsers,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

// Mobx Stores
import UserStore from "./../stores/UserStore";
import CommonStore from "./../stores/CommonStore";

// Screens
import Home from "./../screens/Home";
import UsersList from "./../screens/Users";

// Mobx Screens
const MHome = () => <Home userstore={UserStore}></Home>;
const MUsersList = () => <UsersList CommonStore={CommonStore}></UsersList>;

const Screens = () => {
  return (
    <Router>
      <>
        <div className="sidebar">
          <div className="logo-details">
            <img src="img/logo-w.png" alt=""></img>
            <span className="logo_name">My City Admin</span>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/" className="link">
                <FontAwesomeIcon icon={faHome} className="icon" />
                <span className="kink_name">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link className="link">
                <FontAwesomeIcon icon={faTh} className="icon" />
                <span className="kink_name">Products</span>
              </Link>
            </li>
            <li>
              <Link className="link">
                <FontAwesomeIcon icon={faFile} className="icon" />
                <span className="kink_name">Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/users" className="link">
                <FontAwesomeIcon icon={faUsers} className="icon" />
                <span className="kink_name">Users</span>
              </Link>
            </li>
          </ul>

          {/* <div className="close-tab">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div> */}
        </div>
        <Switch>
          <Route path="/" exact component={MHome} />
          <Route path="/users" component={MUsersList} />
        </Switch>
      </>
    </Router>
  );
};

export default Screens;
