import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Scale, Sparkles } from "lucide-react";
import banner from "@/assets/banner-islami.jpg";
import { IslamicMotion } from "@/components/IslamicMotion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beranda — Pendidikan Aswaja & Ke-NU-an" },
      {
        name: "description",
        content:
          "Belajar Pendidikan Aswaja & Ke-NU-an: akidah, fikih, dan tasawuf dengan materi ringkas dan kuis interaktif bersertifikat.",
      },
      { property: "og:title", content: "Beranda — Pendidikan Aswaja & Ke-NU-an" },
      {
        property: "og:description",
        content: "Materi ringkas LKS Taqwa kelas 7, 8, 9 dan kuis interaktif bersertifikat.",
      },
    ],
  }),
  component: Index,
});

const pilar = [
  {
    icon: BookOpen,
    title: "Akidah",
    desc: "Mengikuti Imam Abu Hasan al-Asy'ari dan Imam Abu Manshur al-Maturidi.",
  },
  {
    icon: Scale,
    title: "Fikih",
    desc: "Bermadzhab kepada empat imam; mayoritas Nusantara madzhab Syafi'i.",
  },
  {
    icon: Sparkles,
    title: "Tasawuf",
    desc: "Meneladani Imam al-Ghazali dan Imam Junaid al-Baghdadi.",
  },
];

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <section className="relative overflow-hidden rounded-3xl border border-border shadow-soft">
        <img
          src={banner}
          alt="Ornamen masjid hijau dengan hiasan emas"
          width={1600}
          height={912}
          className="h-64 w-full object-cover sm:h-80 md:h-[26rem]"
        />
        <div className="absolute inset-0 bg-hero/0 bg-gradient-to-r from-primary-deep/90 via-primary-deep/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6 sm:p-10">
          <span className="w-fit rounded-full border border-gold/70 px-3 py-1 text-[11px] tracking-[0.25em] text-gold uppercase">
            Semester Ganjil
          </span>
          <h1 className="max-w-xl font-display text-3xl leading-tight font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            Pendidikan Aswaja & Ke-NU-an
          </h1>
          <p className="max-w-lg text-sm text-primary-foreground/85 sm:text-base">
            Belajar tradisi Ahlussunnah wal Jama'ah An-Nahdliyah dengan ringkasan LKS TAQWA dan kuis
            interaktif bersertifikat.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/materi"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Mulai Belajar
            </Link>
            <Link
              to="/kuis"
              className="rounded-full border border-primary-foreground/60 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Kerjakan Kuis
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-center font-display text-2xl font-bold">Tiga Pilar Ajaran Aswaja</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pilar.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary-deep">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gold-line transition-all group-hover:w-24" />
            </article>
          ))}
        </div>
        <IslamicMotion label="Ahlussunnah wal Jama'ah An-Nahdliyah" />
      </section>
    </div>
  );
}
