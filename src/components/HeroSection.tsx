import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      <img
        src="/hero-lawn.jpg"
        alt="Too Easy Maintenance providing outdoor property maintenance on the Sunshine Coast"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        width={1410}
        height={799}
        decoding="async"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.1em] sm:tracking-[0.2em] text-primary-foreground/80 mb-4 animate-fade-in-up">
          Family-owned • Fully insured • Sunshine Coast
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up lg:text-5xl">
          Handyman and Property Maintenance on the Sunshine Coast
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-sans animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Too Easy Maintenance helps with lawn mowing, painting, pressure washing,
          bond repairs, and the odd jobs that keep your home looking its best.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
            Get a Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToServices}
            className="text-lg px-8 py-6 border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
          >
            See Services
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
          >
            <a href="tel:0498815402">Call 0498 815 402</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
