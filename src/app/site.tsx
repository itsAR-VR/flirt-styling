import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type PackageCard = {
  name: string;
  price: string;
  eyebrow?: string;
  subtitle: string;
  description?: string;
  bullets: string[];
  note: string;
  featured?: boolean;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Online Styling", href: "/online-styling" },
  { label: "Closet Services", href: "/closet-services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const onlinePackages: PackageCard[] = [
  {
    name: "The Fling",
    price: "$149",
    eyebrow: "starter",
    subtitle: "Refresh your look",
    bullets: ["2 clothing categories", "5 pieces per category", "10 pieces total"],
    note: "Handpicked for you",
  },
  {
    name: "The Hookup",
    price: "$199",
    eyebrow: "most popular!",
    subtitle: "Elevate your everyday",
    bullets: ["4 clothing categories", "5 pieces per category", "20 pieces total"],
    note: "Handpicked for you",
    featured: true,
  },
  {
    name: "The Soulmate",
    price: "$249",
    eyebrow: "premium",
    subtitle: "Full wardrobe refresh",
    bullets: ["6 clothing categories", "5 pieces per category", "30 pieces total"],
    note: "Handpicked for you",
  },
];

export const closetPackages: PackageCard[] = [
  {
    name: "The Breakup",
    price: "$229",
    eyebrow: "cleanout",
    subtitle: "A lighter closet. A clearer mind.",
    bullets: [
      "In-person, at your home",
      "Piece-by-piece review",
      "Keep, donate, or let go",
      "Donations handled for you",
    ],
    note: "Honest guidance throughout",
  },
  {
    name: "The Edit",
    price: "$229",
    eyebrow: "organization",
    subtitle: "Walk away with a closet that's organized, accessible, and easy to maintain.",
    bullets: [
      "In-person, at your home",
      "No cleanout needed",
      "Closet fully organized",
      "Made to last",
    ],
    note: "Structured & judgment-free",
  },
  {
    name: "The Full Reset",
    price: "$399",
    eyebrow: "best value",
    subtitle: "Both services, one visit.",
    bullets: [
      "In-person, at your home",
      "Cleanout + organization",
      "Donations handled for you",
      "Save $59 vs. booking separately",
    ],
    note: "20% off styling when you book",
    featured: true,
  },
];

export const homepageFaqs: FaqItem[] = [
  {
    question: "What are clothing categories?",
    answer:
      "Clothing categories are the types of clothing you want styled, like tops, pants, dresses, or shoes. You share your lifestyle and goals during your call, and a Flirt Stylist selects the categories that make the most sense for you.",
  },
  {
    question: "Do I have to buy everything in the guide?",
    answer:
      "Not at all. Your styling guide gives you options, and you choose what you love. There is no pressure and no minimum spend.",
  },
  {
    question: "What if I have a tight budget?",
    answer:
      "Budget is one of the first things discussed during your call. Every piece is selected with your budget in mind, because that's a core part of how Flirt works.",
  },
  {
    question: "Will I have to buy a whole new wardrobe?",
    answer:
      "No, and that is intentional. The consultation includes reviewing what you already own so new pieces are selected to work with your existing closet.",
  },
];

export function SiteHeader({ activePath = "/" }: { activePath?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(255,253,251,0.94)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src="/flirt-logo.png"
            alt="Flirt Styling"
            width={155}
            height={45}
            className="h-auto w-[135px] sm:w-[155px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = item.href === activePath;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-medium tracking-[0.22em] uppercase transition ${
                  active ? "text-[var(--pink-text)]" : "text-[var(--text)] hover:text-[var(--pink-text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a href="#booking-cta" className="button-primary hidden sm:inline-flex">
          Book Free Intro Call
        </a>
      </div>
    </header>
  );
}

export function FinalCta({
  title,
  description,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <section className="section-shell pb-24" id="booking-cta">
      <div className="rounded-[34px] border border-[#f2bfd0] bg-[linear-gradient(180deg,#ffe7ef_0%,#ffdbe7_100%)] px-6 py-10 text-center shadow-[0_20px_80px_rgba(201,83,124,0.16)] sm:px-12 sm:py-14">
        <p className="section-label mb-4">Flirt with style.</p>
        <h2 className="font-[family:var(--font-display)] text-[42px] leading-[0.96] tracking-[-0.05em] text-[var(--text)] sm:text-[64px]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-8 text-[var(--text-soft)]">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="mailto:hello.shopflirt@gmail.com" className="button-primary">
            Book your free intro call
          </a>
          <Link href={secondaryHref} className="button-secondary bg-white/70">
            {secondaryLabel}
          </Link>
        </div>
        <p className="mt-6 text-[14px] uppercase tracking-[0.26em] text-[var(--text-soft)]">
          hello.shopflirt@gmail.com · Denver, CO
        </p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-[family:var(--font-display)] text-[24px] text-[var(--text)]">FLIRT Styling LLC</p>
          <p className="mt-2 text-[15px] text-[var(--text-soft)]">© 2025 FLIRT Styling. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--text-soft)]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--pink-text)]">
              {item.label}
            </Link>
          ))}
          <a href="#booking-cta" className="transition hover:text-[var(--pink-text)]">
            Book Now
          </a>
        </nav>
      </div>
    </footer>
  );
}

export function PackagePreviewCard({ pkg, cta }: { pkg: PackageCard; cta: string }) {
  return (
    <article
      className={`rounded-[30px] border px-6 py-7 shadow-[0_14px_50px_rgba(39,20,1,0.05)] transition hover:-translate-y-1 sm:px-7 sm:py-8 ${
        pkg.featured
          ? "border-[var(--pink)] bg-[linear-gradient(180deg,#fff7fa_0%,#fffdfb_100%)]"
          : "border-[var(--border)] bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-[family:var(--font-display)] text-[34px] leading-none text-[var(--text)]">{pkg.name}</h3>
          <p className="mt-4 text-[32px] font-semibold tracking-[-0.04em] text-[var(--text)]">{pkg.price}</p>
        </div>
        {pkg.eyebrow ? <span className="pill-badge">{pkg.eyebrow}</span> : null}
      </div>
      <p className="mt-5 text-[19px] leading-8 text-[var(--text)]">{pkg.subtitle}</p>
      {pkg.description ? <p className="mt-4 text-[16px] leading-7 text-[var(--text-soft)]">{pkg.description}</p> : null}
      <ul className="mt-6 space-y-3 text-[16px] leading-7 text-[var(--text-soft)]">
        {pkg.bullets.map((bullet) => (
          <li key={bullet}>- {bullet}</li>
        ))}
      </ul>
      <p className="mt-6 text-[17px] italic text-[var(--pink-text)]">{pkg.note}</p>
      <a href="#booking-cta" className="button-outline mt-7">
        {cta}
      </a>
    </article>
  );
}
