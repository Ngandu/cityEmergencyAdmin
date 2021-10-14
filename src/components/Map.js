import React from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid";

const Map = ({ coords, serviceProviders }) => {
  const MpBoxAccess =
    "pk.eyJ1IjoibnBhdHJpY2siLCJhIjoiY2l4dHpuNWV0MDAyZzMyb2o4YWpmOXg3YiJ9.SekPOie0OLLB3_YNnpsD7Q";
  const Map = ReactMapboxGl({
    accessToken: MpBoxAccess,
  });
  return (
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
        <FontAwesomeIcon icon={faMapMarkerAlt} size={100} color="#eebb19" />
      </Marker>
      {serviceProviders.length > 0
        ? serviceProviders.map((srv, i) => {
            return (
              <Marker
                coordinates={[
                  srv.currentLocation.long,
                  srv.currentLocation.lat,
                ]}
                anchor="bottom"
                key={i}
              >
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                  {srv.firstName + " " + srv.lastName}
                </span>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size={100}
                  color="#0d6efd"
                />
              </Marker>
            );
          })
        : null}
    </Map>
  );
};

export default React.memo(Map);
