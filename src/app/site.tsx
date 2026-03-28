import Image from "next/image";
import Link from "next/link";

type PackageCard = {
  name: string;
  price: string;
  eyebrow?: string;
  subtitle: string;
  bullets: string[];
  note: string;
  featured?: boolean;
};

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
    subtitle: "Out with the old...",
    bullets: ["In-person, at your home", "Piece by piece review", "Keep, donate, or let go", "Donations handled"],
    note: "Book this package",
  },
  {
    name: "The Edit",
    price: "$229",
    eyebrow: "organization",
    subtitle: "A place for everything",
    bullets: ["In-person, at your home", "No cleanout needed", "Closet fully organized", "Made to last"],
    note: "Book this package",
  },
  {
    name: "The Full Reset",
    price: "$399",
    eyebrow: "best value",
    subtitle: "The full transformation",
    bullets: ["In-person, at your home", "Cleanout + organization", "Donations handled", "Save $59 overall"],
    note: "Book this package",
    featured: true,
  },
];

export function SiteHeader() {
  return (
    <header className="w-full bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-[980px] items-center justify-between px-[77px] pt-[24px] pb-[18px]">
        <Link href="/" className="shrink-0">
          <Image src="/assets/logo-full.png" alt="Flirt Styling" width={310} height={90} className="h-auto w-[155px]" priority />
        </Link>
        <div className="flex items-center gap-[34px]">
          <nav className="hidden items-center gap-[28px] lg:flex">
            <Link href="/" className="font-[family:var(--font-display)] text-[19px] leading-[1.2] text-[var(--text)] transition-colors duration-[400ms] hover:text-[var(--pink-text)]">
              HOME
            </Link>
            <Link href="/about" className="font-[family:var(--font-display)] text-[19px] leading-[1.2] text-[var(--text)] transition-colors duration-[400ms] hover:text-[var(--pink-text)]">
              ABOUT US
            </Link>
            <Link href="/about" className="font-[family:var(--font-display)] text-[19px] leading-[1.2] text-[var(--text)] transition-colors duration-[400ms] hover:text-[var(--pink-text)]">
              About Us
            </Link>
          </nav>
          <a href="#booking-cta" className="wix-button-primary hidden sm:inline-flex">
            Book Your Free Intro Call
          </a>
        </div>
      </div>
    </header>
  );
}

export function FinalCta() {
  return (
    <section className="mx-auto mt-[48px] w-full max-w-[980px] px-[77px] pb-[18px]" id="booking-cta">
      <div className="rounded-[0px] bg-[var(--surface)] py-[6px] text-left">
        <p className="font-[family:var(--font-display)] text-[30px] leading-[1.2] text-[var(--text)]">Not sure where to start?</p>
        <p className="mt-[10px] max-w-[770px] font-[family:var(--font-regular-display)] text-[18px] leading-[1.2] text-[var(--text)]">
          Book a free intro call with a Flirt Stylist. She&apos;ll walk you through the services, answer your questions, and help you figure out what&apos;s right for you.
        </p>
        <div className="mt-[16px] flex items-center gap-[20px]">
          <a href="mailto:hello.shopflirt@gmail.com" className="wix-button-primary">
            Book Your Free Intro Call
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[980px] px-[77px] pb-[34px] pt-[8px] text-center">
      <div className="flex items-center justify-center gap-[14px] pb-[12px]">
        <a href="https://www.instagram.com/flirt.withstyle/" target="_blank" rel="noreferrer">
          <Image src="/assets/instagram.png" alt="Instagram" width={35} height={35} className="h-[35px] w-[35px]" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Image src="/assets/facebook.png" alt="Facebook" width={35} height={35} className="h-[35px] w-[35px]" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <Image src="/assets/linkedin.png" alt="LinkedIn" width={35} height={35} className="h-[35px] w-[35px]" />
        </a>
      </div>
      <p className="font-[family:var(--font-regular-display)] text-[14px] leading-[1.2] text-[var(--text)]">© 2025 by FLIRT Styling LLC. Powered and secured by Wix</p>
    </footer>
  );
}

export function PackagePreviewCard({ pkg }: { pkg: PackageCard }) {
  return (
    <article className="rounded-[8px] border border-[rgba(39,20,1,0.12)] bg-white px-[18px] py-[18px] shadow-none transition-colors duration-[400ms] hover:border-[rgba(201,83,124,0.28)]">
      <div className="flex items-start justify-between gap-[12px]">
        <div>
          <h3 className="font-[family:var(--font-display)] text-[28px] leading-[1.1] text-[var(--text)]">{pkg.name}</h3>
          <p className="mt-[8px] font-[family:var(--font-display)] text-[26px] leading-[1.05] text-[var(--text)]">{pkg.price}</p>
        </div>
        {pkg.eyebrow ? <span className="font-[family:var(--font-regular-display)] text-[14px] leading-[1.2] text-[var(--pink-text)]">{pkg.eyebrow}</span> : null}
      </div>
      <p className="mt-[12px] font-[family:var(--font-display)] text-[20px] leading-[1.15] text-[var(--text)]">{pkg.subtitle}</p>
      <ul className="mt-[14px] space-y-[2px] font-[family:var(--font-regular-display)] text-[16px] leading-[1.22] text-[var(--text)]">
        {pkg.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="mt-[14px]">
        <a href="#booking-cta" className="wix-button-primary text-[12px]">
          {pkg.note}
        </a>
      </div>
    </article>
  );
}
