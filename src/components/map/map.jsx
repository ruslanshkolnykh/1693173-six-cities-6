import React, {useEffect, useRef} from "react";
import leaflet from 'leaflet';
import locationProps from '../props/location.props';
import pointsProps from '../props/points.props';
import PropTypes from "prop-types";
import 'leaflet/dist/leaflet.css';

const Map = ({city, points}) => {
  const mapRef = useRef();

  useEffect(() =>{
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.latitude,
        lng: city.longitude
      },
      zoom: city.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.latitude,
        lng: point.longitude
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current)
        .bindPopup(point.title);

      return () =>{
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <div id="map" style={{height: `800px`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  city: locationProps,
  points: PropTypes.arrayOf(pointsProps).isRequired,
};

export default Map;
