import React, { useEffect } from "react";
import Map from "ol/Map.js";
import View from "ol/View.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import "ol/ol.css";

const MapComponent = () => {
  useEffect(() => {
    // Create the map after the component mounts
    const map = new Map({
      target: "map", // ID of the div that will contain the map
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0], // Center in EPSG:3857 projection (Web Mercator)
        zoom: 2,
      }),
    });

    return () => {
      // Clean up to avoid memory leaks
      map.setTarget(null);
    };
  }, []); // Empty dependency array to run only once

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default MapComponent;
