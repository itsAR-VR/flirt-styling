import Link from "next/link";
import { ChatWidgetMock, FinalCta, PackagePreviewCard, SiteFooter, SiteHeader, closetPackages, onlinePackages } from "./site";

const personas = [
  {
    title: "Working Professionals",
    body: "Need a polished wardrobe but don’t have time to spend hours shopping or figuring out what works.",
  },
  {
    title: "Busy Parents",
    body: "Want to feel put-together without adding another exhausting task to the list.",
  },
  {
    title: "Lifestyle Changers",
    body: "Going through a shift and need a wardrobe that makes sense for who you are now.",
  },
  {
    title: "Shopping Haters",
    body: "Know you want help. Just don’t want to dig through websites and guess your way through it.",
  },
];

function Hero() {
  return (
    <section className="mx-auto w-full max-w-[980px] px-[77px] pt-[98px]">
      <div className="max-w-[829px]">
        <div className="mb-[9px] inline-flex h-[20px] items-center rounded-[3px] bg-[#ffe4eb] px-[12px] font-[family:var(--font-medium)] text-[13px] leading-none text-[var(--pink-text)]">
          Denver, CO - Online Services
        </div>
        <div className="ml-[4px]">
          <p className="font-[family:var(--font-display)] text-[50px] leading-[1.4] text-[var(--text)]">Real Style for Real Life.</p>
          <p className="-mt-[13px] font-[family:var(--font-display)] text-[25px] leading-[1.4] text-[var(--text-dark)]">FLIRT STYLING</p>
        </div>
        <div className="mt-[2px] ml-[2px] max-w-[827px] space-y-[10px] text-[19px] text-[var(--text)]">
          <p className="font-[family:var(--font-semibold)] leading-[1.2]">Flirt was built on a simple belief: Great style should be for everyone.</p>
          <p className="font-[family:var(--font-medium)] leading-[1.2]">
            Sydney has spent over a decade in fashion and retail watching people struggle to find clothes that made them feel confident. Not because they didn&apos;t care, but because nobody made it easy for them.
          </p>
          <p className="font-[family:var(--font-medium-italic)] leading-[0.9]">Flirt exists to change that.</p>
          <p className="font-[family:var(--font-medium)] leading-[1.2]">
            Whether you&apos;re a busy professional, a parent on the go, or just someone who&apos;s tired of not knowing where to start, you deserve style that <span className="font-[family:var(--font-medium-italic)]">fits your budget, works with what you already own, and actually makes sense for your life.</span>
          </p>
          <p className="font-[family:var(--font-semibold)] leading-[0.9]">We do the work. You just get dressed and feel like yourself.</p>
        </div>
        <div className="mt-[3px] flex items-start gap-[43px]">
          <a href="https://calendar.app.google/H3H8wtu1w3xfAZVT9" target="_blank" rel="noreferrer" className="wix-button-primary min-w-[298px] justify-center">
            <span className="mr-[4.5px] inline-block text-[17px] leading-none">↗</span>
            Book Your Free Intro Call
          </a>
          <Link href="/about" className="mt-[5px] font-[family:var(--font-medium)] text-[18px] leading-[1.2] text-[var(--text)] transition-colors duration-[400ms] hover:text-[var(--pink-text)]">
            See Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function PersonaSection() {
  return (
    <section className="mx-auto mt-[8px] w-full max-w-[980px] px-[71px]">
      <h2 className="font-[family:var(--font-display)] text-[20px] leading-[1.4] text-[var(--text-dark)]">WHO IS THIS FOR</h2>
      <div className="mt-[3px] grid grid-cols-4 gap-x-[0px]">
        {personas.map((persona) => (
          <div key={persona.title} className="w-[200px]">
            <div className="min-h-[130px] rounded-[11px] border-[5px] border-[#fbbfd4] bg-[#f3edea] px-[15px] py-[12px] transition-colors duration-[400ms] hover:bg-[#ffe8f0]">
              <p className="font-[family:var(--font-display)] text-[18px] leading-[1.0] text-[var(--text-dark)]">{persona.title}</p>
              <p className="mt-[8px] font-[family:var(--font-medium)] text-[15px] leading-[1.2] text-[var(--text)]">{persona.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceSection({
  title,
  description,
  href,
  packages,
}: {
  title: string;
  description: string;
  href: string;
  packages: typeof onlinePackages;
}) {
  return (
    <section className="mx-auto mt-[10px] w-full max-w-[980px] px-[71px]">
      <div className="flex items-start justify-between gap-[20px]">
        <div className="max-w-[837px]">
          <h2 className="font-[family:var(--font-display)] text-[20px] leading-[1.4] text-[var(--text-dark)]">{title}</h2>
          <p className="mt-[1px] font-[family:var(--font-medium)] text-[18px] leading-[1.2] text-[var(--text)]">{description}</p>
        </div>
        <Link href={href} className="mt-[1px] font-[family:var(--font-medium)] text-[18px] leading-[1.2] text-[var(--text)] transition-colors duration-[400ms] hover:text-[var(--pink-text)]">
          See Full Details
        </Link>
      </div>
      <div className="mt-[10px] grid grid-cols-3 gap-x-[20px] gap-y-[0px]">
        {packages.map((pkg) => (
          <PackagePreviewCard key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[var(--surface)] pb-[18px]">
        <Hero />
        <PersonaSection />
        <ServiceSection
          title="ONLINE STYLING SERVICES"
          description="All packages include a video consultation and a personally selected, shoppable styling guide, delivered as a PDF with direct links, brand details, sizing notes, and return information for every piece."
          href="/about"
          packages={onlinePackages}
        />
        <ServiceSection
          title="CLOSET CLEANOUT & ORGANIZATION SERVICES"
          description="All services include a video consultation and an in-person session with a Flirt Stylist at your home, honest, judgment-free, and done right."
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
