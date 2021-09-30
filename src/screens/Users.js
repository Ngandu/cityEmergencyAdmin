import React, { useLayoutEffect } from "react";
import "./../App.css";
import { observer } from "mobx-react-lite";
//import { usersList } from "./../sdk/FirebaseMethods";
// import { useHistory } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faUsers,
//   faFile,
//   faClock,
//   faBell,
//   faNewspaper,
// } from "@fortawesome/fontawesome-free-solid";

const UsersList = observer(({ CommonStore }) => {
  console.log(CommonStore);

  // const getUsers = async () => {
  //   usersList();
  // };

  // useLayoutEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <>
      <div className="content-section">
        <h1>Users</h1>
        <div className="input-group searchBar">
          <input
            type="text"
            className="form-control"
            placeholder="Search for user"
          ></input>
          <button type="button" className="btn btn-main">
            Search
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button className="btn btn-outline-primary btn-sm">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <button className="btn btn-outline-primary btn-sm">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
});

export default UsersList;
