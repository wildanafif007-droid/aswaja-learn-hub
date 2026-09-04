import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { MATERI } from "@/data/aswaja";
import { IslamicMotion } from "@/components/IslamicMotion";

export const Route = createFileRoute("/materi")({
  head: () => ({
    meta: [
      { title: "Materi Semester Ganjil — Aswaja & Ke-NU-an" },
      {
        name: "description",
        content:
          "Ringkasan materi Pendidikan Aswaja & Ke-NU-an Kelas 7, 8, dan 9 Semester Ganjil sesuai LKS TAQWA.",
      },
      { property: "og:title", content: "Materi Semester Ganjil — Aswaja & Ke-NU-an" },
      {
        property: "og:description",
        content: "Poin-poin ringkas tiap bab Kelas 7, 8, dan 9 Semester Ganjil.",
      },
    ],
  }),
  component: MateriPage,
});

const TINGKAT = ["7", "8", "9"];

function MateriPage() {
  const [tingkat, setTingkat] = useState("7");
  const data = MATERI[tingkat]!;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
      <header className="text-center">
        <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
          LKS TAQWA · CV. Karya Digital Pustaka
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Materi Semester Ganjil</h1>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gold-line" />
      </header>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {TINGKAT.map((t) => (
          <button
            key={t}
            onClick={() => setTingkat(t)}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              tingkat === t
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card text-muted-foreground hover:bg-primary-soft"
            }`}
          >
            Kelas {t}
          </button>
        ))}
      </div>

      <h2 className="mt-8 text-center font-display text-xl font-bold text-primary">{data.nama}</h2>

      <div className="mt-6 grid gap-5">
        {data.chapters.map((c, i) => (
          <article key={c.id} className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-hero font-display text-lg font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="font-display text-lg font-bold sm:text-xl">{c.title}</h3>
            </div>
            <ul className="mt-4 grid gap-2.5">
              {c.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground sm:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <IslamicMotion />
          </article>
        ))}
      </div>
    </div>
  );
}
