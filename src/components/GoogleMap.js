import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

const GoogleMap = (props) => {
  let { lat, long } = props;
  lat = parseFloat(lat);
  long = parseFloat(long);
  console.log({ lat, long });
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{ lat, long }}
        defaultZoom={10}
      ></GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  lat: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired,
};

export default GoogleMap;
