const hotelPartners = [
  'The Luxury Collection',
  'Sheraton Hotels & Resorts',
  'IHG Hotels & Resorts',
  'Meliá Hotels International',
  'Four Seasons',
  'Ritz-Carlton',
  'Waldorf Astoria',
  'Mandarin Oriental',
]

export default function Partners() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2d1f4e] mb-4">
            Our Hotel <span className="font-semibold italic text-[#5b21b6]">Partners</span>
          </h2>
          <p className="font-sans text-stone-500 tracking-wider">
            Trusted by <span className="text-[#c9a227] font-medium">World-Class</span> Hotel Brands
          </p>
        </div>
      </div>

      {/* Scrolling Partners */}
      <div className="relative">
        <div className="partners-track flex" style={{ width: 'max-content' }}>
          {[...hotelPartners, ...hotelPartners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 px-12 py-8 bg-[#faf8ff] rounded-xl border border-[#ede9fe] hover:bg-[rgba(91,33,182,0.05)] transition-colors"
            >
              <span className="font-display text-xl font-medium text-stone-600 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
