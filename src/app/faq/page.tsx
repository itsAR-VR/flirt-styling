'use client';

import { SiteHeader, SiteFooter, FinalCta, ChatWidgetMock } from '../site';

const sections = [
  {
    label: 'Online Styling',
    items: [
      ['What are clothing categories?', 'Clothing categories are the types of clothing you want styled, like tops, pants, dresses, or shoes. You tell Sydney about your lifestyle and goals on the call, and she decides which categories make the most sense for you.'],
      ['Do I have to buy everything in the guide?', 'Not at all. Your styling guide gives you options, and you choose what you love. There\'s no pressure and no minimum spend.'],
      ['What if I have a tight budget?', 'Budget is one of the first things Sydney asks about on your call. Every piece in your guide is selected with your budget in mind. That\'s a core part of how Flirt works.'],
      ['Will I have to buy a whole new wardrobe?', 'No, and that\'s intentional. Part of the consultation is learning what you already own so that new pieces are chosen to work with your existing closet.'],
      ['How do I know the brands in my guide are trustworthy?', 'Sydney researches every brand before recommending it, including quality, return policies, sizing accuracy, and overall reliability. Your guide includes that information so you always know what you\'re getting into before you buy.'],
      ['How long does it take to receive my PDF?', 'Your styling guide is delivered within 5 to 7 days of your consultation.'],
      ['What if something in my guide is out of stock?', 'You have 7 days from delivery to request up to 3 item replacements if anything is unavailable. Just reach out and Sydney will find alternatives.'],
      ['Can I ask questions after I receive my guide?', 'Yes. You have a 7-day support window after delivery to ask questions about your guide.'],
    ]
  },
  {
    label: 'Closet Services',
    items: [
      ['How long does a session take?', 'Most sessions run 1 to 2 hours depending on the size of your closet. Sydney comes prepared based on the photos and videos you share beforehand, so time is never wasted.'],
      ['Do I need to prepare anything before Sydney arrives?', 'Before your appointment, Sydney will ask you to send photos and videos of your closet during your consultation. Your space should be clean and accessible. Beyond that, Sydney handles the rest.'],
      ['What happens to the clothes I get rid of?', 'Sydney donates them to The Gathering Place in Denver within a few days of your session. You don\'t have to do a thing.'],
      ['Do you bring any supplies or equipment?', 'Sydney can bring hangers, bins, or labels if requested during your consultation. Just let her know in advance. Additional supplies may affect pricing to cover the cost.'],
      ['Can I book just one service or do I need both?', 'You can absolutely book just one. The Breakup and The Edit are standalone services. The Full Reset bundles both at a discount if you want everything in one visit.'],
      ['Can I book a follow-up session?', 'Yes. Follow-up sessions are available to book through the Flirt website.'],
    ]
  },
  {
    label: 'Consultation Process',
    items: [
      ['What happens during the consultation?', 'Your consultation is a 60-minute video call with Sydney. It\'s a real conversation, not a form or a quiz. She\'ll ask about your lifestyle, goals, budget, comfort preferences, and how you like to receive information.'],
      ['Do I need to prepare anything for the consultation?', 'For styling packages, have your sizes ready and a few current pieces nearby. For closet services, be ready to share photos and videos of your closet after the call.'],
      ['Is the consultation included in the price?', 'Yes. Every package and service includes a video consultation at no extra charge.'],
    ]
  },
  {
    label: 'PDF Guide',
    items: [
      ['What\'s included in the styling guide?', 'Your guide is a personalized PDF with direct shopping links, brand notes, sizing guidance, and return information for every piece. Everything you need to shop with confidence in one place.'],
      ['How is the guide delivered?', 'Your guide is delivered digitally within 5 to 7 days of your consultation. You\'ll receive it via email.'],
      ['Can I share my guide with someone else?', 'Your guide is personally created for you based on your specific goals, body, budget, and lifestyle. It\'s not designed to be shared, but you\'re welcome to shop from it however works best for you.'],
    ]
  },
  {
    label: 'Booking & Payments',
    items: [
      ['How do I book?', 'All services can be booked directly through the Flirt website. Start with a free intro call if you\'re not sure which package is right for you.'],
      ['What is the free intro call?', 'The free intro call is a no-pressure conversation with Sydney where she walks you through the services and helps you figure out what\'s right for you. No commitment required.'],
      ['What is your refund policy?', 'Refunds are available only if requested before your consultation takes place. Once your consultation has occurred, no refunds will be issued.'],
      ['What if I need to cancel or reschedule?', 'Please give at least 48 hours notice for cancellations or rescheduling requests. Late cancellations may forfeit eligibility for a refund.'],
    ]
  },
  {
    label: 'Location & Availability',
    items: [
      ['Where is Flirt located?', 'Flirt Styling LLC is based in Denver, Colorado.'],
      ['What areas do you service for in-person closet services?', 'Flirt services the Denver metro area. Outside that radius is possible but requires an additional mileage charge.'],
      ['Are online styling services available everywhere?', 'Yes. Online styling packages are available to anyone, anywhere. All you need is a video call and a reliable internet connection.'],
      ['How do I reach you if I have more questions?', 'You can email Sydney directly at hello.shopflirt@gmail.com.'],
    ]
  },
];

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details style={{
      paddingTop: '20px',
      paddingBottom: '20px',
      borderBottom: '1px solid #D6CFCB',
      cursor: 'pointer'
    }}>
      <summary style={{
        fontFamily: 'var(--font-display), serif',
        fontSize: '16px',
        fontWeight: '700',
        color: '#33190A',
        listStyle: 'none',
        outline: 'none'
      }}>
        {question}
      </summary>
      <p style={{
        marginTop: '16px',
        fontSize: '15px',
        fontWeight: '500',
        lineHeight: '1.6',
        color: '#57321D'
      }}>
        {answer}
      </p>
    </details>
  );
}

