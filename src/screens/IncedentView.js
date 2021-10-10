import React, { useLayoutEffect, useState } from "react";
import "./../App.css";
import { observer } from "mobx-react-lite";
import { usersList } from "./../sdk/FirebaseMethods";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { useHistory } from "react-router-dom";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid";

const IncedentView = observer(({ CommonStore }) => {
  console.log(CommonStore);

  const [coords, setcoords] = useState([28.21945, -25.74739]);

  const incedent = CommonStore.selectedInc;
  const MpBoxAccess =
    "pk.eyJ1IjoibnBhdHJpY2siLCJhIjoiY2l4dHpuNWV0MDAyZzMyb2o4YWpmOXg3YiJ9.SekPOie0OLLB3_YNnpsD7Q";
  const Map = ReactMapboxGl({
    accessToken: MpBoxAccess,
  });

  useLayoutEffect(() => {
    console.log(CommonStore.selectedInc);
    setcoords(incedent.location);
    console.log("location", incedent.location);
  }, []);

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
              <select className="form-control">
                <option>Mr One</option>
                <option>Mr Two</option>
              </select>
            </div>
          </div>
          <div className="row">
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: "50vh",
                width: "100vw",
              }}
              // center={[28.21945, -25.74739]}
              center={coords}
              zoom={[15]}
            >
              <Marker coordinates={coords} anchor="bottom">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size={100}
                  color="#eebb19"
                />
              </Marker>
            </Map>
          </div>
          <div className="row msgForm">
            <h4>Send Feedback</h4>
            <textarea
              className="form-control"
              placeholder="Feedback Message"
            ></textarea>
            <button className="btn btn-outline-primary">Respond</button>
          </div>
        </div>
      </div>
    </>
  );
});

export default IncedentView;
