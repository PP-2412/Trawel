'use client'

import { useState } from 'react'
import { Star, MapPin, Search, Ship } from 'lucide-react'
import { CruiseSelection } from './CruiseBuilder'

const availableCruises: CruiseSelection[] = [
  {
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
  {
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
  {
    id: 'norwegian-cruise',
    name: 'Norwegian Cruise Line',
    tagline: 'Freestyle Cruising Experience',
    tag: 'FREESTYLE',
    tagColor: 'bg-[#0ea5e9] text-white',
    rating: 4.5,
    destinations: ['Alaska', 'Europe', 'Caribbean'],
    features: [
      { icon: '🕐', text: 'No Fixed Dining Times' },
      { icon: '👔', text: 'Casual Dress Code' },
      { icon: '🏎️', text: 'Sports Complex & Go-Karts' },
    ],
    price: 599,
    image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80',
    nights: 5,
    departurePort: 'Seattle',
  },
  {
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
  {
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
  {
    id: 'genting-dream',
    name: 'Genting Dream',
    tagline: 'Asian Luxury Cruising',
    tag: 'LUXURY',
    tagColor: 'bg-[#c9a227] text-[#2d1f4e]',
    rating: 4.5,
    destinations: ['Singapore', 'Vietnam', 'Thailand'],
    features: [
      { icon: '💆', text: 'Crystal Life Spa & Wellness' },
      { icon: '♦️', text: 'Zodiac Casino & Gaming' },
      { icon: '🏰', text: 'Palace & Balcony Suites' },
    ],
    price: 799,
    image: 'https://images.unsplash.com/photo-1559599746-8823b38544c6?w=800&q=80',
    nights: 5,
    departurePort: 'Singapore',
  },
]

type Props = {
  selectedCruise: CruiseSelection | null
  setSelectedCruise: React.Dispatch<React.SetStateAction<CruiseSelection | null>>
}

export default function CruiseSelector({ selectedCruise, setSelectedCruise }: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterDestination, setFilterDestination] = useState<string>('all')

  const allDestinations = Array.from(new Set(availableCruises.flatMap(c => c.destinations)))

  const filteredCruises = availableCruises.filter(cruise => {
    const matchesSearch = cruise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cruise.destinations.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesFilter = filterDestination === 'all' || cruise.destinations.includes(filterDestination)
    return matchesSearch && matchesFilter
  })

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)
    }
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-amber-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )
    }
    return stars
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-lg border border-[#ede9fe] p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search cruises..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#faf8ff] border border-[#ede9fe] rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#5b21b6]/20 focus:border-[#5b21b6]"
            />
          </div>
          <select
            value={filterDestination}
            onChange={(e) => setFilterDestination(e.target.value)}
            className="px-4 py-3 bg-[#faf8ff] border border-[#ede9fe] rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#5b21b6]/20 focus:border-[#5b21b6] min-w-[180px]"
          >
            <option value="all">All Destinations</option>
            {allDestinations.map(dest => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Cruise Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredCruises.map((cruise) => {
          const isSelected = selectedCruise?.id === cruise.id

          return (
            <div
              key={cruise.id}
              onClick={() => setSelectedCruise(cruise)}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                isSelected ? 'border-[#5b21b6] ring-4 ring-[#5b21b6]/10' : 'border-[#ede9fe] hover:border-[#a78bfa]'
              }`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: `url(${cruise.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Tag */}
                <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-sans font-semibold rounded-full ${cruise.tagColor}`}>
                  {cruise.tag}
                </span>

                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute top-3 left-3 w-6 h-6 bg-[#5b21b6] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-[#2d1f4e]">{cruise.name}</h3>
                <p className="font-sans text-sm text-[#c9a227] font-medium mt-0.5">{cruise.tagline}</p>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mt-2">
                  {renderStars(cruise.rating)}
                </div>

                {/* Destinations */}
                <div className="flex items-start gap-2 mt-3">
                  <MapPin className="w-4 h-4 text-[#5b21b6] mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-xs text-stone-600">{cruise.destinations.join(', ')}</span>
                </div>

                {/* Features */}
                <div className="space-y-1.5 mt-3">
                  {cruise.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-sm">{feature.icon}</span>
                      <span className="font-sans text-xs text-stone-600">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mt-4 pt-4 border-t border-[#ede9fe] flex items-center justify-between">
                  <div>
                    <span className="font-display text-xl font-bold text-[#c9a227]">From ${cruise.price}</span>
                    <span className="font-sans text-xs text-stone-400">/person</span>
                  </div>
                  <button className={`px-5 py-2 rounded-full font-sans text-xs font-semibold transition-all duration-300 ${
                    isSelected 
                      ? 'bg-[#5b21b6] text-white' 
                      : 'bg-[#d4c4a8] text-[#2d1f4e] hover:bg-[#c9a227]'
                  }`}>
                    {isSelected ? 'Selected' : 'Book Now'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredCruises.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-[#ede9fe]">
          <Ship className="w-12 h-12 text-[#ede9fe] mx-auto mb-3" />
          <p className="font-sans text-stone-400">No cruises found matching your criteria</p>
        </div>
      )}
    </div>
  )
}
