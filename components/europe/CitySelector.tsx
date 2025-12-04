'use client'

import { useState } from 'react'
import { Plus, Minus, X, MapPin, Search } from 'lucide-react'
import { CitySelection } from './EuropeBuilder'

// Coordinates calibrated for BlankMap-Europe-v3.png (960x697)
const availableCities = [
  // Italy
  { id: 'venice', city: 'Venice', country: 'Italy', countryCode: 'IT', coordinates: { x: 468, y: 420 } },
  { id: 'milan', city: 'Milan', country: 'Italy', countryCode: 'IT', coordinates: { x: 428, y: 415 } },
  { id: 'lake-como', city: 'Lake Como', country: 'Italy', countryCode: 'IT', coordinates: { x: 428, y: 408 } },
  { id: 'cinque-terre', city: 'Cinque Terre', country: 'Italy', countryCode: 'IT', coordinates: { x: 432, y: 442 } },
  { id: 'rome', city: 'Rome', country: 'Italy', countryCode: 'IT', coordinates: { x: 482, y: 465 } },
  { id: 'florence', city: 'Florence', country: 'Italy', countryCode: 'IT', coordinates: { x: 458, y: 445 } },
  { id: 'positano', city: 'Positano', country: 'Italy', countryCode: 'IT', coordinates: { x: 510, y: 485 } },
  { id: 'naples', city: 'Naples', country: 'Italy', countryCode: 'IT', coordinates: { x: 508, y: 480 } },
  { id: 'palermo', city: 'Palermo', country: 'Italy', countryCode: 'IT', coordinates: { x: 492, y: 525 } },
  { id: 'sardinia', city: 'Sardinia', country: 'Italy', countryCode: 'IT', coordinates: { x: 422, y: 498 } },

  // Central Europe
  { id: 'berlin', city: 'Berlin', country: 'Germany', countryCode: 'DE', coordinates: { x: 495, y: 320 } },
  { id: 'prague', city: 'Prague', country: 'Czech Republic', countryCode: 'CZ', coordinates: { x: 508, y: 358 } },
  { id: 'vienna', city: 'Vienna', country: 'Austria', countryCode: 'AT', coordinates: { x: 542, y: 385 } },
  { id: 'budapest', city: 'Budapest', country: 'Hungary', countryCode: 'HU', coordinates: { x: 572, y: 398 } },
  { id: 'lucerne', city: 'Lucerne', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 415, y: 400 } },
  { id: 'interlaken', city: 'Interlaken', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 408, y: 405 } },
  { id: 'paris', city: 'Paris', country: 'France', countryCode: 'FR', coordinates: { x: 342, y: 370 } },
  { id: 'brussels', city: 'Brussels', country: 'Belgium', countryCode: 'BE', coordinates: { x: 368, y: 345 } },
  { id: 'amsterdam', city: 'Amsterdam', country: 'Netherlands', countryCode: 'NL', coordinates: { x: 372, y: 325 } },
  { id: 'munich', city: 'Munich', country: 'Germany', countryCode: 'DE', coordinates: { x: 458, y: 385 } },
  { id: 'frankfurt', city: 'Frankfurt', country: 'Germany', countryCode: 'DE', coordinates: { x: 418, y: 355 } },
  { id: 'salzburg', city: 'Salzburg', country: 'Austria', countryCode: 'AT', coordinates: { x: 482, y: 390 } },
  { id: 'lyon', city: 'Lyon', country: 'France', countryCode: 'FR', coordinates: { x: 372, y: 415 } },
  { id: 'nice', city: 'Nice', country: 'France', countryCode: 'FR', coordinates: { x: 402, y: 445 } },
  { id: 'marseille', city: 'Marseille', country: 'France', countryCode: 'FR', coordinates: { x: 382, y: 450 } },
  { id: 'bordeaux', city: 'Bordeaux', country: 'France', countryCode: 'FR', coordinates: { x: 302, y: 425 } },

  // Iberian Peninsula
  { id: 'madrid', city: 'Madrid', country: 'Spain', countryCode: 'ES', coordinates: { x: 262, y: 475 } },
  { id: 'barcelona', city: 'Barcelona', country: 'Spain', countryCode: 'ES', coordinates: { x: 332, y: 460 } },
  { id: 'marbella', city: 'Marbella', country: 'Spain', countryCode: 'ES', coordinates: { x: 242, y: 530 } },
  { id: 'valencia', city: 'Valencia', country: 'Spain', countryCode: 'ES', coordinates: { x: 298, y: 490 } },
  { id: 'ibiza', city: 'Ibiza', country: 'Spain', countryCode: 'ES', coordinates: { x: 322, y: 498 } },
  { id: 'lisbon', city: 'Lisbon', country: 'Portugal', countryCode: 'PT', coordinates: { x: 188, y: 488 } },
  { id: 'porto', city: 'Porto', country: 'Portugal', countryCode: 'PT', coordinates: { x: 192, y: 458 } },
  { id: 'seville', city: 'Seville', country: 'Spain', countryCode: 'ES', coordinates: { x: 228, y: 515 } },
  { id: 'granada', city: 'Granada', country: 'Spain', countryCode: 'ES', coordinates: { x: 258, y: 520 } },
  { id: 'malaga', city: 'Malaga', country: 'Spain', countryCode: 'ES', coordinates: { x: 248, y: 528 } },
  { id: 'san-sebastian', city: 'San Sebastian', country: 'Spain', countryCode: 'ES', coordinates: { x: 278, y: 440 } },

  // Eastern Europe & Balkans
  { id: 'ljubljana', city: 'Ljubljana', country: 'Slovenia', countryCode: 'SI', coordinates: { x: 505, y: 415 } },
  { id: 'zagreb', city: 'Zagreb', country: 'Croatia', countryCode: 'HR', coordinates: { x: 532, y: 415 } },
  { id: 'split', city: 'Split', country: 'Croatia', countryCode: 'HR', coordinates: { x: 538, y: 450 } },
  { id: 'dubrovnik', city: 'Dubrovnik', country: 'Croatia', countryCode: 'HR', coordinates: { x: 558, y: 465 } },
  { id: 'kotor', city: 'Kotor', country: 'Montenegro', countryCode: 'ME', coordinates: { x: 565, y: 470 } },
  { id: 'warsaw', city: 'Warsaw', country: 'Poland', countryCode: 'PL', coordinates: { x: 575, y: 320 } },
  { id: 'krakow', city: 'Krakow', country: 'Poland', countryCode: 'PL', coordinates: { x: 568, y: 355 } },
  { id: 'bratislava', city: 'Bratislava', country: 'Slovakia', countryCode: 'SK', coordinates: { x: 548, y: 390 } },
  { id: 'belgrade', city: 'Belgrade', country: 'Serbia', countryCode: 'RS', coordinates: { x: 582, y: 435 } },
  { id: 'bucharest', city: 'Bucharest', country: 'Romania', countryCode: 'RO', coordinates: { x: 648, y: 440 } },
  { id: 'sofia', city: 'Sofia', country: 'Bulgaria', countryCode: 'BG', coordinates: { x: 622, y: 465 } },
  { id: 'tallinn', city: 'Tallinn', country: 'Estonia', countryCode: 'EE', coordinates: { x: 590, y: 225 } },
  { id: 'riga', city: 'Riga', country: 'Latvia', countryCode: 'LV', coordinates: { x: 585, y: 260 } },
  { id: 'vilnius', city: 'Vilnius', country: 'Lithuania', countryCode: 'LT', coordinates: { x: 595, y: 290 } },
  { id: 'tirana', city: 'Tirana', country: 'Albania', countryCode: 'AL', coordinates: { x: 572, y: 480 } },

  // Greece & Turkey
  { id: 'athens', city: 'Athens', country: 'Greece', countryCode: 'GR', coordinates: { x: 612, y: 515 } },
  { id: 'santorini', city: 'Santorini', country: 'Greece', countryCode: 'GR', coordinates: { x: 642, y: 545 } },
  { id: 'mykonos', city: 'Mykonos', country: 'Greece', countryCode: 'GR', coordinates: { x: 638, y: 525 } },
  { id: 'corfu', city: 'Corfu', country: 'Greece', countryCode: 'GR', coordinates: { x: 572, y: 495 } },
  { id: 'istanbul', city: 'Istanbul', country: 'Turkey', countryCode: 'TR', coordinates: { x: 668, y: 468 } },
  { id: 'antalya', city: 'Antalya', country: 'Turkey', countryCode: 'TR', coordinates: { x: 712, y: 535 } },
  { id: 'bodrum', city: 'Bodrum', country: 'Turkey', countryCode: 'TR', coordinates: { x: 668, y: 530 } },
  { id: 'cappadocia', city: 'Cappadocia', country: 'Turkey', countryCode: 'TR', coordinates: { x: 742, y: 505 } },
  { id: 'pamukkale', city: 'Pamukkale', country: 'Turkey', countryCode: 'TR', coordinates: { x: 692, y: 520 } },
  { id: 'izmir', city: 'Izmir', country: 'Turkey', countryCode: 'TR', coordinates: { x: 662, y: 515 } },

  // Switzerland & Alpine
  { id: 'zurich', city: 'Zurich', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 418, y: 395 } },
  { id: 'zermatt', city: 'Zermatt', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 402, y: 418 } },
  { id: 'innsbruck', city: 'Innsbruck', country: 'Austria', countryCode: 'AT', coordinates: { x: 458, y: 398 } },
  { id: 'st-moritz', city: 'St. Moritz', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 432, y: 410 } },

  // Northern Europe
  { id: 'copenhagen', city: 'Copenhagen', country: 'Denmark', countryCode: 'DK', coordinates: { x: 478, y: 285 } },
  { id: 'stockholm', city: 'Stockholm', country: 'Sweden', countryCode: 'SE', coordinates: { x: 540, y: 230 } },
  { id: 'oslo', city: 'Oslo', country: 'Norway', countryCode: 'NO', coordinates: { x: 443, y: 225 } },
  { id: 'helsinki', city: 'Helsinki', country: 'Finland', countryCode: 'FI', coordinates: { x: 605, y: 215 } },
  { id: 'bergen', city: 'Bergen', country: 'Norway', countryCode: 'NO', coordinates: { x: 378, y: 205 } },
  { id: 'reykjavik', city: 'Reykjavik', country: 'Iceland', countryCode: 'IS', coordinates: { x: 118, y: 95 } },
  { id: 'tromso', city: 'Tromsø', country: 'Norway', countryCode: 'NO', coordinates: { x: 555, y: 68 } },
  { id: 'st-petersburg', city: 'St. Petersburg', country: 'Russia', countryCode: 'RU', coordinates: { x: 678, y: 212 } },

  // UK & Ireland
  { id: 'london', city: 'London', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 302, y: 338 } },
  { id: 'edinburgh', city: 'Edinburgh', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 272, y: 273 } },
  { id: 'dublin', city: 'Dublin', country: 'Ireland', countryCode: 'IE', coordinates: { x: 232, y: 302 } },
  { id: 'manchester', city: 'Manchester', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 282, y: 308 } },
  { id: 'liverpool', city: 'Liverpool', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 275, y: 310 } },
  { id: 'glasgow', city: 'Glasgow', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 260, y: 275 } },
  { id: 'oxford', city: 'Oxford', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 292, y: 335 } },
]

