import Link from "next/link";
import {
  SiteHeader,
  SiteFooter,
  FinalCta,
  ChatWidgetMock,
  ServiceImageCard,
  onlinePackages,
} from "../site";

/* ─── Data ─── */

const steps = [
  {
    title: "Book your package",
    body: "Choose the package that feels right and book your video consultation through the Flirt website. You'll receive a confirmation with everything you need to prepare.",
  },
  {
    title: "Prepare for your call",
    body: "You'll get simple prep instructions — like knowing your sizes and having a few current pieces nearby. We style around what you already own. The goal isn't a brand new closet — it's making what you love go further.",
  },
  {
    title: "Video consultation with your stylist",
    body: "A Flirt Stylist will ask about your lifestyle, goals, budget, comfort preferences, and how you like to receive information. This isn't a form — it's a real conversation designed to make your styling guide feel truly personal to you.",
  },
  {
    title: "We do the research",
    body: "Before anything makes it into your guide, a Flirt Stylist vets every brand — quality, return policy, sizing accuracy, and trustworthiness. You won't be sent to a shady website or left guessing. If it's in your guide, it's there for a reason.",
  },
  {
    title: "Receive your styling guide",
    body: "You'll receive a personalized PDF with everything you need to shop with confidence — direct links, brand notes, sizing guidance, and return information all in one place.",
  },
];

const faqs: [string, string][] = [
  [
    "What are clothing categories?",
    "Clothing categories are different types of items in your wardrobe — like tops, bottoms, dresses, outerwear, and accessories. Each package includes a certain number of categories so you get a balanced collection of pieces.",
  ],
  [
    "Do I have to buy everything in the guide?",
    "Not at all! Your styling guide is a personalized selection of recommendations. You're in complete control — buy what speaks to you, skip what doesn't, and take your time.",
  ],
  [
    "What if I have a tight budget?",
    "Your budget is one of the first things we talk about in your consultation. We'll make sure your styling guide works for your wallet and includes quality pieces that offer great value.",
  ],
  [
    "Will I have to buy a whole new wardrobe?",
    "No way! We style around the pieces you already love. Our goal is to make what you own work harder and feel more cohesive — not to replace everything. Quality over quantity, always.",
  ],
  [
    "How do I know the brands are trustworthy?",
    "We vet every single brand before it goes into your guide. We check quality, return policies, sizing accuracy, and overall trustworthiness. If it's recommended by Flirt, we stand behind it.",
  ],
  [
    "How long is the video consultation?",
    "Your consultation typically lasts 45-60 minutes. That's enough time to really get to know you, understand your style, and make sure the guide we create is truly personal to you.",
  ],
];

/* ─── Page ─── */

