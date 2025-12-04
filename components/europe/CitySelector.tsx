'use client'

import { useState } from 'react'
import { Plus, Minus, X, MapPin, Search } from 'lucide-react'
import { CitySelection } from './EuropeBuilder'

const availableCities = [
  // Italy
  { id: 'venice', city: 'Venice', country: 'Italy', countryCode: 'IT', coordinates: { x: 466.3, y: 450.8 } },
  { id: 'milan', city: 'Milan', country: 'Italy', countryCode: 'IT', coordinates: { x: 421.5, y: 450.5 } },
  { id: 'lake-como', city: 'Lake Como', country: 'Italy', countryCode: 'IT', coordinates: { x: 422.6, y: 442.8 } },
  { id: 'cinque-terre', city: 'Cinque Terre', country: 'Italy', countryCode: 'IT', coordinates: { x: 428.5, y: 470.1 } },
  { id: 'rome', city: 'Rome', country: 'Italy', countryCode: 'IT', coordinates: { x: 485.3, y: 491.2 } },
  { id: 'florence', city: 'Florence', country: 'Italy', countryCode: 'IT', coordinates: { x: 454.5, y: 474.5 } },
  { id: 'positano', city: 'Positano', country: 'Italy', countryCode: 'IT', coordinates: { x: 528.2, y: 509.3 } },
  { id: 'naples', city: 'Naples', country: 'Italy', countryCode: 'IT', coordinates: { x: 525.1, y: 506.2 } },
  { id: 'palermo', city: 'Palermo', country: 'Italy', countryCode: 'IT', coordinates: { x: 509.3, y: 545.1 } },
  { id: 'sardinia', city: 'Sardinia', country: 'Italy', countryCode: 'IT', coordinates: { x: 420.4, y: 530.0 } },

  // Central Europe
  { id: 'berlin', city: 'Berlin', country: 'Germany', countryCode: 'DE', coordinates: { x: 511.9, y: 348.9 } },
  { id: 'prague', city: 'Prague', country: 'Czech Republic', countryCode: 'CZ', coordinates: { x: 526.9, y: 383.9 } },
  { id: 'vienna', city: 'Vienna', country: 'Austria', countryCode: 'AT', coordinates: { x: 554.5, y: 412.0 } },
  { id: 'budapest', city: 'Budapest', country: 'Hungary', countryCode: 'HU', coordinates: { x: 592.5, y: 422.5 } },
  { id: 'lucerne', city: 'Lucerne', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 408.9, y: 428.3 } },
  { id: 'interlaken', city: 'Interlaken', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 396.8, y: 433.9 } },
  { id: 'paris', city: 'Paris', country: 'France', countryCode: 'FR', coordinates: { x: 324.4, y: 399.2 } },
  { id: 'brussels', city: 'Brussels', country: 'Belgium', countryCode: 'BE', coordinates: { x: 352.9, y: 373.2 } },
  { id: 'amsterdam', city: 'Amsterdam', country: 'Netherlands', countryCode: 'NL', coordinates: { x: 361.0, y: 351.4 } },
  { id: 'munich', city: 'Munich', country: 'Germany', countryCode: 'DE', coordinates: { x: 466.0, y: 413.1 } },
  { id: 'frankfurt', city: 'Frankfurt', country: 'Germany', countryCode: 'DE', coordinates: { x: 414.0, y: 383.4 } },
  { id: 'salzburg', city: 'Salzburg', country: 'Austria', countryCode: 'AT', coordinates: { x: 498.9, y: 417.7 } },
  { id: 'lyon', city: 'Lyon', country: 'France', countryCode: 'FR', coordinates: { x: 360.0, y: 446.3 } },
  { id: 'nice', city: 'Nice', country: 'France', countryCode: 'FR', coordinates: { x: 394.6, y: 475.3 } },
  { id: 'marseille', city: 'Marseille', country: 'France', countryCode: 'FR', coordinates: { x: 367.7, y: 479.9 } },
  { id: 'bordeaux', city: 'Bordeaux', country: 'France', countryCode: 'FR', coordinates: { x: 282.4, y: 459.5 } },

  // Iberian Peninsula
  { id: 'madrid', city: 'Madrid', country: 'Spain', countryCode: 'ES', coordinates: { x: 251.9, y: 512.4 } },
  { id: 'barcelona', city: 'Barcelona', country: 'Spain', countryCode: 'ES', coordinates: { x: 321.8, y: 499.0 } },
  { id: 'marbella', city: 'Marbella', country: 'Spain', countryCode: 'ES', coordinates: { x: 234.9, y: 568.4 } },
  { id: 'valencia', city: 'Valencia', country: 'Spain', countryCode: 'ES', coordinates: { x: 285.3, y: 525.7 } },
  { id: 'ibiza', city: 'Ibiza', country: 'Spain', countryCode: 'ES', coordinates: { x: 311.1, y: 533.9 } },
  { id: 'lisbon', city: 'Lisbon', country: 'Portugal', countryCode: 'PT', coordinates: { x: 174.8, y: 536.6 } },
  { id: 'porto', city: 'Porto', country: 'Portugal', countryCode: 'PT', coordinates: { x: 182.3, y: 502.2 } },
  { id: 'seville', city: 'Seville', country: 'Spain', countryCode: 'ES', coordinates: { x: 219.0, y: 555.2 } },
  { id: 'granada', city: 'Granada', country: 'Spain', countryCode: 'ES', coordinates: { x: 253.5, y: 558.5 } },
  { id: 'malaga', city: 'Malaga', country: 'Spain', countryCode: 'ES', coordinates: { x: 241.4, y: 565.5 } },
  { id: 'san-sebastian', city: 'San Sebastian', country: 'Spain', countryCode: 'ES', coordinates: { x: 262.4, y: 481.1 } },

  // Eastern Europe & Balkans
  { id: 'ljubljana', city: 'Ljubljana', country: 'Slovenia', countryCode: 'SI', coordinates: { x: 527.9, y: 442.1 } },
  { id: 'zagreb', city: 'Zagreb', country: 'Croatia', countryCode: 'HR', coordinates: { x: 548.8, y: 445.5 } },
  { id: 'split', city: 'Split', country: 'Croatia', countryCode: 'HR', coordinates: { x: 555.5, y: 478.3 } },
  { id: 'dubrovnik', city: 'Dubrovnik', country: 'Croatia', countryCode: 'HR', coordinates: { x: 579.3, y: 490.2 } },
  { id: 'kotor', city: 'Kotor', country: 'Montenegro', countryCode: 'ME', coordinates: { x: 588.7, y: 493.3 } },
  { id: 'warsaw', city: 'Warsaw', country: 'Poland', countryCode: 'PL', coordinates: { x: 606.5, y: 353.2 } },
  { id: 'krakow', city: 'Krakow', country: 'Poland', countryCode: 'PL', coordinates: { x: 591.1, y: 384.1 } },
  { id: 'bratislava', city: 'Bratislava', country: 'Slovakia', countryCode: 'SK', coordinates: { x: 565.0, y: 413.0 } },
  { id: 'belgrade', city: 'Belgrade', country: 'Serbia', countryCode: 'RS', coordinates: { x: 600.0, y: 460.8 } },
  { id: 'bucharest', city: 'Bucharest', country: 'Romania', countryCode: 'RO', coordinates: { x: 679.9, y: 466.1 } },
  { id: 'sofia', city: 'Sofia', country: 'Bulgaria', countryCode: 'BG', coordinates: { x: 654.1, y: 489.9 } },
  { id: 'tallinn', city: 'Tallinn', country: 'Estonia', countryCode: 'EE', coordinates: { x: 674.7, y: 251.1 } },
  { id: 'riga', city: 'Riga', country: 'Latvia', countryCode: 'LV', coordinates: { x: 665.4, y: 287.2 } },
  { id: 'vilnius', city: 'Vilnius', country: 'Lithuania', countryCode: 'LT', coordinates: { x: 682.3, y: 317.7 } },
  { id: 'tirana', city: 'Tirana', country: 'Albania', countryCode: 'AL', coordinates: { x: 592.2, y: 500.0 } },

  // Greece & Turkey
  { id: 'athens', city: 'Athens', country: 'Greece', countryCode: 'GR', coordinates: { x: 660.0, y: 547.0 } },
  { id: 'santorini', city: 'Santorini', country: 'Greece', countryCode: 'GR', coordinates: { x: 684.4, y: 569.9 } },
  { id: 'mykonos', city: 'Mykonos', country: 'Greece', countryCode: 'GR', coordinates: { x: 682.9, y: 554.6 } },
  { id: 'corfu', city: 'Corfu', country: 'Greece', countryCode: 'GR', coordinates: { x: 593.7, y: 523.7 } },
  { id: 'istanbul', city: 'Istanbul', country: 'Turkey', countryCode: 'TR', coordinates: { x: 719.7, y: 504.4 } },
  { id: 'antalya', city: 'Antalya', country: 'Turkey', countryCode: 'TR', coordinates: { x: 750.1, y: 563.2 } },
  { id: 'bodrum', city: 'Bodrum', country: 'Turkey', countryCode: 'TR', coordinates: { x: 705.9, y: 561.0 } },
  { id: 'cappadocia', city: 'Cappadocia', country: 'Turkey', countryCode: 'TR', coordinates: { x: 779.8, y: 538.0 } },
  { id: 'pamukkale', city: 'Pamukkale', country: 'Turkey', countryCode: 'TR', coordinates: { x: 730.0, y: 548.0 } },
  { id: 'izmir', city: 'Izmir', country: 'Turkey', countryCode: 'TR', coordinates: { x: 699.7, y: 540.8 } },

  // Switzerland & Alpine
  { id: 'zurich', city: 'Zurich', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 412.2, y: 423.8 } },
  { id: 'zermatt', city: 'Zermatt', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 395.1, y: 442.6 } },
  { id: 'innsbruck', city: 'Innsbruck', country: 'Austria', countryCode: 'AT', coordinates: { x: 456.5, y: 425.4 } },
  { id: 'st-moritz', city: 'St. Moritz', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 430.7, y: 436.2 } },

  // Northern Europe
  { id: 'copenhagen', city: 'Copenhagen', country: 'Denmark', countryCode: 'DK', coordinates: { x: 486.8, y: 299.8 } },
  { id: 'stockholm', city: 'Stockholm', country: 'Sweden', countryCode: 'SE', coordinates: { x: 578.5, y: 253.1 } },
  { id: 'oslo', city: 'Oslo', country: 'Norway', countryCode: 'NO', coordinates: { x: 453.8, y: 244.9 } },
  { id: 'helsinki', city: 'Helsinki', country: 'Finland', countryCode: 'FI', coordinates: { x: 677.3, y: 240.2 } },
  { id: 'bergen', city: 'Bergen', country: 'Norway', countryCode: 'NO', coordinates: { x: 366.8, y: 237.9 } },
  { id: 'reykjavik', city: 'Reykjavik', country: 'Iceland', countryCode: 'IS', coordinates: { x: 120.0, y: 177.8 } },
  { id: 'tromso', city: 'Tromsø', country: 'Norway', countryCode: 'NO', coordinates: { x: 589.7, y: 100.3 } },
  { id: 'st-petersburg', city: 'St. Petersburg', country: 'Russia', countryCode: 'RU', coordinates: { x: 739.6, y: 244.0 } },

  // UK & Ireland
  { id: 'london', city: 'London', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 288.5, y: 363.4 } },
  { id: 'edinburgh', city: 'Edinburgh', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 258.9, y: 296.3 } },
  { id: 'dublin', city: 'Dublin', country: 'Ireland', countryCode: 'IE', coordinates: { x: 215.4, y: 332.1 } },
  { id: 'manchester', city: 'Manchester', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 266.9, y: 330.3 } },
  { id: 'liverpool', city: 'Liverpool', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 260.4, y: 331.3 } },
  { id: 'glasgow', city: 'Glasgow', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 243.9, y: 297.6 } },
  { id: 'oxford', city: 'Oxford', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 272.5, y: 359.9 } },
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
