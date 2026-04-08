"use client";

import { useMemo, useState } from "react";
import {
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Quote,
  TrendingUp,
  ShieldCheck,
  Users,
  BookOpen,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Impact", href: "#impact" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "+8%", label: "ADA Increase" },
  { value: "-13%", label: "Chronic Absenteeism" },
  { value: "+10%", label: "ELA Proficiency" },
  { value: "-38%", label: "Discipline Incidents" },
  { value: "+35%", label: "Staff Retention" },
];

const executiveCards = [
  {
    icon: Briefcase,
    title: "18+ Years of Leadership",
    text: "Progressive experience across school administration, instructional leadership, operations, and organizational development.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Improvement",
    text: "Documented gains in attendance, student achievement, school culture, and staff retention through aligned systems and coaching.",
  },
  {
    icon: Award,
    title: "Executive-Level Operations",
    text: "Led compliance, safety, crisis response, enrollment systems, and budget oversight while protecting learning conditions for students and staff.",
  },
  {
    icon: GraduationCap,
    title: "Principal-Certified Leader",
    text: "Certified in both K–8 and 7–12 principal leadership with a strong foundation in instruction, people leadership, and school improvement.",
  },
];

const testimonials = [
  {
    quote:
      "She has the ability and fit to lead other educators in developing effective systems yielding academic and holistic success for all students.",
    attribution: "Annette Kennedy",
  },
  {
    quote:
      "A driven, collaborative, and visionary leader who will undoubtedly add value to any organization.",
    attribution: "Dr. Brian Simmons",
  },
  {
    quote:
      "She serves as an excellent leader of the teaching and learning process and helps move student achievement in an upward direction.",
    attribution: "Tiandra Bland",
  },
  {
    quote:
      "She has made a profoundly positive impact on school culture and student engagement.",
    attribution: "Isiah McHellen",
  },
  {
    quote:
      "She leads by example, maintains high expectations, and never settles for anything but the best for students.",
    attribution: "Kevin Martin",
  },
  {
    quote:
      "Any district would be fortunate to gain a skillful instructional leader like her.",
    attribution: "Vanessa Garry, PhD",
  },
  {
    quote:
      "Her leadership has transformed our school culture and elevated student outcomes.",
    attribution: "Lauren Chaney",
  },
  {
    quote:
      "She is a visionary leader who inspires and empowers others to achieve excellence.",
    attribution: "Nehemiah Thomas",
  },
  {
    quote:
      "A dedicated and compassionate leader who puts students first in everything she does.",
    attribution: "Shanise Terrell",
  },
  {
    quote:
      "Her strategic thinking and collaborative approach have driven significant improvements in our school.",
    attribution: "Roshanda Neal",
  },
  {
    quote:
      "Ms. Moore has demonstrated exceptional skills when interacting with our diverse climate and is highly recommended for a leadership position.",
    attribution: "Jill Farrar, Department Chair",
  },
  {
    quote:
      "Ms. Moore collaborates effectively with colleagues to coach and mentor students, helping them make strong academic and behavioral decisions.",
    attribution: "Gary Jansen, Assistant Principal",
  },
  {
    quote:
      "She builds strong relationships and treats students and colleagues with fairness, respect, and understanding.",
    attribution: "Audrey Lee, Assistant Principal",
  },
];
const artifacts = [
  {
    title: "SLPS 30-60-90 Day Entry Plan",
    category: "Executive Leadership",
    description: "A strategic first-90-day leadership plan centered on relationship building, instructional support, attendance, safety, and sustainable systems aligned to district priorities.",
    href: "/docs/entry-plan.pdf",
    cta: "View Entry Plan",
  },
  {
    title: "Crisis Communication: Safety Response",
    category: "Executive Communication",
    description: "A staff communication sent immediately after a safety incident that demonstrates calm leadership, transparency, and clear next steps during a high-stakes moment.",
    href: "/docs/safety-letter-staff.pdf",
    cta: "View Communication",
  },
  {
    title: "State Testing Project Plan",
    category: "Operational Excellence",
    description: "A comprehensive testing execution plan coordinating schedules, accommodations, staffing, materials, compliance, and communication across a complex testing cycle.",
    href: "/docs/testing-project-plan.pdf",
    cta: "View Project Plan",
  },
  {
    title: "Instructional Walkthrough & Coaching Framework",
    category: "Instructional Leadership",
    description: "A structured observation and coaching system designed to improve Tier 1 instruction through real-time feedback, data analysis, and aligned action steps.",
    href: "/docs/walkthrough-tool.pdf",
    cta: "View Walkthrough Tool",
  },
  {
    title: "Attendance Systems & Student Accountability",
    category: "Data-Driven Leadership",
    description: "A weekly attendance strategy system grounded in ADA and chronic absenteeism data, tiered interventions, and clear staff ownership to drive measurable student outcomes.",
    href: "/docs/attendance-agenda.pdf",
    cta: "View Attendance Agenda",
  },
  {
    title: "Chronic Absenteeism Goal Calculator",
    category: "Data-Driven Leadership",
    description: "A strategic tool used to set, monitor, and adjust attendance goals by analyzing trends in chronic absenteeism and projecting improvement targets.",
    href: "https://docs.google.com/spreadsheets/d/1ThfYBvtL-W9ftWICDgmtVXdwwt1uaaEZ/edit?gid=1759785617#gid=1759785617",
    cta: "View Attendance Strategy Tool",
  },
  {
    title: "Operations Performance Task",
    category: "Operational Leadership",
    description: "A performance task diagnosing attendance instability and SIS compliance gaps, paired with a 30-day execution plan to stabilize systems and protect instructional time.",
    href: "/docs/ops-task.pdf",
    cta: "View Ops Task",
  },
  {
    title: "Culture & Instructional Time Strategy",
    category: "School Culture Leadership",
    description: "A data-driven culture systems plan focused on reducing class avoidance, strengthening Tier 1 systems, and increasing instructional time through adult consistency and coaching.",
    href: "/docs/assistant-principal-performance-task.pdf",
    cta: "View Culture Task",
  },
  {
    title: "Beginning-of-Year Operations Systems Presentation",
    category: "Systems Leadership",
    description: "A comprehensive staff-facing presentation outlining operational expectations, systems, procedures, and accountability structures to ensure a strong and consistent start to the school year.",
    href: "/docs/ops-presentation.pdf",
    cta: "View Operations Presentation",
  },
  {
    title: "Employee Performance & Accountability Systems",
    category: "People Leadership",
    description: "Examples of progressive discipline documentation that reflect policy alignment, fair process, and leadership accountability in managing staff performance.",
    href: "/docs/progressive-discipline.pdf",
    cta: "View Discipline Example",
  },
];

