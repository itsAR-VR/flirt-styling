import Link from "next/link";
import { FinalCta, PackagePreviewCard, SiteFooter, SiteHeader, onlinePackages } from "../site";

const steps = [
  {
    title: "Book your package",
    body: "Choose the package that feels right and book your video consultation through the Flirt website. You’ll receive a confirmation with everything you need to prepare.",
  },
  {
    title: "Prepare for your call",
    body: "Before your consultation, you’ll get simple prep instructions, like knowing your sizes and having a few current pieces nearby. The goal isn’t a brand new closet. It’s making what you love go further.",
  },
  {
    title: "Video consultation with your stylist",
    body: "A Flirt Stylist will ask about your lifestyle, goals, budget, comfort preferences, and how you like to receive information. It’s a real conversation designed to make your styling guide feel personal to you.",
  },
  {
    title: "We do the research",
    body: "Before anything makes it into your guide, a Flirt Stylist vets every brand for quality, return policy, sizing accuracy, and trustworthiness. If it’s in your guide, it’s there for a reason.",
  },
  {
    title: "Receive your styling guide",
    body: "You’ll receive a personalized PDF with direct links, brand notes, sizing guidance, and return information all in one place. No more scrolling through websites and second-guessing quality.",
  },
];

const faqs = [
  [
    "What are clothing categories?",
    "Clothing categories are the types of clothing you want styled, like tops, pants, dresses, or shoes. You share your lifestyle and goals during the call, and a Flirt Stylist selects the categories that make the most sense for you.",
  ],
  [
    "Do I have to buy everything in the guide?",
    "Not at all. Your styling guide gives you options, and you choose what you love. There is no pressure and no minimum spend.",
  ],
  [
    "What if I have a tight budget?",
    "Budget is one of the first things discussed during your call. Every piece is selected with your budget in mind, because that’s a core part of how Flirt works.",
  ],
  [
    "Will I have to buy a whole new wardrobe?",
    "No, and that is intentional. The consultation includes reviewing what you already own so new pieces are selected to work with your existing closet.",
  ],
  [
    "How do I know the brands are trustworthy?",
    "A Flirt Stylist researches every brand before recommending it, including quality, return policies, sizing accuracy, and reliability. Your guide includes this information so you know exactly what to expect.",
  ],
  [
    "How long is the video consultation?",
    "Consultations are designed to be efficient. A Flirt Stylist follows a structured process to gather everything needed quickly and effectively.",
  ],
];

export default function OnlineStylingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="section-shell pt-14 sm:pt-18">
          <div className="rounded-[36px] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_20px_70px_rgba(39,20,1,0.05)] sm:px-10 sm:py-14">
            <p className="section-label">Online Styling &amp; Shopping Services</p>
            <h1 className="mt-4 max-w-[900px] font-[family:var(--font-display)] text-[54px] leading-[0.94] tracking-[-0.06em] text-[var(--text)] sm:text-[76px]">
              Feel confident in what you wear, without the stress of shopping.
            </h1>
            <p className="mt-6 max-w-[880px] text-[19px] leading-8 text-[var(--text-soft)]">
              Flirt Styling is a personal styling service for women who want to look and feel great every day. You share
              your goals, budget, and lifestyle, and we do the rest. No guesswork, no overwhelm, just clothing you’ll
              actually wear.
            </p>
            <div className="mt-8 rounded-[28px] border border-[#f2bfd0] bg-[linear-gradient(180deg,#ffeef4_0%,#fff8fb_100%)] px-6 py-6 sm:px-8">
              <p className="text-[17px] leading-8 text-[var(--text-soft)]">
                <strong className="text-[var(--text)]">Not sure where to start?</strong> Book a free intro call with a Flirt Stylist to
                learn about the services and find the right fit for you, no commitment required.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="section-label">What to expect</p>
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

        <section className="section-shell">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Packages</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-[46px] leading-[0.96] tracking-[-0.05em] text-[var(--text)] sm:text-[64px]">
                Choose your package.
              </h2>
              <p className="mt-4 max-w-[840px] text-[18px] leading-8 text-[var(--text-soft)]">
                All packages include a video consultation and a personally selected, shoppable styling guide delivered as a
                PDF with direct links, brand details, sizing notes, and return information.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {onlinePackages.map((pkg) => (
              <PackagePreviewCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </section>

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

        <section className="section-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Closet Services", "In-person cleanout and organization", "/closet-services"],
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
    </>
  );
}
