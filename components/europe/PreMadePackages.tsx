'use client'

import { Check, Star } from 'lucide-react'
import { CitySelection } from './EuropeBuilder'

const packages = [
  {
    id: 'classic-europe',
    name: 'Classic Europe',
    duration: '10 Nights',
    tag: 'Most Popular',
    cities: [
      { id: 'paris', city: 'Paris', country: 'France', countryCode: 'FR', nights: 3, coordinates: { x: 48, y: 35 } },
      { id: 'amsterdam', city: 'Amsterdam', country: 'Netherlands', countryCode: 'NL', nights: 2, coordinates: { x: 50, y: 28 } },
      { id: 'brussels', city: 'Brussels', country: 'Belgium', countryCode: 'BE', nights: 1, coordinates: { x: 48, y: 30 } },
      { id: 'zurich', city: 'Zurich', country: 'Switzerland', countryCode: 'CH', nights: 2, coordinates: { x: 51, y: 40 } },
      { id: 'rome', city: 'Rome', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 53, y: 52 } },
    ],
  },
  {
    id: 'romantic-escape',
    name: 'Romantic Escape',
    duration: '8 Nights',
    tag: 'Honeymoon Special',
    cities: [
      { id: 'paris', city: 'Paris', country: 'France', countryCode: 'FR', nights: 3, coordinates: { x: 48, y: 35 } },
      { id: 'venice', city: 'Venice', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 54, y: 44 } },
      { id: 'santorini', city: 'Santorini', country: 'Greece', countryCode: 'GR', nights: 3, coordinates: { x: 65, y: 62 } },
    ],
  },
  {
    id: 'mediterranean-magic',
    name: 'Mediterranean Magic',
    duration: '9 Nights',
    tag: 'Sun & Sea',
    cities: [
      { id: 'barcelona', city: 'Barcelona', country: 'Spain', countryCode: 'ES', nights: 3, coordinates: { x: 40, y: 48 } },
      { id: 'nice', city: 'Nice', country: 'France', countryCode: 'FR', nights: 2, coordinates: { x: 48, y: 46 } },
      { id: 'florence', city: 'Florence', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 52, y: 48 } },
      { id: 'rome', city: 'Rome', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 53, y: 52 } },
    ],
  },
  {
    id: 'central-europe',
    name: 'Central Europe',
    duration: '7 Nights',
    tag: 'Culture & History',
    cities: [
      { id: 'berlin', city: 'Berlin', country: 'Germany', countryCode: 'DE', nights: 2, coordinates: { x: 55, y: 28 } },
      { id: 'prague', city: 'Prague', country: 'Czech Republic', countryCode: 'CZ', nights: 2, coordinates: { x: 56, y: 32 } },
      { id: 'vienna', city: 'Vienna', country: 'Austria', countryCode: 'AT', nights: 2, coordinates: { x: 58, y: 36 } },
      { id: 'munich', city: 'Munich', country: 'Germany', countryCode: 'DE', nights: 1, coordinates: { x: 54, y: 38 } },
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
      <h2 className="font-display text-2xl font-semibold text-[#2d1f4e] mb-6">
        Choose a Package
      </h2>
      
      {packages.map((pkg) => {
        const isSelected = selectedPackageId === pkg.id
        
        return (
          <div
            key={pkg.id}
            onClick={() => selectPackage(pkg)}
            className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              isSelected ? 'border-[#5b21b6] ring-4 ring-[#5b21b6]/10' : 'border-[#ede9fe] hover:border-[#a78bfa]'
            }`}
          >
            {/* Tag */}
            <span className={`absolute -top-3 left-4 px-3 py-1 text-xs font-sans font-semibold rounded-full ${
              isSelected ? 'bg-[#5b21b6] text-white' : 'bg-[#fbbf24] text-[#2d1f4e]'
            }`}>
              {pkg.tag}
            </span>

            {/* Selected Check */}
            {isSelected && (
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#5b21b6] rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}

            <div className="flex items-start justify-between mt-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#2d1f4e]">{pkg.name}</h3>
                <p className="font-sans text-sm text-[#5b21b6] font-medium mt-1">{pkg.duration}</p>
              </div>
            </div>

            {/* Cities */}
            <div className="mt-4 flex flex-wrap gap-2">
              {pkg.cities.map((city) => (
                <span
                  key={city.id}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#f5f3ff] rounded-full font-sans text-xs text-[#2d1f4e]"
                >
                  <span className="text-[10px] text-stone-400">{city.countryCode}</span>
                  {city.city}
                  <span className="text-[#5b21b6] font-semibold">({city.nights}N)</span>
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
