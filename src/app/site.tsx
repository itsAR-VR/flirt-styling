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
    note: "Book this package",
  },
  {
    name: "The Hookup",
    price: "$199",
    eyebrow: "most popular!",
    subtitle: "Elevate your everyday",
    bullets: ["4 clothing categories", "5 pieces each", "20 total"],
    note: "Book this package",
    featured: true,
  },
  {
    name: "The Soulmate",
    price: "$249",
    eyebrow: "premium",
    subtitle: "Full wardrobe refresh",
    bullets: ["6 clothing categories", "5 pieces each", "30 total"],
    note: "Book this package",
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
    <header className="pointer-events-none absolute left-0 top-0 z-30 w-full bg-transparent">
      <div className="mx-auto flex w-full max-w-[980px] items-start justify-between px-[77px] pt-[32px]">
        <Link href="/" className="pointer-events-auto shrink-0">
          <Image src="/assets/logo-full.png" alt="Flirt Styling" width={310} height={90} className="h-auto w-[155px]" priority />
        </Link>
        <div className="pointer-events-auto flex items-center gap-[24px] pt-[6px]">
          <nav className="hidden items-center gap-[26px] lg:flex">
            <Link href="/" className="font-[family:var(--font-display)] text-[19px] leading-[1.2] text-[var(--text)] transition-colors duration-[400ms] hover:text-[var(--pink-text)]">
              HOME
            </Link>
            <Link href="/about" className="font-[family:var(--font-display)] text-[19px] leading-[1.2] text-[var(--text)] transition-colors duration-[400ms] hover:text-[var(--pink-text)]">
              ABOUT US
            </Link>
          </nav>
          <a href="https://app.squarespacescheduling.com/schedule.php?owner=32794738" target="_blank" rel="noreferrer" className="wix-button-primary hidden sm:inline-flex">
            <span className="mr-[8px] inline-block text-[11px]">✦</span>
            Book Your Free Intro Call
          </a>
        </div>
      </div>
    </header>
  );
}

export function FinalCta() {
  return (
    <section className="mx-auto mt-[36px] w-full max-w-[980px] px-[77px] pb-[10px]" id="booking-cta">
      <div className="py-[6px] text-left">
        <p className="font-[family:var(--font-display)] text-[30px] leading-[1.2] text-[var(--text)]">Not sure where to start?</p>
        <p className="mt-[10px] max-w-[780px] font-[family:var(--font-regular-display)] text-[18px] leading-[22.8px] text-[var(--text)]">
          Book a free intro call with a Flirt Stylist. She&apos;ll walk you through the services, answer your questions, and help you figure out what&apos;s right for you.
        </p>
        <div className="mt-[14px] flex items-center gap-[20px]">
          <a href="https://app.squarespacescheduling.com/schedule.php?owner=32794738" target="_blank" rel="noreferrer" className="wix-button-primary">
            <span className="mr-[8px] inline-block text-[11px]">✦</span>
            Book Your Free Intro Call
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[980px] px-[77px] pb-[18px] pt-[10px] text-center">
      <div className="flex items-center justify-center gap-[14px] pb-[10px]">
        <a href="https://www.instagram.com/flirt.withstyle/" target="_blank" rel="noreferrer">
          <Image src="/assets/instagram.png" alt="Instagram" width={35} height={35} className="h-[35px] w-[35px]" />
        </a>
        <a href="https://www.facebook.com/flirt.withstyle" target="_blank" rel="noreferrer">
          <Image src="/assets/facebook.png" alt="Facebook" width={35} height={35} className="h-[35px] w-[35px]" />
        </a>
        <a href="https://www.linkedin.com/company/flirt-styling" target="_blank" rel="noreferrer">
          <Image src="/assets/linkedin.png" alt="LinkedIn" width={35} height={35} className="h-[35px] w-[35px]" />
        </a>
      </div>
      <p className="font-[family:var(--font-regular-display)] text-[14px] leading-[1.2] text-[var(--text)]">© 2025 by FLIRT Styling LLC</p>
    </footer>
  );
}

export function PackagePreviewCard({ pkg }: { pkg: PackageCard }) {
  return (
    <article className="rounded-[10px] border border-[rgba(39,20,1,0.14)] bg-white px-[16px] py-[16px] shadow-none">
      <div className="flex items-start justify-between gap-[10px]">
        <div>
          <h3 className="font-[family:var(--font-display)] text-[27px] leading-[1.08] text-[var(--text)]">{pkg.name}</h3>
          <p className="mt-[6px] font-[family:var(--font-display)] text-[24px] leading-[1.05] text-[var(--text)]">{pkg.price}</p>
        </div>
        {pkg.eyebrow ? <span className="font-[family:var(--font-regular-display)] text-[13px] leading-[1.2] text-[var(--pink-text)]">{pkg.eyebrow}</span> : null}
      </div>
      <p className="mt-[10px] font-[family:var(--font-display)] text-[19px] leading-[1.12] text-[var(--text)]">{pkg.subtitle}</p>
      <ul className="mt-[12px] space-y-[2px] font-[family:var(--font-regular-display)] text-[15px] leading-[1.2] text-[var(--text)]">
        {pkg.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="mt-[12px]">
        <a href="https://app.squarespacescheduling.com/schedule.php?owner=32794738" target="_blank" rel="noreferrer" className="wix-button-primary text-[12px]">
          {pkg.note}
        </a>
      </div>
    </article>
  );
}

export function ChatWidgetMock() {
  return (
    <div className="fixed bottom-[22px] right-[18px] z-40 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[rgba(39,20,1,0.12)] bg-white shadow-[0_4px_18px_rgba(39,20,1,0.14)]">
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#111] text-[18px] text-white">…</div>
    </div>
  );
}
