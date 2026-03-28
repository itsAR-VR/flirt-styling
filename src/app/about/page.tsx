import Image from "next/image";
import { ChatWidgetMock, SiteFooter, SiteHeader } from "../site";

const services = [
  {
    title: "The Soulmate",
    price: "$199",
    priceSr: "199 US dollars",
    duration: "1 hr",
    href: "https://www.flirtwithstyle.com/booking-calendar/the-soulmate",
    image: "/assets/service-soulmate.jpg",
  },
  {
    title: "The Fling",
    price: "$149",
    priceSr: "149 US dollars",
    duration: "1 hr",
    href: "https://www.flirtwithstyle.com/booking-calendar/the-fling",
    image: "/assets/service-fling.jpg",
  },
  {
    title: "The Hookup",
    price: "$199",
    priceSr: "199 US dollars",
    duration: "1 hr",
    href: "https://www.flirtwithstyle.com/booking-calendar/the-hookup",
    image: "/assets/service-hookup.jpg",
  },
  {
    title: "The Breakup",
    price: "$229",
    priceSr: "229 US dollars",
    duration: "1 hr",
    href: "https://www.flirtwithstyle.com/booking-calendar/the-breakup",
    image: "/assets/service-breakup.jpg",
  },
  {
    title: "The Edit",
    price: "$229",
    priceSr: "229 US dollars",
    duration: "1 hr",
    href: "https://www.flirtwithstyle.com/booking-calendar/the-edit",
    image: "/assets/service-edit.png",
  },
  {
    title: "The Full Reset",
    price: "$399",
    priceSr: "399 US dollars",
    duration: "1 hr",
    href: "https://www.flirtwithstyle.com/booking-calendar/the-full-reset",
    image: "/assets/service-full-reset.png",
  },
];

function ServiceCard({ title, price, priceSr, duration, href, image }: (typeof services)[number]) {
  return (
    <li className="list-none">
      <section className="overflow-hidden rounded-[18px] bg-white">
        <div className="relative aspect-[1.48/1] w-full overflow-hidden bg-[#f4ede7]">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
        <div className="px-[18px] py-[18px]">
          <a href={href} className="block">
            <h2 className="font-[family:var(--font-display)] text-[30px] leading-[1.05] text-[var(--text-dark)]">{title}</h2>
          </a>
          <hr className="my-[14px] border-none border-t border-[rgba(39,20,1,0.14)]" />
          <div className="flex items-center justify-between font-[family:var(--font-medium)] text-[18px] leading-[1.2] text-[var(--text-dark)]">
            <p>{duration}</p>
            <div>
              <span className="sr-only">{priceSr}</span>
              <p aria-hidden="true">{price}</p>
            </div>
          </div>
          <div className="mt-[18px]">
            <a
              href={href}
              className="inline-flex min-h-[44px] items-center justify-center rounded-[2px] border-b border-transparent font-[family:var(--font-medium)] text-[18px] leading-[1.2] text-[var(--text-dark)] transition-colors duration-200 hover:border-[var(--text-dark)]"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </li>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--surface)] pt-[120px]">
        <section className="mx-auto w-full max-w-[1160px] px-[70px] pb-[30px]">
          <div className="text-center">
            <h1 className="font-[family:var(--font-display)] text-[52px] leading-[1.02] text-[var(--text-dark)]">Our Services</h1>
          </div>
          <div className="mt-[34px]">
            <ul className="grid grid-cols-1 gap-[28px] md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ChatWidgetMock />
    </>
  );
}
