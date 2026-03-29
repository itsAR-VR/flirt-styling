"use client";

import {
  SiteHeader,
  SiteFooter,
  FinalCta,
  ChatWidgetMock,
  PackagePreviewCard,
  onlinePackages,
} from "../site";

export default function OnlineStylingPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text-body)" }}>
      <SiteHeader activePage="online-styling" />

      {/* Hero Section */}
      <section style={{ padding: "60px 20px", background: "var(--bg)" }}>
        <div className="site-container">
          {/* Page label */}
          <div
            style={{
              display: "inline-block",
              background: "#FFE4EB",
              borderRadius: 20,
              padding: "8px 28px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-medium-italic)",
                fontSize: 17,
                color: "#C9537C",
              }}
            >
              Online Styling & Shopping Services
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              lineHeight: 1.15,
              color: "var(--text-dark)",
              maxWidth: 700,
              margin: "0 0 24px",
            }}
          >
            Feel confident in what you wear — without the stress of shopping.
          </h1>

          {/* Body text */}
          <p
            style={{
              fontFamily: "var(--font-medium)",
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--text-body)",
              maxWidth: 680,
              margin: 0,
            }}
          >
            Flirt Styling is a personal styling service for women who want to look and feel great every day. You share
            your goals, budget, and lifestyle — we do the rest. No guesswork, no overwhelm, just clothing you'll
            actually wear.
          </p>
        </div>
      </section>

      {/* Intro Call Banner */}
      <section
        style={{
          padding: "40px 20px",
          background: "#FFE4EB",
          textAlign: "center",
        }}
      >
        <div className="site-container">
          <p
            style={{
              fontFamily: "var(--font-semibold)",
              fontSize: 17,
              lineHeight: 1.5,
              color: "var(--text-dark)",
              margin: 0,
            }}
          >
            Not sure where to start? Book a free intro call with a Flirt Stylist to learn about all our services and
            find the right package for you.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: "80px 20px", background: "var(--bg)" }}>
        <div className="site-container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 48,
              lineHeight: 1.15,
              color: "var(--text-dark)",
              textAlign: "center",
              margin: "0 0 60px",
            }}
          >
            Here&apos;s How It Works
          </h2>

          {/* Steps Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 40,
            }}
          >
            {/* Step 1 */}
            <div>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "#C9537C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-semibold)",
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  1
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 20,
                  color: "var(--text-dark)",
                  margin: "0 0 12px",
                }}
              >
                Book Your Package
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  margin: 0,
                }}
              >
                Choose the package that feels right and book your video consultation through the Flirt website. You'll
                receive a confirmation with everything you need to prepare.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "#C9537C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-semibold)",
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  2
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 20,
                  color: "var(--text-dark)",
                  margin: "0 0 12px",
                }}
              >
                Prepare for Your Call
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  margin: 0,
                }}
              >
                Before your consultation, you'll get simple prep instructions — like knowing your sizes and having a few
                current pieces nearby. This matters because we style around what you already own. The goal isn't a brand
                new closet — it's making what you love go further.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "#C9537C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-semibold)",
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  3
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 20,
                  color: "var(--text-dark)",
                  margin: "0 0 12px",
                }}
              >
                Video Consultation with Your Stylist
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  margin: 0,
                }}
              >
                A Flirt Stylist will ask about your lifestyle, goals, budget, comfort preferences, and how you like to
                receive information. This isn't a form — it's a real conversation designed to make your styling guide
                feel truly personal to you.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "#C9537C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-semibold)",
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  4
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 20,
                  color: "var(--text-dark)",
                  margin: "0 0 12px",
                }}
              >
                We Do the Research
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  margin: 0,
                }}
              >
                Before anything makes it into your guide, a Flirt Stylist vets every brand — quality, return policy,
                sizing accuracy, and trustworthiness. You won't be sent to a shady website or left guessing. If it's in
                your guide, it's there for a reason.
              </p>
            </div>

            {/* Step 5 */}
            <div>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "#C9537C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-semibold)",
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  5
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 20,
                  color: "var(--text-dark)",
                  margin: "0 0 12px",
                }}
              >
                Receive Your Styling Guide
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  margin: 0,
                }}
              >
                You'll receive a personalized PDF with everything you need to shop with confidence — direct links, brand
                notes, sizing guidance, and return information all in one place. No more scrolling through websites,
                second-guessing quality, or wondering where to even start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Package Section */}
      <section style={{ padding: "80px 20px", background: "#F8F3EF" }}>
        <div className="site-container">
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 48,
                lineHeight: 1.15,
                color: "var(--text-dark)",
                margin: "0 0 24px",
              }}
            >
              Choose Your Package
            </h2>
            <p
              style={{
                fontFamily: "var(--font-medium)",
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--text-body)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              All packages include: Video consultation, A personally selected, shoppable styling guide, Delivered as a
              PDF with direct links, brand details, sizing notes, and return information.
            </p>
          </div>

          {/* Package Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {onlinePackages.map((pkg) => (
              <PackagePreviewCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 20px", background: "var(--bg)" }}>
        <div className="site-container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 48,
              lineHeight: 1.15,
              color: "var(--text-dark)",
              textAlign: "center",
              margin: "0 0 60px",
            }}
          >
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <details
              style={{
                borderBottom: "1px solid #D6CFCB",
                paddingBottom: 18,
                marginBottom: 18,
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 18,
                  color: "var(--text-dark)",
                  outline: "none",
                  userSelect: "none",
                }}
              >
                What are clothing categories?
              </summary>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                Clothing categories are different types of items in your wardrobe — like tops, bottoms, dresses,
                outerwear, and accessories. Each package includes a certain number of categories so you get a balanced
                collection of pieces.
              </p>
            </details>

            <details
              style={{
                borderBottom: "1px solid #D6CFCB",
                paddingBottom: 18,
                marginBottom: 18,
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 18,
                  color: "var(--text-dark)",
                  outline: "none",
                  userSelect: "none",
                }}
              >
                Do I have to buy everything in the guide?
              </summary>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                Not at all! Your styling guide is a personalized selection of recommendations. You're in complete control
                — buy what speaks to you, skip what doesn't, and take your time. We're here to guide your choices, not
                dictate them.
              </p>
            </details>

            <details
              style={{
                borderBottom: "1px solid #D6CFCB",
                paddingBottom: 18,
                marginBottom: 18,
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 18,
                  color: "var(--text-dark)",
                  outline: "none",
                  userSelect: "none",
                }}
              >
                What if I have a tight budget?
              </summary>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                Your budget is one of the first things we talk about in your consultation. We'll make sure your styling
                guide works for your wallet and includes quality pieces that offer great value.
              </p>
            </details>

            <details
              style={{
                borderBottom: "1px solid #D6CFCB",
                paddingBottom: 18,
                marginBottom: 18,
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 18,
                  color: "var(--text-dark)",
                  outline: "none",
                  userSelect: "none",
                }}
              >
                Will I have to buy a whole new wardrobe?
              </summary>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                No way! We style around the pieces you already love. Our goal is to make what you own work harder and
                feel more cohesive — not to replace everything. Quality over quantity, always.
              </p>
            </details>

            <details
              style={{
                borderBottom: "1px solid #D6CFCB",
                paddingBottom: 18,
                marginBottom: 18,
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 18,
                  color: "var(--text-dark)",
                  outline: "none",
                  userSelect: "none",
                }}
              >
                How do I know the brands are trustworthy?
              </summary>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                We vet every single brand before it goes into your guide. We check quality, return policies, sizing
                accuracy, and overall trustworthiness. If it's recommended by Flirt, we stand behind it.
              </p>
            </details>

            <details
              style={{
                borderBottom: "1px solid #D6CFCB",
                paddingBottom: 18,
                marginBottom: 18,
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 18,
                  color: "var(--text-dark)",
                  outline: "none",
                  userSelect: "none",
                }}
              >
                How long is the video consultation?
              </summary>
              <p
                style={{
                  fontFamily: "var(--font-medium)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                Your consultation typically lasts 45-60 minutes. That's enough time to really get to know you, understand
                your style, and make sure the guide we create is truly personal to you.
              </p>
            </details>
          </div>

          {/* See All FAQs Link */}
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <a
              href="/faq"
              style={{
                fontFamily: "var(--font-semibold)",
                fontSize: 17,
                color: "#C9537C",
                textDecoration: "none",
                borderBottom: "2px solid #C9537C",
                paddingBottom: 4,
              }}
            >
              See All FAQs →
            </a>
          </div>
        </div>
      </section>

      {/* Also from Flirt Section */}
      <section style={{ padding: "80px 20px", background: "#F8F3EF" }}>
        <div className="site-container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 48,
              lineHeight: 1.15,
              color: "var(--text-dark)",
              textAlign: "center",
              margin: "0 0 60px",
            }}
          >
            Also from Flirt
          </h2>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {/* Closet Services Card */}
            <a
              href="/closet-services"
              style={{
                background: "white",
                borderRadius: 8,
                border: "1px solid rgba(39,20,1,0.08)",
                padding: 32,
                textDecoration: "none",
                transition: "transform 0.3s, box-shadow 0.3s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(39,20,1,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 0 transparent";
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "var(--text-dark)",
                    margin: "0 0 12px",
                  }}
                >
                  Closet Services
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-medium)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--text-body)",
                    margin: 0,
                  }}
                >
                  Organize and refresh your existing wardrobe with in-person styling.
                </p>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 14,
                  color: "#C9537C",
                  margin: "16px 0 0",
                }}
              >
                Learn More →
              </p>
            </a>

            {/* About Card */}
            <a
              href="/about"
              style={{
                background: "white",
                borderRadius: 8,
                border: "1px solid rgba(39,20,1,0.08)",
                padding: 32,
                textDecoration: "none",
                transition: "transform 0.3s, box-shadow 0.3s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(39,20,1,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 0 transparent";
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "var(--text-dark)",
                    margin: "0 0 12px",
                  }}
                >
                  About Us
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-medium)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--text-body)",
                    margin: 0,
                  }}
                >
                  Meet the Flirt team and discover our approach to styling.
                </p>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 14,
                  color: "#C9537C",
                  margin: "16px 0 0",
                }}
              >
                Learn More →
              </p>
            </a>

            {/* FAQ Card */}
            <a
              href="/faq"
              style={{
                background: "white",
                borderRadius: 8,
                border: "1px solid rgba(39,20,1,0.08)",
                padding: 32,
                textDecoration: "none",
                transition: "transform 0.3s, box-shadow 0.3s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(39,20,1,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 0 transparent";
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "var(--text-dark)",
                    margin: "0 0 12px",
                  }}
                >
                  FAQ
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-medium)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--text-body)",
                    margin: 0,
                  }}
                >
                  Have questions? Find answers about our services.
                </p>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-semibold)",
                  fontSize: 14,
                  color: "#C9537C",
                  margin: "16px 0 0",
                }}
              >
                Learn More →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />

      {/* Footer */}
      <SiteFooter />

      {/* Chat Widget */}
      <ChatWidgetMock />
    </div>
  );
}
