const skills = [
  { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS", level: 92, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 88, color: "from-yellow-400 to-amber-500" },
  { name: "AWS Deployment", level: 82, color: "from-orange-400 to-yellow-500" },
  { name: "MongoDB Atlas", level: 80, color: "from-emerald-500 to-green-600" },
  { name: "Git / GitHub", level: 90, color: "from-zinc-500 to-zinc-800" },
  { name: "UI / UX Design", level: 88, color: "from-fuchsia-500 to-pink-500" },
  { name: "Branding", level: 92, color: "from-violet-500 to-purple-600" },
  { name: "Flyer Design", level: 94, color: "from-rose-500 to-orange-500" },
  { name: "Responsive Design", level: 95, color: "from-cyan-500 to-blue-600" },
  { name: "Social Media Setup", level: 90, color: "from-pink-500 to-rose-500" },
  { name: "Business Websites", level: 93, color: "from-indigo-500 to-violet-600" },
];

export const Skills = () => (
  <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
    <div className="absolute inset-0 mesh-bg opacity-30" />
    <div className="container relative">
      <div className="max-w-2xl mb-16">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest mb-5">
          <span className="h-1 w-6 bg-gradient-primary rounded-full" />
          Skills
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
          A toolkit built for <span className="text-gradient">range</span>.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Engineering, design and brand — fluent across the full stack of modern digital craft.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="glow-card glass rounded-2xl p-5 group"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-heading font-semibold">{s.name}</span>
              <span className="text-xs font-mono text-muted-foreground">{s.level}%</span>
            </div>
            <div className="relative h-2 rounded-full bg-muted overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${s.color} transition-all duration-1000 group-hover:brightness-125`}
                style={{ width: `${s.level}%` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,hsl(0_0%_100%/0.3),transparent)] bg-[length:200%_100%] animate-shimmer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
