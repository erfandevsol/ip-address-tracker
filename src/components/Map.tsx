import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

type MapProps = {
  lat: number;
  lng: number;
};

export default function Map({ lat, lng }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json", // سبک نقشه
      center: [lng, lat], // مختصات مرکز نقشه
      zoom: 10, // سطح زوم
    });

    setTimeout(() => {
      map.resize();
    }, 100);

    // اضافه کردن نشانگر (Marker)
    new maplibregl.Marker().setLngLat([lng, lat]).addTo(map);

    return () => map.remove(); // پاک‌سازی نقشه در هنگام حذف کامپوننت
  }, [lat, lng]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '50vh', marginTop: '1rem' }} />;
}
