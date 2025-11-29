'use client'

import { Check, Anchor, Heart, Sun, Sparkles } from 'lucide-react'
import { CruiseSelection } from './CruiseBuilder'

const cruisePackages = [
  {
    id: 'family-adventure',
    name: 'Family Adventure Package',
    description: 'Perfect for families with kids - featuring Disney magic and endless entertainment',
    tag: 'Best for Families',
    icon: Sparkles,
    cruise: {
      id: 'disney-cruise',
      name: 'Disney Cruise Line',
      tagline: 'Singapore - Asia Pacific Routes',
      tag: 'NEW',
      tagColor: 'bg-[#2d1f4e] text-white',
      rating: 5,
      destinations: ['Singapore', 'Malaysia', 'Thailand'],
      features: [
        { icon: '👨‍👩‍👧‍👦', text: 'Family Entertainment & Kids Club' },
        { icon: '⭐', text: 'Disney Characters & Broadway Shows' },
        { icon: '🎢', text: 'AquaDuck Water Coaster' },
      ],
      price: 899,
      image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
      nights: 7,
      departurePort: 'Singapore',
    },
    includes: ['Kids sail free', 'Character dining', 'Youth clubs', 'Family stateroom'],
  },
  {
    id: 'romantic-escape',
    name: 'Romantic Escape Package',
    description: 'Intimate luxury cruise perfect for couples and honeymooners',
    tag: 'Honeymoon Special',
    icon: Heart,
    cruise: {
      id: 'celebrity-cruises',
      name: 'Celebrity Cruises',
      tagline: 'Modern Luxury at Sea',
      tag: 'PREMIUM',
      tagColor: 'bg-[#7c3aed] text-white',
      rating: 5,
      destinations: ['Mediterranean', 'Alaska', 'Galapagos'],
      features: [
        { icon: '🏆', text: 'Award-Winning Service' },
        { icon: '🎨', text: 'Modern Art Collection' },
        { icon: '🌿', text: 'Rooftop Garden & Spa' },
      ],
      price: 899,
      image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80',
      nights: 10,
      departurePort: 'Barcelona',
    },
    includes: ['Couples spa treatment', 'Private balcony suite', 'Romantic dinner', 'Premium beverage package'],
  },
  {
    id: 'budget-friendly',
    name: 'Budget Explorer Package',
    description: 'Experience cruising at incredible value without compromising on fun',
    tag: 'Best Value',
    icon: Anchor,
    cruise: {
      id: 'cordelia-cruises',
      name: 'Cordelia Cruises',
      tagline: "India's Premium Cruise Line",
      tag: 'INDIAN',
      tagColor: 'bg-[#f97316] text-white',
      rating: 4.5,
      destinations: ['Mumbai', 'Goa', 'Lakshadweep'],
      features: [
        { icon: '🍛', text: 'Indian & Global Cuisine' },
        { icon: '🎰', text: 'Live Entertainment & Casino' },
        { icon: '📶', text: 'High-Speed Internet' },
      ],
      price: 299,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      nights: 3,
      departurePort: 'Mumbai',
    },
    includes: ['All meals included', 'Entertainment access', 'Port charges included', 'Onboard activities'],
  },
  {
    id: 'sun-adventure',
    name: 'Sun & Sea Adventure',
    description: 'Action-packed cruise with water sports, rock climbing, and endless activities',
    tag: 'Most Popular',
    icon: Sun,
    cruise: {
      id: 'royal-caribbean',
      name: 'Royal Caribbean',
      tagline: 'Global Adventure Cruising',
      tag: 'POPULAR',
      tagColor: 'bg-[#5b21b6] text-white',
      rating: 5,
      destinations: ['Caribbean', 'Mediterranean', 'Asia'],
      features: [
        { icon: '🧗', text: 'Rock Climbing & Surf Simulator' },
        { icon: '🍽️', text: '20+ Restaurants & Bars' },
        { icon: '🎭', text: 'Broadway-style Shows' },
      ],
      price: 699,
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      nights: 7,
      departurePort: 'Miami',
    },
    includes: ['Adventure passes', 'Specialty dining credit', 'Shore excursion credit', 'WiFi package'],
  },
]

type Props = {
  selectedCruise: CruiseSelection | null
  setSelectedCruise: React.Dispatch<React.SetStateAction<CruiseSelection | null>>
}

export default function PreMadeCruisePackages({ selectedCruise, setSelectedCruise }: Props) {
  const selectedPackageId = cruisePackages.find(
    pkg => pkg.cruise.id === selectedCruise?.id
  )?.id

  const selectPackage = (pkg: typeof cruisePackages[0]) => {
    setSelectedCruise(pkg.cruise)
  }

  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl font-semibold text-[#2d1f4e] mb-6">
        Curated Cruise Packages
      </h2>
      
      {cruisePackages.map((pkg) => {
        const isSelected = selectedPackageId === pkg.id
        const IconComponent = pkg.icon
        
        return (
          <div
            key={pkg.id}
            onClick={() => selectPackage(pkg)}
            className={`relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              isSelected ? 'border-[#5b21b6] ring-4 ring-[#5b21b6]/10' : 'border-[#ede9fe] hover:border-[#a78bfa]'
            }`}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-48 h-40 md:h-auto flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.cruise.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:bg-gradient-to-t md:from-transparent md:to-black/20" />
                
                {/* Tag */}
                <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-sans font-semibold rounded-full ${
                  isSelected ? 'bg-[#5b21b6] text-white' : 'bg-[#fbbf24] text-[#2d1f4e]'
                }`}>
                  {pkg.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                {/* Selected Check */}
                {isSelected && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#5b21b6] rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#f5f3ff] flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-[#5b21b6]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#2d1f4e]">{pkg.name}</h3>
                </div>
                
                <p className="font-sans text-xs text-stone-500 mb-3">{pkg.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-sans text-sm font-medium text-[#5b21b6]">{pkg.cruise.name}</span>
                  <span className="text-stone-300">•</span>
                  <span className="font-sans text-xs text-stone-400">{pkg.cruise.nights} nights</span>
                </div>

                {/* Package Includes */}
                <div className="flex flex-wrap gap-2">
                  {pkg.includes.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-[#f5f3ff] rounded-full font-sans text-xs text-[#5b21b6]"
                    >
                      <Check className="w-3 h-3" />
                      {item}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="mt-4 pt-3 border-t border-[#ede9fe] flex items-center justify-between">
                  <div>
                    <span className="font-display text-lg font-bold text-[#c9a227]">From ${pkg.cruise.price}</span>
                    <span className="font-sans text-xs text-stone-400">/person</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
