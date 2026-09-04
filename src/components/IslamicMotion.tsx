/** Area animasi SVG islami bergerak (kubah, bintang sembilan, ornamen geometris). */
export function IslamicMotion({ label }: { label?: string }) {
  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-primary-soft/60 p-4">
      <svg viewBox="0 0 400 130" className="h-32 w-full" role="img" aria-label="Animasi ornamen islami">
        <defs>
          <linearGradient id="im-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--gold)" />
          </linearGradient>
        </defs>

        {/* ornamen geometris berputar */}
        <g className="animate-spin-slow" style={{ transformOrigin: "60px 65px" }}>
          <polygon
            points="60,25 90,47 79,83 41,83 30,47"
            fill="none"
            stroke="url(#im-g)"
            strokeWidth="2"
          />
          <polygon
            points="60,105 30,83 41,47 79,47 90,83"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.2"
            opacity="0.7"
          />
        </g>

        {/* masjid dengan kubah */}
        <g className="animate-float-slow">
          <path
            className="svg-draw"
            d="M170 100 L170 62 Q200 20 230 62 L230 100 Z"
            fill="none"
            stroke="url(#im-g)"
            strokeWidth="2.4"
          />
          <path d="M200 20 L200 8" stroke="var(--gold)" strokeWidth="2" />
          <circle cx="200" cy="6" r="3" fill="var(--gold)" />
          <path
            d="M152 100 L152 70 Q158 58 164 70 L164 100 Z M236 100 L236 70 Q242 58 248 70 L248 100 Z"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.6"
          />
          <path d="M140 102 H262" stroke="var(--gold)" strokeWidth="2" />
        </g>

        {/* sembilan bintang NU */}
        <g>
          {Array.from({ length: 9 }).map((_, i) => (
            <circle
              key={i}
              cx={296 + (i % 5) * 22}
              cy={i < 5 ? 48 : 76}
              r="4"
              fill="var(--gold)"
              className="animate-float-slow"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </g>
      </svg>
      {label ? (
        <p className="text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">{label}</p>
      ) : null}
    </div>
  );
}
