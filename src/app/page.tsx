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
    <section className="mx-auto w-full max-w-[980px] px-[77px] pt-[108px]">
      <div className="max-w-[800px]">
        <div className="mb-[18px] inline-flex h-[24px] items-center rounded-[6px] bg-[var(--pink)] px-[10px] font-[family:var(--font-regular-display)] text-[11px] leading-none tracking-[0.04em] text-[#000]">
          • Denver, CO - Online Services
        </div>
        <div>
          <h1 className="font-[family:var(--font-display)] text-[50px] leading-[70px] tracking-[0] text-[var(--text)]">Real Style for Real Life.</h1>
          <h2 className="font-[family:var(--font-display)] text-[50px] leading-[70px] tracking-[0] text-[var(--text)]">FLIRT STYLING</h2>
        </div>
        <div className="mt-[16px] max-w-[827px] space-y-[16px] font-[family:var(--font-regular-display)] text-[19px] leading-[22.8px] text-[var(--text)]">
          <p>Flirt was built on a simple belief: Great style should be for everyone.</p>
          <p>
            Sydney has spent over a decade in fashion and retail, watching people struggle to find clothes that made them feel confident. Not because they didn&apos;t care, but because nobody made it easy for them.
          </p>
          <p>Flirt exists to change that.</p>
          <p>
            Whether you&apos;re a busy professional, a parent on the go, or just someone who&apos;s tired of not knowing where to start, you deserve style that fits your budget, works with what you already own, and actually makes sense for your life.
          </p>
          <p>We do the work. You just get dressed and feel like yourself.</p>
        </div>
        <div className="mt-[18px] flex items-center gap-[18px]">
          <a href="https://app.squarespacescheduling.com/schedule.php?owner=32794738" target="_blank" rel="noreferrer" className="wix-button-primary min-w-[298px] justify-center">
            <span className="mr-[8px] inline-block text-[11px]">✦</span>
            Book Your Free Intro Call
          </a>
          <Link href="/online-styling" className="wix-button-secondary">
            See Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function PersonaSection() {
  return (
    <section className="mx-auto mt-[94px] w-full max-w-[980px] px-[77px]">
      <h2 className="font-[family:var(--font-display)] text-[32px] leading-[1.2] text-[var(--text)]">WHO IS THIS FOR</h2>
      <div className="mt-[18px] grid grid-cols-4 gap-x-[18px]">
        {personas.map((persona) => (
          <div key={persona.title} className="rounded-[10px] border border-[rgba(39,20,1,0.12)] bg-white px-[14px] py-[14px]">
            <h3 className="font-[family:var(--font-display)] text-[22px] leading-[1.15] text-[var(--text)]">{persona.title}</h3>
            <p className="mt-[8px] font-[family:var(--font-regular-display)] text-[16px] leading-[19.5px] text-[var(--text)]">{persona.body}</p>
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
    <section className="mx-auto mt-[54px] w-full max-w-[980px] px-[77px]">
      <div className="flex items-end justify-between gap-[20px]">
        <div className="max-w-[760px]">
          <h2 className="font-[family:var(--font-display)] text-[32px] leading-[1.2] text-[var(--text)]">{title}</h2>
          <p className="mt-[10px] font-[family:var(--font-regular-display)] text-[18px] leading-[22.8px] text-[var(--text)]">{description}</p>
        </div>
        <Link href={href} className="wix-button-secondary">
          See Full Details
        </Link>
      </div>
      <div className="mt-[18px] grid grid-cols-3 gap-[16px]">
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
          description="All packages include a video consultation and a personally selected, shoppable styling guide PDF with direct links, brand details, sizing notes, and return information."
          href="/online-styling"
          packages={onlinePackages}
        />
        <ServiceSection
          title="CLOSET CLEANOUT & ORGANIZATION SERVICES"
          description="All services include a video consultation and an in-person session with a Flirt Stylist at your home. Honest, judgment-free, and designed to leave your closet lighter, cleaner, and more usable."
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
