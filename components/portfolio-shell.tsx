"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  FolderKanban,
  Mail,
  MapPin,
  Moon,
  Server,
  Sun,
  UserRound,
} from "lucide-react";

const navigationLinks = [
  { label: "About", href: "#about", icon: UserRound },
  { label: "Projects", href: "#featured-projects", icon: FolderKanban },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["C++", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Node.js",
      "Express.js",
    ],
  },
  { category: "Frontend", icon: FolderKanban, items: ["React.js"] },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud / DevOps",
    icon: Server,
    items: ["AWS EC2", "Docker", "Docker Compose", "Maven", "Git", "GitHub"],
  },
  {
    category: "Tools",
    icon: FolderKanban,
    items: ["Postman", "Swagger/OpenAPI", "IntelliJ IDEA"],
  },
  {
    category: "Concepts",
    icon: Code2,
    items: ["DSA", "OOP", "DBMS", "OS", "Design Patterns"],
  },
];

const projects = [
  {
    number: "01",
    title: "MeetFlow",
    subtitle: "Event Management Platform",
    description:
      "A full-stack event management platform with authentication, role-based access control and REST APIs.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    demo: "https://meetflow-drab-seven.vercel.app",
  },
  {
    number: "02",
    title: "Spring Budget API",
    subtitle: "Expense & Budget Tracking",
    description:
      "Backend API for managing expenses, budgets, transactions, categories and accounts with PostgreSQL persistence and database migrations.",
    technologies: [
      "Spring Boot",
      "PostgreSQL",
      "Spring Data JPA",
      "Flyway",
    ],
  },
  {
    number: "03",
    title: "Prof-Info Central",
    subtitle: "Professor Project Management",
    description:
      "A project management platform connecting students and faculty with authentication, role authorization and REST APIs.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    demo: "https://prof-info-central-psi.vercel.app",
  },
];

const architectureLayers = [
  { label: "Client", detail: "React", icon: FolderKanban },
  { label: "API", detail: "Spring Boot / Express.js", icon: Server },
  { label: "Authentication", detail: "JWT", icon: Code2 },
  { label: "Persistence", detail: "PostgreSQL / MongoDB", icon: Database },
  { label: "Containerization", detail: "Docker", icon: Code2 },
  { label: "Deployment", detail: "AWS EC2", icon: Server },
];

const achievements = [
  {
    title: "AWS Cloud Technical Essentials",
    organization: "AWS",
    icon: Award,
  },
  {
    title: "PostgreSQL for Everybody",
    organization: "University of Michigan / Coursera",
    icon: Database,
  },
  {
    title: "Google Developer Student Clubs Hackathon",
    organization: "Participant",
    icon: Code2,
  },
  {
    title: "Top 5% in JEE Main",
    organization: "Achievement",
    icon: Award,
  },
];

function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mb-8 space-y-2 sm:mb-10"
    >
      <p className="font-mono text-sm italic text-accent">{`// ${eyebrow}`}</p>
      <h2
        id={id}
        className="text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
    </motion.div>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GreetingName() {
  const [greeting, setGreeting] = useState("Hello");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const sequence = ["नमस्ते", "Hola", "Bonjour", "Ciao", "Hello"];
    const timeouts = sequence.map((nextGreeting, index) =>
      setTimeout(() => setGreeting(nextGreeting), (index + 1) * 850),
    );
    return () => timeouts.forEach(clearTimeout);
  }, [prefersReducedMotion]);

  return (
    <>
      <span className="inline-grid align-baseline">
        <span aria-hidden="true" className="invisible col-start-1 row-start-1">
          Bonjour, I&apos;m
        </span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={greeting}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -7 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="col-start-1 row-start-1 inline-block"
          >
            {greeting}, I&apos;m
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="block">Suraj Patel</span>
    </>
  );
}

