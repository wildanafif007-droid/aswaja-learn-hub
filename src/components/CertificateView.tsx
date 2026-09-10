import React from "react";

// ----------------------------------------------------------------------
// TUGAS 2 TERSELESAIKAN: PERBAIKAN IMPORT TANDA TANGAN
// Hapus .asset.json. Import file gambar secara langsung seperti di bawah ini.
import signature from "@/assets/signature.png";
// (Pastikan path @/assets/signature.png sesuai dengan struktur folder Anda)
// ----------------------------------------------------------------------

export default function CertificateView({
  // Props bawaan sistem Anda
  studentName = "Nama Siswa",
  moduleName = "MODUL 1 (Proses Perkembangan Islam di Indonesia)",
  score = 100,
  date = new Date().toLocaleDateString("id-ID"),
  // ... prop lainnya
}) {
  // ====================================================================
  // LOGIKA SISTEM KUNCI (TIDAK DIUBAH SAMA SEKALI)
  // State form, handler tombol, PDF generation, dsb biarkan di area ini.
  // ====================================================================

  return (
    // Kontainer Utama Sertifikat (Menggunakan unit container-query cq)
    <div
      className="relative w-full aspect-[1.414/1] bg-white overflow-hidden shadow-2xl mx-auto border-[1cqw] border-double border-yellow-600 container-query"
      style={{ containerType: "inline-size" }}
    >
      {/* BACKGROUND: Guilloche Champagne Gold (Visual 90% Premium) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 0 0, transparent 0, #ebd197 10px), repeating-linear-gradient(#f4e8c1, #f4e8c1)",
        }}
      ></div>
      {/* KONTEN UTAMA SERTIFIKAT */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-[6cqh] px-[8cqw]">
        {/* HEADER: Logo ALH & Teks (10cqw, font 19, Gold Foil) */}
        <div className="flex flex-col items-center mb-[3cqh]">
          {/* Logo Diperbesar 10cqw */}
          <div className="w-[10cqw] h-[10cqw] bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-sm border border-yellow-500 relative overflow-hidden">
            {/* Ganti dengan tag <img src={logoALH} /> jika Anda memiliki file logonya */}
            <span className="text-[2.5cqw] font-bold text-gray-800">ALH</span>
          </div>

          {/* Teks dengan efek Gold Foil font 19px (base) */}
          <h1
            className="text-[19px] sm:text-[3cqw] font-extrabold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.15)" }}
          >
            Aswaja Learn Hub
          </h1>
        </div>

        {/* BODY TEKS */}
        <div className="text-center mt-[1cqh]">
          <h2 className="text-[3.5cqw] font-serif font-bold text-gray-900 mb-[1.5cqh] tracking-wide">
            SERTIFIKAT PENGHARGAAN
          </h2>
          <p className="text-[1.8cqw] text-gray-700 mb-[1.5cqh]">Diberikan dengan bangga kepada:</p>

          {/* Nama Siswa */}
          <h3 className="text-[4.5cqw] font-bold text-black border-b-[0.2cqw] border-gray-400 inline-block px-[4cqw] pb-[0.5cqh] mb-[1.5cqh]">
            {studentName}
          </h3>

          <p className="text-[1.8cqw] text-gray-700 mb-[1cqh]">
            Atas keberhasilannya menyelesaikan:
          </p>

          {/* Nama Modul Dinamis (Tanpa tanda hubung) */}
          <h4 className="text-[2.2cqw] font-extrabold text-gray-900 uppercase max-w-[80%] mx-auto drop-shadow-sm">
            {moduleName}
          </h4>
        </div>
      </div>
      {/* ==================================================================== */}
      // TUGAS 1 TERSELESAIKAN: FOOTER TIDAK AMBLES // Menggunakan "absolute bottom-[8cqh]" (atau
      persentase) agar naik sedikit. // Diberi "z-20" agar berada di atas background, dan
      "items-end" agar sejajar.
      {/* ==================================================================== */}
      <div className="absolute bottom-[8cqh] left-0 w-full px-[10cqw] flex justify-between items-end z-20">
        {/* KIRI: Stempel Hologram */}
        <div className="w-[16cqw] h-[16cqw] flex flex-col items-center justify-center">
          <div className="w-full h-full rounded-full border-[0.3cqw] border-dashed border-yellow-600 bg-gradient-to-br from-yellow-100 via-white to-yellow-300 flex items-center justify-center shadow-lg transform -rotate-12">
            <div className="text-center">
              <span className="block text-[1.2cqw] text-gray-600 tracking-wider">OFFICIAL</span>
              <span className="block text-[1.5cqw] font-bold text-yellow-700 uppercase">
                Hologram
              </span>
            </div>
          </div>
        </div>

        {/* TENGAH: QR Code */}
        <div className="w-[12cqw] flex flex-col items-center mb-[1cqh]">
          <div className="w-full aspect-square bg-white border border-gray-300 p-[1cqw] shadow-sm rounded-sm">
            {/* Sisipkan Komponen QRCode Anda di sini */}
            <div className="w-full h-full bg-gray-800 opacity-80 flex items-center justify-center">
              <span className="text-[1cqw] text-white">QR</span>
            </div>
          </div>
          <p className="text-[1.2cqw] mt-[0.5cqh] text-gray-600 font-medium tracking-wide">
            Verifikasi Resmi
          </p>
        </div>

        {/* KANAN: Tanda Tangan */}
        <div className="w-[24cqw] flex flex-col items-center text-center">
          <p className="text-[1.4cqw] text-gray-800 mb-[0.5cqh]">Surabaya, {date}</p>

          {/* AREA TANDA TANGAN (Sudah fix dengan import yang benar) */}
          <div className="h-[8cqh] w-full flex justify-center items-center my-[0.5cqh]">
            <img
              src={signature}
              alt="Tanda Tangan Instruktur"
              className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow-sm"
              loading="lazy"
            />
          </div>

          <div className="w-full border-t-[0.2cqw] border-black pt-[0.5cqh]">
            <p className="text-[1.6cqw] font-bold text-black leading-tight">Instruktur Utama</p>
            <p className="text-[1.3cqw] text-gray-700">Aswaja Learn Hub</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";

