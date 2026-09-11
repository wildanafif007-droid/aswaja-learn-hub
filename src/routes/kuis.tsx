import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Printer, RotateCcw, Send, UserRoundX } from "lucide-react";
import { KELAS_LIST, MATERI, SISWA, tingkatOf } from "@/data/aswaja";
import { buildQuiz, type Question } from "@/data/quiz";
import { CertificateView } from "@/components/CertificateView";


export const Route = createFileRoute("/kuis")({
  head: () => ({
    meta: [
      { title: "Kuis Interaktif — Aswaja & Ke-NU-an" },
      {
        name: "description",
        content:
          "Kuis 10 soal pilihan ganda per bab Aswaja & Ke-NU-an dengan sertifikat nilai yang bisa dicetak.",
      },
      { property: "og:title", content: "Kuis Interaktif — Aswaja & Ke-NU-an" },
      {
        property: "og:description",
        content: "Pilih kelas, bab, dan nama murid lalu kerjakan 10 soal acak bersertifikat.",
      },
    ],
  }),
  component: KuisPage,
});

// Tautan resmi Google Form Pak Wildan. Karena ini link biasa (bukan pre-filled),
// tombol membuka formulir apa adanya tanpa mengisi otomatis.
const GFORM_PREFILL = "https://docs.google.com/forms/d/e/1FAIpQLScUDdlP_DH9m0fjFpgoPQNYzDoQ-9C6sAYTWjKBrkUyQXSq2Q/viewform?usp=header";

const buildGformUrl = (nama: string, kelas: string, bab: string, skor: number) => {
  // Tanpa parameter pre-filled, buka link asli langsung.
  if (!GFORM_PREFILL.includes("pp_url")) return GFORM_PREFILL;
  return GFORM_PREFILL.replace("NAMA", encodeURIComponent(nama))
    .replace("KELAS", encodeURIComponent(kelas))
    .replace("BAB", encodeURIComponent(bab))
    .replace("SKOR", String(skor));
};

const predikat = (n: number) => (n >= 85 ? "Mumtaz" : n >= 70 ? "Jayyid" : "Semangat");

const MAKS_PERCOBAAN = 3;

type Hasil = {
  nama: string;
  kelas: string;
  babId: string;
  babTitle: string;
  skor: number;
  bestSkor: number;
  percobaan: number;
  tanggal: string;
};

const storageKey = (nama: string, kelas: string, babId: string) =>
  `aswaja-best:${kelas}:${babId}:${nama}`;

const SESI_KEY = "aswaja-kuis-sesi";

function loadSesi(): Hasil | null {
  try {
    const raw = localStorage.getItem(SESI_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw) as Hasil;
    return d && typeof d.skor === "number" ? d : null;
  } catch {
    return null;
  }
}

