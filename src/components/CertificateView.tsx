import { QRCodeSVG } from "qrcode.react";
import signature from "@/assets/signature.png.asset.json";

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

/** Kisi pengaman emas samar di latar belakang. */
function SecurityGrid({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id="security-grid" width="18" height="18" patternUnits="userSpaceOnUse">
          <path
            d="M0 18L18 0M-3 3L3 -3M15 21L21 15"
            stroke={GOLD}
            strokeWidth="0.6"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#security-grid)" />
    </svg>
  );
}

/** Garis guilloché transparan untuk memberi tekstur dokumen resmi. */
function GuillocheLines({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 850" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke={EMERALD} strokeWidth="1.1">
        <ellipse cx="600" cy="425" rx="470" ry="310" />
        <ellipse cx="600" cy="425" rx="430" ry="278" />
        <ellipse cx="600" cy="425" rx="390" ry="246" />
        <ellipse cx="0" cy="425" rx="310" ry="220" />
        <ellipse cx="1200" cy="425" rx="310" ry="220" />
        <path d="M-60 425 Q90 350 240 425 T540 425 T840 425 T1140 425 T1440 425" />
        <path d="M-60 438 Q90 363 240 438 T540 438 T840 438 T1140 438 T1440 438" />
        <path d="M-60 412 Q90 337 240 412 T540 412 T840 412 T1140 412 T1440 412" />
      </g>
      <g fill="none" stroke={GOLD} strokeWidth="0.8">
        <path d="M-40 210 Q160 120 360 210 T760 210 T1160 210 T1560 210" />
        <path d="M-40 640 Q160 730 360 640 T760 640 T1160 640 T1560 640" />
        <ellipse cx="600" cy="425" rx="505" ry="342" />
      </g>
    </svg>
  );
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

/** Segel hologram modern: cincin emas tipis berkilau, inti kaca emerald, satu bintang pusat. */
function HologramSeal() {
  return (
    <div className="relative h-[18cqw] w-[18cqw] shrink-0 drop-shadow-[0_0.5cqw_1cqw_rgba(120,84,5,0.28)]">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <linearGradient id="seal-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="45%" stopColor={GOLD} />
            <stop offset="100%" stopColor="#92610a" />
          </linearGradient>
          <radialGradient id="seal-glass" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#0d6b4f" />
            <stop offset="70%" stopColor={EMERALD} />
            <stop offset="100%" stopColor="#032e22" />
          </radialGradient>
          <linearGradient id="seal-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Cincin luar emas ganda */}
        <circle cx="60" cy="60" r="56" fill="url(#seal-ring)" />
        <circle cx="60" cy="60" r="52" fill="none" stroke="#92610a" strokeWidth="0.8" opacity="0.7" />
        <circle cx="60" cy="60" r="48.5" fill={IVORY} />

        {/* Inti kaca emerald */}
        <circle cx="60" cy="60" r="42" fill="url(#seal-glass)" />

        {/* Orbit bintang sembilan tipis */}
        <circle cx="60" cy="60" r="30" fill="none" stroke={GOLD} strokeWidth="0.7" opacity="0.85" />
        <g fill={GOLD} opacity="0.95">
          <NineStars cx={60} cy={60} r={30} size={3.4} />
        </g>

        {/* Bintang pusat + monogram */}
        <g fill={GOLD}>
          <Star x={60} y={50} s={7.5} />
        </g>
        <text
          x="60"
          y="76"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          letterSpacing="2"
          fill="#fde68a"
          fontFamily="serif"
        >
          ALH
        </text>

        {/* Kilau kaca diagonal */}
        <path d="M18 60 A42 42 0 0 1 60 18 L60 34 A26 26 0 0 0 34 60 Z" fill="url(#seal-sheen)" />
      </svg>
    </div>
  );
}

/** Garis-garis diagonal emas transparan yang menyelimuti seluruh sertifikat. */
function GoldVeil({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 850" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="gold-veil" width="90" height="90" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
          <line x1="0" y1="0" x2="0" y2="90" stroke={GOLD} strokeWidth="1" />
          <line x1="30" y1="0" x2="30" y2="90" stroke={GOLD} strokeWidth="0.4" />
          <line x1="64" y1="0" x2="64" y2="90" stroke={GOLD} strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="1200" height="850" fill="url(#gold-veil)" />
    </svg>
  );
}

/** Aksen gelombang lengkung emerald + emas pada sudut. */
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

/** Pita emas dengan ujung lancip sebagai latar nomor registrasi. */
function GoldRibbon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-[1.2cqw] inline-flex items-center justify-center">
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
      <span className="relative z-10 px-[3cqw] py-[0.5cqw] text-[1.3cqw] font-semibold tracking-[0.22em]"
        style={{ color: "#3f2d05" }}
      >
        {children}
      </span>
    </div>
  );
}

