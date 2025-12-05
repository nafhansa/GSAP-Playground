import Level1_Core from '@/components/Level1_Core';
import Level2_PropsAndEase from '@/components/Level2_PropsAndEase';
import Level3_Timeline from '@/components/Level3_Timeline';
import Level4_ScrollTrigger from '@/components/Level4_ScrollTrigger';
import Level5_Responsive from '@/components/Level5_Responsive';

function LevelSection({ title, subtitle, children, hint }) {
  return (
    <section className="rounded-2xl bg-panel p-6 shadow-xl shadow-slate-900/40 ring-1 ring-slate-800/70">
      <div className="flex flex-col gap-2 pb-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-slate-300">{subtitle}</p>
        {hint ? <p className="text-xs text-slate-400">{hint}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.1),transparent_35%)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">GSAP Drills</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">The Shapeshifting Box</h1>
          <p className="max-w-3xl text-slate-300">
            Five focused practice levels to rehearse core GSAP patterns in a Next.js 14 App Router
            environment. Each component isolates a skill—fill in the TODOs with your animations.
          </p>
        </header>

        <div className="grid gap-6">
          <LevelSection
            title="Level 1 · Core"
            subtitle="Practice gsap.to, gsap.from, and gsap.fromTo triggers via buttons."
            hint="Use contextSafe if you need isolated button handlers."
          >
            <Level1_Core />
          </LevelSection>

          <LevelSection
            title="Level 2 · Props & Ease"
            subtitle="Looping motion with duration, repeat/yoyo, and expressive easing curves."
          >
            <Level2_PropsAndEase />
          </LevelSection>

          <LevelSection
            title="Level 3 · Timeline"
            subtitle="Sequence multiple boxes with position parameters for rhythmic overlap."
          >
            <Level3_Timeline />
          </LevelSection>

          <LevelSection
            title="Level 4 · ScrollTrigger"
            subtitle="Wire scroll-based triggers, toggleActions, and a scrub/pin interaction."
          >
            <Level4_ScrollTrigger />
          </LevelSection>

          <LevelSection
            title="Level 5 · Responsive"
            subtitle="MatchMedia-driven behaviors that diverge between desktop and mobile."
          >
            <Level5_Responsive />
          </LevelSection>
        </div>
      </div>
    </main>
  );
}