export default function OnlineStylingPage() {
  return (
    <>
      <SiteHeader activePage="online-styling" />
      <main style={{ background: "var(--bg)" }}>
        {/* ── Hero ── */}
        <section className="site-container" style={{ paddingTop: 56, paddingBottom: 48 }}>
          <div
            style={{
              borderRadius: 28,
              border: "1px solid rgba(39,20,1,0.06)",
              background: "#fff",
              padding: "48px 44px",
              boxShadow: "0 20px 70px rgba(39,20,1,0.05)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "#FFE4EB",
                borderRadius: 20,
                padding: "6px 22px",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-medium-italic)",
                  fontSize: 15,
                  color: "#C9537C",
                }}
              >
                Online Styling &amp; Shopping Services
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 46,
                lineHeight: 0.96,
                letterSpacing: "-0.03em",
                color: "var(--text-dark)",
                maxWidth: 700,
                margin: "0 0 20px",
              }}
            >
              Feel confident in what you wear — without the stress of shopping.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-medium)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--text-body)",
                maxWidth: 680,
                margin: "0 0 28px",
              }}
            >
              Flirt Styling is a personal styling service for women who want to look and feel great every day.
              You share your goals, budget, and lifestyle — we do the rest. No guesswork, no overwhelm, just
              clothing you&apos;ll actually wear.
            </p>

            {/* CTA banner inside hero */}
            <div
              style={{
                borderRadius: 20,
                border: "1px solid #f2bfd0",
                background: "linear-gradient(180deg, #ffeef4 0%, #fff8fb 100%)",
                padding: "20px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  margin: 0,
                }}
              >
                <strong style={{ fontFamily: "var(--font-semibold)", color: "var(--text-dark)" }}>
                  Not sure where to start?
                </strong>{" "}
                Book a free intro call with a Flirt Stylist and she&apos;ll help you figure it out — no commitment required.
              </p>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="site-container" style={{ paddingBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 32, alignItems: "start" }}>
            {/* Left heading */}
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "#FFE4EB",
                  borderRadius: 20,
                  padding: "6px 22px",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-medium-italic)",
                    fontSize: 14,
                    color: "#C9537C",
                  }}
                >
                  How it works
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 42,
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                  color: "var(--text-dark)",
                  margin: 0,
                }}
              >
                Here&apos;s how it works.
              </h2>
            </div>

            {/* Right: step cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  style={{
                    borderRadius: 20,
                    border: "1px solid rgba(39,20,1,0.06)",
                    background: "#fff",
                    padding: "24px 28px",
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "#FFE4EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-price)",
                      fontSize: 16,
                      color: "#C9537C",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 24,
                        lineHeight: 1.1,
                        color: "var(--text-dark)",
                        margin: "0 0 8px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-medium)",
                        fontSize: 15,
                        lineHeight: 1.65,
                        color: "var(--text-body)",
                        margin: 0,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Choose Your Package ── */}
        <section className="site-container" style={{ paddingBottom: 56 }}>
          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                display: "inline-block",
                background: "#FFE4EB",
                borderRadius: 20,
                padding: "6px 22px",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-medium-italic)",
                  fontSize: 14,
                  color: "#C9537C",
                }}
              >
                Packages
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 42,
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                color: "var(--text-dark)",
                margin: "0 0 14px",
              }}
            >
              Choose your package.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-medium)",
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--text-body)",
                maxWidth: 700,
                margin: 0,
              }}
            >
              All packages include a video consultation and a personally selected, shoppable styling guide —
              delivered as a PDF with direct links, brand details, sizing notes, and return information for every piece.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {onlinePackages.map((pkg) => (
              <ServiceImageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="site-container" style={{ paddingBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 32, alignItems: "start" }}>
            {/* Left heading */}
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "#FFE4EB",
                  borderRadius: 20,
                  padding: "6px 22px",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-medium-italic)",
                    fontSize: 14,
                    color: "#C9537C",
                  }}
                >
                  FAQ
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 42,
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                  color: "var(--text-dark)",
                  margin: 0,
                }}
              >
                Common questions.
              </h2>
            </div>

            {/* Right: FAQ cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqs.map(([question, answer]) => (
                <details
                  key={question}
                  style={{
                    borderRadius: 20,
                    border: "1px solid rgba(39,20,1,0.06)",
                    background: "#fff",
                    padding: "18px 24px",
                    cursor: "pointer",
                  }}
                >
                  <summary
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      lineHeight: 1.15,
                      color: "var(--text-dark)",
                      listStyle: "none",
                    }}
                  >
                    {question}
                  </summary>
                  <p
                    style={{
                      fontFamily: "var(--font-medium)",
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "var(--text-body)",
                      marginTop: 14,
                      marginBottom: 0,
                    }}
                  >
                    {answer}
                  </p>
                </details>
              ))}
              <Link
                href="/faq"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--font-semibold)",
                  fontSize: 16,
                  color: "#C9537C",
                  marginTop: 8,
                }}
              >
                View the full FAQ →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Also From Flirt ── */}
        <section className="site-container" style={{ paddingBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "Closet Services", body: "In-person cleanout & organization at your home", href: "/closet-services" },
              { title: "The story behind Flirt", body: "Meet Sydney", href: "/about" },
              { title: "Full FAQ", body: "Read FAQs", href: "/faq" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  borderRadius: 20,
                  border: "1px solid rgba(39,20,1,0.06)",
                  background: "#fff",
                  padding: "28px 24px",
                  transition: "transform 0.2s, border-color 0.2s",
                  display: "block",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    lineHeight: 1.1,
                    color: "var(--text-dark)",
                    margin: "0 0 10px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-medium)",
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: "var(--text-body)",
                    margin: 0,
                  }}
                >
                  {item.body} →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <FinalCta />
      </main>
      <SiteFooter />
      <ChatWidgetMock />
    </>
  );
}
