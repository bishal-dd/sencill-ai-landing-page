import { Header } from '@/components/header'
import { EarlyAccessForm } from '@/components/early-access-form'
import { Footer } from '@/components/footer'
import { Sparkles } from 'lucide-react'

export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32 mt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-foreground">
                <Sparkles className="h-4 w-4" />
                <span>Limited Early Access</span>
              </div>

              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Join the <span className="text-primary">Future</span> of Website Creation
              </h1>

              <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl mb-8">
                Be among the first to experience sencill AI. Get exclusive early access, special
                pricing, and help shape the future of our platform.
              </p>
            </div>

            <EarlyAccessForm />

            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">What You&apos;ll Get</h3>
              <div className="grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl mb-2">🎁</div>
                  <p className="font-medium text-foreground">Special Launch Pricing</p>
                  <p className="text-xs mt-1">Exclusive discounts for early adopters</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="font-medium text-foreground">Priority Access</p>
                  <p className="text-xs mt-1">Be first to try new features</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="font-medium text-foreground">Direct Support</p>
                  <p className="text-xs mt-1">Get help from our founding team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
