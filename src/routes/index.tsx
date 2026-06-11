import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import aboutAsset from "@/assets/about-training.jpg.asset.json";
import logoAsset from "@/assets/swerve-logo.png.asset.json";
const aboutImg = aboutAsset.url;
const logoImg = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swerve Fitness | Gym in Whitefield, Bengaluru" },
      {
        name: "description",
        content:
          "Whitefield's most energetic gym with certified trainers, modern equipment, personal training, ice and steam bath. Affordable memberships. Join Swerve Fitness today.",
      },
      { property: "og:title", content: "Swerve Fitness | Gym in Whitefield, Bengaluru" },
      {
        property: "og:description",
        content:
          "Whitefield's most energetic gym with certified trainers, modern equipment, personal training, ice and steam bath. Join Swerve Fitness today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PHONE = "+917483630672";
const PHONE_DISPLAY = "+91 7483630672";
const PHONE_SECONDARY = "+917676106939";
const PHONE_SECONDARY_DISPLAY = "+91 7676106939";
const WHATSAPP =
  "https://wa.me/917483630672?text=" +
  encodeURIComponent("Hi, I'd like to know more about Swerve Fitness membership");
const ADDRESS =
  "2nd Level, Dinesh Arcade, Whitefield - Hoskote Rd, opp. AWHO Vastu Bhoomi, Kannamangala, Bengaluru 560115";
const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(ADDRESS) +
  "&output=embed";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-ink/95 backdrop-blur border-b border-border py-3"
          : "bg-gradient-to-b from-ink to-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 flex items-center justify-between gap-4">
        <a href="#top" className="font-display text-2xl md:text-3xl tracking-wider flex items-center gap-2">
          <img src={logoImg} alt="Swerve Fitness Logo" className="h-9 md:h-10 w-auto" />
          <span>SWERVE <span className="text-brand">FITNESS</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#about" className="hover:text-brand transition">About</a>
          <a href="#services" className="hover:text-brand transition">Services</a>
          <a href="#why" className="hover:text-brand transition">Why Us</a>
          <a href="#reviews" className="hover:text-brand transition">Reviews</a>
          <a href="#contact" className="hover:text-brand transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:inline text-sm font-semibold text-white/80 hover:text-brand"
          >
            📞 {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="bg-brand hover:bg-[var(--brand-dark)] text-white font-bold uppercase tracking-wider text-sm px-5 py-2.5 transition-colors"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Swerve Fitness gym interior with red pillars and heavy weights"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      <div className="absolute inset-0 hero-vignette" />

      {/* pulse rings */}
      <div className="pointer-events-none absolute -left-32 top-1/3 w-96 h-96">
        <div className="absolute inset-0 rounded-full border-2 border-brand animate-pulse-ring" />
        <div className="absolute inset-0 rounded-full border-2 border-brand animate-pulse-ring" style={{ animationDelay: "1s" }} />
      </div>
      <div className="pointer-events-none absolute right-10 bottom-20 w-72 h-72 hidden md:block">
        <div className="absolute inset-0 rounded-full border-2 border-brand/60 animate-pulse-ring" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-brand/60 bg-brand/10 px-3 py-1 mb-6 text-xs font-bold uppercase tracking-[0.25em] text-brand">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            Whitefield · Bengaluru
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9]">
            No Excuses.<br />
            <span className="text-brand">Just Results.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl">
            Whitefield's most energetic fitness community — strength training, cardio,
            personal training and more.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-brand hover:bg-[var(--brand-dark)] text-white font-bold uppercase tracking-wider px-8 py-4 text-base animate-flash transition-colors"
            >
              💪 Join Now
            </a>
            <a
              href={`tel:${PHONE}`}
              className="border-2 border-white/30 hover:border-brand hover:text-brand text-white font-bold uppercase tracking-wider px-8 py-4 text-base transition-colors"
            >
              📞 Call Us
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-sm text-white/60">
            <div>
              <div className="font-display text-3xl text-white">4.5★</div>
              <div className="uppercase tracking-wider text-xs">Google Rating</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="font-display text-3xl text-white">115+</div>
              <div className="uppercase tracking-wider text-xs">Reviews</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="font-display text-3xl text-white">24/7</div>
              <div className="uppercase tracking-wider text-xs">Vibes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const chips = [
    "🏋️ Modern Equipment",
    "👨‍🏫 Certified Trainers",
    "🧊 Ice & Steam Bath",
    "🕐 Open 24/7",
    "👥 Group Classes",
    "💰 Affordable Membership",
  ];
  return (
    <section id="about" className="bg-ink py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal reveal-left relative">
          <div className="absolute -inset-4 bg-brand/30 -z-10" />
          <div className="relative overflow-hidden">
            <img
              src={aboutImg}
              alt="Athlete training at Swerve Fitness"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full h-[480px] md:h-[560px] object-cover"
            />
            <div className="absolute inset-0 red-overlay mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 font-display text-6xl text-white">
              EST. <span className="text-brand">2018</span>
            </div>
          </div>
        </div>
        <div className="reveal reveal-right">
          <div className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">
            About Swerve
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">
            Built for <span className="text-brand">serious</span><br />training.
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-6">
            Swerve Fitness has been Whitefield's go-to gym for serious training and real
            results. Located on the second floor of Dinesh Arcade on Whitefield Main Road, we
            offer a spacious, well-equipped facility with certified trainers who give personal
            attention to every member.
          </p>
          <p className="text-white/75 text-lg leading-relaxed mb-8">
            Whether you're just starting out or training for competition — Swerve is where you
            belong.
          </p>
          <div className="flex flex-wrap gap-3">
            {chips.map((c) => (
              <span
                key={c}
                className="border border-border bg-ink-2 px-4 py-2 text-sm font-semibold hover:border-brand hover:text-brand transition"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: "💪", title: "Strength Training", desc: "Full free weights section, power rack, barbells, and functional training equipment. Everything a serious lifter needs." },
    { icon: "🏃", title: "Cardio Zone", desc: "Modern cardio machines including treadmills, cycles, and ellipticals — all well-maintained." },
    { icon: "🧑‍🤝‍🧑", title: "Personal Training", desc: "One-on-one sessions with certified trainers who give tailored advice, correct your form, and push you exactly when you need it." },
    { icon: "🥗", title: "Diet Guidance", desc: "Personalised diet plans alongside your workout program so you get real, visible results faster." },
    { icon: "🧊", title: "Ice & Steam Bath", desc: "Recovery is part of training. Wind down after an intense session with our ice and steam bath facilities." },
    { icon: "👥", title: "Group Classes", desc: "Zumba, functional training, and group fitness sessions for those who train better together." },
  ];
  return (
    <section id="services" className="metal-texture py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-16 reveal">
          <div className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">
            What We Offer
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            Train <span className="text-brand">harder.</span><br/> Recover <span className="text-stroke">smarter.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal group relative bg-ink border border-border hover:border-brand p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-brand group-hover:w-full transition-all duration-500" />
              <div className="text-5xl mb-5">{it.icon}</div>
              <h3 className="font-display text-2xl mb-3 group-hover:text-brand transition">
                {it.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{it.desc}</p>
              <div className="absolute bottom-4 right-4 font-display text-5xl text-white/5 group-hover:text-brand/20 transition">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14 reveal">
          <a
            href="#contact"
            className="inline-block bg-brand hover:bg-[var(--brand-dark)] text-white font-bold uppercase tracking-wider px-10 py-4 transition-colors"
          >
            Contact Us to Know More →
          </a>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { icon: "🏆", title: "World Record Trainers", desc: "Our trainers aren't just certified — some hold world records. You're learning from the best." },
    { icon: "🤝", title: "Community Not Just a Gym", desc: "We remember your name. We celebrate your wins. Non-judgmental, welcoming, and genuinely supportive." },
    { icon: "⏰", title: "Open 24/7", desc: "Train any time — we're open round the clock. Perfect for early risers, late grinders, and everyone in between." },
  ];
  return (
    <section id="why" className="bg-ink py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -left-20 top-20 font-display text-[18rem] text-white/[0.03] leading-none select-none pointer-events-none">
        WHY
      </div>
      <div className="mx-auto max-w-7xl px-5 relative">
        <div className="mb-16 reveal max-w-3xl">
          <div className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">
            Why Swerve
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            We're <span className="text-brand">different.</span> On purpose.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal relative bg-gradient-to-br from-ink-2 to-ink border-l-4 border-brand p-8 md:p-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-6xl mb-6">{it.icon}</div>
              <h3 className="font-display text-3xl mb-4">{it.title}</h3>
              <p className="text-white/70 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "SuriFied", text: "A world away from intimidating mega-gyms. Vibrant, energetic, and completely non-judgmental. The trainer was incredibly knowledgeable, giving tailored advice and pushing me exactly when I needed it." },
    { name: "Vamshislkrishna", text: "Staff is polite and workout programs are very well structured. Personal training and diet guidance helped me gain confidence and improve my fitness level. Great value for money." },
    { name: "Akilesh Satish", text: "Needed a place with flexible late night hours. Equipment, trainers, and hygiene all come together and form a beautiful ecosystem. 10/10 recommend for anybody in the area." },
    { name: "Venu Gopal", text: "Santhosh is very professional, humble, and friendly. He gives personal attention, motivates everyone well, and creates a very positive atmosphere." },
    { name: "Vinod Gowda", text: "Great atmosphere, quality equipment, and motivating trainers who actually help you improve. Perfect for strength training, fat loss, and overall fitness." },
  ];
  return (
    <section id="reviews" className="metal-texture py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
          <div>
            <div className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Guest Reviews
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-none">
              What Our<br/><span className="text-brand">Members Say</span>
            </h2>
          </div>
          <div className="bg-ink border border-border px-5 py-4 flex items-center gap-3">
            <div className="text-brand text-2xl">★</div>
            <div>
              <div className="font-display text-xl leading-none">4.5 on Google</div>
              <div className="text-xs text-white/60 mt-1">115 Reviews</div>
            </div>
          </div>
        </div>
      </div>
      <div className="reveal overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-5 px-5 md:px-[max(1.25rem,calc((100vw-80rem)/2))] snap-x snap-mandatory">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="snap-start shrink-0 w-[85vw] md:w-[420px] bg-ink border border-border hover:border-brand p-8 transition"
            >
              <div className="text-brand text-xl tracking-widest mb-4">★★★★★</div>
              <p className="text-white/80 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center font-display text-lg">
                  {r.name[0]}
                </div>
                <div className="font-semibold">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const goal = String(fd.get('goal') || '');
    const preferredTiming = String(fd.get('preferredTiming') || '');
    const message = String(fd.get('message') || '').trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Name is required';
    if (!phone) errors.phone = 'Phone is required';
    if (!goal) errors.goal = 'Please select a goal';
    if (!preferredTiming) errors.preferredTiming = 'Please select a preferred timing';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitStatus('idle');
      return;
    }

    setFormErrors({});
    setSubmitStatus('idle');

    setSubmitStatus('success');
    form.reset();

    fetch('https://script.google.com/macros/s/AKfycbx_5qXebnroeZD4pUN1Zu4her0LgS9M4Q_-WdcoTClalAkZeZPd5lsqi4VGL98fgcyr/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, goal, preferredTiming, message }),
    }).catch(() => {
      setSubmitStatus('error');
    });
  };

  return (
    <section id="contact" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-14 reveal">
          <div className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">
            Join the Family
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            Start Your <span className="text-brand">Journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: info + map */}
          <div className="reveal reveal-left space-y-6">
            <div className="bg-ink-2 border border-border p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/15 border border-brand text-brand flex items-center justify-center text-xl shrink-0">📞</div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Call</div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <a href={`tel:${PHONE}`} className="font-semibold hover:text-brand transition">
                      {PHONE_DISPLAY}
                    </a>
                    <a href={`tel:${PHONE_SECONDARY}`} className="font-semibold hover:text-brand transition">
                      {PHONE_SECONDARY_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/15 border border-brand text-brand flex items-center justify-center text-xl shrink-0">📍</div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Visit</div>
                  <div className="text-sm text-white/85">{ADDRESS}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/15 border border-brand text-brand flex items-center justify-center text-xl shrink-0">🕐</div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Hours</div>
                  <div className="text-sm text-white/85">Open 24/7 — train any time, day or night</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/15 border border-brand text-brand flex items-center justify-center text-xl shrink-0">🚗</div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Parking</div>
                  <div className="text-sm text-white/85">Parking available on site</div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] border border-border overflow-hidden">
              <iframe
                title="Swerve Fitness location"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 grayscale contrast-125"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-right">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-green-600 hover:bg-green-500 text-white p-4 mb-5 transition"
            >
              <span className="font-bold uppercase tracking-wider">Chat with us directly 💬</span>
              <span>→</span>
            </a>

            {submitStatus === 'success' ? (
              <div className="bg-ink-2 border border-brand p-10 text-center">
                <div className="text-6xl mb-4">💪</div>
                <h3 className="font-display text-3xl mb-3 text-brand">You're In!</h3>
                <p className="text-white/80">
                  Thank you! We will get back to you shortly to get you started 💪
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 text-sm uppercase tracking-widest text-white/60 hover:text-brand"
                >
                  Submit another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-ink-2 border border-border p-6 md:p-8 space-y-4"
              >
                <Field label="Name" name="name" type="text" required placeholder="Your full name" error={formErrors.name} />
                <Field label="Phone" name="phone" type="tel" required placeholder="+91 ..." error={formErrors.phone} />
                <SelectField
                  label="Goal"
                  name="goal"
                  options={[
                    "Weight Loss",
                    "Muscle Gain",
                    "General Fitness",
                    "Personal Training",
                    "Group Classes",
                    "Other",
                  ]}
                  error={formErrors.goal}
                />
                <SelectField
                  label="Preferred Timing"
                  name="preferredTiming"
                  options={["Morning", "Afternoon", "Evening", "Night"]}
                  error={formErrors.preferredTiming}
                />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us a bit about yourself"
                    className="w-full bg-ink border border-border focus:border-brand focus:outline-none px-4 py-3 text-white placeholder:text-white/30"
                  />
                </div>
                {submitStatus === 'error' && (
                  <div className="bg-red-600/10 border border-red-600/40 text-red-400 px-4 py-3 text-sm">
                    Something went wrong, please call us on {PHONE_DISPLAY}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-[var(--brand-dark)] text-white font-bold uppercase tracking-wider px-6 py-4 transition-colors"
                >
                  Start My Fitness Journey →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type, required, placeholder, error,
}: { label: string; name: string; type: string; required?: boolean; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">
        {label}{required && <span className="text-brand"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`w-full bg-ink border focus:outline-none px-4 py-3 text-white placeholder:text-white/30 ${error ? 'border-red-500' : 'border-border focus:border-brand'}`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">{label}</label>
      <select
        name={name}
        defaultValue=""
        required
        className={`w-full bg-ink border focus:outline-none px-4 py-3 text-white ${error ? 'border-red-500' : 'border-border focus:border-brand'}`}
      >
        <option value="" disabled>Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-brand/40 py-12">
      <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl mb-3 flex items-center gap-2">
            <img src={logoImg} alt="Swerve Fitness Logo" className="h-9 w-auto" />
            <span>SWERVE FITNESS</span>
          </div>
          <p className="text-white/60 text-sm">No Excuses. Just Results.</p>
        </div>
        <div>
          <div className="font-display text-lg mb-4 text-brand">Quick Links</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#top" className="hover:text-brand">Home</a></li>
            <li><a href="#about" className="hover:text-brand">About</a></li>
            <li><a href="#services" className="hover:text-brand">Services</a></li>
            <li><a href="#reviews" className="hover:text-brand">Reviews</a></li>
            <li><a href="#contact" className="hover:text-brand">Join Now</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg mb-4 text-brand">Follow</div>
          <div className="flex gap-3">
            {[
              {
                name: "Instagram",
                href: "https://www.instagram.com/swerve_fitness/",
                icon: Instagram,
              },
              {
                name: "Facebook",
                href: "https://www.facebook.com/profile.php?id=100063002512239",
                icon: Facebook,
              },
              { name: "YouTube", href: "#", icon: Youtube },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 bg-ink-2 border border-border hover:border-brand hover:text-brand text-white flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          <div className="mt-5 space-y-1 text-sm text-white/70">
            <a href={`tel:${PHONE}`} className="block hover:text-brand">
              📞 {PHONE_DISPLAY}
            </a>
            <a href={`tel:${PHONE_SECONDARY}`} className="block hover:text-brand">
              📞 {PHONE_SECONDARY_DISPLAY}
            </a>
          </div>
          <div className="mt-3 text-xs uppercase tracking-widest text-brand/80">Open 24/7</div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 mt-10 pt-6 border-t border-border text-center text-xs text-white/40">
        © 2025 Swerve Fitness, Whitefield, Bengaluru. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 animate-float-slow"
    >
      <span className="text-2xl">💬</span>
    </a>
  );
}

function Home() {
  useReveal();
  return (
    <main className="bg-ink text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Why />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
