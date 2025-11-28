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
      <div className="relative aspect-[4/3] bg-[#d4e9f7] p-4">
        {/* Realistic Europe SVG Map */}
        <svg viewBox="0 0 800 600" className="w-full h-full" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}>
          <defs>
            <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f8f9fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#e9ecef', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          
          {/* Background water */}
          <rect x="0" y="0" width="800" height="600" fill="#d4e9f7" />
          
          {/* Portugal */}
          <path
            d="M180,380 L175,385 L170,395 L168,410 L170,425 L175,440 L178,450 L175,460 L180,465 L185,462 L190,455 L195,445 L198,430 L200,415 L198,400 L195,390 L188,382 L180,380 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Spain */}
          <path
            d="M180,380 L195,375 L210,372 L230,370 L250,368 L270,365 L290,368 L305,375 L315,385 L325,395 L330,410 L328,425 L322,435 L310,445 L295,450 L280,452 L265,455 L250,458 L235,460 L220,462 L205,463 L190,462 L185,458 L180,450 L175,440 L180,430 L185,420 L190,410 L195,400 L198,390 L192,382 L180,380 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* France */}
          <path
            d="M315,385 L330,380 L345,375 L360,370 L375,365 L390,362 L405,360 L415,355 L420,345 L418,330 L410,320 L400,315 L385,312 L370,315 L355,320 L345,328 L340,340 L338,355 L342,370 L350,380 L358,385 L368,388 L378,392 L385,400 L388,415 L385,430 L378,440 L365,445 L350,448 L335,445 L322,438 L315,428 L312,415 L315,400 L315,385 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* United Kingdom */}
          <path
            d="M340,240 L348,235 L358,232 L368,230 L378,232 L385,238 L388,248 L385,258 L380,268 L372,275 L362,278 L352,280 L345,285 L340,290 L335,285 L332,275 L330,265 L332,255 L337,245 L340,240 Z M365,250 L372,248 L378,252 L380,260 L375,268 L368,270 L362,266 L360,258 L365,250 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Netherlands */}
          <path
            d="M395,265 L402,262 L410,260 L418,262 L423,268 L425,278 L422,288 L415,295 L405,298 L395,295 L390,288 L388,278 L390,270 L395,265 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Belgium */}
          <path
            d="M390,288 L398,285 L408,283 L418,285 L423,292 L420,302 L412,308 L402,310 L392,307 L387,300 L388,292 L390,288 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Germany */}
          <path
            d="M418,262 L435,258 L452,255 L468,255 L482,258 L495,265 L502,275 L505,290 L502,305 L495,318 L485,328 L472,335 L458,338 L445,335 L432,328 L425,318 L420,305 L418,290 L420,275 L418,262 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Switzerland */}
          <path
            d="M405,360 L418,358 L432,357 L445,360 L452,368 L450,378 L442,385 L430,388 L418,385 L408,378 L405,368 L405,360 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Austria */}
          <path
            d="M445,335 L462,332 L478,330 L492,332 L505,338 L512,348 L510,358 L502,365 L488,368 L472,368 L458,365 L448,358 L445,348 L445,335 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Italy */}
          <path
            d="M430,388 L442,385 L455,383 L468,382 L478,385 L485,392 L488,405 L485,418 L480,432 L472,445 L462,458 L452,468 L442,475 L432,478 L425,475 L420,468 L418,455 L420,442 L425,428 L432,415 L438,402 L438,392 L430,388 Z M465,470 L472,468 L478,472 L480,482 L475,492 L468,495 L460,492 L455,485 L458,475 L465,470 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Czech Republic */}
          <path
            d="M472,300 L488,298 L502,300 L512,308 L515,318 L510,328 L498,335 L485,335 L472,330 L468,320 L470,310 L472,300 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Croatia */}
          <path
            d="M502,365 L518,363 L532,365 L542,372 L545,385 L540,398 L530,408 L518,412 L505,410 L495,402 L492,390 L495,378 L502,365 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Greece */}
          <path
            d="M540,440 L552,438 L565,440 L575,448 L580,460 L578,475 L570,485 L558,490 L545,488 L535,480 L532,468 L535,455 L540,440 Z M568,495 L575,493 L582,497 L585,508 L580,518 L572,520 L565,515 L563,505 L568,495 Z"
            fill="url(#landGradient)"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          
          {/* Connection Lines */}
          {selectedCities.length > 1 && selectedCities.map((city, index) => {
            if (index === selectedCities.length - 1) return null
            const nextCity = selectedCities[index + 1]
            return (
              <g key={`line-${city.id}-${nextCity.id}`}>
                <line
                  x1={city.coordinates.x}
                  y1={city.coordinates.y}
                  x2={nextCity.coordinates.x}
                  y2={nextCity.coordinates.y}
                  stroke="#5b21b6"
                  strokeWidth="3"
                  strokeDasharray="8,5"
                  opacity="0.5"
                />
                {/* Arrow */}
                <defs>
                  <marker
                    id={`arrow-${index}`}
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b21b6" />
                  </marker>
                </defs>
                <line
                  x1={city.coordinates.x}
                  y1={city.coordinates.y}
                  x2={nextCity.coordinates.x}
                  y2={nextCity.coordinates.y}
                  stroke="#5b21b6"
                  strokeWidth="2"
                  opacity="0.7"
                  markerEnd={`url(#arrow-${index})`}
                />
              </g>
            )
          })}

          {/* City Markers */}
          {selectedCities.map((city, index) => (
            <g key={city.id}>
              {/* Pulse animation ring */}
              <circle
                cx={city.coordinates.x}
                cy={city.coordinates.y}
                r="15"
                fill="none"
                stroke="#5b21b6"
                strokeWidth="2"
                opacity="0.4"
              >
                <animate
                  attributeName="r"
                  from="12"
                  to="25"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Pin shadow */}
              <ellipse
                cx={city.coordinates.x}
                cy={city.coordinates.y + 22}
                rx="8"
                ry="3"
                fill="#000"
                opacity="0.2"
              />
              
              {/* Map pin */}
              <g transform={`translate(${city.coordinates.x}, ${city.coordinates.y})`}>
                <path
                  d="M 0,-18 C -7,-18 -12,-13 -12,-6 C -12,2 0,18 0,18 C 0,18 12,2 12,-6 C 12,-13 7,-18 0,-18 Z"
                  fill="#5b21b6"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  cx="0"
                  cy="-6"
                  r="5"
                  fill="white"
                />
              </g>
              
              {/* Order number */}
              <text
                x={city.coordinates.x}
                y={city.coordinates.y - 3}
                textAnchor="middle"
                fill="#5b21b6"
                fontSize="14"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {index + 1}
              </text>
              
              {/* City name label */}
              <text
                x={city.coordinates.x}
                y={city.coordinates.y + 32}
                textAnchor="middle"
                fill="#2d1f4e"
                fontSize="12"
                fontWeight="600"
                fontFamily="sans-serif"
              >
                {city.city}
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
