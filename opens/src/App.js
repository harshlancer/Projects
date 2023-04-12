import "./App.css";
// import { MapContainer, Popup, TileLayer } from "react-leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import pin from "./pin.png";
import { useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";

function App() {
  const zoom = 14;
  const mapRef = useRef();
  const position = [20.5937, 78.9629];
  const url =
    "https://api.maptiler.com/maps/hybrid/?key=eTrQHENJFg3kJqf2lsAO#1.0/0.00000/0.00000";
  const maptiler =
    "https://api.maptiler.com/maps/streets-v2/style.json?key=YOUR_MAPTILER_API_KEY_HERE";
  return (
    <div className="App">
      <Navbar />
      <Map />
    </div>
  );
}

export default App;
