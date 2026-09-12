import { QRCodeSVG } from "qrcode.react";
import signature from "@/assets/signature.png";

const IVORY = "#fdfbf7";
const EMERALD = "#064e3b";
const GOLD = "#eab308";

export type CertificateData = {
  nama: string;
  kelas: string;
  babNumber: string;
  babName: string;
  tanggal: string;
  bestSkor: number;
  noReg: string;
  verifyUrl: string;
};

/** Sembilan bintang khas ALH/NU pada lingkaran. */
function NineStars({
  r,
  size,
  cx,
  cy,
  fill,
}: {
  r: number;
  size: number;
  cx: number;
  cy: number;
  fill?: string;
}) {
  return (
    <g fill={fill}>
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
    </g>
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

/** Kisi pengaman samar di latar belakang. */
function SecurityGrid({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id="security-grid" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M0 18L18 0M-3 3L3 -3M15 21L21 15" stroke={GOLD} strokeWidth="0.6" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#security-grid)" />
    </svg>
  );
}

/** Ombak latar belakang berwarna Champagne Gold. */
function YellowWaves({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 850" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="center-fade">
          <stop offset="30%" stopColor="white" stopOpacity="0" />
          <stop offset="70%" stopColor="white" stopOpacity="1" />
        </radialGradient>
        <mask id="fade-mask">
          <rect width="100%" height="100%" fill="url(#center-fade)" />
        </mask>
      </defs>
      <g mask="url(#fade-mask)">
        {Array.from({ length: 50 }).map((_, i) => (
          <path
            key={i}
            d={`M -100 ${i * 20 - 100} Q 300 ${i * 25 + 150} 600 ${i * 20} T 1300 ${i * 20}`}
            fill="none"
            stroke="#d4c391"
            strokeWidth={i % 3 === 0 ? "2" : "1"}
            opacity={i % 2 === 0 ? "0.4" : "0.2"}
          />
        ))}
      </g>
    </svg>
  );
}

/** Logo ALH presisi */
function LogoALH({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="alh-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#856514" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="url(#alh-gold)" strokeWidth="3" />
      <circle cx="60" cy="60" r="48" fill="none" stroke={EMERALD} strokeWidth="1.2" />
      <NineStars cx={60} cy={60} r={41} size={5.4} fill="url(#alh-gold)" />

      <g fill={EMERALD}>
        <path d="M60 34 L68 52 L64 88 L60 96 L56 88 L52 52 Z" />
        <path d="M60 34 L64 44 L56 44 Z" fill="url(#alh-gold)" />
      </g>
      <text
        x="60"
        y="67"
        textAnchor="middle"
        fontSize="19"
        fontWeight="800"
        fill="url(#alh-gold)"
        fontFamily="serif"
      >
        ALH
      </text>
    </svg>
  );
}

/** Watermark lambang NU. */
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

/** Segel Hologram Modern. */
function HologramSeal({ className }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 drop-shadow-[0_0.5cqw_1cqw_rgba(120,84,5,0.3)] ${className || "h-[12cqw] w-[12cqw]"}`}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <linearGradient id="holo-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#713f12" />
          </linearGradient>
          <radialGradient id="holo-glass" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="60%" stopColor={EMERALD} />
            <stop offset="100%" stopColor="#022c22" />
          </radialGradient>
          <linearGradient id="holo-rainbow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbcfe8" stopOpacity="0.4" />
            <stop offset="35%" stopColor="#a7f3d0" stopOpacity="0.2" />
            <stop offset="65%" stopColor="#fef08a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="holo-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle cx="60" cy="60" r="56" fill="url(#holo-ring)" />
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="#713f12"
          strokeWidth="0.8"
          opacity="0.8"
        />
        <circle cx="60" cy="60" r="48.5" fill={IVORY} />
        <circle cx="60" cy="60" r="42" fill="url(#holo-glass)" />
        <circle cx="60" cy="60" r="42" fill="url(#holo-rainbow)" />
        <circle
          cx="60"
          cy="60"
          r="30"
          fill="none"
          stroke="url(#holo-ring)"
          strokeWidth="1"
          opacity="0.9"
        />
        <NineStars cx={60} cy={60} r={30} size={3.4} fill="url(#holo-ring)" />

        <g fill="url(#holo-ring)">
          <Star x={60} y={50} s={7.5} />
        </g>
        <text
          x="60"
          y="76"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          letterSpacing="2"
          fill="#fef08a"
          fontFamily="serif"
        >
          ALH
        </text>
        <path d="M18 60 A42 42 0 0 1 60 18 L60 34 A26 26 0 0 0 34 60 Z" fill="url(#holo-sheen)" />
      </svg>
    </div>
  );
}

function CornerWave({ position }: { position: "tl" | "br" }) {
  const flip = position === "br" ? "rotate(180 100 100)" : undefined;
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute h-[13cqw] w-[13cqw] ${
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

function GoldRibbon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-[0.6cqw] inline-flex items-center justify-center">
      <svg
        viewBox="0 0 220 44"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path d="M10 0 H210 L220 22 L210 44 H10 L0 22 Z" fill={GOLD} />
        <path d="M10 0 L0 22 L10 44" fill="#ca8a04" opacity="0.35" />
        <path d="M210 0 L220 22 L210 44" fill="#fde047" opacity="0.45" />
      </svg>
      <span
        className="relative z-10 px-[3cqw] py-[0.5cqw] text-[1.1cqw] font-semibold tracking-[0.22em]"
        style={{ color: "#3f2d05" }}
      >
        {children}
      </span>
    </div>
  );
}

export function CertificateView(data: CertificateData) {
  const cleanBabNumber = data.babNumber.replace(/[-—–\s]+/g, "");
  const cleanBabName = data.babName.replace(/^[-—–\s]+/, "").trim();

  return (
    <div
      id="sertifikat-card"
      className="relative isolate mx-auto aspect-[297/210] w-full overflow-hidden rounded-lg shadow-2xl @container"
      style={{ backgroundColor: IVORY }}
    >
      <CornerWave position="tl" />
      <CornerWave position="br" />

      <SecurityGrid className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.03]" />
      <YellowWaves className="pointer-events-none absolute inset-0 z-0 h-full w-full" />
      <NuWatermark className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 opacity-[0.1]" />

      <div
        className="pointer-events-none absolute inset-[2.5cqw] z-0 rounded-sm"
        style={{ border: `1px solid ${GOLD}` }}
      />
      <div
        className="pointer-events-none absolute inset-[3.2cqw] z-0 rounded-sm"
        style={{ border: `1px solid ${GOLD}`, opacity: 0.6 }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-[8cqw] pt-[4.8cqw] pb-[5.5cqw] text-center">
        <header className="flex flex-col items-center">
          <LogoALH className="h-[10cqw] w-[10cqw]" />
          <h2
            className="mt-[0.6cqw] font-serif text-[3.8cqw] leading-none font-bold tracking-[0.14em]"
            style={{ color: EMERALD }}
          >
            SERTIFIKAT PENGHARGAAN
          </h2>
          <GoldRibbon>NO. REG: {data.noReg}</GoldRibbon>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center my-[0.8cqw]">
          <p className="text-[1.1cqw] font-semibold tracking-[0.3em]" style={{ color: "#5b6a63" }}>
            DIBERIKAN KEPADA:
          </p>
          <p
            className="mt-[0.4cqw] font-serif text-[4cqw] leading-tight font-bold"
            style={{ color: EMERALD }}
          >
            {data.nama}
          </p>
          <div className="mx-auto mt-[0.4cqw] h-px w-2/3" style={{ backgroundColor: GOLD }} />

          <p
            className="mt-[0.8cqw] max-w-[74cqw] text-[1.4cqw] leading-relaxed"
            style={{ color: "#3a4741" }}
          >
            Atas keberhasilannya dalam memenuhi standar kelulusan evaluasi capaian belajar
            Pendidikan Aswaja & Ke-NU-an pada{" "}
            <strong style={{ color: EMERALD }}>
              MODUL {cleanBabNumber} ({cleanBabName})
            </strong>{" "}
            dengan skor <strong style={{ color: EMERALD }}>{data.bestSkor}</strong>.
          </p>

          <p
            className="mx-auto mt-[0.8cqw] max-w-[76cqw] text-[1.1cqw] leading-relaxed italic"
            style={{ color: "#6b7770" }}
          >
            E-Sertifikat ini diterbitkan secara sah oleh sistem e-learning berdasarkan pemenuhan
            standar kompetensi dasar kurikulum Pendidikan Aswaja An-Nahdliyah, yang meliputi aspek
            penguatan akidah, fikih ibadah, serta implementasi amaliyah Ahlussunnah wal Jamaah.
          </p>
          <p
            className="mt-[0.8cqw] text-[0.9cqw] font-semibold tracking-[0.22em]"
            style={{ color: "#8a9490" }}
          >
            LKS TAQWA — CV. KARYA DIGITAL PUSTAKA
          </p>
        </section>

        <footer className="grid w-full grid-cols-3 items-end gap-[1cqw]">
          {/* KOLOM KIRI: Hologram */}
          {/* Trik pb-[3.5cqw] mengangkat kolom ini agar sejajar dengan TTD/QR Code, bukan teks bawah */}
          <div className="flex flex-col justify-end items-start pl-[1cqw] pb-[3.5cqw]">
            {/* Hologram diperbesar raksasa (16cqw) dan diberi margin negatif agar atasnya tidak merusak layout */}
            <div className="relative mt-[-3cqw]">
              <HologramSeal className="h-[16cqw] w-[16cqw]" />
            </div>
          </div>

          {/* KOLOM TENGAH: QR Code */}
          <div className="flex flex-col items-center gap-[0.4cqw]">
            <QRCodeSVG
              value={data.verifyUrl}
              size={80}
              bgColor="transparent"
              fgColor={EMERALD}
              level="M"
              className="h-[7cqw] w-[7cqw]"
            />

            <span
              className="text-[0.95cqw] font-semibold tracking-[0.24em]"
              style={{ color: "#5b6a63" }}
            >
              ASWAJA LEARN HUB
            </span>
            <a
              href={data.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-[1.6cqw] py-[0.3cqw] text-[0.95cqw] font-semibold tracking-wide transition-colors hover:border-gray-400"
              style={{ color: EMERALD }}
            >
              Verifikasi Sertifikat
            </a>
          </div>

          {/* KOLOM KANAN: Tanda Tangan */}
          <div className="flex flex-col items-center pr-[1cqw]">
            <p className="text-[1.15cqw]" style={{ color: "#3a4741" }}>
              Malang, {data.tanggal}
            </p>

            <div className="relative mt-[-2cqw] mb-[-1.5cqw] flex justify-center items-center pointer-events-none">
              <img
                src={signature}
                alt="Tanda tangan Ahmad Wildan Afif, M.Pd."
                className="h-[14cqw] w-[24cqw] object-contain"
                style={{
                  mixBlendMode: "multiply",
                  filter: "grayscale(100%) contrast(300%) brightness(90%)",
                }}
              />
            </div>

            <p
              className="w-full pt-[0.45cqw] text-center font-serif text-[1.4cqw] font-bold"
              style={{ color: EMERALD, borderTop: `1px solid ${GOLD}` }}
            >
              Ahmad Wildan Afif, M.Pd.
            </p>
            <p className="text-[1.1cqw]" style={{ color: "#6b7770" }}>
              Guru Pengampu
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CertificateView;
