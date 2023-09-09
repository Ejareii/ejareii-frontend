'use client';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import PointerMarker from "public/pics/pointer.svg"

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[]
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const url2 = "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
const JwagSunnyURL = 'https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}'

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const attribution2 = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
const JwagSunnyAtribution = '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const customIcon = new L.Icon({
  iconUrl: "https://images.techhive.com/images/article/2017/01/google-android-apps-100705848-large.jpg?auto=webp&quality=85,70",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map: React.FC<MapProps> = ({ center }) => {
  center = [35.715298, 51.404343];
  return (
      <MapContainer 
        // center={center as L.LatLngExpression || [35.715298, 51.404343]} 
        center={center as L.LatLngExpression || [35.715298, 51.404343]} 
        zoom={40} 
        scrollWheelZoom={true} 
        //maxZoom={50}
        minZoom={10}
        className="h-[100%] rounded-lg"
      >
        <TileLayer
          url={JwagSunnyURL}
          attribution={JwagSunnyAtribution}
          accessToken='PyTJUlEU1OPJwCJlW1k0NC8JIt2CALpyuj7uc066O7XbdZCjWEL3WYJIk6dnXtps'
        />
        {center && (
          <Marker  position={center as L.LatLngExpression} icon={customIcon}/>
        )}
      </MapContainer>
  )
}

export default Map