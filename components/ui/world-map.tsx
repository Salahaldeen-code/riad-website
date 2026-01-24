"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import DottedMap from "dotted-map";

interface LocationData {
  country: string;
  city: string;
  address: string;
}

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string; location?: LocationData | LocationData[] };
    end: { lat: number; lng: number; label?: string; location?: LocationData };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPoint, setHoveredPoint] = useState<{
    locations: LocationData[];
  } | null>(null);
  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  // Default to dark theme since the site is dark-themed
  const isDark = true;

  const svgMap = map.getSVG({
    radius: 0.22,
    color: isDark ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: isDark ? "black" : "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const handlePointHover = useCallback((
    e: React.MouseEvent<SVGCircleElement>,
    location: LocationData | LocationData[] | undefined
  ) => {
    if (!location) return;
    
    const locations = Array.isArray(location) ? location : [location];
    setHoveredPoint({ locations });
  }, []);

  const handlePointLeave = useCallback(() => {
    setHoveredPoint(null);
  }, []);

  return (
    <div ref={containerRef} className="w-full aspect-[2/1] rounded-3xl relative font-sans overflow-hidden glass-border">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none opacity-60"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="10%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="90%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="2"
                filter="url(#glow)"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.3 * i,
                  ease: "easeInOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                {/* Outer glow ring */}
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="6"
                  fill={lineColor}
                  opacity="0.2"
                  className="pointer-events-none"
                />
                {/* Main point */}
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="3"
                  fill={lineColor}
                  className="pointer-events-none drop-shadow-[0_0_8px_rgba(249,145,34,0.8)]"
                />
                {/* Hover area */}
                {dot.start.location && (
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="16"
                    fill="transparent"
                    className="cursor-pointer transition-all"
                    onMouseEnter={(e) => handlePointHover(e, dot.start.location)}
                    onMouseLeave={handlePointLeave}
                  />
                )}
                {/* Pulsing animation */}
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="3"
                  fill={lineColor}
                  opacity="0.6"
                  className="pointer-events-none"
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="12"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g key={`end-${i}`}>
                {/* Outer glow ring */}
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="6"
                  fill={lineColor}
                  opacity="0.2"
                  className="pointer-events-none"
                />
                {/* Main point */}
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="3"
                  fill={lineColor}
                  className="pointer-events-none drop-shadow-[0_0_8px_rgba(249,145,34,0.8)]"
                />
                {/* Hover area */}
                {dot.end.location && (
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="16"
                    fill="transparent"
                    className="cursor-pointer transition-all"
                    onMouseEnter={(e) => handlePointHover(e, dot.end.location)}
                    onMouseLeave={handlePointLeave}
                  />
                )}
                {/* Pulsing animation */}
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="3"
                  fill={lineColor}
                  opacity="0.6"
                  className="pointer-events-none"
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="12"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          );
        })}
      </svg>

      {/* Tooltip Container - Fixed Upper Right */}
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
                <div key={idx} className={idx > 0 ? "mt-5 pt-5 border-t border-white/10" : ""}>
                  <div className="space-y-2.5 text-right">
                    <div className="font-bold text-xl text-white flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#f99122] animate-pulse"></div>
                      {location.country}
                    </div>
                    <div className="text-lg font-semibold text-brand-light">
                      {location.city}
                    </div>
                    <div className="text-sm text-gray-400 leading-relaxed">
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

