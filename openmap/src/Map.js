import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";
import { Marker } from "react-map-gl";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(78.9629);
  const [lat] = useState(20.5937);
  const [zoom] = useState(7);
  const [API_KEY] = useState("eTrQHENJFg3kJqf2lsAO#1.0/0.00000/0.00000");

  const popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      interactive: true, //enable mouse events
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    // create markers with popups
    const marker1 = new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([82.914212, 19.451054])
      .addTo(map.current)
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setHTML("<p>Marker 1</p>")
      );
    marker1.getElement().addEventListener("mouseenter", () => {
      popup
        .setLngLat(marker1.getLngLat())
        .setHTML("<p>Marker 1</p>")
        .addTo(map.current);
    });
    marker1.getElement().addEventListener("mouseleave", () => {
      popup.remove();
    });

    const marker2 = new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([82.964193, 19.445126])
      .addTo(map.current)
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setHTML("<p>Marker 2</p>")
      );
    marker2.getElement().addEventListener("mouseenter", () => {
      popup
        .setLngLat(marker2.getLngLat())
        .setHTML("<p>Marker 2</p>")
        .addTo(map.current);
    });
    marker2.getElement().addEventListener("mouseleave", () => {
      popup.remove();
    });

    const marker3 = new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([86.854945, 23.445215])
      .addTo(map.current)
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setHTML("<p>Marker 3</p>")
      );
    marker3.getElement().addEventListener("mouseenter", () => {
      popup
        .setLngLat(marker3.getLngLat())
        .setHTML("<p>Marker 3</p>")
        .addTo(map.current);
    });
    marker3.getElement().addEventListener("mouseleave", () => {
      popup.remove();
    });

    return (
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    );
  });
}