export function PortfolioShell() {
  const [isDark, setIsDark] = useState(false);
  const cardAssemblyRef = useRef<HTMLDivElement>(null);
  const assemblyY = useMotionValue(0);
  const assemblyRotation = useMotionValue(0);
  const desktopCordX = useTransform(
    assemblyRotation,
    (rotation) => 300 - Math.sin((rotation * Math.PI) / 180) * 154,
  );
  const desktopCordY = useTransform(assemblyY, (y) => 754 + y);
  const mobileCordX = useTransform(
    assemblyRotation,
    (rotation) => 300 - Math.sin((rotation * Math.PI) / 180) * 40,
  );
  const mobileCordY = useTransform(assemblyY, (y) => 640 + y);
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    const assembly = cardAssemblyRef.current;
    if (!assembly) return;

    const { top, height } = assembly.getBoundingClientRect();
    const travel = isMobile
      ? top + height + 32
      : top + height + 36;
    assemblyY.jump(-travel);
    assemblyRotation.jump(isMobile ? -3.2 : -4);

    let cancelled = false;
    const activeAnimations: Array<{ stop: () => void }> = [];
    const runStage = async (
      y: number,
      rotation: number,
      duration: number,
      ease: "easeIn" | "easeOut" | "easeInOut",
    ) => {
      const yAnimation = animate(assemblyY, y, { duration, ease });
      const rotationAnimation = animate(assemblyRotation, rotation, {
        duration,
        ease,
      });
      activeAnimations.push(yAnimation, rotationAnimation);
      await Promise.all([yAnimation.finished, rotationAnimation.finished]);
    };

    const playDrop = async () => {
      await runStage(isMobile ? 16 : 22, isMobile ? 3.8 : 4.8, 0.6, "easeIn");
      if (cancelled) return;
      await runStage(isMobile ? -6 : -9, isMobile ? -1.8 : -2.8, 0.275, "easeOut");
      if (cancelled) return;
      await runStage(isMobile ? 2 : 3, isMobile ? 0.7 : 1.1, 0.2, "easeInOut");
      if (cancelled) return;
      await runStage(0, 0, 0.175, "easeOut");
    };

    void playDrop();

    return () => {
      cancelled = true;
      activeAnimations.forEach((animation) => animation.stop());
    };
  }, [assemblyRotation, assemblyY]);

  function toggleTheme() {
    const darkMode = document.documentElement.classList.toggle("dark");
    setIsDark(darkMode);
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <nav
          aria-label="Main navigation"
          className="group/dock fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:top-1/2 lg:bottom-auto lg:left-6 lg:translate-x-0 lg:-translate-y-1/2"
        >
          <div className="flex w-fit items-stretch gap-1 rounded-xl border border-border bg-card p-1.5 shadow-sm lg:flex-col lg:gap-1.5 lg:rounded-2xl lg:p-2">
            {navigationLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group/link flex h-9 items-center overflow-hidden rounded-lg px-2 text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent focus-visible:bg-accent/10 focus-visible:text-accent focus-visible:outline-none"
              >
                <Icon aria-hidden="true" className="size-4 shrink-0" />
                <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-300 ease-out group-hover/dock:ml-2 group-hover/dock:max-w-24 group-hover/dock:opacity-100 lg:inline-block">
                  {label}
                </span>
              </a>
            ))}
            <div
              aria-hidden="true"
              className="mx-1 my-1 w-px bg-border lg:mx-1 lg:my-0 lg:h-px lg:w-auto"
            />
            <button
              type="button"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              onClick={toggleTheme}
              className="flex h-9 items-center overflow-hidden rounded-lg px-2 text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent focus-visible:bg-accent/10 focus-visible:text-accent focus-visible:outline-none"
            >
              {isDark ? (
                <Sun aria-hidden="true" className="size-4 shrink-0" />
              ) : (
                <Moon aria-hidden="true" className="size-4 shrink-0" />
              )}
              <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-300 ease-out group-hover/dock:ml-2 group-hover/dock:max-w-24 group-hover/dock:opacity-100 lg:inline-block">
                Theme
              </span>
            </button>
          </div>
        </nav>

        <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col border-x border-border pb-20 xl:max-w-[980px] lg:pb-0">
          <section
            id="home"
            aria-labelledby="hero-title"
            className="relative min-h-[calc(100svh-5rem)] border-b border-border px-5 pt-20 pb-12 sm:px-10 sm:pt-24 lg:flex lg:min-h-[514px] lg:items-center lg:px-10 lg:py-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-[540px] lg:pr-2"
            >
              <div className="mb-6 inline-flex h-[27px] items-center gap-1.5 rounded-full border border-border bg-card px-2.5 text-xs font-medium text-muted-foreground shadow-sm">
                <MapPin aria-hidden="true" className="size-3.5 text-accent" />
                Patna, Bihar
              </div>

              <h1
                id="hero-title"
                className="text-[clamp(2.65rem,6vw,4rem)] leading-[1.04] font-bold tracking-[-0.045em] text-foreground"
              >
                <GreetingName />
              </h1>
              <p className="mt-2 text-xl leading-tight font-medium text-muted-foreground sm:text-2xl lg:text-[30px]">
                Backend-focused Full Stack Engineer
              </p>
              <p className="mt-5 max-w-[470px] text-base leading-[1.65] text-foreground/90">
                I build secure, scalable APIs — from Java/Spring Boot services
                to MERN applications.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <a
                  href="#featured-projects"
                  className="group/button inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-[15px] font-medium transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  View Projects
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover/button:translate-x-0.5"
                  />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-[15px] font-medium transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <ArrowDownToLine aria-hidden="true" className="size-4" />
                  Download Resume
                </a>
                <a
                  href="mailto:suraj28patel@gmail.com"
                  className="group/button inline-flex h-11 items-center gap-2.5 rounded-full border border-border bg-card px-4 text-[15px] font-medium shadow-sm transition-[padding] duration-300 hover:pl-2 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span className="relative flex size-2.5 items-center justify-center overflow-hidden rounded-full bg-accent transition-all duration-300 group-hover/button:size-6">
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute size-4 -translate-x-3 text-accent-foreground opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100"
                    />
                  </span>
                  Let&apos;s connect
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <a
                  href="https://github.com/suraj0x0"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/suraj0x0"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:suraj28patel@gmail.com"
                  className="transition-colors hover:text-accent"
                >
                  Email
                </a>
              </div>
            </motion.div>

            <div
              ref={cardAssemblyRef}
              className="lanyard-card relative mx-auto mt-10 h-[240px] w-[170px] shrink-0 lg:absolute lg:top-[154px] lg:right-[15%] lg:mt-0 lg:h-[274px] lg:w-[190px]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 600 1200"
                className="pointer-events-none absolute left-[calc(50%-300px)] top-[-640px] z-0 h-[1200px] w-[600px] overflow-visible lg:top-[-754px]"
              >
                <motion.line
                  x1={300}
                  y1={600}
                  x2={mobileCordX}
                  y2={mobileCordY}
                  className="lg:hidden"
                  stroke="#77746e"
                  strokeWidth={6}
                  strokeLinecap="round"
                />
                <motion.line
                  x1={300}
                  y1={600}
                  x2={mobileCordX}
                  y2={mobileCordY}
                  className="lg:hidden"
                  stroke="#d0ccc4"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
                <motion.line
                  x1={300}
                  y1={600}
                  x2={desktopCordX}
                  y2={desktopCordY}
                  className="hidden lg:block"
                  stroke="#77746e"
                  strokeWidth={6}
                  strokeLinecap="round"
                />
                <motion.line
                  x1={300}
                  y1={600}
                  x2={desktopCordX}
                  y2={desktopCordY}
                  className="hidden lg:block"
                  stroke="#d0ccc4"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
              </svg>
              <motion.div
                style={{ y: assemblyY, rotate: assemblyRotation }}
                className="absolute inset-x-0 top-0 origin-[50%_-40px] lg:origin-[50%_-154px]"
              >
                <figure aria-label="Profile card" className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -top-[9px] left-1/2 z-20 size-[18px] -translate-x-1/2 rounded-full border-2 border-[#817e77] bg-[#f7f6f4] shadow-sm"
                  />
                  <div className="relative overflow-hidden rounded-[11px] border border-[#d4d0cb] bg-card p-[5px] shadow-[0_8px_22px_rgba(48,40,31,0.15)] dark:border-border dark:shadow-black/30">
                    <div className="absolute inset-x-[5px] top-[5px] z-10 h-[4px] rounded-t-[6px] bg-accent" />
                    <div className="relative h-[184px] overflow-hidden rounded-t-[6px] bg-muted lg:h-[214px]">
                      <Image
                        src="/profile.jpg"
                        alt="Portrait of Suraj Patel"
                        fill
                        loading="eager"
                        sizes="190px"
                        className="object-cover object-[center_28%]"
                      />
                    </div>
                    <figcaption className="flex h-[44px] flex-col justify-center px-2.5 lg:h-[48px]">
                      <span className="text-[13px] leading-tight font-semibold text-foreground">
                        Suraj Patel
                      </span>
                    </figcaption>
                  </div>
                </figure>
              </motion.div>
            </div>
          </section>

          <section
            id="about"
            aria-labelledby="about-title"
            className="border-b border-border px-5 py-12 sm:px-10 sm:py-16 lg:px-10 lg:py-20"
          >
            <SectionHeading
              eyebrow="About me"
              title="Backend-focused engineering"
              id="about-title"
            />

            <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:gap-6">
              <Reveal
                className="flex min-h-[220px] flex-col justify-between rounded-[24px] border border-border bg-background-darker p-6 sm:p-8"
              >
                <p className="max-w-xl text-lg leading-relaxed text-foreground/90 sm:text-xl">
                  I&apos;m a backend-focused full-stack engineering student
                  building APIs and applications with Java, Spring Boot and the
                  MERN stack. My work includes REST APIs backed by PostgreSQL
                  and MongoDB, alongside React foundations.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <GraduationCap
                      aria-hidden="true"
                      className="size-4 text-accent"
                    />
                    IIIT Ranchi · Electronics &amp; Communication
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin aria-hidden="true" className="size-4 text-accent" />
                    Patna, Bihar
                  </span>
                </div>
              </Reveal>

              <Reveal
                delay={0.08}
                className="rounded-[24px] border border-border bg-background-darker p-6 sm:p-8"
              >
                <p className="font-mono text-xs tracking-wide text-muted-foreground">
                  CONTACT
                </p>
                <div className="mt-5 space-y-4">
                  <a
                    href="mailto:suraj28patel@gmail.com"
                    className="flex items-center justify-between gap-3 text-sm transition-colors hover:text-accent sm:text-base"
                  >
                    <span className="break-all">suraj28patel@gmail.com</span>
                    <Mail aria-hidden="true" className="size-4 shrink-0" />
                  </a>
                  <a
                    href="tel:+918969900118"
                    className="flex items-center justify-between gap-3 text-sm transition-colors hover:text-accent sm:text-base"
                  >
                    <span>+91-8969900118</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0"
                    />
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          <section
            id="skills"
            aria-labelledby="skills-title"
            className="border-b border-border px-5 py-12 sm:px-10 sm:py-16 lg:px-10 lg:py-20"
          >
            <SectionHeading
              eyebrow="Technical skills"
              title="Tools I work with"
              id="skills-title"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map(({ category, icon: Icon, items }, index) => (
                <Reveal
                  key={category}
                  delay={(index % 3) * 0.06}
                  className="group rounded-[20px] border border-border bg-card/80 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-xl border border-border bg-background text-accent">
                      <Icon
                        aria-hidden="true"
                        className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                      />
                    </span>
                    <h3 className="font-medium text-foreground">{category}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-200 hover:border-accent/45 hover:text-foreground sm:text-[13px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="featured-projects"
            aria-labelledby="projects-title"
            className="border-b border-border px-5 py-12 sm:px-10 sm:py-16 lg:px-10 lg:py-20"
          >
            <SectionHeading
              eyebrow="Featured projects"
              title="Selected engineering work"
              id="projects-title"
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal
                  key={project.title}
                  delay={index * 0.07}
                  className={`group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="relative flex min-h-[112px] items-center justify-between overflow-hidden border-b border-border bg-background-darker px-6 py-5 transition-colors duration-200 group-hover:bg-accent/[0.025] sm:px-8">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-40 [background-image:radial-gradient(color-mix(in_oklch,var(--foreground)_16%,transparent)_1px,transparent_1px)] [background-size:18px_18px]"
                    />
                    <div className="group/header relative flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-accent transition-colors duration-200 group-hover/header:border-accent/40">
                        {index === 1 ? (
                          <Database aria-hidden="true" className="size-5" />
                        ) : (
                          <FolderKanban
                            aria-hidden="true"
                            className="size-5"
                          />
                        )}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        PROJECT / {project.number}
                      </span>
                    </div>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} demo`}
                        className="relative flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ) : (
                      <span className="relative rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] text-muted-foreground">
                        API
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {project.subtitle}
                      </p>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
                        {project.description}
                      </p>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-colors duration-200 hover:border-accent/40 hover:text-foreground sm:text-[11px]"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        View demo
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="architecture"
            aria-labelledby="architecture-title"
            className="border-b border-border px-5 py-12 sm:px-10 sm:py-16 lg:px-10 lg:py-20"
          >
            <SectionHeading
              eyebrow="How I build things"
              title="From client to deployment"
              id="architecture-title"
            />
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A clear path from the interface through the API and data layer to
              deployment.
            </p>
            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="mx-auto max-w-2xl"
            >
              {architectureLayers.map(
                ({ label, detail, icon: Icon }, index) => (
                  <motion.li
                    key={label}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative flex min-h-[74px] items-center gap-4 sm:gap-5"
                  >
                    {index < architectureLayers.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-[48px] left-[19px] h-[calc(100%-22px)] w-px bg-border"
                      />
                    )}
                    <motion.span
                      variants={{
                        hidden: { borderColor: "var(--border)" },
                        visible: {
                          borderColor:
                            "color-mix(in oklch, var(--accent) 35%, var(--border))",
                        },
                      }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="z-10 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-accent"
                    >
                      <Icon aria-hidden="true" className="size-4" />
                    </motion.span>
                    <div className="flex min-w-0 flex-1 flex-col items-start justify-between gap-1.5 rounded-2xl border border-border bg-card px-4 py-3 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:gap-3 sm:px-5">
                      <span className="text-sm font-medium text-foreground sm:text-base">
                        {label}
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground sm:text-right sm:text-xs">
                        {detail}
                      </span>
                    </div>
                  </motion.li>
                ),
              )}
            </motion.ol>
          </section>

          <section
            id="experience"
            aria-labelledby="experience-title"
            className="border-b border-border px-5 py-12 sm:px-10 sm:py-16 lg:px-10 lg:py-20"
          >
            <SectionHeading
              eyebrow="Experience"
              title="Backend development"
              id="experience-title"
            />
            <Reveal className="group relative rounded-[24px] border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/35 sm:p-8">
              <span
                aria-hidden="true"
                className="absolute top-8 bottom-8 left-0 w-[3px] rounded-r-full bg-accent"
              />
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Backend Developer Intern
                  </h3>
                  <p className="mt-1 text-base font-medium text-muted-foreground">
                    Badkul Technology
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground/80">
                    Remote
                  </p>
                </div>
                <span className="w-fit rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                  Dec 2025 – Feb 2026
                </span>
              </div>
              <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-foreground/85 sm:grid-cols-2">
                {[
                  "Developed backend modules using Java and Spring Boot.",
                  "Built REST APIs and worked with SQL.",
                  "Used Git in the development workflow.",
                  "Followed clean and maintainable backend development practices.",
                ].map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex items-start gap-2.5"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <section
            id="education"
            aria-labelledby="education-title"
            className="border-b border-border px-5 py-12 sm:px-10 sm:py-16 lg:px-10 lg:py-20"
          >
            <SectionHeading
              eyebrow="Education"
              title="Learning and foundations"
              id="education-title"
            />
            <Reveal className="rounded-[24px] border border-border bg-background-darker p-6 transition-colors duration-200 hover:border-accent/35 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-accent">
                    <GraduationCap
                      aria-hidden="true"
                      className="size-5"
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      B.Tech in Electronics and Communication Engineering
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                      Indian Institute of Information Technology, Ranchi
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col sm:items-end">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                    Aug 2023 – May 2027
                  </span>
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="certifications"
            aria-labelledby="certifications-title"
            className="border-b border-border px-5 py-12 sm:px-10 sm:py-16 lg:px-10 lg:py-20"
          >
            <SectionHeading
              eyebrow="Certifications & achievements"
              title="Milestones and learning"
              id="certifications-title"
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {achievements.map(({ title, organization, icon: Icon }, index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <li className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 sm:p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-accent">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground sm:text-base">
                        {title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground sm:text-sm">
                        {organization}
                      </span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-title"
            className="border-b border-border px-5 py-12 sm:px-10 sm:py-16 lg:px-10 lg:py-20"
          >
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something thoughtful"
              id="contact-title"
            />
            <Reveal className="grid gap-6 rounded-[24px] border border-border bg-background-darker p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Have a project or an opportunity to discuss? Feel free to get
                  in touch.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <MapPin aria-hidden="true" className="size-4 text-accent" />
                    Patna, Bihar
                  </span>
                  <a
                    href="tel:+918969900118"
                    className="transition-colors hover:text-accent"
                  >
                    +91-8969900118
                  </a>
                </div>
              </div>
              <a
                href="mailto:suraj28patel@gmail.com"
                className="group/button inline-flex h-12 w-fit items-center gap-2.5 rounded-full border border-accent/35 bg-card px-5 text-sm font-medium shadow-sm transition-[padding,color,border-color] duration-300 hover:pl-3 hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span className="relative flex size-2.5 items-center justify-center overflow-hidden rounded-full bg-accent transition-all duration-300 group-hover/button:size-6">
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute size-4 -translate-x-3 text-accent-foreground opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100"
                  />
                </span>
                Get in touch
              </a>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:suraj28patel@gmail.com"
                className="transition-colors hover:text-accent"
              >
                suraj28patel@gmail.com
              </a>
              <a
                href="https://github.com/suraj0x0"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/suraj0x0"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </section>

          <footer className="flex flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="font-medium text-foreground">Suraj Patel</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Backend-focused Full Stack Engineer
              </p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-muted-foreground">
              <a
                href="https://github.com/suraj0x0"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/suraj0x0"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href="mailto:suraj28patel@gmail.com"
                className="transition-colors hover:text-accent"
              >
                Email
              </a>
            </div>
          </footer>
        </main>
      </div>
    </MotionConfig>
  );
}
