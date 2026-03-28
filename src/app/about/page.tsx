import { FinalCta, SiteFooter, SiteHeader } from "../site";

export default function AboutPage() {
  return (
    <>
      <SiteHeader activePath="/about" />
      <main className="flex-1">
        <section className="section-shell pt-14 sm:pt-18">
          <div className="rounded-[36px] border border-[var(--border)] bg-white px-6 py-10 shadow-[0_20px_70px_rgba(39,20,1,0.05)] sm:px-10 sm:py-14">
            <p className="section-label">About Flirt Styling</p>
            <h1 className="mt-4 max-w-[980px] font-[family:var(--font-display)] text-[54px] leading-[0.94] tracking-[-0.06em] text-[var(--text)] sm:text-[76px]">
              Great style should be for everyone. That&apos;s not just something we say, it&apos;s why Flirt exists.
            </h1>
            <p className="mt-6 max-w-[860px] text-[19px] leading-8 text-[var(--text-soft)]">
              Sydney Vianzon built Flirt to make getting dressed feel less overwhelming, more personal, and a lot more like
              yourself. Warm guidance, real taste, and a process designed for actual life.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start">
            <div className="rounded-[32px] border border-[var(--border)] bg-[linear-gradient(180deg,#fdf4ef_0%,#fffdfb_100%)] p-8 text-center">
              <div className="flex aspect-[4/5] items-center justify-center rounded-[26px] border border-dashed border-[var(--border)] bg-white text-[15px] uppercase tracking-[0.24em] text-[var(--text-soft)]">
                Sydney&apos;s photo here
              </div>
            </div>
            <div className="rounded-[32px] border border-[var(--border)] bg-white px-6 py-8 sm:px-8 sm:py-10">
              <p className="section-label">Founder &amp; Lead Stylist, Flirt Styling LLC</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-[50px] leading-[0.94] tracking-[-0.05em] text-[var(--text)] sm:text-[66px]">
                Sydney Vianzon
              </h2>
              <div className="mt-6 space-y-5 text-[18px] leading-8 text-[var(--text-soft)]">
                <p>
                  Sydney started in fashion at 12, moving through modeling, acting, styling, and directing photoshoots.
                  The thread through all of it was the same: style changes how people carry themselves.
                </p>
                <p>
                  She spent five years in retail at Victoria’s Secret, Aritzia, and Abercrombie &amp; Fitch, learning exactly
                  where people get stuck when they want to look great but don’t have the time, language, or confidence to
                  pull it together alone.
                </p>
                <p>
                  She’s currently pursuing a BA in Entrepreneurship, but Flirt is the work that makes the bigger vision feel
                  real. Making style accessible to everyone, not just the naturally fashion-confident few.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="rounded-[34px] border border-[var(--border)] bg-white px-6 py-8 sm:px-10 sm:py-10">
            <p className="section-label">Why Flirt</p>
            <h2 className="mt-4 max-w-[980px] font-[family:var(--font-display)] text-[46px] leading-[0.96] tracking-[-0.05em] text-[var(--text)] sm:text-[62px]">
              Fashion taught me a lot. The most important thing? Everyone deserves to feel good in what they wear.
            </h2>
            <div className="mt-6 max-w-[980px] space-y-5 text-[18px] leading-8 text-[var(--text-soft)]">
              <p>
                Sydney watched people struggle with fashion not because they didn’t care, but because nobody made it easy.
                Shopping felt noisy. Closets felt frustrating. Great style looked like something reserved for people with more
                money, more time, or more confidence.
              </p>
              <p>
                She founded Flirt in Denver in June 2025 to change that. The idea was simple: take everything she learned in
                fashion and retail and turn it into support that feels personal, useful, and actually grounded in real life.
              </p>
              <p>
                Flirt is meant to be a fun, flirty way to catch attention and become who you want to be, without losing the
                practical side. Real women. Real lives. Real closets.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Real conversations, not algorithms", "Every consultation is a live video call with a Flirt Stylist. No generic quiz pretending to know your life."],
              ["Styled around your life", "Budget, comfort, and what you already own come first. Always."],
              ["Brand research done for you", "Every brand is vetted for quality, return policies, sizing accuracy, and trustworthiness."],
              ["Accessible by design", "Great style shouldn’t require a huge budget, endless time, or insider knowledge."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[28px] border border-[var(--border)] bg-white px-6 py-7">
                <p className="font-[family:var(--font-display)] text-[30px] leading-none text-[var(--text)]">{title}</p>
                <p className="mt-4 text-[17px] leading-7 text-[var(--text-soft)]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Honesty", "Real opinions, real guidance, always."],
              ["Accessibility", "Style is for everyone, regardless of budget or knowledge."],
              ["Confidence", "Every client should walk away feeling like themselves."],
              ["Style", "Fashion should be fun, personal, and expressive."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-alt)] px-6 py-7">
                <p className="font-[family:var(--font-display)] text-[30px] leading-none text-[var(--text)]">{title}</p>
                <p className="mt-4 text-[17px] leading-7 text-[var(--text-soft)]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="rounded-[34px] border border-[var(--border)] bg-white px-6 py-8 sm:px-10 sm:py-10">
            <p className="section-label">Where we&apos;re going</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-[46px] leading-[0.96] tracking-[-0.05em] text-[var(--text)] sm:text-[62px]">
              Flirt is bigger than styling sessions.
            </h2>
            <div className="mt-6 max-w-[980px] space-y-5 text-[18px] leading-8 text-[var(--text-soft)]">
              <p>
                The long-term vision includes a clothing store and a clothing line, built with the same belief underneath
                it: style should feel accessible, personal, and energizing instead of exclusive.
              </p>
              <p>
                Sydney also wants Flirt to become a place that creates opportunities for young people in fashion, because
                that world changed her life. The bigger goal isn’t just great outfits. It’s confidence, creativity, and a
                path forward.
              </p>
            </div>
          </div>
        </section>

        <FinalCta
          title="Flirt with style."
          description="Book a free intro call, no pressure, no commitment. Just a conversation about what you need and how Flirt can help."
          secondaryLabel="View our services"
          secondaryHref="/online-styling"
        />
      </main>
      <SiteFooter />
    </>
  );
}
