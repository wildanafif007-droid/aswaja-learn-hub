import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Award, Printer, RotateCcw, Send } from "lucide-react";
import { KELAS_LIST, MATERI, SISWA, tingkatOf } from "@/data/aswaja";
import { buildQuiz, type Question } from "@/data/quiz";

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

// TEMPELKAN LINK PRE-FILLED DI SINI
const GFORM_PREFILL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf_CONTOH_GANTI/viewform?usp=pp_url&entry.1000001=NAMA&entry.1000002=KELAS&entry.1000003=BAB&entry.1000004=SKOR";

const buildGformUrl = (nama: string, kelas: string, bab: string, skor: number) =>
  GFORM_PREFILL.replace("NAMA", encodeURIComponent(nama))
    .replace("KELAS", encodeURIComponent(kelas))
    .replace("BAB", encodeURIComponent(bab))
    .replace("SKOR", String(skor));

const predikat = (n: number) => (n >= 85 ? "Mumtaz" : n >= 70 ? "Jayyid" : "Semangat");

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

  const chapters = kelas ? MATERI[tingkatOf(kelas)]!.chapters : [];
  const babTitle = chapters.find((c) => c.id === babId)?.title ?? "";
  const skor = Math.round((benar / 10) * 100);

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
    if (i === soal[idx]!.answer) setBenar((b) => b + 1);
    setTimeout(() => {
      if (idx + 1 >= soal.length) {
        setSelesai(true);
      } else {
        setIdx(idx + 1);
        setPicked(null);
      }
    }, 950);
  };

  /** Remedial: reset skor, jawaban, serta pilihan nama & bab */
  const ulangi = () => {
    setStarted(false);
    setSelesai(false);
    setSoal([]);
    setBenar(0);
    setIdx(0);
    setPicked(null);
    setBabId("");
    setNama("");
  };

  const tanggal = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const selectCls =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 disabled:opacity-50";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      {!started && (
        <section className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <h1 className="font-display text-2xl font-bold sm:text-3xl">Kuis Aswaja & Ke-NU-an</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Pilih kelas, bab materi, lalu nama murid. Setiap kuis berisi 10 soal pilihan ganda acak.
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

            <button
              onClick={mulai}
              disabled={!kelas || !babId || !nama}
              className="mt-2 rounded-full bg-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform enabled:hover:-translate-y-0.5 disabled:opacity-40"
            >
              Mulai Kuis
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
            <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">{babTitle}</p>
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

      {selesai && (
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

          <div
            id="sertifikat-card"
            className="relative overflow-hidden rounded-3xl border-4 border-gold bg-card p-6 text-center shadow-gold sm:p-10"
          >
            <div className="pointer-events-none absolute inset-3 rounded-2xl border border-primary/30" />
            <Award className="mx-auto h-12 w-12 text-gold" />
            <p className="mt-2 text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
              Sertifikat Resmi
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
              Pendidikan Aswaja & Ke-NU-an
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gold-line" />

            <p className="mt-6 text-sm text-muted-foreground">Diberikan kepada</p>
            <p className="font-display text-xl font-bold text-primary sm:text-2xl">{nama}</p>

            <dl className="mx-auto mt-6 grid max-w-md gap-3 text-left text-sm">
              <div className="flex justify-between gap-4 border-b border-border pb-2">
                <dt className="text-muted-foreground">Kelas</dt>
                <dd className="font-semibold">{kelas}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-2">
                <dt className="text-muted-foreground">Bab</dt>
                <dd className="text-right font-semibold">{babTitle}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-2">
                <dt className="text-muted-foreground">Tanggal</dt>
                <dd className="font-semibold">{tanggal}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-2">
                <dt className="text-muted-foreground">Nilai</dt>
                <dd className="font-display text-2xl font-bold text-primary">{skor}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Predikat</dt>
                <dd className="rounded-full bg-primary-soft px-3 py-1 text-sm font-bold text-primary-deep">
                  {predikat(skor)}
                </dd>
              </div>
            </dl>

            <p className="mt-6 text-xs text-muted-foreground">
              Referensi LKS TAQWA — CV. Karya Digital Pustaka
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 rounded-full bg-hero px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Printer className="h-4 w-4" /> Cetak/Simpan PDF
            </button>
            <button
              onClick={() =>
                window.open(buildGformUrl(nama, kelas, babTitle, skor), "_blank", "noopener")
              }
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-accent-foreground shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" /> Setor Nilai ke Pak Wildan
            </button>
            <button
              onClick={ulangi}
              className="flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft"
            >
              <RotateCcw className="h-4 w-4" /> Ulangi Kuis
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
