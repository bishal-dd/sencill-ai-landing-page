'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const stats = [
  { label: 'Websites Generated', value: 125, suffix: '+' },
  { label: 'Countries Reached', value: 15, suffix: '+' },
]

function NumberTicker({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })

  const displayValue = useTransform(springValue, (latest) => Math.round(latest).toLocaleString())

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  return <motion.span ref={ref}>{displayValue}</motion.span>
}

export function StatsBanner() {
  return (
    /* Changed py-20 to py-10 for a tighter vertical profile */
    <section className="py-10 border-y border-zinc-200/60" style={{ backgroundColor: '#FFFAEE' }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* Reduced mb-12 to mb-6 to bring the numbers closer to the title */
          className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6"
        >
          Trusted by businesses worldwide
        </motion.h2>

        {/* Reduced gap-16 to gap-8 and sm:gap-32 to sm:gap-24 */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div
                /* Slightly reduced text size from text-5xl to text-4xl for a sleeker look */
                className="text-4xl font-bold tracking-tight"
                style={{ color: '#FDCA1C' }}
              >
                <NumberTicker value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-zinc-500 font-medium mt-1 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