export function CertificateView(data: CertificateData) {
  return (
    <div
      id="sertifikat-card"
      className="relative isolate mx-auto aspect-[297/210] w-full overflow-hidden rounded-lg shadow-2xl @container"
      style={{ backgroundColor: IVORY }}
    >
      <CornerWave position="tl" />
      <CornerWave position="br" />

      {/* Latar: kisi pengaman emas samar + watermark NU besar + selubung garis emas */}
      <SecurityGrid className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.04]" />
      <GoldVeil className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.05]" />
      <GuillocheLines className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.05]" />
      <NuWatermark className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      {/* Bingkai emas ganda di sisi dalam, aman dari teks (padding konten 6cqw) */}
      <div
        className="pointer-events-none absolute inset-[2.4cqw] z-0 rounded-sm"
        style={{ border: `1px solid ${GOLD}` }}
      />
      <div
        className="pointer-events-none absolute inset-[3.1cqw] z-0 rounded-sm"
        style={{ border: `1px solid ${GOLD}`, opacity: 0.6 }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-[6cqw] py-[3.6cqw] text-center">
        {/* ATAS */}
        <header className="flex flex-col items-center">
          <LogoALH className="h-[8cqw] w-[8cqw]" />
          <h2
            className="mt-[1cqw] font-serif text-[4.2cqw] leading-none font-bold tracking-[0.14em]"
            style={{ color: EMERALD }}
          >
            SERTIFIKAT PENGHARGAAN
          </h2>
          <GoldRibbon>NO. REG: {data.noReg}</GoldRibbon>
        </header>

        {/* TENGAH */}
        <section className="flex flex-col items-center">
          <p
            className="text-[1.25cqw] font-semibold tracking-[0.3em]"
            style={{ color: "#5b6a63" }}
          >
            DIBERIKAN KEPADA:
          </p>
          <p
            className="mt-[0.8cqw] font-serif text-[4.6cqw] leading-tight font-bold"
            style={{ color: EMERALD }}
          >
            {data.nama}
          </p>
          <div className="mx-auto mt-[0.8cqw] h-px w-2/3" style={{ backgroundColor: GOLD }} />
          <p
            className="mt-[1.2cqw] max-w-[74cqw] text-[1.7cqw] leading-relaxed"
            style={{ color: "#3a4741" }}
          >
            Atas keberhasilannya dalam memenuhi standar kelulusan evaluasi capaian belajar
            Pendidikan Aswaja & Ke-NU-an pada{" "}
            <strong style={{ color: EMERALD }}>
              MODUL {data.babNumber} — {data.babName}
            </strong>{" "}
            dengan predikat{" "}
            <strong style={{ color: EMERALD }}>{data.predikat}</strong> dan skor tertinggi{" "}
            <strong style={{ color: EMERALD }}>{data.bestSkor}</strong>.
          </p>
          <p
            className="mx-auto mt-[1.2cqw] max-w-[76cqw] text-[1.3cqw] leading-relaxed italic"
            style={{ color: "#6b7770" }}
          >
            E-Sertifikat ini diterbitkan secara sah oleh sistem e-learning berdasarkan pemenuhan
            standar kompetensi dasar kurikulum Pendidikan Aswaja An-Nahdliyah, yang meliputi aspek
            penguatan akidah, fikih ibadah, serta implementasi amaliyah Ahlussunnah wal Jamaah.
          </p>
          <p
            className="mt-[1cqw] text-[1.1cqw] font-semibold tracking-[0.22em]"
            style={{ color: "#8a9490" }}
          >
            LKS TAQWA — CV. KARYA DIGITAL PUSTAKA
          </p>
        </section>

        {/* BAWAH */}
        <footer className="grid grid-cols-[1fr_1fr_1.15fr] items-end gap-[2.5cqw]">
          <div className="flex items-end justify-start pl-[1.2cqw]">
            <HologramSeal />
          </div>

          <div className="flex flex-col items-center gap-[0.6cqw]">
            <QRCodeSVG
              value={data.verifyUrl}
              size={80}
              bgColor="transparent"
              fgColor={EMERALD}
              level="M"
              className="h-[8cqw] w-[8cqw]"
            />

            <span
              className="text-[1.05cqw] font-semibold tracking-[0.24em]"
              style={{ color: "#5b6a63" }}
            >
              ASWAJA LEARN HUB
            </span>
            <a
              href={data.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-[1.6cqw] py-[0.4cqw] text-[1.05cqw] font-semibold tracking-wide transition-colors hover:border-gray-400"
              style={{ color: EMERALD }}
            >
              Verifikasi Sertifikat
            </a>
          </div>

          <div className="flex min-w-[24cqw] flex-col items-center pr-[1.2cqw]">
            <p className="text-[1.3cqw]" style={{ color: "#3a4741" }}>
              Malang, {data.tanggal}
            </p>
            <img
              src={signature.url}
              alt="Tanda tangan Ahmad Wildan Afif, M.Pd."
              className="-mb-[0.8cqw] h-[12.5cqw] w-[22cqw] object-contain"
            />
            <p
              className="w-full pt-[0.45cqw] text-center font-serif text-[1.7cqw] font-bold"
              style={{ color: EMERALD, borderTop: `1px solid ${GOLD}` }}
            >
              Ahmad Wildan Afif, M.Pd.
            </p>
            <p className="text-[1.2cqw]" style={{ color: "#6b7770" }}>
              Guru Pengampu
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CertificateView;
