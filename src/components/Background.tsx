export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base-950">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      {/* Top radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Floating orbs */}
      <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[100px] animate-float-slow" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-accent-soft/20 blur-[110px] animate-float" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-glow/10 blur-[120px] animate-float-slow" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-950" />
    </div>
  )
}
