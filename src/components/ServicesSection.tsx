import { Scissors, Paintbrush, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Lawn Mowing",
    description: "Regular mowing, trimming, edging, and seasonal garden cleanups to keep your yard looking pristine.",
    price: "From $50",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior & exterior touch-ups, fresh coats, and small plastering jobs to refresh your home's look.",
    price: "From $80",
  },
  {
    icon: Wrench,
    title: "Odd Jobs",
    description: "Pressure washing, bond repairs, deceased estate removals, minor repairs, waste removal & deck restoration.",
    price: "From $60",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From lawn care to home repairs, we handle it all with care and professionalism.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <span className="inline-block text-primary font-semibold text-lg">{service.price}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
