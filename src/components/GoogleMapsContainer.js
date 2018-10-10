import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";

class GoogleMapsContainer extends React.Component {
  onClick = (t, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState({ position: { lat, lng } });
    this.props.handleGeoLocation(this.state.position);
  };

  render() {
    const center =
      this.props.lat && this.props.lng
        ? { lat: this.props.lat, lng: this.props.lng }
        : { lat: -7.119584, lng: -34.837107 };
    return (
      <div style={{ height: "300px", width: "100%", position: "relative" }}>
        <Map
          google={this.props.google}
          zoom={14}
          onClick={this.onClick}
          initialCenter={center}
        >
          <Marker key={center.lat} position={center} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  api: process.env.GOOGLE_API_KEY
})(GoogleMapsContainer);
