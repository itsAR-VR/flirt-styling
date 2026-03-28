import Link from "next/link";
import { FinalCta, PackagePreviewCard, SiteFooter, SiteHeader, closetPackages } from "../site";

const steps = [
  {
    title: "Book your service & video consultation",
    body: "Once you book, you’ll have a video consultation with a Flirt Stylist, similar to the styling process. They’ll ask about your goals, your closet, and what you’re hoping to walk away with.",
  },
  {
    title: "Send photos and videos of your closet",
    body: "Before your appointment, a Flirt Stylist will ask you to send photos and videos so they can come fully prepared. That keeps the session efficient and focused.",
  },
  {
    title: "A Flirt Stylist comes to you",
    body: "All closet services are in-person at your home in the Denver metro area. A Flirt Stylist handles the structure. You just need to show up and be ready to make decisions together.",
  },
  {
    title: "Walk away with a closet that works",
    body: "Whether it’s a cleanout, an organization, or both, you’ll end the session with a closet that feels intentional, manageable, and fully yours. Sessions typically run 1 to 2 hours depending on closet size.",
  },
  {
    title: "Donations handled for you",
    body: "Anything you decide to let go of gets donated to The Gathering Place in Denver within a few days. Flirt handles the drop-off so you don’t have to think about it.",
  },
];

const faqs = [
  [
    "How long does a session take?",
    "Most sessions run 1 to 2 hours depending on the size of your closet. A Flirt Stylist comes prepared based on the photos and videos you share beforehand, so time is never wasted.",
  ],
  [
    "Do I need to prepare anything before a Flirt Stylist arrives?",
    "Before your appointment, a Flirt Stylist will ask you to send photos and videos of your closet during your consultation. Your space should be clean and accessible. Beyond that, a Flirt Stylist handles the rest.",
  ],
  [
    "What happens to the clothes I get rid of?",
    "A Flirt Stylist donates them to The Gathering Place in Denver within a few days of your session. You don’t have to do a thing.",
  ],
  [
    "Do you bring any supplies or equipment?",
    "A Flirt Stylist can bring hangers, bins, or labels if requested during your consultation. Just let her know in advance. Additional supplies may affect pricing to cover the cost.",
  ],
  [
    "What areas do you service?",
    "Flirt services the Denver metro area. Outside that radius is possible but requires an additional mileage charge.",
  ],
  [
    "Can I book just one service or do I need both?",
    "You can absolutely book just one. The Breakup and The Edit are standalone services. The Full Reset bundles both at a discount if you want everything in one visit.",
  ],
];

export default function ClosetServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="section-shell pt-14 sm:pt-18">
          <div className="rounded-[36px] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_20px_70px_rgba(39,20,1,0.05)] sm:px-10 sm:py-14">
            <p className="section-label">Closet Cleanout &amp; Organization Services</p>
            <h1 className="mt-4 max-w-[930px] font-[family:var(--font-display)] text-[54px] leading-[0.94] tracking-[-0.06em] text-[var(--text)] sm:text-[76px]">
              Your best outfits are already in there, let&apos;s find them.
            </h1>
            <p className="mt-6 max-w-[900px] text-[19px] leading-8 text-[var(--text-soft)]">
              Sometimes the problem isn’t what’s in your cart, it’s what’s already in your closet. Flirt’s in-person closet
              services help you take back control of your wardrobe, starting at home. Judgment-free, efficient, and done
              with you, not to you.
            </p>
            <div className="mt-8 rounded-[28px] border border-[#f2bfd0] bg-[linear-gradient(180deg,#ffeef4_0%,#fff8fb_100%)] px-6 py-6 sm:px-8">
              <p className="text-[17px] leading-8 text-[var(--text-soft)]">
                <strong className="text-[var(--text)]">Not sure which service is right for you?</strong> Book a free intro call with a
                Flirt Stylist and she’ll help you figure it out, no commitment required.
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
          <div className="mb-8">
            <p className="section-label">Packages</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-[46px] leading-[0.96] tracking-[-0.05em] text-[var(--text)] sm:text-[64px]">
              Choose your service.
            </h2>
            <p className="mt-4 max-w-[900px] text-[18px] leading-8 text-[var(--text-soft)]">
              All services include a video consultation and an in-person session with a Flirt Stylist at your home, honest,
              judgment-free, and done right. Your space is left clean and organized, and any donations are handled for you.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {closetPackages.map((pkg) => (
              <PackagePreviewCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          <div className="mt-8 rounded-[28px] border border-[#f2bfd0] bg-[linear-gradient(180deg,#ffeef4_0%,#fff8fb_100%)] px-6 py-6 sm:px-8">
            <p className="text-[17px] leading-8 text-[var(--text-soft)]">
              <strong className="text-[var(--text)]">Book any closet service and get 20% off an online styling package.</strong> Once
              your closet is sorted, the next step is filling the gaps. <Link href="/online-styling" className="underline decoration-[var(--pink-text)] underline-offset-4">View online styling</Link>.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="rounded-[32px] border-l-[6px] border-l-[var(--pink)] border border-[var(--border)] bg-white px-6 py-8 sm:px-10">
            <p className="section-label">Giving back</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-[44px] leading-[0.98] tracking-[-0.05em] text-[var(--text)] sm:text-[58px]">
              Your unwanted clothes go somewhere that matters.
            </h2>
            <div className="mt-5 max-w-[920px] space-y-5 text-[18px] leading-8 text-[var(--text-soft)]">
              <p>
                When you let go of pieces during a cleanout, they don’t just disappear. Flirt donates them to The Gathering
                Place, a Denver-based women’s resource center that helps women, gender-diverse people, and children move
                from crisis to stability and independence.
              </p>
              <p>
                Your clothes become part of someone getting dressed for a job interview, staying warm, or rebuilding
                confidence after a hard chapter. That’s why we’re intentional about what we donate. It’s about respect,
                not just volume.
              </p>
              <a
                href="https://tgpdenver.org/donate/donate-new-and-used-items.html"
                target="_blank"
                rel="noreferrer"
                className="button-outline mt-2"
              >
                Learn more about TGP Denver →
              </a>
            </div>
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
                See all FAQs →
              </Link>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Online Styling", "View services", "/online-styling"],
              ["About Us", "Meet Sydney", "/about"],
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
