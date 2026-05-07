import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import founderImg from "@/assets/founder.jpg";
import urmiImg from "@/assets/team-urmi.jpg";
import ramImg from "@/assets/team-ram.jpg";

const team = [
  {
    name: "Urmi Vidyarthi",
    title: "Principal Consultant, Quality & Regulatory",
    img: urmiImg,
    bio: "Urmi partners with life sciences and healthcare clients to navigate FDA, ISO, and HIPAA landscapes — translating regulatory complexity into pragmatic, audit-ready operating models.",
  },
  {
    name: "Ram Iyer",
    title: "Principal Consultant, Engineering & Cloud",
    img: ramImg,
    bio: "Ram leads modernization and platform engineering engagements, bringing deep experience in cloud architecture, AI integration, and scaling delivery teams across regulated enterprises.",
  },
];

const highlights = [
  { co: "Global Digital Consultancy", note: "Led 120+ engineers across a $20M+ P&L delivery portfolio." },
  { co: "Enterprise Technology Group", note: "Drove 65% cost reduction and 79% productivity gain across the technology portfolio." },
  { co: "Life Sciences Manufacturer", note: "Delivered HL7/FHIR integrations, cloud SaaS, and FDA-compliant platforms." },
  { co: "Financial Services Leader", note: "Eliminated 90% of legacy technical debt across a $4M modernization program." },
];

const credentials = [
  { icon: GraduationCap, text: "Executive MBA, Chapman University" },
  { icon: GraduationCap, text: "MS Computer Science, NJIT" },
  { icon: Award, text: "AWS Certified Solutions Architect" },
];

const About = () => (
  <div>
    <PageHero
      eyebrow="About"
      title="A boutique firm with Fortune 500 muscle."
      lede="Clarix exists to bring senior, principal-led leadership to organizations that need it most — without the overhead of a global firm."
    />

    {/* Founder */}
    <section className="py-24 md:py-32">
      <div className="container-tight grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden shadow-elegant bg-ivory-warm max-w-[12rem]">
            <img src={founderImg} alt="Anand — Founder, Clarix Consulting Group" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <div className="mt-6">
            <div className="font-display text-2xl text-ink">Anand</div>
            <div className="text-sm text-muted-foreground mt-1">Founder & Principal Consultant</div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="eyebrow"><span className="h-px w-8 bg-brass" />Founder Story</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-[1.05] text-ink text-balance">
            "I help complex, regulated organizations turn operational complexity into measurable outcomes — through AI, modern engineering, and cloud."
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p>
              After 15+ years leading enterprise programs at Fortune 500 companies across Life Sciences, FinServ, and Technology, I founded Clarix Consulting Group to bring that same senior leadership directly to organizations that need it most — without the overhead of a large firm.
            </p>
            <p>
              I've been the executive accountable for $20M+ delivery portfolios, the technologist who modernized legacy stacks under FDA scrutiny, and the operator who turned around stalled programs across continents. That's the work — and that's who shows up when you engage Clarix.
            </p>
            <p>
              I founded Clarix on a simple conviction: most clients don't need more frameworks. They need a senior partner who's done it before, who can see around the next corner, and who will own the outcome with them.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 md:py-32 bg-ivory-warm">
      <div className="container-tight">
        <div className="max-w-2xl">
          <div className="eyebrow"><span className="h-px w-8 bg-brass" />The Team</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-[1.05] text-balance text-ink">
            Senior practitioners. No handoffs.
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 gap-10 lg:gap-12">
          {team.map((m) => (
            <div key={m.name} className="flex gap-6 items-start">
              <div className="size-44 md:size-48 flex-none overflow-hidden rounded-full shadow-elegant bg-background">
                <img src={m.img} alt={`${m.name} — ${m.title}, Clarix Consulting Group`} loading="lazy" width={256} height={256} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-xl text-ink">{m.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{m.title}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Credentials */}
    <section className="py-24 md:py-32 bg-ivory-warm">
      <div className="container-tight grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="eyebrow"><span className="h-px w-8 bg-brass" />Education & Certifications</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-[1.05] text-ink text-balance">
            Credentials that back the work.
          </h2>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
          {credentials.map((c) => (
            <div key={c.text} className="bg-background p-8 flex items-start gap-4">
              <c.icon className="size-5 text-brass mt-1 flex-none" />
              <div className="text-ink leading-relaxed">{c.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-tight mt-16">
        <Button asChild variant="ink" size="xl">
          <Link to="/contact">Work with Anand <ArrowRight /></Link>
        </Button>
      </div>
    </section>

    <CTABanner />
  </div>
);

export default About;
