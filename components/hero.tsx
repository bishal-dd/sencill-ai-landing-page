import { Button } from "@/components/ui/button";
import { Dock, Sparkles, Zap } from "lucide-react";
import { HeroVideoDialogDemo } from "./HeroVideo";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-foreground">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Website Generation</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Launch Your Professional Website in{" "}
            <span className="text-primary">Minutes</span>
          </h1>

          <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Sencill AI creates stunning, fully-functional websites for travel
            agencies, hotels, and businesses. No coding required. Just describe
            your vision, and watch it come to life.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/*<Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold px-8 bg-transparent"
            >
              View Examples
            </Button>*/}
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8"
              asChild
            >
              <Link href="/early-access">
                <Dock className="mr-2 h-5 w-5" />
                Apply For Early Access
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">
            <p> • 🚀 Deploy in seconds • 💎 Professional Webistes</p>
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-5xl">
          <div className="relative rounded-lg border-2 border-primary/20 bg-card p-2 shadow-2xl">
            <HeroVideoDialogDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
