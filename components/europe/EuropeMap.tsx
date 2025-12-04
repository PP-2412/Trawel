'use client'

import { CitySelection } from './EuropeBuilder'

type Props = {
  selectedCities: CitySelection[]
}

// Scale factors from original 900x684 to new 960x697 dimensions
const SCALE_X = 960 / 900
const SCALE_Y = 697 / 684

export default function EuropeMap({ selectedCities }: Props) {
  // Scale coordinates to match the new map image
  const scaleCoords = (x: number, y: number) => ({
    x: x * SCALE_X,
    y: y * SCALE_Y
  })

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden sticky top-28">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-6 py-4">
        <h2 className="font-display text-xl text-white">
          Your Route
        </h2>
        <p className="font-sans text-xs text-white/70 mt-1">
          {selectedCities.length > 0 
            ? `${selectedCities.length} destinations selected`
            : 'Select cities to see them on the map'
          }
        </p>
      </div>

      {/* Map Container */}
      <div className="relative aspect-[960/697] bg-[#808080]">
        <svg viewBox="0 0 960 697" className="w-full h-full">
          {/* Map Image Background */}
          <image
            href="/europe-map.png"
            x="0"
            y="0"
            width="960"
            height="697"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Connection Lines */}
          {selectedCities.length > 1 && selectedCities.map((city, index) => {
            if (index === selectedCities.length - 1) return null
            const nextCity = selectedCities[index + 1]
            const from = scaleCoords(city.coordinates.x, city.coordinates.y)
            const to = scaleCoords(nextCity.coordinates.x, nextCity.coordinates.y)
            
            return (
              <g key={`line-${city.id}-${nextCity.id}`}>
                {/* Shadow line */}
                <line
                  x1={from.x + 2}
                  y1={from.y + 2}
                  x2={to.x + 2}
                  y2={to.y + 2}
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Main dashed line */}
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#12103d"
                  strokeWidth="3"
                  strokeDasharray="10,6"
                  strokeLinecap="round"
                />
                {/* Arrow marker definition */}
                <defs>
                  <marker
                    id={`arrow-${index}`}
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#d19457" />
                  </marker>
                </defs>
                {/* Arrow line */}
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#d19457"
                  strokeWidth="2"
                  markerEnd={`url(#arrow-${index})`}
                />
              </g>
            )
          })}

          {/* City Markers */}
          {selectedCities.map((city, index) => {
            const coords = scaleCoords(city.coordinates.x, city.coordinates.y)
            
            return (
              <g key={city.id}>
                {/* Pulse animation ring */}
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r="12"
                  fill="none"
                  stroke="#d19457"
                  strokeWidth="2"
                >
                  <animate attributeName="r" from="8" to="20" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.8" to="0" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                
                {/* Second pulse ring (offset) */}
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r="12"
                  fill="none"
                  stroke="#12103d"
                  strokeWidth="1.5"
                >
                  <animate attributeName="r" from="8" to="20" dur="1.5s" begin="0.75s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" begin="0.75s" repeatCount="indefinite"/>
                </circle>
                
                {/* Pin shadow */}
                <ellipse 
                  cx={coords.x} 
                  cy={coords.y + 20} 
                  rx="8" 
                  ry="3" 
                  fill="rgba(0,0,0,0.25)"
                />
                
                {/* Map pin shape */}
                <g transform={`translate(${coords.x}, ${coords.y})`}>
                  {/* Pin outer */}
                  <path 
                    d="M 0,-18 C -8,-18 -12,-12 -12,-6 C -12,3 0,18 0,18 C 0,18 12,3 12,-6 C 12,-12 8,-18 0,-18 Z"
                    fill="#12103d" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  {/* Pin inner circle */}
                  <circle cx="0" cy="-6" r="5" fill="white"/>
                  {/* Order number */}
                  <text 
                    x="0" 
                    y="-3" 
                    textAnchor="middle" 
                    fill="#12103d" 
                    fontSize="9" 
                    fontWeight="bold" 
                    fontFamily="sans-serif"
                  >
                    {index + 1}
                  </text>
                </g>
                
                {/* City name label */}
                <g transform={`translate(${coords.x}, ${coords.y + 28})`}>
                  {/* Label background */}
                  <rect
                    x={-city.city.length * 3.5 - 6}
                    y="-8"
                    width={city.city.length * 7 + 12}
                    height="16"
                    rx="4"
                    fill="white"
                    fillOpacity="0.9"
                    stroke="#12103d"
                    strokeWidth="0.5"
                  />
                  {/* Label text */}
                  <text 
                    x="0" 
                    y="4" 
                    textAnchor="middle" 
                    fill="#12103d" 
                    fontSize="10" 
                    fontWeight="600" 
                    fontFamily="sans-serif"
                  >
                    {city.city}
                  </text>
                </g>
              </g>
            )
          })}
        </svg>

        {/* Legend */}
        {selectedCities.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-[#12103d]/10">
            <p className="font-sans text-[10px] text-[#44618b] uppercase tracking-wider mb-2">Your Route</p>
            <div className="flex flex-wrap gap-2">
              {selectedCities.map((city, index) => (
                <span key={city.id} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-[#12103d]/5 to-[#43124a]/5 rounded-full font-sans text-xs border border-[#12103d]/10">
                  <span className="w-5 h-5 bg-[#12103d] text-white rounded-full text-[10px] flex items-center justify-center font-bold shadow-sm">
                    {index + 1}
                  </span>
                  <span className="text-[#12103d] font-medium">{city.city}</span>
                  <span className="text-[#44618b] text-[10px]">({city.nights}N)</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedCities.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-[#12103d]/10">
              <p className="font-sans text-sm text-[#44618b] text-center">
                Search and add cities to see your route
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
