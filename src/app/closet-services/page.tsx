import Link from "next/link";
import { FinalCta, ServiceImageCard, SiteFooter, SiteHeader, closetPackages, ChatWidgetMock } from "../site";

const steps = [
  {
    title: "Book your service & video consultation",
    body: "Once you book, you’ll have a video consultation with a Flirt Stylist — similar to the styling process. They’ll ask about your goals, your closet, and what you’re hoping to walk away with.",
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
    body: "Whether it’s a cleanout, an organization, or both — you’ll end the session with a closet that feels intentional, manageable, and fully yours. Sessions typically run 1 to 2 hours depending on closet size.",
  },
  {
    title: "Donations handled for you",
    body: "Anything you decide to let go of gets donated to The Gathering Place (TGP Denver) — a local women’s resource center — within a few days. Flirt handles the drop-off so you don’t have to think about it.",
  },
];

const faqs = [
  [
    "How long does a session take?",
    "Most sessions run 1 to 2 hours depending on your closet size and the service you choose. A Flirt Stylist will discuss timing with you during your video consultation.",
  ],
  [
    "Do I need to prepare anything before a Flirt Stylist arrives?",
    "Just be ready to make some decisions! During your video consultation, a Flirt Stylist will let you know if there’s anything specific to prepare. In most cases, having your closet accessible and ready to review is all you need.",
  ],
  [
    "What happens to the clothes I get rid of?",
    "All donations go to The Gathering Place (TGP Denver), a local women’s resource center. Flirt handles the entire donation process — we pick up, deliver, and handle all the logistics so you don’t have to think about it.",
  ],
  [
    "Do you bring any supplies or equipment?",
    "A Flirt Stylist brings everything needed for the session — hangers, bags, and any organizational supplies. You don’t need to provide anything. Just have some space to work with.",
  ],
  [
    "What areas do you service?",
    "Flirt Closet Services are available in the Denver metro area. If you’re unsure whether your location is covered, reach out to hello.shopflirt@gmail.com or book a free intro call to confirm.",
  ],
  [
    "Can I book just one service or do I need both?",
    "You can absolutely book just one service. The Breakup (cleanout) and The Edit (organization) are standalone services. The Full Reset combines both in one visit, so choose what makes sense for your closet.",
  ],
];

