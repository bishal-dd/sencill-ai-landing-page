import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">sencill AI</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#showcase"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Examples
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Testimonials
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
