import { createFileRoute } from "@tanstack/react-router";
import { IslamicMotion } from "@/components/IslamicMotion";

export const Route = createFileRoute("/semester-genap")({
  head: () => ({
    meta: [
      { title: "Semester Genap — Pendidikan Aswaja & Ke-NU-an" },
      {
        name: "description",
        content: "Materi Semester Genap Pendidikan Aswaja & Ke-NU-an untuk semua kelas segera hadir.",
      },
      { property: "og:title", content: "Semester Genap — Pendidikan Aswaja & Ke-NU-an" },
      { property: "og:description", content: "Materi Semester Genap semua kelas segera hadir." },
    ],
  }),
  component: SemesterGenap,
});

function SemesterGenap() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-24">
      <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
        Semua Kelas
      </span>
      <h1 className="mt-4 font-display text-3xl leading-tight font-bold sm:text-5xl">
        <span className="text-gradient-gold">Materi Semester Genap</span>
        <br />
        Segera Hadir
      </h1>
      <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-gold-line" />
      <p className="mt-6 text-sm text-muted-foreground sm:text-base">
        Bersabarlah sejenak. Ringkasan bab dan kuis Semester Genap sedang disusun agar tetap sejalan
        dengan LKS TAQWA.
      </p>
      <IslamicMotion label="Insya Allah segera" />
    </div>
  );
}
