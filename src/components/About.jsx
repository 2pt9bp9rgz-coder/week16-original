const FUN_FACTS = [
  { icon: '🎵', label: 'フルート', detail: '中高6年間続けた吹奏楽の経験' },
  { icon: '🧩', label: 'ルービックキューブ', detail: '考え方の整理が好きで今も崩し中' },
  { icon: '✨', label: 'モットー', detail: 'いつもワクワクする方へ進む' },
]

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="font-display text-2xl text-charcoal sm:text-3xl">About</h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted">
        早稲田大学で学びながら、POSSEのプログラムを通じてWeb開発の基礎を一つずつ積み上げています。
        もともと「作ること」自体が好きで、手を動かして形にしていく過程に一番の面白さを感じるタイプです。
        最近はコードを書くことと同じくらい、配色やレイアウトなど見た目の心地よさにも興味を持っています。
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {FUN_FACTS.map((fact) => (
          <div
            key={fact.label}
            className="rounded-2xl border border-sand bg-paper p-5 shadow-sm"
          >
            <span className="text-2xl">{fact.icon}</span>
            <p className="mt-3 font-display text-base text-charcoal">{fact.label}</p>
            <p className="mt-1 text-sm text-muted">{fact.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
