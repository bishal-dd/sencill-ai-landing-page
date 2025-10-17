import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Describe Your Vision",
    description:
      "Tell us about your business, your style preferences, and what you want your website to achieve.",
  },
  {
    number: "02",
    title: "AI Generates Your Site",
    description:
      "Our advanced AI creates a fully-functional, beautiful website tailored to your specific needs.",
  },
  {
    number: "03",
    title: "Customize & Launch",
    description:
      "Make any final tweaks you want, then publish your site with a single click. It's that simple.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4">
            From Idea to Live Website in 3 Simple Steps
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Our streamlined process makes website creation effortless and
            enjoyable.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-pretty text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%]">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
