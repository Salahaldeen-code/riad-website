"use client";

import { useState, useCallback, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  useMapContext,
} from "react-simple-maps";
import countries110m from "world-atlas/countries-110m.json";

const MAP_W = 800;
const MAP_H = 400;

interface LocationData {
  country: string;
  city: string;
  address: string;
}

interface MapProps {
  dots?: Array<{
    start: {
      lat: number;
      lng: number;
      label?: string;
      location?: LocationData | LocationData[];
    };
    end: { lat: number; lng: number; label?: string; location?: LocationData };
  }>;
  lineColor?: string;
}

function ConnectionPaths({
  dots,
  gradientId,
  glowId,
}: {
  dots: NonNullable<MapProps["dots"]>;
  gradientId: string;
  glowId: string;
}) {
  const { projection } = useMapContext();

  const projectPoint = (lat: number, lng: number) => {
    const p = projection([lng, lat]);
    if (!p) return { x: 0, y: 0 };
    return { x: p[0], y: p[1] };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - MAP_H * 0.12;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <>
      {dots.map((dot, i) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        const same =
          dot.start.lat === dot.end.lat && dot.start.lng === dot.end.lng;
        if (same) return null;

        return (
          <g key={`path-group-${i}`}>
            <motion.path
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="2"
              filter={`url(#${glowId})`}
              className="pointer-events-none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.3 * i,
                ease: "easeInOut",
              }}
            />
          </g>
        );
      })}
    </>
  );
}

function MapMarkers({
  dots,
  lineColor,
  onPointHover,
  onPointLeave,
}: {
  dots: NonNullable<MapProps["dots"]>;
  lineColor: string;
  onPointHover: (
    e: React.MouseEvent<SVGCircleElement>,
    location: LocationData | LocationData[] | undefined,
  ) => void;
  onPointLeave: () => void;
}) {
  return (
    <>
      {dots.map((dot, i) => {
        const same =
          dot.start.lat === dot.end.lat && dot.start.lng === dot.end.lng;

        const renderMarker = (
          key: string,
          lat: number,
          lng: number,
          location: LocationData | LocationData[] | undefined,
        ) => (
          <Marker key={key} coordinates={[lng, lat]}>
            <circle
              r="4"
              fill={lineColor}
              opacity="0.18"
              className="pointer-events-none"
            />
            <circle
              r="2"
              fill={lineColor}
              className="pointer-events-none drop-shadow-[0_0_6px_rgba(10,107,196,0.7)]"
            />
            {location && (
              <circle
                r="12"
                fill="transparent"
                className="cursor-pointer transition-all"
                onMouseEnter={(e) => onPointHover(e, location)}
                onMouseLeave={onPointLeave}
              />
            )}
            <circle
              r="2"
              fill={lineColor}
              opacity="0.45"
              className="pointer-events-none"
            >
              <animate
                attributeName="r"
                from="2"
                to="8"
                dur="2.8s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.45"
                to="0"
                dur="2.8s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </Marker>
        );

        return (
          <g key={`points-group-${i}`}>
            {renderMarker(
              `start-${i}`,
              dot.start.lat,
              dot.start.lng,
              dot.start.location,
            )}
            {!same
              ? renderMarker(
                  `end-${i}`,
                  dot.end.lat,
                  dot.end.lng,
                  dot.end.location,
                )
              : null}
          </g>
        );
      })}
    </>
  );
}

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const gradId = useId().replace(/:/g, "");
  const glowId = `${gradId}-glow`;
  const gradientId = `${gradId}-path-gradient`;

  const [hoveredPoint, setHoveredPoint] = useState<{
    locations: LocationData[];
  } | null>(null);

  const handlePointHover = useCallback(
    (
      _e: React.MouseEvent<SVGCircleElement>,
      location: LocationData | LocationData[] | undefined,
    ) => {
      if (!location) return;
      const locations = Array.isArray(location) ? location : [location];
      setHoveredPoint({ locations });
    },
    [],
  );

  const handlePointLeave = useCallback(() => {
    setHoveredPoint(null);
  }, []);

  return (
    <div className="w-full aspect-[2/1] rounded-3xl relative font-sans overflow-hidden glass-border">
      <ComposableMap
        width={MAP_W}
        height={MAP_H}
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 165,
          center: [25, 12],
        }}
        className="absolute inset-0 block h-full w-full select-none opacity-95 [mask-image:linear-gradient(to_bottom,transparent,white_12%,white_88%,transparent)]"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="10%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="90%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <Geographies geography={countries110m}>
          {({
            geographies,
          }: {
            geographies: Array<{ rsmKey: string; svgPath: string }>;
          }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#f4f4f5",
                    stroke: "#d4d4d8",
                    strokeWidth: 0.45,
                    outline: "none",
                    pointerEvents: "none" as const,
                  },
                  hover: {
                    fill: "#e4e4e7",
                    stroke: "#a1a1aa",
                    strokeWidth: 0.45,
                    outline: "none",
                    pointerEvents: "none" as const,
                  },
                  pressed: {
                    fill: "#e4e4e7",
                    stroke: "#a1a1aa",
                    strokeWidth: 0.45,
                    outline: "none",
                    pointerEvents: "none" as const,
                  },
                }}
              />
            ))
          }
        </Geographies>

        <ConnectionPaths dots={dots} gradientId={gradientId} glowId={glowId} />
        <MapMarkers
          dots={dots}
          lineColor={lineColor}
          onPointHover={handlePointHover}
          onPointLeave={handlePointLeave}
        />
      </ComposableMap>

      <AnimatePresence>
        {hoveredPoint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-4 right-4 pointer-events-none z-50"
          >
            <div className="glass-border-enhanced rounded-2xl p-5 min-w-[240px] max-w-[300px] shadow-2xl">
              {hoveredPoint.locations.map((location, idx) => (
                <div
                  key={idx}
                  className={
                    idx > 0 ? "mt-5 pt-5 border-t border-gray-200" : ""
                  }
                >
                  <div className="space-y-2.5 text-right">
                    <div className="font-bold text-xl text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-light animate-pulse"></div>
                      {location.country}
                    </div>
                    <div className="text-lg font-semibold text-brand-light">
                      {location.city}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {location.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
