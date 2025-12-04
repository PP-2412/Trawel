'use client'

import { CitySelection } from './EuropeBuilder'

type Props = {
  selectedCities: CitySelection[]
}

export default function EuropeMap({ selectedCities }: Props) {
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
      <div className="relative aspect-[900/684] bg-[#e8f4fc] p-2">
        <svg viewBox="0 0 900 684" className="w-full h-full">
          <defs>
            <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8e8e0" />
              <stop offset="100%" stopColor="#d8d8d0" />
            </linearGradient>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c8e0f0" />
              <stop offset="100%" stopColor="#a8c8e0" />
            </linearGradient>
          </defs>
          
          {/* Water background */}
          <rect x="0" y="0" width="900" height="684" fill="url(#waterGrad)" />

          {/* Iceland */}
          <path d="M 80,140 Q 100,120 140,125 Q 170,130 180,160 Q 175,185 150,195 Q 120,200 95,190 Q 70,175 80,140 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Norway - long narrow shape */}
          <path d="M 380,80 Q 430,60 480,70 Q 520,90 540,140 Q 560,180 555,220 Q 545,250 520,270 Q 490,285 470,275 Q 445,260 435,230 Q 420,190 415,150 Q 410,110 380,80 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Sweden */}
          <path d="M 520,180 Q 560,170 590,185 Q 620,210 625,250 Q 620,295 595,320 Q 560,340 530,330 Q 505,315 495,285 Q 490,250 505,210 Q 510,190 520,180 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Finland */}
          <path d="M 630,160 Q 680,150 720,175 Q 750,210 755,260 Q 745,305 710,330 Q 670,350 640,335 Q 615,310 615,270 Q 620,220 630,160 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* UK - Main Island */}
          <path d="M 225,280 Q 260,270 290,285 Q 315,305 320,340 Q 318,375 295,395 Q 265,410 235,400 Q 210,380 210,345 Q 215,305 225,280 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>
          
          {/* Scotland */}
          <path d="M 230,260 Q 265,250 290,265 Q 300,280 295,295 Q 275,305 250,300 Q 230,290 230,260 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Ireland */}
          <path d="M 180,300 Q 220,290 235,315 Q 245,345 230,370 Q 205,390 175,380 Q 155,360 160,330 Q 165,310 180,300 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* France */}
          <path d="M 280,380 Q 340,370 390,385 Q 430,410 440,455 Q 435,500 400,520 Q 350,540 300,530 Q 260,510 255,470 Q 250,430 260,400 Q 270,385 280,380 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Spain & Portugal */}
          <path d="M 160,470 Q 230,450 300,465 Q 360,490 370,540 Q 365,590 320,620 Q 260,640 200,625 Q 155,600 150,550 Q 145,510 160,470 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Germany */}
          <path d="M 390,320 Q 440,310 490,325 Q 530,350 540,395 Q 535,440 500,460 Q 455,475 410,460 Q 375,435 375,395 Q 380,355 390,320 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Poland */}
          <path d="M 530,300 Q 590,290 640,310 Q 680,340 685,385 Q 675,425 635,445 Q 585,460 545,440 Q 515,415 520,370 Q 525,330 530,300 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Czech Republic & Austria & Switzerland - Alpine region */}
          <path d="M 460,390 Q 500,380 540,395 Q 575,420 575,455 Q 565,485 525,495 Q 480,500 445,480 Q 420,455 430,425 Q 445,400 460,390 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Italy */}
          <path d="M 440,445 Q 475,435 510,450 Q 545,475 560,520 Q 555,570 530,610 Q 490,640 450,630 Q 420,605 425,560 Q 430,510 440,445 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>
          
          {/* Sicily */}
          <path d="M 480,560 Q 520,555 535,575 Q 540,595 520,610 Q 495,620 475,605 Q 465,585 480,560 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Sardinia */}
          <path d="M 400,520 Q 430,515 440,540 Q 445,565 425,580 Q 400,590 385,570 Q 380,545 400,520 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Balkans - Croatia, Slovenia, Serbia, etc */}
          <path d="M 520,430 Q 580,420 630,445 Q 670,480 675,530 Q 665,575 620,595 Q 565,610 520,585 Q 490,555 495,510 Q 505,460 520,430 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Greece */}
          <path d="M 600,510 Q 660,500 700,530 Q 730,570 725,615 Q 705,655 655,670 Q 600,680 565,650 Q 545,615 560,570 Q 580,535 600,510 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Turkey (European part + Asia Minor visible) */}
          <path d="M 700,470 Q 780,455 840,490 Q 880,540 875,600 Q 850,650 790,670 Q 720,680 680,640 Q 660,590 680,540 Q 690,500 700,470 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Romania & Bulgaria */}
          <path d="M 600,400 Q 670,390 720,420 Q 760,460 755,510 Q 735,545 685,555 Q 625,560 590,530 Q 565,495 575,450 Q 590,420 600,400 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Baltic States */}
          <path d="M 620,250 Q 680,240 720,270 Q 745,310 735,350 Q 710,380 660,385 Q 615,380 600,345 Q 595,300 620,250 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Denmark */}
          <path d="M 450,280 Q 490,270 510,295 Q 520,325 500,345 Q 470,355 450,335 Q 440,310 450,280 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Netherlands & Belgium */}
          <path d="M 330,340 Q 375,330 395,355 Q 400,385 375,400 Q 345,410 325,390 Q 315,365 330,340 Z" 
            fill="url(#landGrad)" stroke="#9a9a8a" strokeWidth="1"/>

          {/* Connection Lines */}
          {selectedCities.length > 1 && selectedCities.map((city, index) => {
            if (index === selectedCities.length - 1) return null
            const nextCity = selectedCities[index + 1]
            return (
              <g key={`line-${city.id}-${nextCity.id}`}>
                {/* Dashed line */}
                <line
                  x1={city.coordinates.x}
                  y1={city.coordinates.y}
                  x2={nextCity.coordinates.x}
                  y2={nextCity.coordinates.y}
                  stroke="#12103d"
                  strokeWidth="2.5"
                  strokeDasharray="8,5"
                  opacity="0.4"
                />
                {/* Arrow marker */}
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
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#12103d" />
                  </marker>
                </defs>
                <line
                  x1={city.coordinates.x}
                  y1={city.coordinates.y}
                  x2={nextCity.coordinates.x}
                  y2={nextCity.coordinates.y}
                  stroke="#12103d"
                  strokeWidth="2"
                  opacity="0.6"
                  markerEnd={`url(#arrow-${index})`}
                />
              </g>
            )
          })}

          {/* City Markers */}
          {selectedCities.map((city, index) => (
            <g key={city.id}>
              {/* Pulse animation */}
              <circle
                cx={city.coordinates.x}
                cy={city.coordinates.y}
                r="12"
                fill="none"
                stroke="#d19457"
                strokeWidth="2"
                opacity="0.5"
              >
                <animate attributeName="r" from="10" to="22" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              {/* Pin shadow */}
              <ellipse cx={city.coordinates.x} cy={city.coordinates.y + 18} rx="6" ry="2.5" fill="#000" opacity="0.15"/>
              
              {/* Map pin */}
              <g transform={`translate(${city.coordinates.x}, ${city.coordinates.y})`}>
                <path d="M 0,-16 C -6,-16 -10,-11 -10,-5 C -10,2 0,16 0,16 C 0,16 10,2 10,-5 C 10,-11 6,-16 0,-16 Z"
                  fill="#12103d" stroke="white" strokeWidth="1.5"/>
                <circle cx="0" cy="-5" r="4" fill="white"/>
              </g>
              
              {/* Order number */}
              <text x={city.coordinates.x} y={city.coordinates.y - 3} textAnchor="middle" fill="#12103d" 
                fontSize="10" fontWeight="bold" fontFamily="sans-serif">{index + 1}</text>
              
              {/* City name */}
              <text x={city.coordinates.x} y={city.coordinates.y + 28} textAnchor="middle" fill="#12103d" 
                fontSize="10" fontWeight="600" fontFamily="sans-serif">{city.city}</text>
            </g>
          ))}
        </svg>

        {/* Legend */}
        {selectedCities.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md">
            <div className="flex flex-wrap gap-2">
              {selectedCities.map((city, index) => (
                <span key={city.id} className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#f5f5f5] rounded-full font-sans text-xs">
                  <span className="w-4 h-4 bg-[#12103d] text-white rounded-full text-[10px] flex items-center justify-center font-bold">
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
            <p className="font-sans text-sm text-[#44618b] bg-white/80 px-4 py-2 rounded-lg">
              Your selected cities will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
