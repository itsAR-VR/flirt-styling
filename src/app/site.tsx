import Image from "next/image";
import Link from "next/link";

/* ─── Data ─── */

export type PackageCard = {
  name: string;
  price: string;
  eyebrow?: string;
  subtitle: string;
  bullets: string[];
  note: string;
  noteColor?: string;
  featured?: boolean;
  borderHighlight?: string;
  bookingUrl?: string;
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
    borderHighlight: "#F5A1BE",
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
    subtitle: "Lighter closet,\nClearer mind",
    bullets: [
      "- In-person, at your home",
      "- Piece by piece review",
      "- Keep, donate, or let go",
      "- Donations handled",
    ],
    note: "Out with the old...",
  },
  {
    name: "The Edit",
    price: "$229",
    eyebrow: "organization",
    subtitle: "Order, ease, and a\nsystem that sticks.",
    bullets: [
      "- In-person, at your home",
      "- No cleanout needed",
      "- Closet fully organized",
      "- Made to last",
    ],
    note: "A place for everything",
  },
  {
    name: "The Full Reset",
    price: "$399",
    eyebrow: "best value",
    subtitle: "Both services,\nOne visit",
    bullets: [
      "- In-person, at your home",
      "- Cleanout + organization",
      "- Two sessions in one",
      "- Bundle Deal: Save $59",
    ],
    note: "Get 20% off styling!",
    featured: true,
    borderHighlight: "#C9537C",
  },
];

/* ─── Shared Components ─── */

export function TopGradientBar() {
  return (
    <div
      style={{
        height: 5,
        background:
          "linear-gradient(90deg, #E8849F 0%, #F5A1BE 30%, #F5A1BE 70%, #E8849F 100%)",
      }}
    />
  );
}

export function SiteHeader({ activePage = "home" }: { activePage?: string }) {
  return (
    <>
      <TopGradientBar />
      <header
        style={{
          background: "#F5A1BE",
          padding: "18px 0 22px",
        }}
      >
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "block", flexShrink: 0 }}>
            <Image
              src="/assets/logo-full.png"
              alt="Flirt Styling"
              width={310}
              height={90}
              style={{ height: "auto", width: 145 }}
              priority
            />
          </Link>
          <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 19,
                color: "#3B2314",
                letterSpacing: "0.5px",
              }}
            >
              HOME
            </Link>
            <Link
              href="/about"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 19,
                color: "#3B2314",
                letterSpacing: "0.5px",
              }}
            >
              ABOUT US
            </Link>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 19,
                color: "#3B2314",
                letterSpacing: "0.5px",
              }}
            >
              HOME
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function FinalCta() {
  return (
    <section style={{ textAlign: "center", padding: "80px 20px 60px" }}>
      {/* Chip */}
      <div
        style={{
          display: "inline-block",
          background: "#FFE4EB",
          borderRadius: 20,
          padding: "8px 28px",
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-medium-italic)",
            fontSize: 17,
            color: "#C9537C",
          }}
        >
          It&apos;s free, No commitment
        </span>
      </div>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 48,
          lineHeight: 1.15,
          color: "#C9537C",
          maxWidth: 700,
          margin: "0 auto 18px",
        }}
      >
        Not sure where to start?
      </h2>

      <p
        style={{
          fontFamily: "var(--font-semibold)",
          fontSize: 17,
          lineHeight: 1.4,
          color: "var(--text-body)",
          marginBottom: 4,
        }}
      >
        Book a free intro call with a Flirt Stylist!
      </p>
      <p
        style={{
          fontFamily: "var(--font-medium)",
          fontSize: 17,
          lineHeight: 1.4,
          color: "var(--text-body)",
          marginBottom: 24,
        }}
      >
        We&apos;ll walk you through the services, answer your questions, and help you figure out what&apos;s right for you.
      </p>

      <a
        href="https://calendar.app.google/H3H8wtu1w3xfAZVT9"
        target="_blank"
        rel="noreferrer"
        className="btn-primary"
        style={{ fontSize: 17, height: 48, padding: "0 32px" }}
      >
        Book Your Free Intro Call! &nbsp;
        <span style={{ fontSize: 18 }}>📞</span>
      </a>

      <p
        style={{
          fontFamily: "var(--font-medium)",
          fontSize: 14,
          color: "var(--text-body)",
          marginTop: 20,
        }}
      >
        hello.shopflirt@gmail.com &middot; Denver, CO &middot; Flirt with style.
      </p>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "#3B321D",
        padding: "40px 20px 30px",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 18 }}>
        <a href="https://www.instagram.com/flirtstyling/" target="_blank" rel="noreferrer" style={{ opacity: 0.9, transition: "opacity 0.3s" }}>
          <Image src="/assets/instagram.png" alt="Instagram" width={28} height={28} style={{ filter: "brightness(10)", width: 28, height: 28 }} />
        </a>
        <a href="https://www.facebook.com/p/FLIRT-Styling-Shopping-Services-61579022199301/" target="_blank" rel="noreferrer" style={{ opacity: 0.9, transition: "opacity 0.3s" }}>
          <Image src="/assets/facebook.png" alt="Facebook" width={28} height={28} style={{ filter: "brightness(10)", width: 28, height: 28 }} />
        </a>
        <a href="https://www.linkedin.com/company/flirt-styling/" target="_blank" rel="noreferrer" style={{ opacity: 0.9, transition: "opacity 0.3s" }}>
          <Image src="/assets/linkedin.png" alt="LinkedIn" width={28} height={28} style={{ filter: "brightness(10)", width: 28, height: 28 }} />
        </a>
      </div>
      <p
        style={{
          fontFamily: "var(--font-price)",
          fontSize: 14,
          color: "#D4CFC8",
          margin: 0,
        }}
      >
        &copy; 2025 FLIRT Styling. All rights reserved.
      </p>
    </footer>
  );
}

