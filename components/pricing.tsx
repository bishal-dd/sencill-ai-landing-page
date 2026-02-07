'use client'
import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { PRICING } from '@/lib/pricing'
import { useCountryCode } from '@/lib/country'

export function Pricing() {
  const countryCode = useCountryCode()
  const isBhutan = countryCode === 'BT'
  const costs = isBhutan ? PRICING.BT : PRICING.INTL
  const currency = isBhutan ? 'Nu.' : '$'

  return (
    <section id="pricing" className="py-24   bg-[#FCFCFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            One-time development cost with affordable annual fees. No hidden charges. It is subject
            to change based on the type of website and its complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {costs.map((cost, index) => (
            <Card key={cost.name} className="relative p-8">
              {index === 0 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  One-Time Fee
                </div>
              )}
              <h3 className="text-2xl font-bold">{cost.name}</h3>
              <p className="text-muted-foreground text-sm">{cost.description}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">
                  {currency} {cost.price}
                </span>
                <span className="text-muted-foreground text-sm">/{cost.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {cost.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="inline-block bg-muted px-6 py-4 rounded-lg">
            <p className="text-lg font-semibold mb-2">Total First Year Cost</p>
            <p className="text-3xl font-bold text-primary">{isBhutan ? 'Nu. 11,500' : 'USD 115'}</p>
            <p className="text-sm text-muted-foreground mt-1">Development + Domain + Hosting</p>
          </div>
          <p className="text-muted-foreground">
            Renewal cost: {isBhutan ? 'Nu. 4,500' : 'USD 45'}/year (Domain + Hosting only)
          </p>
          {/*<Button size="lg" className="bg-primary hover:bg-primary/90 mt-4">
            Get Started Today
          </Button>*/}
        </div>
      </div>
    </section>
  )
}
