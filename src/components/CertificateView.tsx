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
  // Format modul dinamis tanpa tanda hubung berlebih, menggunakan tanda kurung ( dan )
  const formattedModule = `MODUL ${babNumber} (${babName.replace(/^[-\s]+|[-\s]+$/g, "")})`;

  return (
    <div
      className="relative w-full aspect-[1.414/1] bg-white overflow-hidden shadow-2xl mx-auto border-[1cqw] border-double border-yellow-600 container-query font-serif"
      style={{ containerType: "inline-size" }}
    >
      {/* BACKGROUND: Guilloche Champagne Gold */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 0 0, transparent 0, #ebd197 10px), repeating-linear-gradient(#f4e8c1, #f4e8c1)",
        }}
      ></div>

      {/* KONTEN UTAMA SERTIFIKAT */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-[2.5cqh] px-[5cqw]">
        {/* HEADER: Logo Stempel Resmi & Judul (Diperbesar & diperjelas logo ALH) */}
        <div className="flex flex-col items-center mb-[0.5cqh]">
          <div className="w-[16cqw] h-[16cqw] rounded-full border-[0.4cqw] border-yellow-600 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 flex items-center justify-center shadow-md relative overflow-hidden mb-[0.5cqh]">
            <div className="absolute inset-1 rounded-full border border-yellow-400/60 flex items-center justify-center">
              <div className="text-center text-yellow-300 font-bold">
                <span className="block text-[4.8cqw] tracking-widest font-sans font-black">
                  ALH
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-[2.2cqw] font-bold text-gray-800 tracking-wider uppercase">
            Sertifikat Penghargaan
          </h1>
          <p className="text-[1.1cqw] text-gray-600 tracking-wide mt-[0.1cqh]">NO. REG: {noReg}</p>
        </div>

        {/* BODY TEKS */}
        <div className="text-center w-full max-w-[85%]">
          <p className="text-[1.1cqw] text-gray-700 uppercase tracking-widest mb-[0.4cqh]">
            Diberikan Kepada:
          </p>

          <h2 className="text-[2.8cqw] font-extrabold text-gray-900 tracking-wide uppercase border-b-[0.15cqw] border-yellow-600/50 inline-block px-[3cqw] pb-[0.1cqh] mb-[0.8cqh]">
            {nama}
          </h2>

          <p className="text-[1.1cqw] text-gray-700 leading-relaxed px-[2cqw]">
            Atas keberhasilannya dalam memenuhi standar kelulusan evaluasi capaian belajar
            Pendidikan Aswaja & Ke-NU-an kelas{" "}
            <span className="font-bold text-gray-900">{kelas}</span> pada{" "}
            <span className="font-bold text-gray-900">{formattedModule}</span> dengan skor{" "}
            <span className="font-bold text-gray-900">{bestSkor}</span>.
          </p>

          <p className="text-[0.9cqw] text-gray-500 italic mt-[0.5cqh] max-w-[90%] mx-auto leading-normal">
            E-Sertifikat ini diterbitkan secara sah oleh sistem e-learning berdasarkan pemenuhan
            standar kompetensi dasar kurikulum Pendidikan Aswaja An-Nahdliyah, yang meliputi aspek
            penguatan akidah, fikih ibadah, serta implementasi amaliyah Ahlussunnah wal Jamaah.
          </p>
        </div>
      </div>

      {/* FOOTER BAWAH: Jarak aman proporsional, diatur agar tidak melewati batas bawah */}
      <div className="absolute bottom-[2cqh] left-[5cqw] right-[5cqw] flex justify-between items-end z-20">
        {/* KIRI: Stempel Hologram */}
        <div className="w-[11cqw] h-[11cqw] flex flex-col items-center justify-center">
          <div className="w-full h-full rounded-full border-[0.25cqw] border-dashed border-yellow-600 bg-gradient-to-br from-yellow-100 via-white to-yellow-200 flex items-center justify-center shadow-sm transform -rotate-12">
            <div className="text-center">
              <span className="block text-[0.8cqw] text-gray-500 tracking-widest font-sans font-semibold">
                LKS TAQWA
              </span>
              <span className="block text-[0.95cqw] font-bold text-yellow-700 uppercase font-sans">
                Official
              </span>
            </div>
          </div>
        </div>

        {/* TENGAH: QR Code & Verifikasi */}
        <div className="w-[8cqw] flex flex-col items-center">
          <div className="w-[6.5cqw] aspect-square bg-white border border-gray-300 p-[0.3cqw] shadow-sm rounded-sm flex items-center justify-center">
            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white text-[0.7cqw] font-sans font-bold">
              QR
            </div>
          </div>
          <p className="text-[0.85cqw] mt-[0.2cqh] text-gray-600 font-medium tracking-wide whitespace-nowrap">
            Verifikasi Sertifikat
          </p>
        </div>

        {/* KANAN: Tanda Tangan Guru Pengampu */}
        <div className="w-[18cqw] flex flex-col items-center text-center font-sans">
          <p className="text-[1cqw] text-gray-700 mb-[0.1cqh]">Malang, {tanggal}</p>
          <p className="text-[0.95cqw] font-semibold text-gray-800 tracking-wide">
            ASWAJA LEARN HUB
          </p>

          {/* AREA TANDA TANGAN */}
          <div className="h-[4.5cqw] w-full flex justify-center items-center my-[0.1cqh]">
            <img
              src={signature}
              alt="Tanda Tangan Ahmad Wildan Afif"
              className="max-h-full max-w-full object-contain mix-blend-multiply"
              loading="lazy"
            />
          </div>

          <div className="w-full border-t-[0.15cqw] border-gray-800 pt-[0.1cqh]">
            <p className="text-[1.1cqw] font-bold text-gray-900 leading-tight">
              Ahmad Wildan Afif, M.Pd.
            </p>
            <p className="text-[0.9cqw] text-gray-600">Guru Pengampu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
