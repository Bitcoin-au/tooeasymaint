import { Paintbrush, Scissors, SprayCan, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Lawn Mowing",
    description:
      "Regular mowing, trimming, edging, and tidy-ups to keep your yard neat, healthy, and under control.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description:
      "Interior and exterior painting, touch-ups, and refresh work to improve the look of your home.",
  },
  {
    icon: SprayCan,
    title: "Pressure Washing",
    description:
      "Pressure cleaning for outdoor areas, paths, driveways, and surfaces that need a fresh clean-up.",
  },
  {
    icon: Wrench,
    title: "Odd Jobs & Maintenance",
    description:
      "Bond repairs, minor repairs, waste removal, deck restoration, and general property maintenance.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Too Easy Maintenance provides practical, reliable help for homes across the
            Sunshine Coast. If you need a hand with the jobs that improve, restore,
            or clean up your property, we’re ready to help.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card"
            >
              <CardContent className="p-8 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;