import { Mail, MessageCircle, MapPin, Send, Github, Facebook, Instagram, Twitter, MessageSquare } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xjgdkqyj");

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for projects
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
            Let's build something <span className="text-gradient">unforgettable</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell me about your project, brand or idea — I respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "danieluchechukwu57@gmail.com", href: "mailto:danieluchechukwu57@gmail.com" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/2349112183658" },
              { icon: MessageSquare, label: "Discord", value: "dannystech.dev_94225", href: "https://discord.com/" },
             {
  icon: MapPin,
  label: "Based in",
  value: "Port Harcourt, Nigeria — working globally",
  href: "https://maps.google.com/?q=Port+Harcourt,Nigeria",
}
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glow-card glass rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group"
              >
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="font-heading font-semibold text-sm sm:text-base break-words">{value}</div>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Find me on</div>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/Danny-uhe", label: "GitHub" },
                  { icon: Facebook, href: "https://www.facebook.com/lurdz.milli", label: "Facebook" },
                  { icon: Twitter, href: "https://x.com/DUchechukw68865", label: "Twitter" },
                  { icon: Instagram, href: "https://www.instagram.com/dannystechsolutions?utm_source=qr&igsh=MXdqc3JnbTIzMmNkYw==", label: "Instagram" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-xl glass hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {state.succeeded ? (
            <div className="lg:col-span-3 glass-strong rounded-3xl p-7 sm:p-9 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px] animate-scale-in">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-2 animate-bounce">
                <Send className="h-6 w-6 animate-pulse" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gradient font-heading">Message Sent!</h3>
              <p className="text-muted-foreground text-sm max-w-md">
                Thank you for reaching out! I have received your message and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lg:col-span-3 glass-strong rounded-3xl p-5 sm:p-9 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Field label="Your name" name="name" placeholder="Jane Doe" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1 block" />
                </div>
                <div>
                  <Field label="Email" name="email" type="email" placeholder="you@brand.com" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1 block" />
                </div>
              </div>
              <div>
                <Field label="Subject" name="subject" placeholder="Project inquiry" />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-xs text-red-500 mt-1 block" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Tell me about your project
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="A few details about goals, scope and timeline..."
                  className="w-full rounded-2xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1 block" />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-7 py-4 font-semibold text-primary-foreground shadow-glow hover:shadow-elegant hover:scale-[1.01] transition-all disabled:opacity-70"
              >
                {state.submitting ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <div>
    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
    <input
      required
      {...props}
      className="w-full rounded-2xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
    />
  </div>
);
