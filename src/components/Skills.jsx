const SKILL_GROUPS = [
  {
    title: 'Front-end',
    description: '画面を形にするための基礎技術',
    skills: ['HTML', 'Tailwind CSS', 'JavaScript', 'React'],
  },
  {
    title: 'React の使い方',
    description: '状態と向き合いながら書けるようになったこと',
    skills: ['useState', 'useEffect', 'Props設計', 'コンポーネント分割'],
  },
  {
    title: 'デザインの視点',
    description: 'コードだけでなく見た目にも意識していること',
    skills: ['配色設計', '余白の使い方', 'タイポグラフィ', 'レスポンシブ'],
  },
]

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="font-display text-2xl text-charcoal sm:text-3xl">Skills</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="font-display text-lg text-clay-dark">{group.title}</h3>
            <p className="mt-1 text-sm text-muted">{group.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-sand bg-paper px-3 py-1 text-sm text-charcoal"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
