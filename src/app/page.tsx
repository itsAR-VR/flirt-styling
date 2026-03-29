import Link from "next/link";
import {
  ChatWidgetMock,
  FinalCta,
  PackagePreviewCard,
  SiteFooter,
  SiteHeader,
  closetPackages,
  onlinePackages,
} from "./site";

/* ─── Persona cards ─── */

const personas = [
  {
    title: "Working Professionals",
    body: "Need a polished wardrobe but your schedule barely leaves room to breathe.",
    bg: "#FFE4EB",
  },
  {
    title: "Busy Parents",
    body: "Juggling everything and still want to feel put-together without shopping being one more task.",
    bg: "#FFDAE5",
  },
  {
    title: "Lifestyle Changers",
    body: "Something shifted. Your wardrobe needs to keep up with who you\u2019re becoming.",
    bg: "#FFE4EB",
  },
  {
    title: "Shopping Haters",
    body: "Those who want to dress well but have no idea where to start, where to buy, or who to trust.",
    bg: "#FFDAE5",
  },
];

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="site-container" style={{ paddingTop: 70 }}>
      {/* Location chip */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "#FFE4EB",
          borderRadius: 20,
          padding: "6px 18px",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-medium)",
            fontSize: 14,
            color: "#C9537C",
          }}
        >
          &bull; Denver, CO - Online Services
        </span>
      </div>

      {/* FLIRT STYLING */}
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          lineHeight: 1.2,
          color: "#271401",
          margin: "0 0 2px",
          letterSpacing: "1px",
        }}
      >
        FLIRT STYLING
      </p>

      {/* Main headline */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 52,
          lineHeight: 1.25,
          color: "#3B1E0C",
          margin: "0 0 24px",
          maxWidth: 700,
        }}
      >
        Real Style for Real Life.
      </h1>

      {/* Body copy */}
      <div style={{ maxWidth: 830 }}>
        <p
          style={{
            fontFamily: "var(--font-semibold)",
            fontSize: 18,
            lineHeight: 1.4,
            color: "var(--text-body)",
            margin: "0 0 16px",
          }}
        >
          Flirt was built on a simple belief: Great style should be for everyone.
        </p>

        <p
          style={{
            fontFamily: "var(--font-medium)",
            fontSize: 18,
            lineHeight: 1.5,
            color: "var(--text-body)",
            margin: "0 0 16px",
          }}
        >
          Sydney has spent over a decade in fashion and retail watching people struggle to find clothes
          that made them feel confident. Not because they didn&apos;t care, but because nobody made it easy
          for them.
        </p>

        <p
          style={{
            fontFamily: "var(--font-medium-italic)",
            fontSize: 18,
            lineHeight: 1.3,
            color: "var(--text-body)",
            margin: "0 0 16px",
          }}
        >
          Flirt exists to change that.
        </p>

        <p
          style={{
            fontFamily: "var(--font-medium)",
            fontSize: 18,
            lineHeight: 1.5,
            color: "var(--text-body)",
            margin: "0 0 16px",
          }}
        >
          Whether you&apos;re a busy professional, a parent on the go, or just someone who&apos;s tired of not
          knowing where to start, you deserve style that{" "}
          <span style={{ fontFamily: "var(--font-medium-italic)" }}>
            fits your budget, works with what you already own, and actually makes sense for your life.
          </span>
        </p>

        <p
          style={{
            fontFamily: "var(--font-semibold)",
            fontSize: 18,
            lineHeight: 1.3,
            color: "var(--text-body)",
            margin: "0 0 28px",
          }}
        >
          We do the work. You just get dressed and feel like yourself.
        </p>
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <a
          href="https://calendar.app.google/H3H8wtu1w3xfAZVT9"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          style={{ padding: "0 28px", fontSize: 16, gap: 8 }}
        >
          Book Your Free Intro Call
          <span style={{ fontSize: 18 }}>📱</span>
        </a>
        <Link
          href="/online-styling"
          className="link-arrow"
          style={{ fontSize: 18 }}
        >
          See Our Services→
        </Link>
      </div>
    </section>
  );
}

