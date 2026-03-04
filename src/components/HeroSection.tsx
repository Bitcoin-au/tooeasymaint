import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src="/hero-lawn.jpg"
        alt="Professional handyman mowing a lush green lawn on the Sunshine Coast"
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
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
          Reliable Handyman Services for Your Home
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-sans animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Lawn Mowing, Painting & More – Trusted by families across the Sunshine Coast
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
            Get a Free Quote
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToServices} className="text-lg px-8 py-6 border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
            See Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
