'use client'

import { Check } from 'lucide-react'
import { CitySelection } from './EuropeBuilder'

const packages = [
  {
    id: 'classic-europe',
    name: 'Classic Europe',
    duration: '10 Nights',
    tag: 'Most Popular',
    cities: [
      { id: 'paris', city: 'Paris', country: 'France', countryCode: 'FR', nights: 3, coordinates: { x: 324.4, y: 399.2 } },
      { id: 'amsterdam', city: 'Amsterdam', country: 'Netherlands', countryCode: 'NL', nights: 2, coordinates: { x: 361.0, y: 351.4 } },
      { id: 'brussels', city: 'Brussels', country: 'Belgium', countryCode: 'BE', nights: 1, coordinates: { x: 352.9, y: 373.2 } },
      { id: 'zurich', city: 'Zurich', country: 'Switzerland', countryCode: 'CH', nights: 2, coordinates: { x: 412.2, y: 423.8 } },
      { id: 'rome', city: 'Rome', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 485.3, y: 491.2 } },
    ],
  },
  {
    id: 'romantic-escape',
    name: 'Romantic Escape',
    duration: '8 Nights',
    tag: 'Honeymoon Special',
    cities: [
      { id: 'paris', city: 'Paris', country: 'France', countryCode: 'FR', nights: 3, coordinates: { x: 324.4, y: 399.2 } },
      { id: 'venice', city: 'Venice', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 466.3, y: 450.8 } },
      { id: 'santorini', city: 'Santorini', country: 'Greece', countryCode: 'GR', nights: 3, coordinates: { x: 684.4, y: 569.9 } },
    ],
  },
  {
    id: 'mediterranean-magic',
    name: 'Mediterranean Magic',
    duration: '9 Nights',
    tag: 'Sun & Sea',
    cities: [
      { id: 'barcelona', city: 'Barcelona', country: 'Spain', countryCode: 'ES', nights: 3, coordinates: { x: 321.8, y: 499.0 } },
      { id: 'nice', city: 'Nice', country: 'France', countryCode: 'FR', nights: 2, coordinates: { x: 394.6, y: 475.3 } },
      { id: 'florence', city: 'Florence', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 454.5, y: 474.5 } },
      { id: 'rome', city: 'Rome', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 485.3, y: 491.2 } },
    ],
  },
  {
    id: 'central-europe',
    name: 'Central Europe',
    duration: '7 Nights',
    tag: 'Culture & History',
    cities: [
      { id: 'berlin', city: 'Berlin', country: 'Germany', countryCode: 'DE', nights: 2, coordinates: { x: 511.9, y: 348.9 } },
      { id: 'prague', city: 'Prague', country: 'Czech Republic', countryCode: 'CZ', nights: 2, coordinates: { x: 526.9, y: 383.9 } },
      { id: 'vienna', city: 'Vienna', country: 'Austria', countryCode: 'AT', nights: 2, coordinates: { x: 554.5, y: 412.0 } },
      { id: 'munich', city: 'Munich', country: 'Germany', countryCode: 'DE', nights: 1, coordinates: { x: 466.0, y: 413.1 } },
    ],
  },
  {
    id: 'iberian-adventure',
    name: 'Iberian Adventure',
    duration: '9 Nights',
    tag: 'Spain & Portugal',
    cities: [
      { id: 'lisbon', city: 'Lisbon', country: 'Portugal', countryCode: 'PT', nights: 3, coordinates: { x: 174.8, y: 536.6 } },
      { id: 'porto', city: 'Porto', country: 'Portugal', countryCode: 'PT', nights: 2, coordinates: { x: 182.3, y: 502.2 } },
      { id: 'madrid', city: 'Madrid', country: 'Spain', countryCode: 'ES', nights: 2, coordinates: { x: 251.9, y: 512.4 } },
      { id: 'barcelona', city: 'Barcelona', country: 'Spain', countryCode: 'ES', nights: 2, coordinates: { x: 321.8, y: 499.0 } },
    ],
  },
  {
    id: 'nordic-wonders',
    name: 'Nordic Wonders',
    duration: '8 Nights',
    tag: 'Scandinavian',
    cities: [
      { id: 'copenhagen', city: 'Copenhagen', country: 'Denmark', countryCode: 'DK', nights: 2, coordinates: { x: 486.8, y: 299.8 } },
      { id: 'stockholm', city: 'Stockholm', country: 'Sweden', countryCode: 'SE', nights: 2, coordinates: { x: 578.5, y: 253.1 } },
      { id: 'oslo', city: 'Oslo', country: 'Norway', countryCode: 'NO', nights: 2, coordinates: { x: 453.8, y: 244.9 } },
      { id: 'bergen', city: 'Bergen', country: 'Norway', countryCode: 'NO', nights: 2, coordinates: { x: 366.8, y: 237.9 } },
    ],
  },
]

type Props = {
  selectedCities: CitySelection[]
  setSelectedCities: React.Dispatch<React.SetStateAction<CitySelection[]>>
}

export default function PreMadePackages({ selectedCities, setSelectedCities }: Props) {
  const selectedPackageId = packages.find(
    pkg => pkg.cities.length === selectedCities.length && 
    pkg.cities.every(c => selectedCities.find(s => s.id === c.id && s.nights === c.nights))
  )?.id

  const selectPackage = (pkg: typeof packages[0]) => {
    setSelectedCities(pkg.cities)
  }

  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl font-semibold text-[#12103d] mb-6">
        Choose a Package
      </h2>
      
      {packages.map((pkg) => {
        const isSelected = selectedPackageId === pkg.id
        
        return (
          <div
            key={pkg.id}
            onClick={() => selectPackage(pkg)}
            className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              isSelected ? 'border-[#12103d] ring-4 ring-[#12103d]/10' : 'border-gray-200 hover:border-[#8550a2]'
            }`}
          >
            {/* Tag */}
            <span className={`absolute -top-3 left-4 px-3 py-1 text-xs font-sans font-semibold rounded-full ${
              isSelected ? 'bg-[#12103d] text-white' : 'bg-[#d19457] text-white'
            }`}>
              {pkg.tag}
            </span>

            {/* Selected Check */}
            {isSelected && (
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#12103d] rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}

            <div className="flex items-start justify-between mt-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#12103d]">{pkg.name}</h3>
                <p className="font-sans text-sm text-[#43124a] font-medium mt-1">{pkg.duration}</p>
              </div>
            </div>

            {/* Cities */}
            <div className="mt-4 flex flex-wrap gap-2">
              {pkg.cities.map((city) => (
                <span
                  key={city.id}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#f5f5f5] rounded-full font-sans text-xs text-[#12103d]"
                >
                  <span className="text-[10px] text-[#44618b]">{city.countryCode}</span>
                  {city.city}
                  <span className="text-[#43124a] font-semibold">({city.nights}N)</span>
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
