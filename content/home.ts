// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... (keep all other type definitions unchanged) ...

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Now Live",
    badgeOuter: "Welcome to MailForge",
    titleBefore: "Forge Powerful",
    titleHighlight: "Email Campaigns",
    titleAfter: "",
    subtitle:
      "MailForge empowers your team to design, send, and track effective email marketing campaigns, all in one streamlined platform.",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "MailForge dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why MailForge",
    heading: "A modern way to build email marketing campaigns",
    description:
      "MailForge is purpose-built for collaborative marketing teams eager to create, manage, and scale their email outreach efficiently.",
    items: [
      {
        icon: "Blocks",
        title: "Collaborative Campaign Builder",
        description: "Work together to create beautiful, engaging emails.",
      },
      {
        icon: "LineChart",
        title: "Contact List Management",
        description: "Organize, import, and segment your audience easily.",
      },
      {
        icon: "BadgeCheck",
        title: "Real-Time Analytics",
        description: "Understand your campaign’s impact with intuitive dashboards.",
      },
      {
        icon: "Users",
        title: "Seamless Team Collaboration",
        description: "Invite teammates and manage permissions effortlessly.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Why MailForge?",
    subtitle:
      "Campaigns, contacts, analytics, and team workflows. Everything you need, minus the complexity.",
    items: [
      {
        icon: "Hammer",
        title: "Collaborative Campaign Builder",
        description:
          "Work together to create beautiful, engaging emails.",
      },
      {
        icon: "AddressBook",
        title: "Contact List Management",
        description: "Organize, import, and segment your audience easily.",
      },
      {
        icon: "BarChart",
        title: "Real-Time Analytics",
        description: "Understand your campaign’s impact with intuitive dashboards.",
      },
      {
        icon: "Users",
        title: "Seamless Team Collaboration",
        description: "Invite teammates and manage permissions effortlessly.",
      },
    ],
  },

  // ── Services (keep default for now) ──────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Ready to streamline your marketing",
    subtitle:
      "A pragmatic baseline for SaaS products that need to move quickly without sacrificing quality.",
    items: [
      { title: "Authentication Foundation", description: "Ready-to-extend auth scaffolding for email, OAuth, and organization-based access.", pro: false },
      { title: "Fast Email Delivery", description: "Optimized for best-in-class deliverability and sender reputation.", pro: false },
      { title: "Analytics & Reporting", description: "Built-in analytics and simple reporting tools for every campaign.", pro: false },
      { title: "Team Oriented", description: "Flexible team roles and approval workflows included.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams succeeding with MailForge",
    reviews: [
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Growth Marketer, CloudDesk", comment: "MailForge makes our campaigns better. We can easily collaborate, edit, and see our results in real time.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Luca Benitez", role: "Founder, Finly", comment: "The simplest way for my team to launch segmented campaigns and track what’s next.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Ava Brooks", role: "Marketing Ops, Nova", comment: "Fast to get started, clear team roles, and no more spreadsheet headaches.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the MailForge team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
    ],
  },

  // ── Pricing (simplified for launch) ──────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Get started free",
    subtitle: "Try MailForge with your team—no credit card required.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "Send up to 2,000 emails/month—unlimited teammates.",
        buttonText: "Sign Up Free",
        benefits: [
          "Unlimited campaigns",
          "Team collaboration",
          "Basic analytics",
          "Email support"
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to MailForge",
    description:
      "Want a product demo or have a question? We’d love to help you get started.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote • India" },
      phone: { label: "—", value: "" },
      email: { label: "Contact us", value: "chirag@bidx.ai" },
      hours: { label: "Available", value: ["Monday - Friday", "10AM - 6PM IST"] },
    },
    formSubjects: ["MailForge Demo", "Product Questions", "Billing/Upgrades", "Support"],
    formSubmitLabel: "Send Message",
  },

  // ── FAQ (keep Panda’s but update references) ─────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "Is MailForge free to start?", answer: "Yes! You can start a team and send up to 2,000 emails/month on our Free plan." },
      { question: "Can I invite my team?", answer: "Absolutely. MailForge is built for teams. Add as many teammates as you like." },
      { question: "Will you support drag-and-drop template builder?", answer: "Yes. Our template editor will be available in a future release." },
      { question: "Does MailForge integrate with external ESPs?", answer: "Planned for later—sign up for updates to stay in the loop." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "MailForge",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" }
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Why MailForge?", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya" },
        ],
      },
    ],
    copyright: "© 2026 MailForge. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "MailForge",
    routes: [
      { href: "/#features", label: "Why MailForge?" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "MailForge preview" },
    features: [
      { title: "Campaigns", description: "Design and schedule engaging campaigns as a team." },
      { title: "Contact Lists", description: "Import and segment lists to reach the right audience." },
      { title: "Analytics", description: "Real-time analytics help you track, iterate, and improve." },
      { title: "Team Collaboration", description: "Invite teammates and assign roles for safe access." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View MailForge on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

// Backward compatibility export
export function getHomeContent(): HomeContent {
  return homeContent;
}