const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#works', label: 'Works' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg text-charcoal">
          Mio Hasegawa
        </a>
        <nav className="hidden gap-8 text-sm text-muted sm:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-clay-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <p className="font-display text-sm tracking-[0.2em] text-clay-dark">
        PORTFOLIO
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
        長谷川実桜
        <span className="mt-2 block text-xl text-muted sm:text-2xl">
          Mio Hasegawa — Web Creator
        </span>
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        早稲田大学に通いながら、POSSE PH1でHTML / Tailwind / JavaScript / React を学習中。
        小さな違和感を見つけて、やさしく心地よい体験に整えるのが好きです。
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#works"
          className="rounded-full bg-clay px-6 py-2.5 text-sm font-medium text-paper shadow-sm transition hover:bg-clay-dark"
        >
          作品を見る
        </a>
        <a
          href="#contact"
          className="rounded-full border border-sand bg-paper px-6 py-2.5 text-sm font-medium text-charcoal transition hover:border-clay hover:text-clay-dark"
        >
          お問い合わせ
        </a>
      </div>
    </section>
  )
}

export { Header, Hero }
