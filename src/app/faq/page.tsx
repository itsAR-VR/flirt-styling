import { FinalCta, SiteFooter, SiteHeader } from "../site";

const sections = [
  {
    label: "Online Styling",
    items: [
      ["What are clothing categories?", "Clothing categories are the types of clothing you want styled, like tops, pants, dresses, or shoes. You tell Sydney about your lifestyle and goals on the call, and she decides which categories make the most sense for you."],
      ["Do I have to buy everything in the guide?", "Not at all. Your styling guide gives you options, and you choose what you love. There’s no pressure and no minimum spend."],
      ["What if I have a tight budget?", "Budget is one of the first things Sydney asks about on your call. Every piece in your guide is selected with your budget in mind. That’s a core part of how Flirt works."],
      ["Will I have to buy a whole new wardrobe?", "No, and that’s intentional. Part of the consultation is learning what you already own so that new pieces are chosen to work with your existing closet."],
      ["How do I know the brands in my guide are trustworthy?", "Sydney researches every brand before recommending it, including quality, return policies, sizing accuracy, and overall reliability. Your guide includes that information so you always know what you’re getting into before you buy."],
      ["How long does it take to receive my PDF?", "Your styling guide is delivered within 5 to 7 days of your consultation."],
      ["What if something in my guide is out of stock?", "You have 7 days from delivery to request up to 3 item replacements if anything is unavailable. Just reach out and Sydney will find alternatives."],
      ["Can I ask questions after I receive my guide?", "Yes. You have a 7-day support window after delivery to ask questions about your guide."],
    ],
  },
  {
    label: "Closet Services",
    items: [
      ["How long does a session take?", "Most sessions run 1 to 2 hours depending on the size of your closet. Sydney comes prepared based on the photos and videos you share beforehand, so time is never wasted."],
      ["Do I need to prepare anything before Sydney arrives?", "Before your appointment, Sydney will ask you to send photos and videos of your closet during your consultation. Your space should be clean and accessible. Beyond that, Sydney handles the rest."],
      ["What happens to the clothes I get rid of?", "Sydney donates them to The Gathering Place in Denver within a few days of your session. You don’t have to do a thing."],
      ["Do you bring any supplies or equipment?", "Sydney can bring hangers, bins, or labels if requested during your consultation. Just let her know in advance. Additional supplies may affect pricing to cover the cost."],
      ["Can I book just one service or do I need both?", "You can absolutely book just one. The Breakup and The Edit are standalone services. The Full Reset bundles both at a discount if you want everything in one visit."],
      ["Can I book a follow-up session?", "Yes. Follow-up sessions are available to book through the Flirt website."],
    ],
  },
  {
    label: "Consultation Process",
    items: [
      ["What happens during the consultation?", "Your consultation is a 60-minute video call with Sydney. It’s a real conversation, not a form or a quiz. She’ll ask about your lifestyle, goals, budget, comfort preferences, and how you like to receive information."],
      ["Do I need to prepare anything for the consultation?", "For styling packages, have your sizes ready and a few current pieces nearby. For closet services, be ready to share photos and videos of your closet after the call."],
      ["Is the consultation included in the price?", "Yes. Every package and service includes a video consultation at no extra charge."],
    ],
  },
  {
    label: "PDF Guide",
    items: [
      ["What’s included in the styling guide?", "Your guide is a personalized PDF with direct shopping links, brand notes, sizing guidance, and return information for every piece. Everything you need to shop with confidence in one place."],
      ["How is the guide delivered?", "Your guide is delivered digitally within 5 to 7 days of your consultation. You’ll receive it via email."],
      ["Can I share my guide with someone else?", "Your guide is personally created for you based on your specific goals, body, budget, and lifestyle. It’s not designed to be shared, but you’re welcome to shop from it however works best for you."],
    ],
  },
  {
    label: "Booking & Payments",
    items: [
      ["How do I book?", "All services can be booked directly through the Flirt website. Start with a free intro call if you’re not sure which package is right for you."],
      ["What is the free intro call?", "The free intro call is a no-pressure conversation with Sydney where she walks you through the services and helps you figure out what’s right for you. No commitment required."],
      ["What is your refund policy?", "Refunds are available only if requested before your consultation takes place. Once your consultation has occurred, no refunds will be issued."],
      ["What if I need to cancel or reschedule?", "Please give at least 48 hours notice for cancellations or rescheduling requests. Late cancellations may forfeit eligibility for a refund."],
    ],
  },
  {
    label: "Location & Availability",
    items: [
      ["Where is Flirt located?", "Flirt Styling LLC is based in Denver, Colorado."],
      ["What areas do you service for in-person closet services?", "Flirt services the Denver metro area. Outside that radius is possible but requires an additional mileage charge."],
      ["Are online styling services available everywhere?", "Yes. Online styling packages are available to anyone, anywhere. All you need is a video call and a reliable internet connection."],
      ["How do I reach you if I have more questions?", "You can email Sydney directly at hello.shopflirt@gmail.com."],
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="section-shell pt-14 sm:pt-18">
          <div className="rounded-[36px] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_20px_70px_rgba(39,20,1,0.05)] sm:px-10 sm:py-14">
            <p className="section-label">Frequently asked questions</p>
            <h1 className="mt-4 max-w-[940px] font-[family:var(--font-display)] text-[54px] leading-[0.94] tracking-[-0.06em] text-[var(--text)] sm:text-[76px]">
              Got questions? We&apos;ve got answers.
            </h1>
            <p className="mt-6 max-w-[820px] text-[19px] leading-8 text-[var(--text-soft)]">
              Everything you need to know about Flirt Styling, from how the process works to what happens after you book.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.label} className="rounded-[32px] border border-[var(--border)] bg-white px-6 py-8 sm:px-8 sm:py-10">
                <p className="section-label">{section.label}</p>
                <div className="mt-6 space-y-4">
                  {section.items.map(([question, answer]) => (
                    <details key={question} className="rounded-[22px] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 open:border-[var(--pink)] open:bg-[var(--surface-alt)]">
                      <summary className="cursor-pointer list-none font-[family:var(--font-display)] text-[25px] leading-[1.08] text-[var(--text)]">
                        {question}
                      </summary>
                      <p className="mt-3 text-[16px] leading-7 text-[var(--text-soft)]">{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="rounded-[32px] border border-[var(--border)] bg-white px-6 py-8 text-center sm:px-10">
            <h2 className="font-[family:var(--font-display)] text-[42px] leading-[0.98] tracking-[-0.05em] text-[var(--text)] sm:text-[58px]">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[18px] leading-8 text-[var(--text-soft)]">
              Reach out directly or book a free intro call. Sydney is happy to walk you through everything.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:hello.shopflirt@gmail.com" className="button-secondary">
                hello.shopflirt@gmail.com
              </a>
              <a href="#booking-cta" className="button-primary">
                Book your free intro call
              </a>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
