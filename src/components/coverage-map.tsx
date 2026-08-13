import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { coverageAreas, type CoverageArea } from "@/data/coverage";

type Props = {
  selected: string | null;
  highlighted: string[];
  onSelect: (area: CoverageArea) => void;
};

function markerIcon(active: boolean) {
  return L.divIcon({
    className: "",
    html: `<span style="display:block;width:${active ? 18 : 12}px;height:${
      active ? 18 : 12
    }px;border-radius:9999px;background:${
      active ? "hsl(var(--accent))" : "hsl(var(--primary))"
    };box-shadow:0 0 0 ${active ? 6 : 3}px hsl(var(--accent) / 0.25);"></span>`,
    iconSize: [active ? 18 : 12, active ? 18 : 12],
    iconAnchor: [active ? 9 : 6, active ? 9 : 6],
  });
}

export default function CoverageMap({ selected, highlighted, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, {
      center: [51.535, 0.02],
      zoom: 11,
      scrollWheelZoom: false,
    });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19,
    }).addTo(map);

    coverageAreas.forEach((area) => {
      const marker = L.marker([area.lat, area.lng], { icon: markerIcon(false), title: area.name })
        .addTo(map)
        .bindTooltip(area.name, { direction: "top", offset: [0, -8] })
        .on("click", () => onSelect(area));
      markersRef.current[area.name] = marker;
    });

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const active = new Set(highlighted.length ? highlighted : selected ? [selected] : []);
    Object.entries(markersRef.current).forEach(([name, marker]) => {
      marker.setIcon(markerIcon(active.has(name)));
      marker.setZIndexOffset(active.has(name) ? 1000 : 0);
    });
    const map = mapRef.current;
    if (!map) return;
    const focus = coverageAreas.filter((a) => active.has(a.name));
    if (focus.length === 1) {
      map.flyTo([focus[0]!.lat, focus[0]!.lng], 14, { duration: 0.8 });
    } else if (focus.length > 1) {
      map.flyToBounds(L.latLngBounds(focus.map((a) => [a.lat, a.lng] as [number, number])).pad(0.4), {
        duration: 0.8,
      });
    }
  }, [selected, highlighted]);

  return <div ref={containerRef} className="h-[420px] w-full rounded-sm" role="application" aria-label="Map of areas we cover" />;
}
