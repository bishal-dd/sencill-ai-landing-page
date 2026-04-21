'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const STATS_DATA = [
  { label: 'Websites Generated', value: 232, suffix: '+' },
  { label: 'Countries Reached', value: 19, suffix: '+' },
]

function NumberTicker({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 })
  const displayValue = useTransform(springValue, (latest) => Math.round(latest).toLocaleString())

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  return <motion.span ref={ref}>{displayValue}</motion.span>
}

export function StatsBanner() {
  return (
    <section
      className="relative z-10 w-full py-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      style={{ backgroundColor: '#FFFAEE' }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 className="text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500/80 mb-4">
          Trusted by businesses worldwide
        </motion.h2>

        <div className="flex flex-row justify-center items-center gap-4 sm:gap-16 lg:gap-24">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              /* The magic happens here: whileHover affects the whole container */
              whileHover="hovered"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div
                className="text-3xl sm:text-5xl font-black tracking-tighter drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-105"
                style={{ color: '#FDCA1C' }}
              >
                <NumberTicker value={stat.value} />
                <span className="text-2xl sm:text-3xl ml-0.5 opacity-90">{stat.suffix}</span>
              </div>

              <p className="text-[9px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-[0.15em] mt-1">
                {stat.label}
              </p>

              {/* Animated Underline */}
              <motion.div
                className="h-[2.5px] mt-2 rounded-full"
                style={{ backgroundColor: '#FDCA1C' }}
                initial={{ width: '12px', opacity: 0.4 }}
                /* Using variants to sync with the parent's 'hovered' state */
                variants={{
                  hovered: {
                    width: '45px',
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 300, damping: 15 },
                  },
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