export default function FaqPage() {
  return (
    <main style={{ backgroundColor: '#FFFDFB', color: '#57321D' }}>
      <SiteHeader />

      {/* Hero Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#C9537C', marginBottom: '20px' }}>
            Frequently asked questions
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.2', marginBottom: '20px', color: '#33190A' }}>
            Got questions? We've got answers.
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#57321D', marginTop: '20px' }}>
            Everything you need to know about Flirt Styling, from how the process works to what happens after you book.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {sections.map((section) => (
              <div key={section.label}>
                <h2 style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#33190A',
                  marginBottom: '24px',
                  paddingLeft: '12px',
                  borderLeft: '4px solid #F5A1BE'
                }}>
                  {section.label}
                </h2>
                <div style={{
                  backgroundColor: '#F8F3EF',
                  borderRadius: '8px',
                  padding: '32px',
                  paddingTop: '24px',
                  paddingBottom: '24px'
                }}>
                  {section.items.map(([question, answer]) => (
                    <FaqItem key={question} question={question} answer={answer} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#F8F3EF', textAlign: 'center' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px', color: '#33190A' }}>
            Still have questions?
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#57321D', marginBottom: '40px' }}>
            Reach out directly or book a free intro call. Sydney is happy to walk you through everything.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hello.shopflirt@gmail.com" style={{
              display: 'inline-block',
              padding: '14px 32px',
              backgroundColor: '#F5A1BE',
              color: '#33190A',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px'
            }}>
              Email Us
            </a>
            <a href="#booking" style={{
              display: 'inline-block',
              padding: '14px 32px',
              backgroundColor: 'transparent',
              color: '#C9537C',
              textDecoration: 'none',
              border: '2px solid #C9537C',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px'
            }}>
              Book a Free Intro Call
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA, Footer, Chat Widget */}
      <FinalCta />
      <SiteFooter />
      <ChatWidgetMock />
    </main>
  );
}
