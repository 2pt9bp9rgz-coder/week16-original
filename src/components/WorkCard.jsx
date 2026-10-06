const ACCENT_STYLES = {
  clay: 'bg-clay/10 text-clay-dark',
  sage: 'bg-sage/10 text-sage-dark',
  rose: 'bg-rose/15 text-clay-dark',
}

function WorkCard({ work, liked, onToggleLike }) {
  const badgeClass = ACCENT_STYLES[work.accent] ?? ACCENT_STYLES.clay

  return (
    <article className="flex flex-col rounded-2xl border border-sand bg-paper p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${badgeClass}`}
          aria-hidden="true"
        >
          {work.icon}
        </span>
        <button
          type="button"
          onClick={onToggleLike}
          aria-pressed={liked}
          aria-label={liked ? 'いいねを取り消す' : 'いいねする'}
          className={`text-xl transition hover:scale-110 ${
            liked ? 'text-clay-dark' : 'text-sand'
          }`}
        >
          {liked ? '♥' : '♡'}
        </button>
      </div>

      <h3 className="mt-5 font-display text-lg text-charcoal">{work.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{work.tagline}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-sand/70 px-3 py-1 text-xs text-charcoal"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default WorkCard