export default function ClosetServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-shell pt-14 sm:pt-18">
          <div className="rounded-[36px] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_20px_70px_rgba(39,20,1,0.05)] sm:px-10 sm:py-14">
            <p className="section-label">Closet Cleanout &amp; Organization Services</p>
            <h1 className="mt-4 max-w-[900px] font-[family:var(--font-display)] text-[54px] leading-[0.94] tracking-[-0.06em] text-[var(--text)] sm:text-[76px]">
              Your best outfits are already in there — let’s find them.
            </h1>
            <p className="mt-6 max-w-[880px] text-[19px] leading-8 text-[var(--text-soft)]">
              Sometimes the problem isn’t what’s in your cart — it’s what’s already in your closet. Flirt’s in-person closet services help you take back control of your wardrobe, starting at home. Judgment-free, efficient, and done with you — not to you.
            </p>
            <div className="mt-8 rounded-[28px] border border-[#f2bfd0] bg-[linear-gradient(180deg,#ffeef4_0%,#fff8fb_100%)] px-6 py-6 sm:px-8">
              <p className="text-[17px] leading-8 text-[var(--text-soft)]">
                <strong className="text-[var(--text)]">Not sure which service is right for you?</strong> Book a free intro call with a Flirt Stylist and she’ll help you figure it out — no commitment required.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-shell">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="section-label">How it works</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-[46px] leading-[0.96] tracking-[-0.05em] text-[var(--text)] sm:text-[64px]">
                Here’s how it works.
              </h2>
            </div>
            <div className="space-y-5 lg:col-span-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[28px] border border-[var(--border)] bg-white px-6 py-6 sm:px-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--pink-soft)] font-semibold text-[var(--pink-text)]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-[family:var(--font-display)] text-[30px] leading-none text-[var(--text)]">{step.title}</h3>
                      <p className="mt-3 text-[17px] leading-8 text-[var(--text-soft)]">{step.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choose Your Service Section */}
        <section className="section-shell">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Services</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-[46px] leading-[0.96] tracking-[-0.05em] text-[var(--text)] sm:text-[64px]">
                Choose your service.
              </h2>
              <p className="mt-4 max-w-[840px] text-[18px] leading-8 text-[var(--text-soft)]">
                All services include a video consultation and an in-person session with a Flirt Stylist at your home — honest, judgment-free, and done right. Your space is left clean and organized, and any donations are handled for you.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {closetPackages.map((pkg) => (
              <ServiceImageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          {/* Discount Banner */}
          <div className="mt-8 rounded-[28px] border border-[#f2bfd0] bg-[linear-gradient(180deg,#ffeef4_0%,#fff8fb_100%)] px-6 py-6 sm:px-8">
            <p className="text-[17px] leading-8 text-[var(--text-soft)]">
              <strong className="text-[var(--text)]">Book any closet service and get 20% off an online styling package.</strong> Stack your services and make the most of your Flirt experience.
            </p>
          </div>
        </section>

        {/* TGP Denver Partnership Section */}
        <section className="section-shell">
          <div className="rounded-[28px] border border-[var(--border)] bg-white px-6 py-10 sm:px-10 sm:py-14" style={{ borderLeft: "6px solid var(--pink)" }}>
            <p className="section-label">Giving back</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-[46px] leading-[0.96] tracking-[-0.05em] text-[var(--text)] sm:text-[64px]">
              Your unwanted clothes go somewhere that matters.
            </h2>

            <div className="mt-8 space-y-6 max-w-[840px]">
              <p className="text-[18px] leading-8 text-[var(--text-soft)]">
                The Gathering Place (TGP Denver) is a non-profit women’s resource center dedicated to providing support, resources, and community to women in need across the Denver metro area. From emergency financial assistance to job training, mental health services, and housing support, TGP Denver helps women navigate life’s challenges and build a path toward stability and independence.
              </p>

              <p className="text-[18px] leading-8 text-[var(--text-soft)]">
                Every piece of clothing donated through Flirt Closet Services goes directly to TGP Denver’s clothing closet, where it’s available to women who need it most. Your donations help women in our community feel confident and supported as they work toward their goals. It’s a meaningful way to give back while clearing your own closet.
              </p>

              <a
                href="https://www.tgpdenver.org"
                target="_blank"
                rel="noreferrer"
                className="button-outline"
              >
                Learn more about TGP Denver →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="section-label">FAQ</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-[46px] leading-[0.96] tracking-[-0.05em] text-[var(--text)] sm:text-[62px]">
                Common questions.
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-[24px] border border-[var(--border)] bg-white px-6 py-5 open:border-[var(--pink)] open:bg-[var(--surface-alt)]">
                  <summary className="cursor-pointer list-none font-[family:var(--font-display)] text-[27px] leading-[1.05] text-[var(--text)]">
                    {question}
                  </summary>
                  <p className="mt-4 text-[16px] leading-7 text-[var(--text-soft)]">{answer}</p>
                </details>
              ))}
              <Link href="/faq" className="button-outline mt-2">
                View the full FAQ →
              </Link>
            </div>
          </div>
        </section>

        {/* Also From Flirt Section */}
        <section className="section-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Online Styling", "Personal styling guides delivered to you", "/online-styling"],
              ["The story behind Flirt", "Meet Sydney", "/about"],
              ["Full FAQ", "Read FAQs", "/faq"],
            ].map(([title, body, href]) => (
              <Link key={title} href={href} className="rounded-[28px] border border-[var(--border)] bg-white px-6 py-7 transition hover:-translate-y-1 hover:border-[var(--pink)]">
                <p className="font-[family:var(--font-display)] text-[32px] leading-none text-[var(--text)]">{title}</p>
                <p className="mt-3 text-[17px] leading-7 text-[var(--text-soft)]">{body} →</p>
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
