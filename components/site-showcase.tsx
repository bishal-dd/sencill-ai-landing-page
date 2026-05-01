'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const samples = [
  {
    title: 'Travel Agency Website',
    category: 'Travel',
    image: '/travelwebsite.webp',
    link: 'https://newgentravel.online/',
  },
  {
    title: 'Hotel Website',
    category: 'Hospitality',
    image: '/hotelwebsite.webp',
    link: 'https://lightwebx.link/',
  },
  {
    title: 'Small Business Landing Page',
    category: 'Business',
    image: '/restaurantwebsite.webp',
    link: 'https://lightwebx.store/',
  },
]

export function SiteShowcase() {
  return (
    <section className="py-24 bg-[#FFFAEE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Generated with Sencill AI
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            From professional portfolios to complex business sites, see what our AI can build in
            minutes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {samples.map((site, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Card */}
              <div className="rounded-md overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Browser Header */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100/80 border-b border-zinc-200">
                  <div className="w-2 h-2 rounded-full bg-zinc-300" />
                  <div className="w-2 h-2 rounded-full bg-zinc-300" />
                  <div className="w-2 h-2 rounded-full bg-zinc-300" />
                </div>

                {/* Website Preview */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={site.image}
                    alt={site.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <a
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      View Site <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Title below the card */}
              <div className="mt-3 text-center">
                <h3 className="text-lg font-semibold text-zinc-900">{site.title}</h3>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">{site.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
