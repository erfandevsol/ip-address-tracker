import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

type MapProps = {
  lat: number;
  lng: number;
};

export default function MapContainer({ lat, lng }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [lng, lat],
      zoom: 15,
    });

    setTimeout(() => {
      map.resize();
    }, 100);

    new maplibregl.Marker({ color: "#000" }).setLngLat([lng, lat]).addTo(map);

    return () => map.remove();
  }, [lat, lng]);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "68vh" }} />
  );
}
