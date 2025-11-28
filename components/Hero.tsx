import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#3b1175] via-[#5b21b6] to-[#7c3aed] pt-32 pb-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] opacity-15 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#a78bfa] opacity-25 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-6">
          Discover the World in
          <span className="block font-semibold italic text-[#d4af37]">
            Unparalleled Luxury
          </span>
        </h1>
        <p className="font-sans text-lg text-[#e2d9f3] max-w-2xl mx-auto mb-10 font-light tracking-wide">
          Curated journeys to Europe&apos;s finest destinations and exclusive cruise experiences
        </p>
        <Link 
          href="#destinations"
          className="inline-block bg-gradient-to-r from-[#c9a227] via-[#d4af37] to-[#f4d03f] text-[#2d1f4e] font-sans text-xs font-semibold tracking-[2px] uppercase px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Explore Destinations
        </Link>
      </div>
    </section>
  )
}
