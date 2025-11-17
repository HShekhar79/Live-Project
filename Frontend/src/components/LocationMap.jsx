// src/components/LocationMap.jsx
import React from "react";
import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

// Fix default marker icon path in Vite
const markerIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function ClickHandler({ onClick }) {
  useMapEvents({
    click(e) {
      onClick([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

export default function LocationMap({ center, position, setPosition, height = 360 }) {
  // memoize center so the map doesn’t fully remount on other state changes
  const initial = useMemo(() => center, [center]);

  return (
    <div className="pc-map" style={{ height }}>
      <MapContainer
        center={initial}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ClickHandler onClick={(latlng) => setPosition(latlng)} />

        {position && (
          <Marker
            position={position}
            icon={markerIcon}
            draggable={true}
            eventHandlers={{
              dragend: (e) => {
                const { lat, lng } = e.target.getLatLng();
                setPosition([lat, lng]);
              },
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}