const recommendationGroups = [
  {
    title: "Principal & Executive Recommendations",
    text: "Letters that speak to my leadership credibility, ability to improve school systems, and impact on culture, instruction, and student outcomes.",
    links: [
      ["Aisha Allen", "/letters/aisha-allen.pdf"],
      ["Dr. Brian Simmons", "/letters/brian-simmons.pdf"],
      ["Tiandra Bland", "/letters/tiandra-bland.pdf"],
      ["Isiah McHellen", "/letters/i-mchellen.pdf"],
      ["Darius Kirk", "/letters/darius-kirk.pdf"],
      ["Brenda Smith", "/letters/brenda-smith.pdf"],
      ["Lauren Chaney", "/letters/lauren-chaney.pdf"],
      ["Nehemiah Thomas", "/letters/nehemiah-thomas.pdf"],
    ],
  },
  {
    title: "Instructional & Team Recommendations",
    text: "Recommendations that highlight my work in teacher support, instructional improvement, collaboration, and staff development.",
    links: [
      ["Annette Kennedy", "/letters/annette-kennedy.pdf"],
      ["Vanessa Garry", "/letters/vanessa-garry.pdf"],
      ["Kevin Martin", "/letters/kevin-martin.pdf"],
      ["Nakia King", "/letters/nakia-king.pdf"],
      ["Enna Dancy", "/letters/enna-dancy.pdf"],
      ["Trista Harper", "/letters/trista-harper.pdf"],
      ["Shanise Terrell", "/letters/shanise-terrell.pdf"],
      ["Roshanda Neal", "/letters/roshanda-neal.pdf"],
      ["Jill Farrar", "/letters/jill-farrar.pdf"],
      ["Gary Jansen", "/letters/gary-jansen.pdf"],


    ],
  },
  {
    title: "Additional Recommendations",
    text: "Additional endorsements reflecting my professionalism, collaboration, communication, and leadership presence across schools and teams.",
    links: [
    
      ["Carl Hudson", "/letters/carl-hudson.pdf"],
      ["Traci Nave", "/letters/traci-nave.pdf"],
      ["Audrey Lee", "/letters/audrey-lee.pdf"],
    ],
  },
];

