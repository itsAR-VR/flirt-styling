'use client';

import { SiteHeader, SiteFooter, FinalCta, ChatWidgetMock } from '../site';

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#FFFDFB', color: '#57321D' }}>
      <SiteHeader />

      {/* Hero Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#C9537C', marginBottom: '20px' }}>
            About Flirt Styling
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.2', marginBottom: '20px', color: '#33190A' }}>
            Great style should be for everyone. That's not just something we say — it's why Flirt exists.
          </h1>
        </div>
      </section>

      {/* Sydney's Photo + Bio Section */}
      <section style={{ paddingTop: '60px', paddingBottom: '80px', borderTop: '1px solid #D6CFCB' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            {/* Photo Placeholder */}
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              backgroundColor: '#FFE4EB',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: '500',
              color: '#C9537C',
              minHeight: '500px'
            }}>
              [Sydney's photo here]
            </div>

            {/* Bio */}
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px', color: '#33190A' }}>
                Sydney
              </h2>
              <p style={{ fontSize: '16px', fontWeight: '600', color: '#C9537C', marginBottom: '24px' }}>
                Founder & Lead Stylist, Flirt Styling LLC
              </p>
              <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#57321D' }}>
                <p style={{ marginBottom: '16px' }}>
                  Sydney's love of fashion started early — at just 12 years old, she was already experimenting with styling and self-expression through clothing. That passion never faded.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Over the past 5 years, Sydney has worked in retail and styling at some of the industry's biggest names: Victoria's Secret, Aritzia, and Abercrombie & Fitch. These experiences taught her what works, what doesn't, and most importantly — how to make people feel confident in what they wear.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Currently pursuing her BA in Entrepreneurship, Sydney brings both her deep fashion knowledge and her business acumen to Flirt. But at the heart of it all is her genuine passion for accessibility — she believes that everyone deserves great style, regardless of budget or body type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Flirt Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#F8F3EF' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px', textAlign: 'center', color: '#33190A' }}>
            Why Flirt
          </h2>
          <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#57321D' }}>
            <p style={{ marginBottom: '20px' }}>
              Flirt Styling was born out of a simple observation: <span style={{ color: '#C9537C', fontWeight: '600' }}>fashion shouldn't be gatekept</span>. Too often, people feel overwhelmed by style — unsure what works for their body, their budget, their lifestyle, or their values.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Sydney started Flirt to change that. She wanted to create a space where personalized styling advice is accessible, genuine, and human-centered. Not algorithms. Not trends that don't serve you. Just real conversations with someone who actually knows how to help you look and feel your best.
            </p>
            <p>
              Every service — from our PDF styling guides to our in-person closet sessions — is designed with one question in mind: <span style={{ color: '#C9537C', fontWeight: '600' }}>How can we make this easier, more affordable, and more empowering for our clients?</span>
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '60px', textAlign: 'center', color: '#33190A' }}>
            What sets us apart
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            {[
              {
                title: 'Real conversations, not algorithms',
                desc: "You\u2019re not a data point. Sydney gets to know you, your style preferences, and your lifestyle. That\u2019s how she creates guides and recommendations that actually work."
              },
              {
                title: 'Styled around your life',
                desc: "Whether you\u2019re a busy parent, a remote worker, or someone who loves dressing up, your style should work for YOU \u2014 not against you."
              },
              {
                title: 'Brand research done for you',
                desc: "We\u2019ve vetted the brands and retailers you\u2019ll find in your guide. You can shop with confidence knowing we\u2019ve already done the homework."
              },
              {
                title: 'Accessible by design',
                desc: 'Great style should fit any budget. Our guides and services are priced to be accessible, with options for everyone.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#F8F3EF',
                padding: '32px',
                borderRadius: '12px'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#33190A' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#57321D' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#F8F3EF' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '60px', textAlign: 'center', color: '#33190A' }}>
            What we believe
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            {[
              {
                title: 'Honesty',
                desc: "We tell you the truth about what works. That includes being honest about brands, fit, and whether something is right for you \u2014 even if you love it."
              },
              {
                title: 'Accessibility',
                desc: "Fashion should be for everyone. We believe in inclusive sizing, diverse styling options, and prices that don\u2019t break the bank."
              },
              {
                title: 'Confidence',
                desc: "The right clothes can change how you feel. We\u2019re here to help you build confidence through style that feels authentically YOU."
              },
              {
                title: 'Style',
                desc: "Style isn\u2019t about following rules. It\u2019s about understanding yourself and expressing that through what you wear."
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#FFFDFB',
                padding: '32px',
                borderRadius: '12px',
                border: '2px solid #FFE4EB'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#C9537C' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#57321D' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We're Going Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px', textAlign: 'center', color: '#33190A' }}>
            Where we're going
          </h2>
          <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#57321D' }}>
            <p style={{ marginBottom: '20px' }}>
              Right now, Flirt exists as a personalized styling service. But we're dreaming bigger. The long-term vision? A clothing store and line that reflects everything we believe in — quality pieces that work for real bodies, real budgets, and real lives.
            </p>
            <p>
              We're building a brand and a community where style is accessible, honest, and empowering. Where you don't have to spend hours shopping or stress about fit. Where fashion actually makes you feel good.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#F8F3EF', textAlign: 'center' }}>
        <div className="site-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px', color: '#33190A' }}>
            Ready to connect?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', color: '#57321D' }}>
            Have questions or want to book a free intro call with Sydney?
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
              Book a Call
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
