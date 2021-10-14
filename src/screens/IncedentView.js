import React, { useLayoutEffect, useState } from "react";
import "./../App.css";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import {
  sendresponse,
  fetchresponses,
  fetchserviceProviders,
  updateIncedents,
} from "../sdk/FirebaseMethods";

import Map from "../components/Map";

const IncedentView = observer(({ CommonStore }) => {
  console.log(CommonStore);
  let history = useHistory();

  const [coords, setcoords] = useState([28.21945, -25.74739]);
  const [responseMessage, setResponseMessage] = useState("");
  const [pastResponses, setPastResponses] = useState([]);
  const [serviceProviders, setServiceProviders] = useState([]);

  const incedent = CommonStore.selectedInc;

  async function getResponses() {
    const resp = await fetchresponses(incedent.id);
    if (resp.length > 0) {
      setPastResponses(resp);
    }
  }

  async function getServices() {
    const resp = await fetchserviceProviders(incedent.service);
    if (resp.length > 0) {
      setServiceProviders(resp);
    }
  }

  useLayoutEffect(() => {
    if (!incedent.location) {
      history.push("/");
    }
    setcoords(incedent.location);
    getResponses();
    getServices();
  }, []);

  async function sendResponse() {
    console.log(responseMessage);
    let res = {
      responseMessage,
      incedentId: incedent.id,
      respnsetime: new Date(),
      from: "admin",
    };

    let send = await sendresponse(res);

    if (send) {
      alert("Respond sent");
      setResponseMessage("");
      getResponses();
    } else {
      alert(send);
    }
  }

  async function assignincedent(srv) {
    // console.log(srv);
    let temp = { ...incedent };
    temp.assignedTo = srv;
    temp.assignedTime = new Date();

    let res = await updateIncedents(temp);
    if (res) {
      alert("Assigned succesffully.");
    } else {
      alert(res);
    }
  }

  /*
   * Calculates the distance the seller is from our current location
   */

  function distance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  }

  console.log("serviceProviders", serviceProviders);

  return (
    <>
      <div className="content-section">
        <h1>Incedent Details</h1>
        <div className="row">
          <div className="row">
            <div className="col-md-4">
              <h5>{incedent.title}</h5>
              <p>{incedent.address}</p>
              <p>Service required: {incedent.service}</p>
              <p>Status: {incedent.status}</p>
            </div>
            <div className="col-md-4">
              <h6>Message</h6>
              <p>{incedent.message}</p>
            </div>
            <div className="col-md-4">
              <h5>Assign to provider</h5>
              {serviceProviders.length > 0 ? (
                serviceProviders.map((srv, i) => {
                  let distanceKM = distance(
                    srv.currentLocation.lat,
                    srv.currentLocation.long,
                    coords[1],
                    coords[0],
                    "K"
                  );
                  return (
                    <div
                      className="row serviceProviderListItem"
                      onClick={() => assignincedent(srv.id)}
                    >
                      <small>{"" + parseInt(distanceKM) + " Km Away"}</small>
                      <p>{srv.firstName + " " + srv.lastName}</p>
                    </div>
                  );
                })
              ) : (
                <p>There are no service providers available</p>
              )}
            </div>
          </div>
          <div className="row">
            <Map coords={coords} serviceProviders={serviceProviders} />
          </div>
          <div className="row msgForm">
            <h4>Respond</h4>
            <textarea
              className="form-control"
              placeholder="Message"
              defaultValue={responseMessage}
              onChange={(txt) => {
                txt.preventDefault();
                setResponseMessage(txt.target.value);
              }}
            ></textarea>
            <button
              className="btn btn-outline-primary"
              onClick={() => sendResponse()}
            >
              Respond
            </button>

            <div className="row pastresponse">
              <h5>Past Responses</h5>
              {pastResponses.map((resp, i) => {
                return (
                  <div className={`row alert alert-${resp.from}`} key={i}>
                    <small>From: {resp.from}</small>
                    <p>{resp.responseMessage}</p>
                    <small>Sent: {Date(resp.respnsetime)}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default IncedentView;
