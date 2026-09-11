import { createFileRoute } from "@tanstack/react-router";
import { IslamicMotion } from "@/components/IslamicMotion";

export const Route = createFileRoute("/semester-genap")({
  head: () => ({
    meta: [
      { title: "Semester Genap — Pendidikan Aswaja & Ke-NU-an" },
      {
        name: "description",
        content:
          "Materi Semester Genap Pendidikan Aswaja & Ke-NU-an untuk semua kelas segera hadir.",
      },
      { property: "og:title", content: "Semester Genap — Pendidikan Aswaja & Ke-NU-an" },
      { property: "og:description", content: "Materi Semester Genap semua kelas segera hadir." },
    ],
  }),
  component: SemesterGenap,
});

function SemesterGenap() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-white flex flex-col justify-center">
      <img
        src="/nu.png"
        className="fixed inset-0 z-[-1] h-full w-full object-cover opacity-5 animate-pulse pointer-events-none"
        alt="Background NU"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:py-24 relative z-10">
        <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
          Semua Kelas
        </span>
        <img
          src="/santri.jpg"
          alt="Santri sedang belajar"
          className="mt-8 w-64 rounded-2xl shadow-lg animate-[bounce_3s_infinite]"
        />
        <h1 className="mt-8 font-display text-3xl leading-tight font-bold drop-shadow-[0_0_10px_#10b981] sm:text-5xl">
          <span className="text-gradient-gold">Materi Semester Genap</span>
          <br />
          Segera Hadir
        </h1>
        <p className="mt-4 italic text-emerald-900 font-medium">Sedang meracik kurikulum...</p>
        <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-gold-line" />
        <p className="mt-6 text-sm text-muted-foreground sm:text-base">
          Bersabarlah sejenak. Ringkasan bab dan kuis Semester Genap sedang disusun agar tetap
          sejalan dengan LKS TAQWA.
        </p>
        <IslamicMotion label="Insya Allah segera" />
      </div>
    </div>
  );
}