export function PackagePreviewCard({ pkg }: { pkg: PackageCard }) {
  return (
    <article
      className="package-card"
      style={{
        background: "#F8F3EF",
        borderRadius: 8,
        border: pkg.borderHighlight
          ? `2px solid ${pkg.borderHighlight}`
          : "1px solid rgba(39,20,1,0.08)",
        padding: "20px 22px 22px",
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Eyebrow */}
      {pkg.eyebrow && (
        <span
          style={{
            display: "inline-block",
            alignSelf: "flex-start",
            background: "#FFE4EB",
            borderRadius: 12,
            padding: "4px 14px",
            fontFamily: "var(--font-medium-italic)",
            fontSize: 13,
            color: "#C9537C",
            marginBottom: 10,
          }}
        >
          {pkg.eyebrow}
        </span>
      )}

      {/* Name */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 30,
          lineHeight: 1.1,
          color: "var(--text-dark)",
          margin: 0,
        }}
      >
        {pkg.name}
      </h3>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "var(--font-medium-italic)",
          fontSize: 16,
          lineHeight: 1.3,
          color: "var(--text-body)",
          margin: "6px 0 0",
          whiteSpace: "pre-line",
        }}
      >
        {pkg.subtitle}
      </p>

      {/* Price */}
      <p
        style={{
          fontFamily: "var(--font-price)",
          fontSize: 48,
          lineHeight: 1,
          color: "#C9537C",
          margin: "14px 0 0",
        }}
      >
        {pkg.price}
      </p>

      {/* Divider */}
      <div style={{ height: 1, background: "#D6CFCB", margin: "16px 0 14px" }} />

      {/* Bullets */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {pkg.bullets.map((bullet) => {
          // Bold the leading number if present (e.g. "2 clothing categories" -> bold "2")
          const match = bullet.match(/^(\d+)\s(.+)$/);
          const dashMatch = bullet.match(/^- (.+)$/);
          return (
            <li
              key={bullet}
              style={{
                fontFamily: "var(--font-medium)",
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--text-dark)",
              }}
            >
              {match ? (
                <>
                  <strong style={{ fontFamily: "var(--font-price)", fontSize: 18 }}>{match[1]}</strong>{" "}
                  {match[2]}
                </>
              ) : dashMatch ? (
                <>- {dashMatch[1]}</>
              ) : (
                bullet
              )}
            </li>
          );
        })}
      </ul>

      {/* Note */}
      <p
        style={{
          fontFamily: "var(--font-medium-italic)",
          fontSize: 15,
          color: "#C9537C",
          margin: "14px 0 0",
        }}
      >
        {pkg.note}
      </p>

      {/* Book button */}
      <div style={{ marginTop: 18 }}>
        <a
          href="https://calendar.app.google/H3H8wtu1w3xfAZVT9"
          target="_blank"
          rel="noreferrer"
          className="btn-book-package"
        >
          Book this package
        </a>
      </div>
    </article>
  );
}

export function ChatWidgetMock() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 22,
        right: 22,
        zIndex: 40,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#4A3728",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 18px rgba(39,20,1,0.18)",
        cursor: "pointer",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </div>
  );
}
