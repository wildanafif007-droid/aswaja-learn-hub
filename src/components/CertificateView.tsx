import { QRCodeSVG } from "qrcode.react";
import signature from "@/assets/signature.png.asset.json";

const IVORY = "#fdfbf7";
const EMERALD = "#064e3b";
const GOLD = "#eab308";

export type CertificateData = {
  nama: string;
  kelas: string;
  babTitle: string;
  tanggal: string;
  bestSkor: number;
  predikat: string;
  noReg: string;
  verifyUrl: string;
};

/** Sembilan bintang khas ALH/NU pada lingkaran. */
function NineStars({ r, size, cx, cy }: { r: number; size: number; cx: number; cy: number }) {
  return (
    <>
      {Array.from({ length: 9 }).map((_, i) => {
        const a = (i / 9) * Math.PI * 2 - Math.PI / 2;
        return (
          <Star
            key={i}
            x={cx + Math.cos(a) * r}
            y={cy + Math.sin(a) * r}
            s={size}
            rot={(i / 9) * 360}
          />
        );
      })}
    </>
  );
}

function Star({ x, y, s, rot = 0 }: { x: number; y: number; s: number; rot?: number }) {
  const pts = Array.from({ length: 10 })
    .map((_, i) => {
      const rad = i % 2 === 0 ? s : s * 0.45;
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      return `${x + Math.cos(a) * rad},${y + Math.sin(a) * rad}`;
    })
    .join(" ");
  return <polygon points={pts} transform={`rotate(${rot} ${x} ${y})`} />;
}

/** Lambang ALH: lingkaran emas, sembilan bintang, pena hijau. */
function LogoALH({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="56" fill="none" stroke={GOLD} strokeWidth="3" />
      <circle cx="60" cy="60" r="48" fill="none" stroke={EMERALD} strokeWidth="1.2" />
      <g fill={GOLD}>
        <NineStars cx={60} cy={60} r={41} size={5.4} />
      </g>
      <g fill={EMERALD}>
        <path d="M60 34 L68 52 L64 88 L60 96 L56 88 L52 52 Z" />
        <path d="M60 34 L64 44 L56 44 Z" fill={GOLD} />
      </g>
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill={IVORY}
        fontFamily="serif"
      >
        ALH
      </text>
    </svg>
  );
}

/** Watermark lambang NU (bola dunia bertali + sembilan bintang). */
function NuWatermark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke={EMERALD} strokeWidth="2.5">
        <ellipse cx="100" cy="105" rx="58" ry="58" />
        <ellipse cx="100" cy="105" rx="24" ry="58" />
        <ellipse cx="100" cy="105" rx="58" ry="22" />
        <path d="M42 105 q58 34 116 0" />
      </g>
      <g fill={EMERALD}>
        <NineStars cx={100} cy={100} r={80} size={9} />
      </g>
    </svg>
  );
}

/** Segel hologram emas bermotif bintang sembilan. */
function HologramSeal() {
  return (
    <div className="relative h-28 w-28 shrink-0">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <radialGradient id="seal-holo" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#fff8dc" />
            <stop offset="45%" stopColor={GOLD} />
            <stop offset="100%" stopColor="#a16207" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="56" fill="url(#seal-holo)" />
        <circle cx="60" cy="60" r="47" fill="none" stroke={IVORY} strokeWidth="1.5" opacity="0.8" />
        <circle cx="60" cy="60" r="30" fill={EMERALD} opacity="0.92" />
        <g fill={GOLD}>
          <NineStars cx={60} cy={60} r={39} size={5} />
        </g>
        <g fill={IVORY}>
          <NineStars cx={60} cy={60} r={19} size={3.6} />
        </g>
        <text
          x="60"
          y="64"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={GOLD}
          fontFamily="serif"
        >
          ALH
        </text>
      </svg>
    </div>
  );
}