function KuisPage() {
  const [kelas, setKelas] = useState("");
  const [babId, setBabId] = useState("");
  const [nama, setNama] = useState("");
  const [started, setStarted] = useState(false);
  const [soal, setSoal] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [benar, setBenar] = useState(0);
  const [selesai, setSelesai] = useState(false);
  const [hasil, setHasil] = useState<Hasil | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Pulihkan sesi terakhir saat halaman dibuka kembali (anti-reset navigasi).
  useEffect(() => {
    const sesi = loadSesi();
    if (sesi) {
      setHasil(sesi);
      setKelas(sesi.kelas);
      setBabId(sesi.babId);
      setNama(sesi.nama);
      setSelesai(true);
    }
    setHydrated(true);
  }, []);

  const chapters = kelas ? MATERI[tingkatOf(kelas)]!.chapters : [];
  const babTitle = hasil?.babTitle ?? chapters.find((c) => c.id === babId)?.title ?? "";
  const skor = Math.round((benar / 10) * 100);

  const riwayat = nama && kelas && babId ? readBest(nama, kelas, babId) : null;
  const percobaanKe = (riwayat?.percobaan ?? 0) + 1;
  const bolehMain = !riwayat || riwayat.percobaan < MAKS_PERCOBAAN;

  const confetti = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        left: `${(i * 37) % 100}%`,
        delay: `${(i % 12) * 0.22}s`,
        dx: `${((i % 7) - 3) * 22}px`,
        color: i % 3 === 0 ? "var(--gold)" : i % 3 === 1 ? "var(--primary)" : "var(--success)",
      })),
    [],
  );

  const mulai = () => {
    setHasil(null);
    localStorage.removeItem(SESI_KEY);
    setSoal(buildQuiz(babId));
    setIdx(0);
    setBenar(0);
    setPicked(null);
    setSelesai(false);
    setStarted(true);
  };

  const jawab = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const betul = i === soal[idx]!.answer;
    if (betul) setBenar((b) => b + 1);
    setTimeout(() => {
      if (idx + 1 >= soal.length) {
        const benarAkhir = betul ? benar + 1 : benar;
        simpanHasil(Math.round((benarAkhir / 10) * 100));
      } else {
        setIdx(idx + 1);
        setPicked(null);
      }
    }, 950);
  };

  const simpanHasil = (skorBaru: number) => {
    const judul = chapters.find((c) => c.id === babId)?.title ?? "";
    const key = storageKey(nama, kelas, babId);
    let prev: { bestSkor: number; percobaan: number } | null = null;
    try {
      const raw = localStorage.getItem(key);
      if (raw) prev = JSON.parse(raw);
    } catch {
      prev = null;
    }
    const percobaan = (prev?.percobaan ?? 0) + 1;
    const bestSkor = Math.max(prev?.bestSkor ?? 0, skorBaru); // pertahankan skor tertinggi
    const data: Hasil = {
      nama,
      kelas,
      babId,
      babTitle: judul,
      skor: skorBaru,
      bestSkor,
      percobaan,
      tanggal: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    localStorage.setItem(key, JSON.stringify({ bestSkor, percobaan }));
    localStorage.setItem(SESI_KEY, JSON.stringify(data)); // sesi untuk anti-reset
    setHasil(data);
    setSelesai(true);
  };

  /** Remedial: ulangi soal untuk mengejar skor tertinggi (pilihan nama & bab dipertahankan). */
  const ulangi = () => {
    localStorage.removeItem(SESI_KEY);
    setStarted(false);
    setSelesai(false);
    setHasil(null);
    setSoal([]);
    setBenar(0);
    setIdx(0);
    setPicked(null);
  };

  /** Guru: bersihkan seluruh data kuis agar komputer lab siap untuk murid baru. */
  const gantiSiswa = () => {
    const hapus: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && (k.startsWith("aswaja-best:") || k === SESI_KEY)) hapus.push(k);
    }
    hapus.forEach((k) => localStorage.removeItem(k));
    setHasil(null);
    setStarted(false);
    setSelesai(false);
    setSoal([]);
    setBenar(0);
    setIdx(0);
    setPicked(null);
    setKelas("");
    setBabId("");
    setNama("");
  };

  const selectCls =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 disabled:opacity-50";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      {/* Tombol kecil khusus guru */}
      {hydrated && (
        <div className="mb-6 flex justify-end">
          <button
            onClick={gantiSiswa}
            title="Khusus guru: hapus seluruh data kuis di komputer ini"
            className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
          >
            <UserRoundX className="h-3.5 w-3.5" /> Ganti Siswa Baru
          </button>
        </div>
      )}

      {!started && !selesai && (
        <section className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <h1 className="font-display text-2xl font-bold sm:text-3xl">Kuis Aswaja & Ke-NU-an</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Pilih kelas, bab materi, lalu nama murid. Setiap kuis berisi 10 soal pilihan ganda acak
            dengan maksimal {MAKS_PERCOBAAN} kali percobaan — nilai tertinggi yang dicatat.
          </p>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold">1. Pilih Kelas</span>
              <select
                className={selectCls}
                value={kelas}
                onChange={(e) => {
                  setKelas(e.target.value);
                  setBabId("");
                  setNama("");
                }}
              >
                <option value="">— Pilih Kelas —</option>
                {KELAS_LIST.map((k) => (
                  <option key={k.id} value={k.id}>
                    {k.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">2. Pilih Bab Materi</span>
              <select
                className={selectCls}
                value={babId}
                disabled={!kelas}
                onChange={(e) => setBabId(e.target.value)}
              >
                <option value="">— Pilih Bab —</option>
                {chapters.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">3. Pilih Nama Murid</span>
              <select
                className={selectCls}
                value={nama}
                disabled={!kelas}
                onChange={(e) => setNama(e.target.value)}
              >
                <option value="">— Pilih Nama —</option>
                {(SISWA[kelas] ?? []).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            {riwayat && (
              <p className="rounded-xl bg-primary-soft px-4 py-3 text-xs font-semibold text-primary-deep">
                Sudah {riwayat.percobaan}× mengerjakan — skor tertinggi: {riwayat.bestSkor}.
                {bolehMain
                  ? ` Sisa ${MAKS_PERCOBAAN - riwayat.percobaan} kesempatan.`
                  : " Kesempatan habis."}
              </p>
            )}

            <button
              onClick={mulai}
              disabled={!kelas || !babId || !nama || !bolehMain}
              className="mt-2 rounded-full bg-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform enabled:hover:-translate-y-0.5 disabled:opacity-40"
            >
              {bolehMain
                ? riwayat
                  ? `Mulai Kuis (Percobaan ke-${percobaanKe})`
                  : "Mulai Kuis"
                : "Kesempatan Habis (3×)"}
            </button>
          </div>
        </section>
      )}

      {started && !selesai && soal.length > 0 && (
        <section>
          <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
            <span>
              Soal {idx + 1} / {soal.length}
            </span>
            <span>{nama}</span>
          </div>
          <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gold-line transition-all duration-500"
              style={{ width: `${((idx + (picked !== null ? 1 : 0)) / soal.length) * 100}%` }}
            />
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7">
            <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              {chapters.find((c) => c.id === babId)?.title ?? ""}
            </p>
            <h2 className="mt-3 font-display text-xl leading-snug font-bold sm:text-2xl">
              {soal[idx]!.q}
            </h2>

            <div className="mt-5 grid gap-3">
              {soal[idx]!.options.map((o, i) => {
                const isPicked = picked === i;
                const isAnswer = i === soal[idx]!.answer;
                const state =
                  picked === null
                    ? "border-border bg-background hover:border-primary hover:bg-primary-soft"
                    : isAnswer
                      ? "border-success bg-success text-success-foreground animate-pop-correct"
                      : isPicked
                        ? "border-destructive bg-destructive text-destructive-foreground animate-shake-wrong"
                        : "border-border bg-background opacity-60";
                return (
                  <button
                    key={o}
                    onClick={() => jawab(i)}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-colors sm:text-base ${state}`}
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-current text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {selesai && hasil && (
        <section>
          {confetti.map((c, i) => (
            <span
              key={i}
              className="confetti-piece"
              style={{
                left: c.left,
                animationDelay: c.delay,
                backgroundColor: c.color,
                ["--dx" as string]: c.dx,
              }}
            />
          ))}

          <CertificateView
            nama={hasil.nama}
            kelas={hasil.kelas}
            babNumber={hasil.babId.split("-")[1] ?? ""}
            babName={hasil.babTitle.replace(/^Bab \d+ /, "")}
            tanggal={hasil.tanggal}
            bestSkor={hasil.bestSkor}
            noReg={`ALH/${hasil.kelas.replace(/\s+/g, "")}/${hasil.babId}/${hasil.percobaan}`}
            verifyUrl="https://aswaja-learn-hub.lovable.app/kuis"
          />


          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 rounded-full bg-hero px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Printer className="h-4 w-4" /> Cetak/Simpan PDF
            </button>
            <button
              onClick={() =>
                window.open(
                  buildGformUrl(hasil.nama, hasil.kelas, hasil.babTitle, hasil.bestSkor),
                  "_blank",
                  "noopener",
                )
              }
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-accent-foreground shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" /> Setor Nilai ke Pak Wildan
            </button>
            <button
              onClick={ulangi}
              disabled={hasil.percobaan >= MAKS_PERCOBAAN}
              className="flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft disabled:opacity-40"
            >
              <RotateCcw className="h-4 w-4" />
              {hasil.percobaan >= MAKS_PERCOBAAN
                ? "Kesempatan Habis"
                : `Ulangi Kuis (sisa ${MAKS_PERCOBAAN - hasil.percobaan}×)`}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

function readBest(nama: string, kelas: string, babId: string) {
  try {
    const raw = localStorage.getItem(storageKey(nama, kelas, babId));
    if (!raw) return null;
    const d = JSON.parse(raw) as { bestSkor: number; percobaan: number };
    return typeof d.bestSkor === "number" ? d : null;
  } catch {
    return null;
  }
}
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Printer, RotateCcw, Send, UserRoundX } from "lucide-react";
import { KELAS_LIST, MATERI, SISWA, tingkatOf } from "@/data/aswaja";
import { buildQuiz, type Question } from "@/data/quiz";
import { CertificateView } from "@/components/CertificateView";


export const Route = createFileRoute("/kuis")({
  head: () => ({
    meta: [
      { title: "Kuis Interaktif — Aswaja & Ke-NU-an" },
      {
        name: "description",
        content:
          "Kuis 10 soal pilihan ganda per bab Aswaja & Ke-NU-an dengan sertifikat nilai yang bisa dicetak.",
      },
      { property: "og:title", content: "Kuis Interaktif — Aswaja & Ke-NU-an" },
      {
        property: "og:description",
        content: "Pilih kelas, bab, dan nama murid lalu kerjakan 10 soal acak bersertifikat.",
      },
    ],
  }),
  component: KuisPage,
});

// Tautan resmi Google Form Pak Wildan. Karena ini link biasa (bukan pre-filled),
// tombol membuka formulir apa adanya tanpa mengisi otomatis.
const GFORM_PREFILL = "https://docs.google.com/forms/d/e/1FAIpQLScUDdlP_DH9m0fjFpgoPQNYzDoQ-9C6sAYTWjKBrkUyQXSq2Q/viewform?usp=header";

const buildGformUrl = (nama: string, kelas: string, bab: string, skor: number) => {
  // Tanpa parameter pre-filled, buka link asli langsung.
  if (!GFORM_PREFILL.includes("pp_url")) return GFORM_PREFILL;
  return GFORM_PREFILL.replace("NAMA", encodeURIComponent(nama))
    .replace("KELAS", encodeURIComponent(kelas))
    .replace("BAB", encodeURIComponent(bab))
    .replace("SKOR", String(skor));
};

const predikat = (n: number) => (n >= 85 ? "Mumtaz" : n >= 70 ? "Jayyid" : "Semangat");

const MAKS_PERCOBAAN = 3;

type Hasil = {
  nama: string;
  kelas: string;
  babId: string;
  babTitle: string;
  skor: number;
  bestSkor: number;
  percobaan: number;
  tanggal: string;
};

const storageKey = (nama: string, kelas: string, babId: string) =>
  `aswaja-best:${kelas}:${babId}:${nama}`;

const SESI_KEY = "aswaja-kuis-sesi";

function loadSesi(): Hasil | null {
  try {
    const raw = localStorage.getItem(SESI_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw) as Hasil;
    return d && typeof d.skor === "number" ? d : null;
  } catch {
    return null;
  }
}

function KuisPage() {
  const [kelas, setKelas] = useState("");
  const [babId, setBabId] = useState("");
  const [nama, setNama] = useState("");
  const [started, setStarted] = useState(false);
  const [soal, setSoal] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [benar, setBenar] = useState(0);
  const [selesai, setSelesai] = useState(false);
  const [hasil, setHasil] = useState<Hasil | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Pulihkan sesi terakhir saat halaman dibuka kembali (anti-reset navigasi).
  useEffect(() => {
    const sesi = loadSesi();
    if (sesi) {
      setHasil(sesi);
      setKelas(sesi.kelas);
      setBabId(sesi.babId);
      setNama(sesi.nama);
      setSelesai(true);
    }
    setHydrated(true);
  }, []);

  const chapters = kelas ? MATERI[tingkatOf(kelas)]!.chapters : [];
  const babTitle = hasil?.babTitle ?? chapters.find((c) => c.id === babId)?.title ?? "";
  const skor = Math.round((benar / 10) * 100);

  const riwayat = nama && kelas && babId ? readBest(nama, kelas, babId) : null;
  const percobaanKe = (riwayat?.percobaan ?? 0) + 1;
  const bolehMain = !riwayat || riwayat.percobaan < MAKS_PERCOBAAN;

  const confetti = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        left: `${(i * 37) % 100}%`,
        delay: `${(i % 12) * 0.22}s`,
        dx: `${((i % 7) - 3) * 22}px`,
        color: i % 3 === 0 ? "var(--gold)" : i % 3 === 1 ? "var(--primary)" : "var(--success)",
      })),
    [],
  );

  const mulai = () => {
    setHasil(null);
    localStorage.removeItem(SESI_KEY);
    setSoal(buildQuiz(babId));
    setIdx(0);
    setBenar(0);
    setPicked(null);
    setSelesai(false);
    setStarted(true);
  };

  const jawab = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const betul = i === soal[idx]!.answer;
    if (betul) setBenar((b) => b + 1);
    setTimeout(() => {
      if (idx + 1 >= soal.length) {
        const benarAkhir = betul ? benar + 1 : benar;
        simpanHasil(Math.round((benarAkhir / 10) * 100));
      } else {
        setIdx(idx + 1);
        setPicked(null);
      }
    }, 950);
  };

  const simpanHasil = (skorBaru: number) => {
    const judul = chapters.find((c) => c.id === babId)?.title ?? "";
    const key = storageKey(nama, kelas, babId);
    let prev: { bestSkor: number; percobaan: number } | null = null;
    try {
      const raw = localStorage.getItem(key);
      if (raw) prev = JSON.parse(raw);
    } catch {
      prev = null;
    }
    const percobaan = (prev?.percobaan ?? 0) + 1;
    const bestSkor = Math.max(prev?.bestSkor ?? 0, skorBaru); // pertahankan skor tertinggi
    const data: Hasil = {
      nama,
      kelas,
      babId,
      babTitle: judul,
      skor: skorBaru,
      bestSkor,
      percobaan,
      tanggal: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    localStorage.setItem(key, JSON.stringify({ bestSkor, percobaan }));
    localStorage.setItem(SESI_KEY, JSON.stringify(data)); // sesi untuk anti-reset
    setHasil(data);
    setSelesai(true);
  };

  /** Remedial: ulangi soal untuk mengejar skor tertinggi (pilihan nama & bab dipertahankan). */
  const ulangi = () => {
    localStorage.removeItem(SESI_KEY);
    setStarted(false);
    setSelesai(false);
    setHasil(null);
    setSoal([]);
    setBenar(0);
    setIdx(0);
    setPicked(null);
  };

  /** Guru: bersihkan seluruh data kuis agar komputer lab siap untuk murid baru. */
  const gantiSiswa = () => {
    const hapus: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && (k.startsWith("aswaja-best:") || k === SESI_KEY)) hapus.push(k);
    }
    hapus.forEach((k) => localStorage.removeItem(k));
    setHasil(null);
    setStarted(false);
    setSelesai(false);
    setSoal([]);
    setBenar(0);
    setIdx(0);
    setPicked(null);
    setKelas("");
    setBabId("");
    setNama("");
  };

  const selectCls =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 disabled:opacity-50";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      {/* Tombol kecil khusus guru */}
      {hydrated && (
        <div className="mb-6 flex justify-end">
          <button
            onClick={gantiSiswa}
            title="Khusus guru: hapus seluruh data kuis di komputer ini"
            className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
          >
            <UserRoundX className="h-3.5 w-3.5" /> Ganti Siswa Baru
          </button>
        </div>
      )}

      {!started && !selesai && (
        <section className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <h1 className="font-display text-2xl font-bold sm:text-3xl">Kuis Aswaja & Ke-NU-an</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Pilih kelas, bab materi, lalu nama murid. Setiap kuis berisi 10 soal pilihan ganda acak
            dengan maksimal {MAKS_PERCOBAAN} kali percobaan — nilai tertinggi yang dicatat.
          </p>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold">1. Pilih Kelas</span>
              <select
                className={selectCls}
                value={kelas}
                onChange={(e) => {
                  setKelas(e.target.value);
                  setBabId("");
                  setNama("");
                }}
              >
                <option value="">— Pilih Kelas —</option>
                {KELAS_LIST.map((k) => (
                  <option key={k.id} value={k.id}>
                    {k.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">2. Pilih Bab Materi</span>
              <select
                className={selectCls}
                value={babId}
                disabled={!kelas}
                onChange={(e) => setBabId(e.target.value)}
              >
                <option value="">— Pilih Bab —</option>
                {chapters.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">3. Pilih Nama Murid</span>
              <select
                className={selectCls}
                value={nama}
                disabled={!kelas}
                onChange={(e) => setNama(e.target.value)}
              >
                <option value="">— Pilih Nama —</option>
                {(SISWA[kelas] ?? []).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            {riwayat && (
              <p className="rounded-xl bg-primary-soft px-4 py-3 text-xs font-semibold text-primary-deep">
                Sudah {riwayat.percobaan}× mengerjakan — skor tertinggi: {riwayat.bestSkor}.
                {bolehMain
                  ? ` Sisa ${MAKS_PERCOBAAN - riwayat.percobaan} kesempatan.`
                  : " Kesempatan habis."}
              </p>
            )}

            <button
              onClick={mulai}
              disabled={!kelas || !babId || !nama || !bolehMain}
              className="mt-2 rounded-full bg-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform enabled:hover:-translate-y-0.5 disabled:opacity-40"
            >
              {bolehMain
                ? riwayat
                  ? `Mulai Kuis (Percobaan ke-${percobaanKe})`
                  : "Mulai Kuis"
                : "Kesempatan Habis (3×)"}
            </button>
          </div>
        </section>
      )}

      {started && !selesai && soal.length > 0 && (
        <section>
          <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
            <span>
              Soal {idx + 1} / {soal.length}
            </span>
            <span>{nama}</span>
          </div>
          <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gold-line transition-all duration-500"
              style={{ width: `${((idx + (picked !== null ? 1 : 0)) / soal.length) * 100}%` }}
            />
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7">
            <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              {chapters.find((c) => c.id === babId)?.title ?? ""}
            </p>
            <h2 className="mt-3 font-display text-xl leading-snug font-bold sm:text-2xl">
              {soal[idx]!.q}
            </h2>

            <div className="mt-5 grid gap-3">
              {soal[idx]!.options.map((o, i) => {
                const isPicked = picked === i;
                const isAnswer = i === soal[idx]!.answer;
                const state =
                  picked === null
                    ? "border-border bg-background hover:border-primary hover:bg-primary-soft"
                    : isAnswer
                      ? "border-success bg-success text-success-foreground animate-pop-correct"
                      : isPicked
                        ? "border-destructive bg-destructive text-destructive-foreground animate-shake-wrong"
                        : "border-border bg-background opacity-60";
                return (
                  <button
                    key={o}
                    onClick={() => jawab(i)}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-colors sm:text-base ${state}`}
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-current text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {selesai && hasil && (
        <section>
          {confetti.map((c, i) => (
            <span
              key={i}
              className="confetti-piece"
              style={{
                left: c.left,
                animationDelay: c.delay,
                backgroundColor: c.color,
                ["--dx" as string]: c.dx,
              }}
            />
          ))}

          <CertificateView
            nama={hasil.nama}
            kelas={hasil.kelas}
            babNumber={hasil.babId.split("-")[1] ?? ""}
            babName={hasil.babTitle.replace(/^Bab \d+ /, "")}
            tanggal={hasil.tanggal}
            bestSkor={hasil.bestSkor}
            noReg={`ALH/${hasil.kelas.replace(/\s+/g, "")}/${hasil.babId}/${hasil.percobaan}`}
            verifyUrl="https://aswaja-learn-hub.lovable.app/kuis"
          />


          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 rounded-full bg-hero px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Printer className="h-4 w-4" /> Cetak/Simpan PDF
            </button>
            <button
              onClick={() =>
                window.open(
                  buildGformUrl(hasil.nama, hasil.kelas, hasil.babTitle, hasil.bestSkor),
                  "_blank",
                  "noopener",
                )
              }
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-accent-foreground shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" /> Setor Nilai ke Pak Wildan
            </button>
            <button
              onClick={ulangi}
              disabled={hasil.percobaan >= MAKS_PERCOBAAN}
              className="flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft disabled:opacity-40"
            >
              <RotateCcw className="h-4 w-4" />
              {hasil.percobaan >= MAKS_PERCOBAAN
                ? "Kesempatan Habis"
                : `Ulangi Kuis (sisa ${MAKS_PERCOBAAN - hasil.percobaan}×)`}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

function readBest(nama: string, kelas: string, babId: string) {
  try {
    const raw = localStorage.getItem(storageKey(nama, kelas, babId));
    if (!raw) return null;
    const d = JSON.parse(raw) as { bestSkor: number; percobaan: number };
    return typeof d.bestSkor === "number" ? d : null;
  } catch {
    return null;
  }
}
