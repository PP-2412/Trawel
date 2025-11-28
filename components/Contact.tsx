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
    <section id="contact" className="py-20 bg-[#f5f3ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2d1f4e] mb-4">
            Get in <span className="font-semibold italic text-[#5b21b6]">Touch</span>
          </h2>
          <p className="font-sans text-stone-500 tracking-wider">
            We&apos;re here to help plan your perfect journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-card bg-white rounded-xl p-5 shadow-md border-l-4 border-l-[#5b21b6]"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-[rgba(91,33,182,0.1)] flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-[#5b21b6]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#2d1f4e] mb-2">
                    {info.title}
                  </h3>
                  <div className="font-sans text-xs text-stone-600 leading-relaxed">
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
