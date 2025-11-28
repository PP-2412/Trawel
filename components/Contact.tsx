import { MapPin, Mail, Phone, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Address',
    content: (
      <>
        <p>Trawel, 5,6, AM Lane, Chickpet,</p>
        <p>Bangalore - 560053</p>
        <p className="mt-2">284, BIA, Electronic City,</p>
        <p>Bangalore - 560099</p>
      </>
    ),
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: (
      <a href="mailto:hello@trawel.com" className="hover:text-[#5b21b6] transition-colors">
        hello@trawel.com
      </a>
    ),
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: (
      <a href="tel:+917022702220" className="hover:text-[#5b21b6] transition-colors">
        +91 7022 7022 20
      </a>
    ),
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    content: (
      <>
        <p>
          <strong>Mon-Sat:</strong> 09AM - 07PM
        </p>
        <p>
          <strong>Sunday:</strong> Only Escalations
        </p>
      </>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f5f3ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2d1f4e] mb-4">
            Get in <span className="font-semibold italic text-[#5b21b6]">Touch</span>
          </h2>
          <p className="font-sans text-stone-500 tracking-wider">
            We&apos;re here to help plan your perfect journey
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-card bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-[#5b21b6]"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-[rgba(91,33,182,0.1)] flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[#5b21b6]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#2d1f4e] mb-3">
                    {info.title}
                  </h3>
                  <div className="font-sans text-sm text-stone-600 leading-relaxed">
                    {info.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
