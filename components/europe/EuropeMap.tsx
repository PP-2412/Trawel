'use client'

import { CitySelection } from './EuropeBuilder'

type Props = {
  selectedCities: CitySelection[]
}

export default function EuropeMap({ selectedCities }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-[#ede9fe] overflow-hidden sticky top-28">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] px-6 py-4">
        <h2 className="font-display text-xl font-semibold text-white">
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
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff] p-4">
        {/* Simple Europe SVG Map */}
        <svg viewBox="0 0 100 80" className="w-full h-full">
          {/* Background water */}
          <rect x="0" y="0" width="100" height="80" fill="#e0f2fe" />
          
          {/* Simplified Europe landmass */}
          <path
            d="M20,20 Q25,15 35,18 L40,15 Q50,12 60,15 L70,18 Q80,20 85,25 L82,35 Q78,45 75,50 L70,55 Q65,62 60,65 L50,68 Q40,65 35,60 L25,55 Q18,50 15,40 L18,30 Q20,25 20,20 Z"
            fill="#f5f3ff"
            stroke="#ddd6fe"
            strokeWidth="0.5"
          />
          
          {/* UK */}
          <path
            d="M35,20 Q38,18 42,20 L44,25 Q43,30 40,32 L36,30 Q34,26 35,20 Z"
            fill="#f5f3ff"
            stroke="#ddd6fe"
            strokeWidth="0.5"
          />

          {/* Iberian Peninsula */}
          <path
            d="M25,45 Q30,42 38,44 L42,48 Q44,55 40,60 L32,62 Q25,60 22,55 L23,48 Q24,46 25,45 Z"
            fill="#f5f3ff"
            stroke="#ddd6fe"
            strokeWidth="0.5"
          />

          {/* Italy */}
          <path
            d="M50,45 Q52,44 54,46 L56,52 Q57,58 55,62 L52,60 Q50,55 50,50 L50,45 Z"
            fill="#f5f3ff"
            stroke="#ddd6fe"
            strokeWidth="0.5"
          />

          {/* Greece */}
          <path
            d="M62,52 Q65,50 68,52 L70,58 Q68,62 65,63 L62,60 Q61,56 62,52 Z"
            fill="#f5f3ff"
            stroke="#ddd6fe"
            strokeWidth="0.5"
          />

          {/* Connection Lines */}
          {selectedCities.length > 1 && selectedCities.map((city, index) => {
            if (index === selectedCities.length - 1) return null
            const nextCity = selectedCities[index + 1]
            return (
              <line
                key={`line-${city.id}-${nextCity.id}`}
                x1={city.coordinates.x}
                y1={city.coordinates.y}
                x2={nextCity.coordinates.x}
                y2={nextCity.coordinates.y}
                stroke="#5b21b6"
                strokeWidth="0.8"
                strokeDasharray="2,2"
                opacity="0.6"
              />
            )
          })}

          {/* City Markers */}
          {selectedCities.map((city, index) => (
            <g key={city.id}>
              {/* Pulse animation ring */}
              <circle
                cx={city.coordinates.x}
                cy={city.coordinates.y}
                r="3"
                fill="none"
                stroke="#5b21b6"
                strokeWidth="0.5"
                opacity="0.4"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="5"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Main marker */}
              <circle
                cx={city.coordinates.x}
                cy={city.coordinates.y}
                r="2.5"
                fill="#5b21b6"
                stroke="white"
                strokeWidth="1"
              />
              
              {/* Order number */}
              <text
                x={city.coordinates.x}
                y={city.coordinates.y - 5}
                textAnchor="middle"
                fill="#5b21b6"
                fontSize="3"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {index + 1}
              </text>
            </g>
          ))}
        </svg>

        {/* Legend */}
        {selectedCities.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md">
            <div className="flex flex-wrap gap-2">
              {selectedCities.map((city, index) => (
                <span 
                  key={city.id}
                  className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#f5f3ff] rounded-full font-sans text-xs"
                >
                  <span className="w-4 h-4 bg-[#5b21b6] text-white rounded-full text-[10px] flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  {city.city}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedCities.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-sans text-sm text-stone-400 bg-white/80 px-4 py-2 rounded-lg">
              Your selected cities will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
