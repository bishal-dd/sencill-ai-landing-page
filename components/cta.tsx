import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-20 md:py-32 ">
      <div className="container mx-auto px-4 ">
        <div className="mx-auto   max-w-4xl rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 p-8 md:p-16 text-center border-2 border-primary/20">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4">
            Ready to Launch Your Dream Website?
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Join businesses who chose Sencill AI to create their perfect online presence. Apply for
            early access today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8"
            >
              <Link href="https://app.sencillai.com">
                Get Started
                {/*<ArrowRight className="ml-2 h-5 w-5" />*/}
              </Link>
            </Button>
            {/*<Button
              size="lg"
              variant="outline"
              className="text-base font-semibold px-8 bg-transparent"
            >
              Schedule a Demo
            </Button>*/}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Get early access • Cancel anytime • No setup fees
          </p>
        </div>
      </div>
    </section>
  )
}
