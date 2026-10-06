import { useEffect, useState } from 'react'
import { works } from '../data/works'
import WorkCard from './WorkCard'

const STORAGE_KEY = 'mio-portfolio-liked-works'

function Works() {
  const [likedIds, setLikedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likedIds))
  }, [likedIds])

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((likedId) => likedId !== id) : [...prev, id],
    )
  }

  return (
    <section id="works" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-2xl text-charcoal sm:text-3xl">Works</h2>
        <p className="text-sm text-muted">♡ でお気に入りを保存できます</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {works.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            liked={likedIds.includes(work.id)}
            onToggleLike={() => toggleLike(work.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Works
