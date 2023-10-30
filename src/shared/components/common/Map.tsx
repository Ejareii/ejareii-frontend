"use client";

import L from "leaflet";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import * as ReactDOMServer from "react-dom/server";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import PointerMarker from "public/pics/pointer.svg";
import { GrGamepad } from "react-icons/gr";
import { useSearchParams } from "next/navigation";
import { iconDic } from "../navigation/Categories";
import { IconType } from "react-icons";
import { RentalEntity } from "../../dtos/rental.dto";
import { useEffect, useState } from "react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import debounce from "lodash/debounce";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  listings: RentalEntity[];
  center?: number[];
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const url2 = "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png";
const JwagSunnyURL =
  "https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const attribution2 =
  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
const JwagSunnyAtribution =
  '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const generateAndReturnIconURL = (iconComponent: React.JSX.Element): string => {
  let iconSvg = ReactDOMServer.renderToStaticMarkup(iconComponent);
  console.log(iconSvg);

  const tempElement = document.createElement('div');
  tempElement.innerHTML = iconSvg;

// Find the path element within the SVG
  const pathElement = tempElement.querySelector('path'); 
  
  let gpsShapeSVg='';
  if(pathElement){
  gpsShapeSVg = `<?xml version="1.0" encoding="utf-8"?>
  <!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon -->
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
  <g><g><path fill="#000000" d="M128,10c-48.9,0-88.5,39.6-88.5,88.5C39.5,147.4,128,246,128,246s88.5-98.6,88.5-147.5C216.5,49.6,176.9,10,128,10z M128,172.5c-41.1,0-74.5-33.4-74.5-74.5c0-41.1,33.4-74.5,74.5-74.5s74.5,33.4,74.5,74.5S169.1,172.5,128,172.5z"/>
  ${new XMLSerializer().serializeToString(pathElement)}</g></g>
  </svg>`;
  }

  var data = new Blob([gpsShapeSVg], { type: "image/svg+xml" });

  let svgFileURL = window.URL.createObjectURL(data);

  console.log({ svgFileURL });

  // returns a URL you can use as a href
  return svgFileURL;
};

const Map: React.FC<MapProps> = ({ listings }) => {
  const router = useRouter();
  const params = useSearchParams();

  let center = [35.715298, 51.404343];

  const [lat, setLat] = useState<number>(center[0]);
  const [lng, setLng] = useState<number>(center[1]);
  const [currentZoom, setCurrentZom] = useState<number>(14);

  // const handleMapMove = (e) => {
  //   console.log('Map moved to:', e.target.getCenter());
  //   // Add your custom logic here
  // };

  // const handleMapZoom = (e) => {
  //   console.log('Map zoomed to:', e.target.getZoom());
  //   // Add your custom logic here
  // };

  function LocationMarker(): any {
    useEffect(() => {
      console.log({ currentZoom });

      let currentQuery = {};
      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        zoom: currentZoom,
        lat,
        lng,
      };

      const url = qs.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    }, [currentZoom, lat, lng]);

    const map = useMapEvents({
      // click() {
      //   map.locate()
      // },
      // locationfound(e) {
      //   setPosition(e.latlng)
      //   map.flyTo(e.latlng, map.getZoom())
      // },
      dragend(e) {
        const handleDrag = debounce(() => {
          setLat(map.getCenter().lat);
          setLng(map.getCenter().lng);
        }, 50);
        handleDrag();
      },
      zoomend(e) {
        const handleZoom = debounce(
          () => setCurrentZom(e?.sourceTarget?._zoom),
          50
        );
        handleZoom();
      },
    });

    return null;
  }

  return (
    <MapContainer
      // center={center as L.LatLngExpression || [35.715298, 51.404343]}
      center={(center as L.LatLngExpression) || [35.715298, 51.404343]}
      zoom={currentZoom}
      scrollWheelZoom={true}
      //maxZoom={50}
      minZoom={10}
      className="h-[100%] rounded-lg"
    >
      <TileLayer
        url={JwagSunnyURL}
        attribution={JwagSunnyAtribution}
        accessToken="PyTJUlEU1OPJwCJlW1k0NC8JIt2CALpyuj7uc066O7XbdZCjWEL3WYJIk6dnXtps"
      />
      {listings?.length &&
        listings.map((_list, _i) => {
          console.log({ _list });
          let IconComponent = iconDic[_list.category.icon_name];
          const customIcon = new L.Icon({
            // iconUrl: "https://images.techhive.com/images/article/2017/01/google-android-apps-100705848-large.jpg?auto=webp&quality=85,70",
            iconUrl: generateAndReturnIconURL(<IconComponent />),
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
          });
          return (
            <Marker
              key={_i}
              position={
                [_list?.latitude, _list?.longitude] as L.LatLngExpression
              }
              icon={customIcon}
            />
          );
        })}
      {/* <LayerGroup>
        <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
        <Circle
          center={center}
          pathOptions={fillRedOptions}
          radius={100}
          stroke={false}
        />
        <LayerGroup>
          <Circle
            center={[51.51, -0.08]}
            pathOptions={greenOptions}
            radius={100}
          />
        </LayerGroup>
      </LayerGroup>
      <FeatureGroup pathOptions={purpleOptions}>
        <Popup>Popup in FeatureGroup</Popup>
        <Circle center={[51.51, -0.06]} radius={200} />
        <Rectangle bounds={rectangle} />
      </FeatureGroup> */}
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
