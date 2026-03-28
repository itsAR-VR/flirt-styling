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
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const onlinePackages: PackageCard[] = [
  {
    name: "The Fling",
    price: "$149",
    eyebrow: "starter",
    subtitle: "Refresh your look",
    bullets: ["2 clothing categories", "5 pieces each", "10 total"],
    note: "Handpicked for you",
  },
  {
    name: "The Hookup",
    price: "$199",
    eyebrow: "most popular!",
    subtitle: "Elevate your everyday",
    bullets: ["4 clothing categories", "5 pieces each", "20 total"],
    note: "Handpicked for you",
    featured: true,
  },
  {
    name: "The Soulmate",
    price: "$249",
    eyebrow: "premium",
    subtitle: "Full wardrobe refresh",
    bullets: ["6 clothing categories", "5 pieces each", "30 total"],
    note: "Handpicked for you",
  },
];

export const closetPackages: PackageCard[] = [
  {
    name: "The Breakup",
    price: "$229",
    eyebrow: "cleanout",
    subtitle: "Lighter closet, clearer mind",
    bullets: [
      "In-person, at your home",
      "Piece by piece review",
      "Keep, donate, or let go",
      "Donations handled",
    ],
    note: "Out with the old...",
  },
  {
    name: "The Edit",
    price: "$229",
    eyebrow: "organization",
    subtitle: "Order, ease, and a system that sticks.",
    bullets: ["In-person, at your home", "No cleanout needed", "Closet fully organized", "Made to last"],
    note: "A place for everything",
  },
  {
    name: "The Full Reset",
    price: "$399",
    eyebrow: "best value",
    subtitle: "Everything in one visit.",
    bullets: ["In-person, at your home", "Cleanout + organization", "Donations handled", "Save $59 overall"],
    note: "Most efficient option",
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
    <header className="sticky top-0 z-50 border-b border-[rgba(39,20,1,0.06)] bg-[rgba(255,253,251,0.96)] backdrop-blur-md">
      <div className="page-shell flex items-center justify-between gap-6 py-5">
        <Link href="/" className="shrink-0">
          <Image src="/assets/logo-full.png" alt="Flirt Styling" width={310} height={90} className="h-auto w-[155px]" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = item.href === activePath;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-normal tracking-[0.02em] transition ${
                  active ? "text-[var(--pink-text)]" : "text-[var(--text)] hover:text-[var(--pink-text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a href="#booking-cta" className="button-primary hidden sm:inline-flex">
          <span>Book Your Free Intro Call</span>
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
      <div className="rounded-[36px] border border-[rgba(201,83,124,0.2)] bg-[linear-gradient(180deg,#ffeef4_0%,#fff7fa_100%)] px-6 py-10 text-center shadow-[0_22px_80px_rgba(201,83,124,0.12)] sm:px-12 sm:py-14 animate-float-in">
        <p className="section-label mb-2">Ready to book?</p>
        <h2 className="font-[family:var(--font-display)] text-[42px] leading-[0.94] tracking-[-0.05em] text-[var(--text)] sm:text-[64px]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-8 text-[var(--text-soft)]">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="mailto:hello.shopflirt@gmail.com" className="button-primary">
            <span>Book your free intro call</span>
          </a>
          <Link href={secondaryHref} className="button-secondary bg-white/80">
            <span>{secondaryLabel}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-[rgba(39,20,1,0.06)] bg-[var(--surface)]">
      <div className="page-shell flex flex-col gap-6 py-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <Image src="/assets/logo-full.png" alt="Flirt Styling" width={310} height={90} className="h-auto w-[165px]" />
          <p className="max-w-[360px] text-[16px] leading-7 text-[var(--text-soft)]">
            Personal styling and closet organization services for real life, based in Denver and available online.
          </p>
        </div>
        <div className="space-y-5">
          <nav className="flex flex-wrap justify-start gap-x-5 gap-y-3 text-[14px] text-[var(--text)] lg:justify-end">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--pink-text)]">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 lg:justify-end">
            <a href="https://www.instagram.com/flirt.withstyle/" target="_blank" rel="noreferrer">
              <Image src="/assets/instagram.png" alt="Instagram" width={35} height={35} className="transition hover:scale-105" />
            </a>
            <a href="#" aria-disabled="true">
              <Image src="/assets/facebook.png" alt="Facebook" width={35} height={35} className="opacity-80 transition hover:scale-105" />
            </a>
            <a href="#" aria-disabled="true">
              <Image src="/assets/linkedin.png" alt="LinkedIn" width={35} height={35} className="opacity-80 transition hover:scale-105" />
            </a>
          </div>
          <p className="text-[13px] text-[var(--text-soft)] lg:text-right">© 2025 by FLIRT Styling LLC. Powered and rebuilt in custom code.</p>
        </div>
      </div>
    </footer>
  );
}

export function PackagePreviewCard({ pkg, cta }: { pkg: PackageCard; cta: string }) {
  return (
    <article
      className={`fade-card rounded-[30px] border px-6 py-7 shadow-[0_14px_50px_rgba(39,20,1,0.04)] sm:px-7 sm:py-8 ${
        pkg.featured
          ? "border-[rgba(201,83,124,0.22)] bg-[linear-gradient(180deg,#fff4f8_0%,#fffdfb_100%)]"
          : "border-[rgba(39,20,1,0.08)] bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-[family:var(--font-display)] text-[34px] leading-none text-[var(--text)]">{pkg.name}</h3>
          <p className="mt-4 text-[32px] font-medium tracking-[-0.04em] text-[var(--text)]">{pkg.price}</p>
        </div>
        {pkg.eyebrow ? <span className="pill-badge">{pkg.eyebrow}</span> : null}
      </div>
      <p className="mt-5 font-[family:var(--font-display)] text-[26px] leading-[1.04] text-[var(--text)]">{pkg.subtitle}</p>
      {pkg.description ? <p className="mt-4 text-[16px] leading-7 text-[var(--text-soft)]">{pkg.description}</p> : null}
      <ul className="mt-6 space-y-2.5 text-[16px] leading-7 text-[var(--text-soft)]">
        {pkg.bullets.map((bullet) => (
          <li key={bullet}>- {bullet}</li>
        ))}
      </ul>
      <p className="mt-6 text-[17px] text-[var(--pink-text)]">{pkg.note}</p>
      <a href="#booking-cta" className="button-outline mt-7">
        <span>{cta}</span>
      </a>
    </article>
  );
}
