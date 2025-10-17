import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Pricing() {
  const costs = [
    {
      name: "Website Generation",
      price: "Nu. 7,000",
      period: "one-time",
      description: "Professional website development tailored to your business",
      features: [
        "Custom website design",
        "Mobile responsive layout",
        "SEO optimized",
        "SSL certificate setup",
      ],
    },
    {
      name: "Domain",
      price: "Nu. 1,500",
      period: "year",
      description: "Your unique web address",
      features: ["Custom domain name", "Domain registration", "DNS management"],
    },
    {
      name: "Hosting",
      price: "Nu. 3,000",
      period: "year",
      description: "Reliable and secure hosting",
      features: [
        "90% uptime guarantee",
        "Fast loading speeds",
        "Regular backups",
        "Security monitoring",
        "Technical support",
        "Free SSL certificate",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24   bg-[#FCFCFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            One-time development cost with affordable annual fees. No hidden
            charges. It is subject to change based on the type of website and
            its complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {costs.map((cost, index) => (
            <Card
              key={cost.name}
              className={`relative p-8 ${index === 0 ? "border-primary shadow-lg md:scale-105" : "border-border"}`}
            >
              {index === 0 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  One-Time Fee
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{cost.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {cost.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{cost.price}</span>
                  <span className="text-muted-foreground text-sm">
                    /{cost.period}
                  </span>
                </div>
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
            <p className="text-3xl font-bold text-primary">Nu. 11,500</p>
            <p className="text-sm text-muted-foreground mt-1">
              Development + Domain + Hosting
            </p>
          </div>
          <p className="text-muted-foreground">
            Renewal cost: Nu. 4,500/year (Domain + Hosting only)
          </p>
          {/*<Button size="lg" className="bg-primary hover:bg-primary/90 mt-4">
            Get Started Today
          </Button>*/}
        </div>
      </div>
    </section>
  );
}