/* ─── Persona Section ─── */

function PersonaSection() {
  return (
    <section className="site-container" style={{ paddingTop: 70 }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          lineHeight: 1.4,
          color: "var(--text-dark)",
          margin: "0 0 16px",
          letterSpacing: "0.5px",
        }}
      >
        WHO IS THIS FOR
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
      >
        {personas.map((persona) => (
          <div
            key={persona.title}
            style={{
              background: persona.bg,
              borderRadius: 10,
              padding: "20px 18px",
              minHeight: 150,
              transition: "background-color 0.4s ease",
              cursor: "default",
            }}
            className="persona-card"
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                lineHeight: 1.15,
                color: "#3B1E0C",
                margin: "0 0 10px",
              }}
            >
              {persona.title}
            </p>
            <p
              style={{
                fontFamily: "var(--font-medium)",
                fontSize: 15,
                lineHeight: 1.35,
                color: "#5A3520",
                margin: 0,
              }}
            >
              {persona.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Service Section (reusable for online + closet) ─── */

function ServiceSection({
  title,
  description,
  extraDescription,
  href,
  packages,
}: {
  title: string;
  description: React.ReactNode;
  extraDescription?: string;
  href: string;
  packages: typeof onlinePackages;
}) {
  return (
    <section className="site-container" style={{ paddingTop: 70 }}>
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, marginBottom: 12 }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            lineHeight: 1.4,
            color: "var(--text-dark)",
            margin: 0,
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </h2>
        <Link
          href={href}
          className="link-arrow"
          style={{ fontSize: 17, flexShrink: 0 }}
        >
          See Full Details→
        </Link>
      </div>

      {/* Description */}
      <div style={{ marginBottom: 20 }}>
        <p
          style={{
            fontFamily: "var(--font-medium)",
            fontSize: 17,
            lineHeight: 1.5,
            color: "var(--text-body)",
            margin: 0,
          }}
        >
          {description}
        </p>
        {extraDescription && (
          <p
            style={{
              fontFamily: "var(--font-medium)",
              fontSize: 17,
              lineHeight: 1.5,
              color: "var(--text-body)",
              margin: "8px 0 0",
            }}
          >
            {extraDescription}
          </p>
        )}
      </div>

      {/* Package cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {packages.map((pkg) => (
          <PackagePreviewCard key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}

/* ─── Homepage ─── */

export default function HomePage() {
  return (
    <>
      <SiteHeader activePage="home" />
      <main style={{ background: "var(--bg)", paddingBottom: 0 }}>
        <Hero />
        <PersonaSection />

        <ServiceSection
          title="ONLINE STYLING SERVICES"
          description={
            <>
              All packages include a{" "}
              <strong style={{ fontFamily: "var(--font-semibold)" }}>video consultation</strong> and a
              personally selected,{" "}
              <strong style={{ fontFamily: "var(--font-semibold)" }}>shoppable styling guide</strong>,
              delivered as a PDF with direct links, brand details, sizing notes, and return information
              for every piece.
            </>
          }
          href="/online-styling"
          packages={onlinePackages}
        />

        <ServiceSection
          title="CLOSET CLEANOUT & ORGANIZATION SERVICES"
          description={
            <>
              All services include a{" "}
              <strong style={{ fontFamily: "var(--font-semibold)" }}>video consultation</strong> and an{" "}
              <strong style={{ fontFamily: "var(--font-semibold)" }}>
                in-person session with a Flirt Stylist
              </strong>{" "}
              at your home, honest, judgment-free, and done right.
            </>
          }
          extraDescription="Your space is left clean and organized, and any donations are handled for you."
          href="/closet-services"
          packages={closetPackages}
        />

        <FinalCta />
      </main>
      <SiteFooter />
      <ChatWidgetMock />
    </>
  );
}
