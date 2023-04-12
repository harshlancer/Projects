import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from "@maptiler/sdk";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(78.9629);
  const [lat] = useState(20.5937);
  const [zoom] = useState(5);
  const [API_KEY] = useState("eTrQHENJFg3kJqf2lsAO#1.0/0.00000/0.00000");

  useEffect(() => {
    if (map.current) return;
    map.scrollZoom.disable();

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
  });
  const marker = new maptilersdk.Marker().setLngLat([30.5, 50.5]).addTo(map);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
