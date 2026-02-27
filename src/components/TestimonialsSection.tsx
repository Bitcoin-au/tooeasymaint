import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Maroochydore",
    quote: "They transformed our overgrown backyard into a neat paradise. Punctual, friendly, and great value for money!",
    initials: "SM",
  },
  {
    name: "David K.",
    location: "Caloundra",
    quote: "Had them paint our living room and fix a broken fence. The quality of work was top-notch. Highly recommend!",
    initials: "DK",
  },
  {
    name: "Lisa & Tom P.",
    location: "Noosa",
    quote: "Used Too Easy for a full bond clean and garden tidy-up. Our landlord was thrilled – we got our deposit back in full!",
    initials: "LP",
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4 justify-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't just take our word for it – hear from real Sunshine Coast locals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="border shadow-md bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground font-bold text-lg">{t.initials}</span>
                </div>
                <Stars />
                <p className="text-card-foreground/80 italic mb-5 leading-relaxed">"{t.quote}"</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
