import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import { MapMarker } from './MapMarker';
import { MapPopup } from './MapPopup';
import type { Restaurant } from '../../types/database.types';
import { MADRID_CENTER } from '../../lib/constants';

interface MapUpdaterProps {
  center: [number, number];
  zoom: number;
}

function MapUpdater({ center, zoom }: MapUpdaterProps) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
}

interface RestaurantMapProps {
  restaurants: Restaurant[];
  center?: [number, number];
  zoom?: number;
}

export function RestaurantMap({ 
  restaurants,
  center = [MADRID_CENTER.latitude, MADRID_CENTER.longitude],
  zoom = 13
}: RestaurantMapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="h-[calc(100vh-4rem)] w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <MapUpdater center={center} zoom={zoom} />

      <MarkerClusterGroup
        chunkedLoading
        maxClusterRadius={50}
      >
        {restaurants.map((restaurant) => (
          <MapMarker key={restaurant.id} restaurant={restaurant}>
            <MapPopup restaurant={restaurant} />
          </MapMarker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}