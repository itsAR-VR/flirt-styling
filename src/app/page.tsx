import Link from "next/link";
import { FinalCta, PackagePreviewCard, SiteFooter, SiteHeader, closetPackages, onlinePackages } from "./site";

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
    <section className="mx-auto w-full max-w-[980px] px-[77px] pt-[8px]">
      <div className="max-w-[827px]">
        <div className="mb-[26px] inline-flex h-[30px] items-center rounded-[15px] border border-[rgba(39,20,1,0.08)] bg-white px-[14px] font-[family:var(--font-regular-display)] text-[12px] leading-none tracking-[0.08em] text-[var(--text)]">
          • Denver, CO - Online Services
        </div>
        <div className="space-y-[6px]">
          <h1 className="font-[family:var(--font-display)] text-[50px] leading-[70px] tracking-[0] text-[var(--text)]">Real Style for Real Life.</h1>
          <h2 className="font-[family:var(--font-display)] text-[50px] leading-[70px] tracking-[0] text-[var(--text)]">FLIRT STYLING</h2>
        </div>
        <div className="mt-[22px] max-w-[827px] space-y-[18px] font-[family:var(--font-regular-display)] text-[19px] leading-[22.8px] text-[var(--text)]">
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
        <div className="mt-[22px] flex items-center gap-[20px]">
          <a href="#booking-cta" className="wix-button-primary min-w-[298px] justify-center">
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
    <section className="mx-auto mt-[54px] w-full max-w-[980px] px-[77px]">
      <h2 className="font-[family:var(--font-display)] text-[32px] leading-[1.2] text-[var(--text)]">WHO IS THIS FOR</h2>
      <div className="mt-[20px] grid grid-cols-2 gap-x-[40px] gap-y-[18px]">
        {personas.map((persona) => (
          <div key={persona.title} className="py-[2px]">
            <h3 className="font-[family:var(--font-display)] text-[24px] leading-[1.2] text-[var(--text)]">{persona.title}</h3>
            <p className="mt-[6px] font-[family:var(--font-regular-display)] text-[18px] leading-[22.8px] text-[var(--text)]">{persona.body}</p>
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
    <section className="mx-auto mt-[58px] w-full max-w-[980px] px-[77px]">
      <div className="flex items-end justify-between gap-[24px]">
        <div className="max-w-[780px]">
          <h2 className="font-[family:var(--font-display)] text-[32px] leading-[1.2] text-[var(--text)]">{title}</h2>
          <p className="mt-[10px] font-[family:var(--font-regular-display)] text-[18px] leading-[22.8px] text-[var(--text)]">{description}</p>
        </div>
        <Link href={href} className="wix-button-secondary">
          See Full Details
        </Link>
      </div>
      <div className="mt-[18px] grid grid-cols-3 gap-[18px]">
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
      <main className="flex-1 bg-[var(--surface)] pb-[24px]">
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
    </>
  );
}