/** Aksen gelombang lengkung emerald + emas pada sudut. */
function CornerWave({ position }: { position: "tl" | "br" }) {
  const flip = position === "br" ? "rotate(180 100 100)" : undefined;
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute h-40 w-40 sm:h-56 sm:w-56 ${
        position === "tl" ? "top-0 left-0" : "right-0 bottom-0"
      }`}
      aria-hidden="true"
    >
      <g transform={flip}>
        <path d="M0 0 H140 Q60 20 44 130 Q30 176 0 200 Z" fill={EMERALD} />
        <path d="M0 0 H92 Q34 26 24 132 Q16 172 0 190 Z" fill="#065f46" opacity="0.55" />
        <path d="M150 0 Q66 26 52 140 Q40 186 6 200" fill="none" stroke={GOLD} strokeWidth="4" />
        <path d="M172 0 Q84 30 70 148 Q58 190 26 200" fill="none" stroke={GOLD} strokeWidth="1.6" />
      </g>
    </svg>
  );
}

export function CertificateView(data: CertificateData) {
  return (
    <div
      id="sertifikat-card"
      className="relative isolate mx-auto w-full overflow-hidden rounded-lg shadow-2xl sm:aspect-[297/210]"
      style={{ backgroundColor: IVORY }}
    >
      <CornerWave position="tl" />
      <CornerWave position="br" />

      {/* Inner border emas tipis */}
      <div
        className="pointer-events-none absolute inset-4 rounded-sm sm:inset-6"
        style={{ border: `1px solid ${GOLD}` }}
      />

      {/* Watermark lambang NU */}
      <NuWatermark className="pointer-events-none absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      <div className="relative z-10 flex h-full flex-col justify-between px-8 py-8 text-center sm:px-16 sm:py-10">
        {/* ATAS */}
        <header className="flex flex-col items-center">
          <LogoALH className="h-16 w-16 sm:h-20 sm:w-20" />
          <h2
            className="mt-3 font-serif text-2xl font-bold tracking-[0.14em] sm:text-4xl"
            style={{ color: EMERALD }}
          >
            SERTIFIKAT PENGHARGAAN
          </h2>
          <div
            className="mt-3 inline-block px-6 py-1 text-[10px] font-semibold tracking-[0.22em] sm:text-xs"
            style={{
              background: `linear-gradient(90deg, transparent, ${GOLD} 12%, #fde047 50%, ${GOLD} 88%, transparent)`,
              color: "#3f2d05",
            }}
          >
            NO. REG: {data.noReg}
          </div>
        </header>

        {/* TENGAH */}
        <section className="mt-5 flex flex-col items-center sm:mt-2">
          <p
            className="text-[10px] font-semibold tracking-[0.3em] sm:text-xs"
            style={{ color: "#5b6a63" }}
          >
            DIBERIKAN KEPADA:
          </p>
          <p
            className="mt-2 font-serif text-3xl font-bold sm:text-5xl"
            style={{ color: EMERALD }}
          >
            {data.nama}
          </p>
          <div className="mx-auto mt-2 h-px w-2/3" style={{ backgroundColor: GOLD }} />
          <p className="mt-3 max-w-2xl text-xs leading-relaxed sm:text-sm" style={{ color: "#3a4741" }}>
            Kelas <strong>{data.kelas}</strong> — telah menuntaskan modul kuis{" "}
            <strong>{data.babTitle}</strong> dengan predikat{" "}
            <strong style={{ color: EMERALD }}>{data.predikat}</strong> dan skor tertinggi{" "}
            <strong style={{ color: EMERALD }}>{data.bestSkor}</strong>.
          </p>
          <p
            className="mx-auto mt-3 max-w-3xl text-[10px] leading-relaxed italic sm:text-[11px]"
            style={{ color: "#6b7770" }}
          >
            E-Sertifikat ini diterbitkan secara sah oleh sistem e-learning berdasarkan pemenuhan
            standar kompetensi dasar kurikulum Pendidikan Aswaja An-Nahdliyah, yang meliputi aspek
            penguatan akidah, fikih ibadah, serta implementasi amaliyah Ahlussunnah wal Jamaah.
          </p>
          <p
            className="mt-2 text-[9px] font-semibold tracking-[0.22em] sm:text-[10px]"
            style={{ color: "#8a9490" }}
          >
            LKS TAQWA — CV. KARYA DIGITAL PUSTAKA
          </p>
        </section>

        {/* BAWAH */}
        <footer className="mt-6 grid grid-cols-1 items-end gap-6 sm:mt-2 sm:grid-cols-3">
          <div className="flex justify-center sm:justify-start">
            <HologramSeal />
          </div>

          <div className="flex flex-col items-center gap-1">
            <QRCodeSVG
              value={data.verifyUrl}
              size={80}
              bgColor="transparent"
              fgColor={EMERALD}
              level="M"
              className="h-20 w-20"
            />
            <span
              className="text-[8px] font-semibold tracking-[0.24em]"
              style={{ color: "#5b6a63" }}
            >
              ASWAJA LEARN HUB
            </span>
            <a
              href={data.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-3 py-1 text-[9px] font-semibold tracking-wide"
              style={{ border: `1px solid ${GOLD}`, color: EMERALD }}
            >
              Verifikasi Sertifikat
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-end">
            <p className="text-[10px] sm:text-xs" style={{ color: "#3a4741" }}>
              Malang, {data.tanggal}
            </p>
            <img
              src={signature.url}
              alt="Tanda tangan Ahmad Wildan Afif, M.Pd."
              className="h-[100px] w-auto object-contain mix-blend-multiply"
            />
            <p
              className="font-serif text-sm font-bold sm:text-base"
              style={{ color: EMERALD, borderTop: `1px solid ${GOLD}` }}
            >
              Ahmad Wildan Afif, M.Pd.
            </p>
            <p className="text-[10px]" style={{ color: "#6b7770" }}>
              Guru Pengampu
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CertificateView;
