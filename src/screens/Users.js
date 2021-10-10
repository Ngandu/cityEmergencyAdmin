import React, { useLayoutEffect, useState } from "react";
import "./../App.css";
import { observer } from "mobx-react-lite";
import { usersList } from "./../sdk/FirebaseMethods";
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

  const [Users, setUsers] = useState([]);

  const getUsers = async () => {
    const users = await usersList();
    setUsers(users);
  };

  useLayoutEffect(() => {
    getUsers();
  }, []);

  console.log(Users);

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
              <th scope="col">Full Name</th>
              <th scope="col">Cell</th>
              <th scope="col">Email</th>
              <th scope="col">physical Address</th>
              <th scope="col">Home Number</th>
            </tr>
          </thead>
          <tbody>
            {Users &&
              Users.map((usr, i) => {
                return (
                  <tr>
                    <td>
                      {usr.firstName} {usr.lastName}
                    </td>
                    <td>{usr.cellphone}</td>
                    <td>{usr.email}</td>
                    <td>{usr.address}</td>
                    <td>{usr.resNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
});

export default UsersList;
