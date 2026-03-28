import Link from "next/link";
import { FinalCta, PackagePreviewCard, SiteFooter, SiteHeader, closetPackages, homepageFaqs, onlinePackages } from "./site";

function Hero() {
  return (
    <section className="section-shell pt-14 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_360px] lg:items-start">
        <div className="space-y-8">
          <div className="eyebrow-pill">• Denver, CO - Online Services</div>
          <div className="space-y-4">
            <p className="section-label">FLIRT STYLING</p>
            <h1 className="hero-title">Real Style for Real Life.</h1>
          </div>
          <div className="max-w-[760px] space-y-5 text-[18px] leading-[1.95] text-[var(--text-soft)] sm:text-[19px]">
            <p>Flirt was built on a simple belief: Great style should be for everyone.</p>
            <p>
              Sydney has spent over a decade in fashion and retail watching people struggle to find clothes that made
              them feel confident. Not because they didn&apos;t care, but because nobody made it easy for them.
            </p>
            <p>Flirt exists to change that.</p>
            <p>
              Whether you&apos;re a busy professional, a parent on the go, or just someone who&apos;s tired of not knowing where
              to start, you deserve style that fits your budget, works with what you already own, and actually makes
              sense for your life.
            </p>
            <p>We do the work. You just get dressed and feel like yourself.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#booking-cta" className="button-primary">
              Book Your Free Intro Call
            </a>
            <Link href="/online-styling" className="button-secondary">
              See Our Services
            </Link>
          </div>
        </div>

        <aside className="rounded-[32px] border border-[var(--border)] bg-[var(--surface-alt)] p-7 shadow-[0_18px_60px_rgba(39,20,1,0.06)] sm:p-8 lg:mt-10">
          <p className="section-label mb-6">WHO IS THIS FOR</p>
          <div className="space-y-5">
            {[
              ["Working Professionals", "Need a polished wardrobe but your schedule barely leaves room to breathe."],
              ["Busy Parents", "Juggling everything and still want to feel put-together without shopping being one more task."],
              ["Lifestyle Changers", "Something shifted. Your wardrobe needs to keep up with who you&apos;re becoming."],
              ["Shopping Haters", "Want to dress well but have no idea where to start, where to buy, or who to trust."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[26px] border border-[var(--border)] bg-white px-5 py-5 transition hover:-translate-y-0.5 hover:border-[var(--pink)]">
                <h3 className="font-[family:var(--font-display)] text-[28px] leading-[1.02] text-[var(--text)]">{title}</h3>
                <p className="mt-3 text-[16px] leading-7 text-[var(--text-soft)]">{body}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section-shell">
      <div className="space-y-20">
        <div>
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">ONLINE STYLING SERVICES</p>
              <p className="mt-4 max-w-[780px] text-[18px] leading-8 text-[var(--text-soft)]">
                All packages include a <strong>video consultation</strong> and a <strong>personally selected, shoppable styling guide</strong>,
                delivered as a PDF with direct links, brand details, sizing notes, and return information for every piece.
              </p>
            </div>
            <Link href="/online-styling" className="button-secondary">
              See Full Details
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {onlinePackages.map((pkg) => (
              <PackagePreviewCard key={pkg.name} pkg={pkg} cta="Book this package" />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">CLOSET CLEANOUT &amp; ORGANIZATION SERVICES</p>
              <p className="mt-4 max-w-[820px] text-[18px] leading-8 text-[var(--text-soft)]">
                All services include a <strong>video consultation</strong> and an <strong>in-person session with a Flirt Stylist</strong> at your home,
                honest, judgment-free, and done right. Your space is left clean and organized, and any donations are handled for you.
              </p>
            </div>
            <Link href="/closet-services" className="button-secondary">
              See Full Details
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {closetPackages.map((pkg) => (
              <PackagePreviewCard key={pkg.name} pkg={pkg} cta="Book this package" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageFaq() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_minmax(0,1fr)] lg:items-start">
        <div>
          <p className="section-label">Common Questions</p>
          <h2 className="mt-4 font-[family:var(--font-display)] text-[46px] leading-[0.95] tracking-[-0.05em] text-[var(--text)] sm:text-[62px]">
            The calm-your-brain part.
          </h2>
          <p className="mt-5 max-w-[460px] text-[18px] leading-8 text-[var(--text-soft)]">
            Enough detail to make booking feel easy, without turning the page into a legal deposition.
          </p>
        </div>
        <div className="space-y-4">
          {homepageFaqs.map((item) => (
            <details key={item.question} className="group rounded-[24px] border border-[var(--border)] bg-white px-6 py-5 open:border-[var(--pink)] open:bg-[var(--surface-alt)]">
              <summary className="cursor-pointer list-none font-[family:var(--font-display)] text-[27px] leading-[1.05] text-[var(--text)]">
                {item.question}
              </summary>
              <p className="mt-4 text-[16px] leading-7 text-[var(--text-soft)]">{item.answer}</p>
            </details>
          ))}
          <Link href="/faq" className="button-outline mt-2">
            View the full FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader activePath="/" />
      <main className="flex-1">
        <Hero />
        <ServicesPreview />
        <HomepageFaq />
        <FinalCta
          title="Not sure where to start?"
          description="Book a free intro call with a Flirt Stylist. She will walk you through the services, answer your questions, and help you figure out what is right for you. It is free. No commitment."
          secondaryLabel="Book a service"
          secondaryHref="/online-styling"
        />
      </main>
      <SiteFooter />
    </>
  );
}
