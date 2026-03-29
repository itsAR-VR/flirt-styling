import Link from "next/link";
import { FinalCta, ServiceImageCard, SiteFooter, SiteHeader, closetPackages, ChatWidgetMock } from "../site";

/* ─── Data ─── */

const steps = [
  {
    title: "Book your service & video consultation",
    body: "Once you book, you'll have a video consultation with a Flirt Stylist — similar to the styling process. They'll ask about your goals, your closet, and what you're hoping to walk away with.",
  },
  {
    title: "Send photos and videos of your closet",
    body: "Before your appointment, a Flirt Stylist will ask you to send photos and videos of your closet so they can come fully prepared. This keeps the session efficient and focused.",
  },
  {
    title: "A Flirt Stylist comes to you",
    body: "All closet services are in-person at your home in the Denver metro area. A Flirt Stylist handles everything — you just need to show up and be ready to make some decisions together.",
  },
  {
    title: "Walk away with a closet that works",
    body: "Whether it's a cleanout, an organization, or both — you'll end the session with a closet that feels intentional, manageable, and fully yours. Sessions typically run 1 to 2 hours depending on closet size.",
  },
  {
    title: "Donations handled for you",
    body: "Anything you decide to let go of gets donated to The Gathering Place (TGP Denver) — a local women's resource center — within a few days. Flirt handles the drop-off so you don't have to think about it.",
  },
];

const faqs: [string, string][] = [
  [
    "How long does a session take?",
    "Most sessions run 1 to 2 hours depending on your closet size and the service you choose. A Flirt Stylist will discuss timing with you during your video consultation.",
  ],
  [
    "Do I need to prepare anything before a Flirt Stylist arrives?",
    "Just be ready to make some decisions! During your video consultation, a Flirt Stylist will let you know if there's anything specific to prepare. In most cases, having your closet accessible and ready to review is all you need.",
  ],
  [
    "What happens to the clothes I get rid of?",
    "All donations go to The Gathering Place (TGP Denver), a local women's resource center. Flirt handles the entire donation process — we pick up, deliver, and handle all the logistics so you don't have to think about it.",
  ],
  [
    "Do you bring any supplies or equipment?",
    "A Flirt Stylist brings everything needed for the session — hangers, bags, and any organizational supplies. You don't need to provide anything. Just have some space to work with.",
  ],
  [
    "What areas do you service?",
    "Flirt Closet Services are available in the Denver metro area. If you're unsure whether your location is covered, reach out to hello.shopflirt@gmail.com or book a free intro call to confirm.",
  ],
  [
    "Can I book just one service or do I need both?",
    "You can absolutely book just one service. The Breakup (cleanout) and The Edit (organization) are standalone services. The Full Reset combines both in one visit, so choose what makes sense for your closet.",
  ],
];

/* ─── Page ─── */

export default function ClosetServicesPage() {
  return (
    <>
      <SiteHeader />
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
                Closet Cleanout &amp; Organization Services
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
              Your best outfits are already in there — let&apos;s find them.
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
              Sometimes the problem isn&apos;t what&apos;s in your cart — it&apos;s what&apos;s already in your closet.
              Flirt&apos;s in-person closet services help you take back control of your wardrobe, starting at home.
              Judgment-free, efficient, and done with you — not to you.
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
                  Not sure which service is right for you?
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

        {/* ── Choose Your Service ── */}
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
                Services
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
              Choose your service.
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
              All services include a video consultation and an in-person session with a Flirt Stylist at your home —
              honest, judgment-free, and done right. Your space is left clean and organized, and any donations are handled for you.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {closetPackages.map((pkg) => (
              <ServiceImageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          {/* Discount banner */}
          <div
            style={{
              marginTop: 28,
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
                Book any closet service and get{" "}
                <span style={{ fontFamily: "var(--font-price)" }}>20%</span> off an online styling package.
              </strong>{" "}
              Stack your services and make the most of your Flirt experience.
            </p>
          </div>
        </section>

        {/* ── Giving Back ── */}
        <section className="site-container" style={{ paddingBottom: 56 }}>
          <div
            style={{
              borderRadius: 28,
              border: "1px solid rgba(39,20,1,0.06)",
              borderLeft: "6px solid #C9537C",
              background: "#fff",
              padding: "44px 44px",
            }}
          >
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
                Giving back
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 36,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "var(--text-dark)",
                maxWidth: 600,
                margin: "0 0 20px",
              }}
            >
              Your unwanted clothes go somewhere that matters.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-medium)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--text-body)",
                maxWidth: 700,
                margin: "0 0 16px",
              }}
            >
              The Gathering Place (TGP Denver) is a non-profit women&apos;s resource center dedicated to providing
              support, resources, and community to women in need across the Denver metro area. From emergency financial
              assistance to job training, mental health services, and housing support, TGP Denver helps women navigate
              life&apos;s challenges and build a path toward stability and independence.
            </p>

            <p
              style={{
                fontFamily: "var(--font-medium)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--text-body)",
                maxWidth: 700,
                margin: "0 0 24px",
              }}
            >
              Every piece of clothing donated through Flirt Closet Services goes directly to TGP Denver&apos;s clothing
              closet, where it&apos;s available to women who need it most. Your donations help women in our community feel
              confident and supported as they work toward their goals.
            </p>

            <a
              href="https://www.tgpdenver.org"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Learn more about TGP Denver →
            </a>
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
              { title: "Online Styling", body: "Personal styling guides delivered to you", href: "/online-styling" },
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
