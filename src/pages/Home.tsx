import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Shield,
  Car,
  ChevronDown,
  PoundSterling,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import RevealSection from "@/components/ui/reveal-section";

const testimonials = [
  {
    name: "Rebecca Sellars",
    text: `Thank you to L&D Executive Taxi for our drop off and pick up from Birmingham Airport from Broadway.
Both cars were spacious and clean and Darek and Luke were both on time.
The travel to and from the airport was stress free and the cost was cheaper than airport parking.
Would highly recommend this company!`,
    rating: 5,
    location: "Broadway",
  },
  {
    name: "Jason Beacock",
    text: `I've used both Luke and Derek on a regular basis for trips, typically to Birmingham and Gatwick airports. On each occasion they have been punctual and polite with very comfortable vehicles.
Congratulations to you both. I have and will continue to recommend your services.`,
    rating: 5,
    location: "Birmingham",
  },
  {
    name: "Janine Thomas",
    text: `From start of contact via messenger, to collection to return journey from Bromsgrove to Birmingham Airport the service was fantastic! Beautiful car and wonderfully friendly driver
100% recommend for all taxi runs
Thank you we will be using you again`,
    rating: 5,
    location: "Bromsgrove",
  },
  {
    name: "Jon D",
    text: "Used Luke as an executive taxi locally on day trip from London. So good and with train cancellations we used Luke to take us back to London! One of the smoothest journeys ever! Luke is calm at the wheel, great to chat with and therefore would thoroughly recommend for an executive car hire. Awesome service!",
    rating: 5,
    location: "London",
  },
  {
    name: "pooja sharma",
    text: "We used L& D executive taxi service for drop off and pick up from Birmingham airport and I must say we got excellent service and the prices were very reasonable. I can’t recommend Luke enough.",
    rating: 5,
    location: "Birmingham",
  },
];

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "4.9", label: "Average rating" },
  { value: "24/7", label: "Available for pre-booking" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="text-primary w-5 h-5" />
            <span className="font-bold text-lg tracking-tight">
              L&amp;D Taxi Executive
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="#services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="hover:text-foreground transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          <a
            href="tel:+447762167579"
            data-testid="nav-phone"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/background.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ filter: "brightness(0.7) saturate(0.8)" }}
        />
        <div className="absolute inset-0 bg-[hsl(220,25%,8%)]/60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
        <div
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(220 25% 8%))",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available now — Worcestershire &amp; surroundings
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-none mb-6"
          >
            Your journey,
            <br />
            <span className="text-primary">on time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Professional executive taxi service by Lukasz &amp; Darek — based in
            Worcestershire, specialising in airport transfers and long-distance
            travel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              data-testid="button-book-ride"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Book a Ride
            </a>
            <a
              href="tel:+447762167579"
              className="border border-border text-foreground px-8 py-4 rounded-full text-base font-semibold hover:border-primary hover:text-primary transition-all"
            >
              Call Us Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section
        id="services"
        className="py-20 border-y border-border bg-card/30"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center flex-wrap gap-x-48 gap-y-8">
            {stats.map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-black text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-serif font-black mb-4 text-center">
              Why choose{" "}
              <span className="text-primary">L&amp;D Taxi Executive</span>?
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
              Not just drivers — trusted professionals who treat every ride like
              it matters.
            </p>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: "Always on time",
                desc: "Punctuality is non-negotiable. Lukasz and Darek monitor traffic in real-time and plan routes so you're never late for your flight.",
              },
              {
                icon: Shield,
                title: "Safe & insured",
                desc: "Fully licensed, insured, and professionally trained. Your safety comes first — every single ride.",
              },
              {
                icon: PoundSterling,
                title: "Fixed, fair pricing",
                desc: "No surge pricing, no surprises. The price you see is the price you pay — just call or book online.",
              },
              {
                icon: Star,
                title: "Luxorious experience",
                desc: "We are using only BMWs 7 series long wheel base.",
              },
            ].map((feature, i) => (
              <RevealSection key={feature.title} delay={i * 0.15}>
                <div className="bg-card h-full border border-card-border rounded-2xl p-8 hover:border-primary/40 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-24 bg-card/20 border-y border-border"
      >
        <div className="max-w-6xl mx-auto px-6">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-serif font-black mb-4 text-center">
              What passengers say
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
              Over 12,000 rides and counting — here's what real customers think.
            </p>
          </RevealSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <RevealSection key={t.name} delay={i * 0.1}>
                <div
                  data-testid={`card-testimonial-${i}`}
                  className="bg-card h-full border border-card-border rounded-2xl p-7 flex flex-col gap-4 hover:border-primary/30 transition-all"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed text-sm flex-1">
                    "{t.text}"
                  </p>
                  {location && (
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {t.location}
                      </div>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* FOOTER */}
      <footer className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="text-primary w-5 h-5" />
                <span className="font-bold text-lg">
                  L&amp;D Taxi Executive
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We are a family business with few years experience as
                professional drivers. DBS checked drivers, offering the best
                level of service driving high class BMW long wheel base 7 series
                cars. We specialise in airport and long distance transfers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href="tel:+447762167579"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +44 7762 167579
                </a>
                <a
                  href="mailto:lndexecutivetaxi@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  lndexecutivetaxi@gmail.com
                </a>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Worcestershire
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Birmingham Airport transfers</li>
                <li>London Heathrow Airport transfers</li>
                <li>London Gatwick Airport transfers</li>
                <li>Luton Airport transfers</li>
                <li>Bristol Airport transfers</li>
                <li>East Midlands Airport transfers</li>
                <li>Manchester Airport transfers</li>
                <li>Business travel</li>
                <li>Long-distance rides</li>
                <li>Night rides available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-xs">
            <p>© 2026 L&amp;D Taxi Executive. All rights reserved.</p>
            <p>Licensed professional taxi drivers — Worcestershire</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
