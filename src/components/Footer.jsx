function Footer() {
  return (
    <footer id="contact" className="border-t border-sand bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
        <h2 className="font-display text-2xl text-charcoal sm:text-3xl">Contact</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          お仕事のご相談や、作品についての感想など、GitHub経由でお気軽にご連絡ください。
        </p>
        <a
          href="https://github.com/2pt9bp9rgz-coder"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-2.5 text-sm font-medium text-paper transition hover:bg-clay-dark"
        >
          GitHub を見る
        </a>
        <p className="mt-12 text-xs text-muted">
          © 2026 Mio Hasegawa — Built with React, Tailwind CSS &amp; Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer
