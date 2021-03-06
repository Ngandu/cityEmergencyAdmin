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
import IncedentView from "./../screens/IncedentView";

// Mobx Screens
const MHome = () => (
  <Home userstore={UserStore} CommonStore={CommonStore}></Home>
);
const MUsersList = () => <UsersList CommonStore={CommonStore}></UsersList>;
const MIncedentView = () => (
  <IncedentView CommonStore={CommonStore}></IncedentView>
);

const Screens = () => {
  return (
    <Router>
      <>
        <div className="sidebar">
          <div className="logo-details">
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
          <Route path="/IncedentView" exact component={MIncedentView} />
          <Route path="/users" component={MUsersList} />
        </Switch>
      </>
    </Router>
  );
};

export default Screens;
