import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Palette, Rocket, Smartphone, Code2, Globe, Shield } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Customizable Websites',
    description: 'Customize your website with your own content',
  },
  {
    icon: Rocket,
    title: 'Lightning Fast Setup',
    description:
      'Generate a complete website in minutes. Our AI understands your needs and creates the perfect site instantly.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description:
      'Every website is fully responsive and looks stunning on all devices, from phones to desktops.',
  },
  {
    icon: Code2,
    title: 'No Coding Required',
    description:
      'Build professional websites without writing a single line of code. Perfect for non-technical users.',
  },
  {
    icon: Globe,
    title: 'SEO Optimized',
    description:
      'All websites are built with SEO best practices, helping you rank higher in search results.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description:
      'Enterprise-grade security and 90% uptime guarantee. Your website is always safe and accessible.',
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-muted/30" id="features">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Powerful features designed to help your business grow and thrive in the digital world.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
