import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useState } from "react";
import RevealSection from "@/components/ui/reveal-section";

type ContactFormProps = {};

type ContactFormData = z.infer<typeof contactSchema>;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  pickup: z.string().min(3, "Please enter a pickup address"),
  destination: z.string().min(3, "Please enter a destination"),
  datetime: z.string().min(1, "Please select a date and time"),
  message: z.string().optional(),
});

export default function ContactForm({}: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      pickup: "",
      destination: "",
      datetime: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    reset();
    toast({
      title: "Booking request sent",
      description: `Thank you, ${data.name}. Lukasz or Darek will confirm your ride shortly.`,
    });
  };

  return (
    <section id="contact" className="py-24 border-y border-border">
      <div className="max-w-2xl mx-auto px-6">
        <RevealSection>
          <h2 className="text-3xl md:text-5xl font-serif font-black mb-4 text-center">
            Book your ride
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Fill out the form and Lukasz or Darek will confirm your booking
            within minutes.
          </p>
        </RevealSection>

        <RevealSection delay={0.15}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card border border-card-border rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Full name
                </label>
                <input
                  id="name"
                  data-testid="input-name"
                  {...register("name")}
                  placeholder="James Whitfield"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  data-testid="input-phone"
                  {...register("phone")}
                  placeholder="+44 7700 900000"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                />
                {errors.phone && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="pickup"
              >
                Pickup address
              </label>
              <input
                id="pickup"
                data-testid="input-pickup"
                {...register("pickup")}
                placeholder="14 High Street, Bromsgrove, B61"
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
              />
              {errors.pickup && (
                <p className="text-destructive text-xs mt-1">
                  {errors.pickup.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="destination"
              >
                Destination
              </label>
              <input
                id="destination"
                data-testid="input-destination"
                {...register("destination")}
                placeholder="Birmingham Airport, Terminal 1"
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
              />
              {errors.destination && (
                <p className="text-destructive text-xs mt-1">
                  {errors.destination.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="datetime"
              >
                Date & time
              </label>
              <input
                id="datetime"
                type="datetime-local"
                data-testid="input-datetime"
                {...register("datetime")}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 scheme-dark"
              />
              {errors.datetime && (
                <p className="text-destructive text-xs mt-1">
                  {errors.datetime.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Additional notes{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </label>
              <textarea
                id="message"
                data-testid="input-message"
                {...register("message")}
                rows={3}
                placeholder="Flight number, number of passengers, luggage, special requirements..."
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              data-testid="button-submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground py-4 rounded-full font-bold text-base hover:bg-primary/90 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 shadow-lg shadow-primary/20"
            >
              {isSubmitting ? "Sending request..." : "Send Booking Request"}
            </button>
          </form>
        </RevealSection>
      </div>
    </section>
  );
}
