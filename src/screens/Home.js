import React from "react";
import "./../App.css";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faFile,
  faClock,
  faBell,
  faNewspaper,
} from "@fortawesome/fontawesome-free-solid";

const Home = observer(({ userstore }) => {
  console.log(userstore);
  return (
    <>
      <div className="content-section">
        <h1>Home</h1>
      </div>
    </>
  );
});

export default Home;
