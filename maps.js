import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "50%",
      height: "50%",
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 30.6864001,
          lng: 76.663671,
        }}
      >
        <Marker position={{ lat: 30.6864001, lng: 76.663671 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDO3hoTVD4ek1laepm4ix0kubiJTvzj3DM",
})(MapContainer);