const attendanceStats = [
  { label: "Current ADA", value: "87.27%", note: "Strong daily attendance trend" },
  { label: "Current Chronic Absence", value: "46.84%", note: "Significantly improved" },
  { label: "Call Completion", value: "95–100%", note: "Consistent execution" },
];

function SectionHeader({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-stone-400">{text}</p> : null}
    </div>
  );
}

function ArtifactCard({ item }: { item: { title: string; category: string; description: string; href: string; cta: string } }) {
  const external = item.href.startsWith("http");
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-emerald-400/30">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">{item.category}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
      <p className="mt-4 text-sm leading-8 text-stone-400">{item.description}</p>
      <a
        href={item.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="mt-8 inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-400/30 hover:bg-emerald-500/10"
      >
        {item.cta}
      </a>
    </div>
  );
}

export default function PortfolioSite() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const visibleTestimonials = useMemo(() => {
    const result = [];
    for (let i = 0; i < 3; i += 1) {
      result.push(testimonials[(testimonialIndex + i) % testimonials.length]);
    }
    return result;
  }, [testimonialIndex]);

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Keena Moore</p>
            <p className="text-xs text-stone-400">Executive Leadership Portfolio</p>
          </div>
          <nav className="hidden gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-stone-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(22,163,74,0.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
              Principal-Level Executive Portfolio
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">Keena Moore</h1>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-stone-300">
              Principal-ready educational leader with a proven record of improving student outcomes, strengthening school culture, and building systems that support excellence for students, staff, and families.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-400">
              My leadership sits at the intersection of instructional leadership, operational excellence, culture building, and stakeholder trust. I lead with clarity, presence, and a relentless commitment to results.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#portfolio" className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/40 transition hover:-translate-y-0.5">Explore Portfolio</a>
              <a href="#contact" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Contact Me</a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-5">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">{m.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-400">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-md justify-self-center">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40">
              <img src="/headshot.png"
              alt="Keena Moore headshot"
              className="h-full w-full rounded-[1.6rem] object-cover"
/>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-14 pb-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Featured Testimonials</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Trusted leadership. Proven impact.</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">Endorsed by principals, district leaders, and instructional coaches across multiple districts.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10" aria-label="Previous testimonials">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10" aria-label="Next testimonials">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {visibleTestimonials.map((t, idx) => (
              <div key={`${t.attribution}-${idx}`} className="rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-xl shadow-black/10">
                <div className="inline-flex rounded-2xl bg-emerald-500/15 p-3 text-emerald-200"><Quote className="h-5 w-5" /></div>
                <p className="mt-5 text-lg leading-8 text-white">"{t.quote}"</p>
                <p className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-stone-400">{t.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Executive Profile</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Leadership grounded in performance, people, and purpose</h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              I am a dynamic and student-centered educational leader with over 18 years of experience across instructional leadership, school operations, organizational development, and culture building. I bring a track record of improving student outcomes, supporting staff growth, and designing systems that create stronger, more responsive schools.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-400">
              My leadership style is relationship-driven and execution-focused. I believe schools perform best when expectations are clear, communication is strong, systems are aligned, and every decision is anchored in what is best for students.
            </p>
          </div>
          <div className="rounded-[2rem] border border-emerald-400/20 bg-emerald-500/[0.08] p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Signature Leadership Statement</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">I build schools where expectations are clear, systems are strong, and students achieve at high levels.</h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              I lead with high expectations, strategic clarity, and a deep commitment to student success. Whether improving attendance, strengthening school culture, coaching staff, or overseeing operations, I focus on building conditions that allow excellence to become sustainable.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {executiveCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10">
                <div className="inline-flex rounded-2xl bg-emerald-500/15 p-3 text-emerald-200"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[2rem] border border-emerald-400/20 bg-emerald-500/[0.08] p-10 shadow-2xl shadow-black/20">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Leadership Impact & Results</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Measurable outcomes that reflect strong leadership and execution</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-semibold text-white">{m.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-stone-400">{m.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8 text-stone-300">These outcomes reflect my ability to lead with clarity, implement systems with fidelity, and drive measurable improvements in student achievement, school culture, and organizational effectiveness.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeader eyebrow="Instructional Leadership & Teacher Development" title="Systems to improve teaching and learning" text="Led instructional walkthrough cycles focused on student engagement, rigor, and teacher practice—resulting in targeted coaching, clear action steps, and improved classroom instruction." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/10">
            <div className="inline-flex rounded-2xl bg-emerald-500/15 p-3 text-emerald-200"><BookOpen className="h-6 w-6" /></div>
            <h3 className="mt-5 text-2xl font-semibold text-white">Instructional Walkthrough & Coaching Framework</h3>
            <p className="mt-4 text-sm leading-8 text-stone-400">A structured observation and coaching system designed to improve Tier 1 instruction through real-time feedback, data analysis, and aligned action steps.</p>
            <p className="mt-4 text-sm italic text-stone-300">"Assess teacher mastery of group action steps and ensure successful implementation in real time."</p>
            <p className="mt-2 text-sm italic text-stone-300">"Identify key trend gaps and develop targeted action steps for instructional improvement."</p>
            <a href="/docs/walkthrough-tool.pdf" className="mt-6 inline-flex rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">View Instructional Walkthrough Tool</a>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/10">
            <div className="inline-flex rounded-2xl bg-white/10 p-3 text-white"><ClipboardList className="h-6 w-6" /></div>
            <h3 className="mt-5 text-2xl font-semibold text-white">Instructional Leadership Focus</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-300">
              <li>• Structured pre-brief, observation, and debrief cycles</li>
              <li>• Low-inference observation tied to student work and rigor</li>
              <li>• Group and individual action steps for teacher growth</li>
              <li>• Leadership development through coaching and feedback</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeader eyebrow="Attendance Systems & Student Accountability" title="A structured system to improve daily attendance" text="Led a structured attendance system grounded in data, accountability, and targeted intervention—facilitating weekly strategy meetings, monitoring ADA and chronic absenteeism trends, and assigning clear ownership to drive measurable student outcomes." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {attendanceStats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-xl shadow-black/10">
              <p className="text-sm text-stone-400">{s.label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{s.value}</p>
              <p className="mt-1 text-xs text-stone-500">{s.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-300/20 bg-red-500/[0.04] p-6">
            <h3 className="text-xl font-semibold text-red-200">Before</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              <li>• Inconsistent attendance systems</li>
              <li>• Limited ownership of follow-up</li>
              <li>• High chronic absenteeism</li>
              <li>• Reactive interventions</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-300/20 bg-emerald-500/[0.05] p-6">
            <h3 className="text-xl font-semibold text-emerald-200">After</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              <li>• Weekly structured attendance meetings</li>
              <li>• Clear staff ownership and accountability</li>
              <li>• Improved ADA and reduced chronic absenteeism</li>
              <li>• Proactive, tiered intervention system</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10">
          <h3 className="text-xl font-semibold text-white">Reflection</h3>
          <p className="mt-3 text-sm leading-8 text-stone-300">I run attendance meetings with a clear focus on outcomes. We start with data, identify trends, and leave with specific actions and ownership. I make sure the work is targeted—whether it's celebrating students on track or putting strong supports in place for those who are not. The goal is always the same: remove barriers, hold systems accountable, and get students in the building consistently.</p>
        </div>
        <p className="mt-4 text-sm font-semibold text-stone-200">Data-driven meetings. Clear ownership. Consistent student attendance.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionHeader eyebrow="People & Performance Management" title="Support, accountability, and standards" text="Led and executed progressive discipline systems, including formal write-ups, performance improvement expectations, and termination decisions—grounded in policy, documentation, and consistent communication to ensure accountability and protect organizational integrity." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/10">
            <div className="inline-flex rounded-2xl bg-emerald-500/15 p-3 text-emerald-200"><Users className="h-6 w-6" /></div>
            <h3 className="mt-5 text-2xl font-semibold text-white">Employee Performance & Accountability Systems</h3>
            <p className="mt-4 text-sm leading-8 text-stone-400">Structured approach to managing staff performance through documentation, coaching, and, when necessary, decisive action aligned to policy and organizational standards.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/docs/progressive-discipline.pdf" className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white">View Progressive Discipline Example</a>
              <a href="/docs/Termination.pdf" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">View Termination Documentation</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/10">
            <div className="inline-flex rounded-2xl bg-white/10 p-3 text-white"><ShieldCheck className="h-6 w-6" /></div>
            <h3 className="mt-5 text-2xl font-semibold text-white">Leadership Reflection</h3>
            <p className="mt-4 text-base leading-8 text-stone-300">I approach performance management with clarity and consistency. I make sure expectations are clear, support is provided, and staff have a real opportunity to improve. When that does not happen, I make decisions grounded in documentation, policy, and fairness. I do not avoid difficult conversations. My responsibility is to uphold standards, protect the team, and do what is best for students.</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader eyebrow="Portfolio Highlights" title="Selected artifacts that reflect principal-level readiness" text="This portfolio is designed to showcase the leadership thinking, communication, systems work, and performance outcomes that define my practice as a school leader." />
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-stone-300">Leadership plans, communication samples, data tools, and strategic artifacts</div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {artifacts.map((item) => (
              <ArtifactCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="recommendations" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Letters of Recommendation" title="Endorsements from colleagues, supervisors, and educational leaders" text="The following letters reflect my leadership impact, professionalism, and ability to build strong school communities. These recommendations speak to my effectiveness in instructional leadership, operations, culture, and staff development." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {recommendationGroups.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">{group.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.links.map(([label, href]) => (
                  <a key={label} href={href} className="rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">{label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="credentials" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl shadow-black/20">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Credentials & Academic Foundation</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Academic preparation and professional certification</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">My academic preparation and professional certification reflect a strong foundation in educational leadership, instructional practice, and organizational management.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Master of Arts – Educational Administration</h3>
              <p className="mt-2 text-sm text-stone-400">Lindenwood University | Graduate GPA: 3.59</p>
              <a href="/docs/lindenwood-transcript.pdf" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">View Transcript <ExternalLink className="h-4 w-4" /></a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Bachelor of Science in Education (English)</h3>
              <p className="mt-2 text-sm text-stone-400">Harris-Stowe State University | Magna Cum Laude</p>
              <a href="/docs/hssu-transcript.pdf" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">View Transcript <ExternalLink className="h-4 w-4" /></a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Missouri Principal Certification (7–12)</h3>
              <p className="mt-2 text-sm text-stone-400">Department of Elementary & Secondary Education</p>
              <a href="/docs/dese-certification.pdf" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">View Certification <ExternalLink className="h-4 w-4" /></a>
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-base text-stone-300">Fully certified and prepared to lead at the secondary level, with a strong academic foundation in educational leadership and school systems.</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Leadership Philosophy</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Students first. Excellence always. Leadership with substance.</h2>
            <p className="mt-5 text-base leading-8 text-stone-300">My leadership approach centers on trust, accountability, visibility, and aligned execution. I believe the strongest schools are led by people who can inspire others, make hard decisions with clarity, and build systems that are both student-centered and sustainable.</p>
            <p className="mt-4 text-base leading-8 text-stone-400">I am committed to creating school environments where high expectations are matched by meaningful support, where adults work with urgency and care, and where students experience safety, belonging, and academic growth every day.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/15 to-white/[0.04] p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Connect with Keena Moore</h2>
            <p className="mt-4 text-sm leading-8 text-stone-300">Available for principal, assistant principal, and executive school leadership opportunities. This portfolio includes leadership artifacts, credentials, and evidence of impact across instruction, operations, culture, and staff development.</p>
            <div className="mt-8 space-y-5 text-sm text-stone-200">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-emerald-200" /><span>(314) 757-2717</span></div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-200" /><span>keenamoore@yahoo.com</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-emerald-200" /><span>O’Fallon, Missouri</span></div>
              <div className="flex items-center gap-3"><Briefcase className="h-4 w-4 text-emerald-200" /><span>LinkedIn: keena-moore-11324b114</span></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:opacity-90">View Portfolio</a>
              <a href="/docs/resume.pdf" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Download Resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