type Props = {
  selectedCities: CitySelection[]
  setSelectedCities: React.Dispatch<React.SetStateAction<CitySelection[]>>
}

export default function CitySelector({ selectedCities, setSelectedCities }: Props) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCities = availableCities.filter(
    city =>
      !selectedCities.find(s => s.id === city.id) &&
      (city.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.country.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const addCity = (city: typeof availableCities[0]) => {
    setSelectedCities(prev => [...prev, { ...city, nights: 2 }])
    setSearchQuery('')
  }

  const removeCity = (cityId: string) => {
    setSelectedCities(prev => prev.filter(c => c.id !== cityId))
  }

  const updateNights = (cityId: string, delta: number) => {
    setSelectedCities(prev =>
      prev.map(c =>
        c.id === cityId ? { ...c, nights: Math.max(1, Math.min(10, c.nights + delta)) } : c
      )
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-6 py-4">
        <h2 className="font-display text-xl font-semibold text-white flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Your Travel Itinerary
        </h2>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-[#12103d]/10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#44618b]" />
          <input
            type="text"
            placeholder="Search cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/95 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#12103d]/20 focus:border-[#12103d]"
          />
        </div>

        {/* City Suggestions */}
        {searchQuery && (
          <div className="mt-2 max-h-48 overflow-y-auto">
            {filteredCities.length > 0 ? (
              filteredCities.slice(0, 5).map(city => (
                <button
                  key={city.id}
                  onClick={() => addCity(city)}
                  className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/95 rounded-lg transition-colors text-left border border-transparent hover:border-[#12103d]/10"
                >
                  <span className="text-xs font-sans font-medium text-[#44618b] w-6">{city.countryCode}</span>
                  <span className="font-sans text-sm text-[#12103d]">{city.city}</span>
                  <span className="font-sans text-xs text-[#44618b]">({city.country})</span>
                  <Plus className="w-4 h-4 text-[#12103d] ml-auto" />
                </button>
              ))
            ) : (
              <p className="font-sans text-sm text-[#44618b] px-3 py-2">No cities found</p>
            )}
          </div>
        )}
      </div>

      {/* Selected Cities Table */}
      {selectedCities.length > 0 ? (
        <div>
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gradient-to-r from-[#12103d]/10 to-[#43124a]/10 border-b border-[#12103d]/10">
            <div className="col-span-5 font-sans text-xs font-semibold text-[#12103d] uppercase tracking-wider">City</div>
            <div className="col-span-4 font-sans text-xs font-semibold text-[#12103d] uppercase tracking-wider text-center">Nights</div>
            <div className="col-span-3 font-sans text-xs font-semibold text-[#12103d] uppercase tracking-wider text-center">Action</div>
          </div>

          {/* City Rows */}
          {selectedCities.map((city, index) => (
            <div
              key={city.id}
              className={`grid grid-cols-12 gap-4 px-6 py-4 items-center ${
                index !== selectedCities.length - 1 ? 'border-b border-[#12103d]/10' : ''
              }`}
            >
              <div className="col-span-5 flex items-center gap-2">
                <span className="text-xs font-sans font-medium text-[#44618b]">{city.countryCode}</span>
                <span className="font-display text-lg font-medium text-[#12103d]">{city.city}</span>
              </div>
              <div className="col-span-4 flex items-center justify-center gap-3">
                <button
                  onClick={() => updateNights(city.id, -1)}
                  className="w-8 h-8 rounded-full bg-[#12103d]/10 text-[#12103d] flex items-center justify-center hover:bg-[#12103d] hover:text-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-lg font-semibold text-[#12103d] w-8 text-center">{city.nights}</span>
                <button
                  onClick={() => updateNights(city.id, 1)}
                  className="w-8 h-8 rounded-full bg-[#12103d] text-white flex items-center justify-center hover:bg-[#43124a] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="col-span-3 flex justify-center">
                <button
                  onClick={() => removeCity(city.id)}
                  className="px-4 py-1.5 bg-[#d19457] text-white font-sans text-xs font-medium rounded-full hover:bg-[#c77e36] transition-colors"
                >
                  × Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-6 py-12 text-center">
          <MapPin className="w-12 h-12 text-[#12103d]/30 mx-auto mb-3" />
          <p className="font-sans text-[#44618b] text-sm">Search and add cities to build your itinerary</p>
        </div>
      )}
    </div>
  )
}
