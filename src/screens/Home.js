import React, { useLayoutEffect, useState } from "react";
import "./../App.css";
import { observer } from "mobx-react-lite";
import { getNewIncedents } from "./../sdk/FirebaseMethods";
import { useHistory } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faUsers,
//   faFile,
//   faClock,
//   faBell,
//   faNewspaper,
// } from "@fortawesome/fontawesome-free-solid";

const Home = observer(({ userstore, CommonStore }) => {
  let history = useHistory();

  const [openIncedents, setOpenIncedents] = useState([]);

  const fetchIncedents = async () => {
    let incedents = await getNewIncedents();
    setOpenIncedents(incedents);
  };

  useLayoutEffect(() => {
    fetchIncedents();
  }, []);

  const incedentSelected = (inc) => {
    CommonStore.setSelectedInc(inc);
    history.push("/IncedentView");
  };

  console.log(openIncedents);

  return (
    <>
      <div className="content-section">
        <h1>Dashboard</h1>
        <div className="row">
          <h4 className="section-header">Open/New Incedents reported</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Message</th>
                <th scope="col">Service</th>
                <th scope="col">Address</th>
                <th scope="col">Date & Time</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {openIncedents &&
                openIncedents.map((inc, i) => {
                  let dd = new Date(inc.incent_date.toDate());
                  let date = dd.getDate();
                  let month = dd.getMonth();
                  let year = dd.getFullYear();
                  let time = dd.getHours() + ":" + dd.getMinutes();

                  let conv_date =
                    date + "/" + month + "/" + year + " @ " + time;

                  return (
                    <tr key={i}>
                      <td>{inc.title}</td>
                      <td>{inc.message}</td>
                      <td>{inc.service}</td>
                      <td>{inc.address}</td>
                      <td>{conv_date}</td>
                      <td>
                        <button
                          className="btn btn-outline-info"
                          onClick={() => incedentSelected(inc)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
});

export default Home;
