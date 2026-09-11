import React from "react";
import signature from "@/assets/signature.png";

export function CertificateView({
  nama = "MUHAMMAD SYARIF ALTHOF",
  kelas = "VIII",
  babNumber = "2",
  babName = "Bermadzhab",
  tanggal = "10 September 2026",
  bestSkor = 20,
  noReg = "ALH/VIII/8-2/1",
  verifyUrl = "https://aswaja-learn-hub.lovable.app/kuis",
}) {
  // Format modul menggunakan kurung buka/tutup sesuai permintaan, tanpa tanda minus (-)
  const formattedModule = `MODUL ${babNumber} (${babName.replace(/^[-\s]+|[-\s]+$/g, "")})`;

  return (
    <div className="w-full max-w-[950px] aspect-[1.414/1] bg-white border-[12px] border-double border-[#b8860b] p-10 shadow-2xl relative font-serif mx-auto flex flex-col justify-between text-gray-900">
      {/* HEADER ATAS */}
      <div className="flex flex-col items-center text-center">
        {/* Logo ALH Diperbesar & Diperjelas */}
        <div className="w-24 h-24 rounded-full border-2 border-[#b8860b] bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center shadow-md mb-2">
          <span className="text-yellow-300 font-black text-3xl tracking-widest font-sans">ALH</span>
        </div>
        <h1 className="text-3xl font-bold uppercase tracking-widest text-gray-900">
          Sertifikat Penghargaan
        </h1>
        <p className="text-xs font-semibold tracking-wider text-gray-600 mt-1 font-sans">
          NO. REG: {noReg}
        </p>
      </div>

      {/* KONTEN UTAMA */}
      <div className="text-center px-6 my-auto">
        <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-sans">
          Diberikan Kepada:
        </p>
        <h2 className="text-3xl font-black uppercase tracking-wide text-gray-950 border-b-2 border-[#b8860b]/50 inline-block px-8 pb-1 mb-5">
          {nama}
        </h2>
        <p className="text-sm text-gray-800 leading-relaxed max-w-2xl mx-auto">
          Atas keberhasilannya dalam memenuhi standar kelulusan evaluasi capaian belajar Pendidikan
          Aswaja & Ke-NU-an kelas <span className="font-bold">{kelas}</span> pada{" "}
          <span className="font-bold">{formattedModule}</span> dengan skor{" "}
          <span className="font-bold">{bestSkor}</span>.
        </p>
        <p className="text-[11px] italic text-gray-500 mt-3 max-w-xl mx-auto leading-normal">
          E-Sertifikat ini diterbitkan secara sah oleh sistem e-learning berdasarkan pemenuhan
          standar kompetensi dasar kurikulum Pendidikan Aswaja An-Nahdliyah, yang meliputi aspek
          penguatan akidah, fikih ibadah, serta implementasi amaliyah Ahlussunnah wal Jamaah[cite:
          1].
        </p>
      </div>

      {/* FOOTER BAWAH */}
      <div className="grid grid-cols-3 items-end pt-2">
        {/* KIRI: Stempel Hologram */}
        <div className="flex justify-start">
          <div className="w-22 h-22 rounded-full border-2 border-dashed border-[#b8860b] bg-amber-50/50 flex flex-col items-center justify-center transform -rotate-12 shadow-sm p-2 text-center">
            <span className="text-[9px] tracking-widest text-gray-500 font-sans font-bold">
              LKS TAQWA
            </span>
            <span className="text-[10px] font-bold text-amber-700 uppercase font-sans mt-0.5">
              Official
            </span>
          </div>
        </div>

        {/* TENGAH: QR Code */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white border border-gray-300 p-1 shadow-sm flex items-center justify-center">
            <div className="w-full h-full bg-gray-900 text-white font-sans text-[8px] flex items-center justify-center font-bold">
              QR
            </div>
          </div>
          <span className="text-[10px] font-medium text-gray-600 mt-1 font-sans">
            Verifikasi Sertifikat
          </span>
        </div>

        {/* KANAN: Tanda Tangan Guru Pengampu */}
        <div className="flex flex-col items-center text-center font-sans">
          <p className="text-xs text-gray-700">Malang, {tanggal}</p>
          <p className="text-xs font-bold text-gray-900 tracking-wide mt-0.5">ASWAJA LEARN HUB</p>
          <div className="h-12 my-1 flex items-center justify-center">
            <img
              src={signature}
              alt="Tanda Tangan Ahmad Wildan Afif"
              className="max-h-full max-w-[130px] object-contain mix-blend-multiply"
            />
          </div>
          <div className="border-t border-gray-800 pt-1 w-full">
            <p className="text-xs font-bold text-gray-900 leading-tight">
              Ahmad Wildan Afif, M.Pd.
            </p>
            <p className="text-[10px] text-gray-600">Guru Pengampu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