// ----------------------------------------------------------------------
// TUGAS 2 TERSELESAIKAN: PERBAIKAN IMPORT TANDA TANGAN
// Hapus .asset.json. Import file gambar secara langsung seperti di bawah ini.
import signature from "@/assets/signature.png";
// (Pastikan path @/assets/signature.png sesuai dengan struktur folder Anda)
// ----------------------------------------------------------------------

export default function CertificateView({
  // Props bawaan sistem Anda
  studentName = "Nama Siswa",
  moduleName = "MODUL 1 (Proses Perkembangan Islam di Indonesia)",
  score = 100,
  date = new Date().toLocaleDateString("id-ID"),
  // ... prop lainnya
}) {
  // ====================================================================
  // LOGIKA SISTEM KUNCI (TIDAK DIUBAH SAMA SEKALI)
  // State form, handler tombol, PDF generation, dsb biarkan di area ini.
  // ====================================================================

  return (
    // Kontainer Utama Sertifikat (Menggunakan unit container-query cq)
    <div
      className="relative w-full aspect-[1.414/1] bg-white overflow-hidden shadow-2xl mx-auto border-[1cqw] border-double border-yellow-600 container-query"
      style={{ containerType: "inline-size" }}
    >
      {/* BACKGROUND: Guilloche Champagne Gold (Visual 90% Premium) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 0 0, transparent 0, #ebd197 10px), repeating-linear-gradient(#f4e8c1, #f4e8c1)",
        }}
      ></div>
      {/* KONTEN UTAMA SERTIFIKAT */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-[6cqh] px-[8cqw]">
        {/* HEADER: Logo ALH & Teks (10cqw, font 19, Gold Foil) */}
        <div className="flex flex-col items-center mb-[3cqh]">
          {/* Logo Diperbesar 10cqw */}
          <div className="w-[10cqw] h-[10cqw] bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-sm border border-yellow-500 relative overflow-hidden">
            {/* Ganti dengan tag <img src={logoALH} /> jika Anda memiliki file logonya */}
            <span className="text-[2.5cqw] font-bold text-gray-800">ALH</span>
          </div>

          {/* Teks dengan efek Gold Foil font 19px (base) */}
          <h1
            className="text-[19px] sm:text-[3cqw] font-extrabold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.15)" }}
          >
            Aswaja Learn Hub
          </h1>
        </div>

        {/* BODY TEKS */}
        <div className="text-center mt-[1cqh]">
          <h2 className="text-[3.5cqw] font-serif font-bold text-gray-900 mb-[1.5cqh] tracking-wide">
            SERTIFIKAT PENGHARGAAN
          </h2>
          <p className="text-[1.8cqw] text-gray-700 mb-[1.5cqh]">Diberikan dengan bangga kepada:</p>

          {/* Nama Siswa */}
          <h3 className="text-[4.5cqw] font-bold text-black border-b-[0.2cqw] border-gray-400 inline-block px-[4cqw] pb-[0.5cqh] mb-[1.5cqh]">
            {studentName}
          </h3>

          <p className="text-[1.8cqw] text-gray-700 mb-[1cqh]">
            Atas keberhasilannya menyelesaikan:
          </p>

          {/* Nama Modul Dinamis (Tanpa tanda hubung) */}
          <h4 className="text-[2.2cqw] font-extrabold text-gray-900 uppercase max-w-[80%] mx-auto drop-shadow-sm">
            {moduleName}
          </h4>
        </div>
      </div>
      {/* ==================================================================== */}
      // TUGAS 1 TERSELESAIKAN: FOOTER TIDAK AMBLES // Menggunakan "absolute bottom-[8cqh]" (atau
      persentase) agar naik sedikit. // Diberi "z-20" agar berada di atas background, dan
      "items-end" agar sejajar.
      {/* ==================================================================== */}
      <div className="absolute bottom-[8cqh] left-0 w-full px-[10cqw] flex justify-between items-end z-20">
        {/* KIRI: Stempel Hologram */}
        <div className="w-[16cqw] h-[16cqw] flex flex-col items-center justify-center">
          <div className="w-full h-full rounded-full border-[0.3cqw] border-dashed border-yellow-600 bg-gradient-to-br from-yellow-100 via-white to-yellow-300 flex items-center justify-center shadow-lg transform -rotate-12">
            <div className="text-center">
              <span className="block text-[1.2cqw] text-gray-600 tracking-wider">OFFICIAL</span>
              <span className="block text-[1.5cqw] font-bold text-yellow-700 uppercase">
                Hologram
              </span>
            </div>
          </div>
        </div>

        {/* TENGAH: QR Code */}
        <div className="w-[12cqw] flex flex-col items-center mb-[1cqh]">
          <div className="w-full aspect-square bg-white border border-gray-300 p-[1cqw] shadow-sm rounded-sm">
            {/* Sisipkan Komponen QRCode Anda di sini */}
            <div className="w-full h-full bg-gray-800 opacity-80 flex items-center justify-center">
              <span className="text-[1cqw] text-white">QR</span>
            </div>
          </div>
          <p className="text-[1.2cqw] mt-[0.5cqh] text-gray-600 font-medium tracking-wide">
            Verifikasi Resmi
          </p>
        </div>

        {/* KANAN: Tanda Tangan */}
        <div className="w-[24cqw] flex flex-col items-center text-center">
          <p className="text-[1.4cqw] text-gray-800 mb-[0.5cqh]">Surabaya, {date}</p>

          {/* AREA TANDA TANGAN (Sudah fix dengan import yang benar) */}
          <div className="h-[8cqh] w-full flex justify-center items-center my-[0.5cqh]">
            <img
              src={signature}
              alt="Tanda Tangan Instruktur"
              className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow-sm"
              loading="lazy"
            />
          </div>

          <div className="w-full border-t-[0.2cqw] border-black pt-[0.5cqh]">
            <p className="text-[1.6cqw] font-bold text-black leading-tight">Instruktur Utama</p>
            <p className="text-[1.3cqw] text-gray-700">Aswaja Learn Hub</p>
          </div>
        </div>
      </div>
    </div>
  );
}
