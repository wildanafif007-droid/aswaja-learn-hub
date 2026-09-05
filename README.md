# Aswaja E-Learning

Buat web e-learning "Pendidikan Aswaja & Ke-NU-an" tema hijau NU, putih, emas yang responsif HP/Laptop

1. STRUKTUR MENU UTAMA

   - Navbar: Menu Beranda, Materi, Kuis, & tombol Dark Mode

   - Beranda: Banner islami & 3 kartu pilar (Akidah, Fikih, Tasawuf)

   - Menu Semester Genap (Semua Kelas): Kosongkan dan beri tulisan estetik "Materi Semester Genap Segera Hadir"

2. ISI RINGKASAN MATERI (SEMESTER GANJIL - LKS TAQWA CV. Karya digital pustaka)

Sediakan menu materi Kelas 7, 8, dan 9 Semester Ganjil dengan poin-poin penjelasan ringkas dan area animasi SVG islami bergerak di bawah teks:

- KELAS 7 GANJIL: Bab 1 Proses Perkembangan Islam di Indonesia, Bab 2 Pondok Pesantren dan Hubungannya dengan NU, Bab 3 Kelahiran dan Tokoh Pendiri NU, Bab 4 Program dan Ikhtiar NU, Bab 5 Bacaan dalam Shalat (Niat, Iftitah, Basmalah, Tasbih, Tahiyat, Qunut)

- KELAS 8 GANJIL: Bab 1 Ahlussunnah wal Jamaah NU (Aswaja-Nu), Bab 2 Bermadzhab, Bab 3 Madzhab-Madzhab Aswaja, Bab 4 Mempertahankan dan Mengembangkan Aswaja, Bab 5 Tahun Baru Islam, Bab 6 Makna Tasu'a dan Asyura

- KELAS 9 GANJIL: Bab 1 Tradisi Kirim Doa, Bab 2 Bidah dan Sunnah, Bab 3 Tawasul, Bab 4 Firqah-Firqah dalam Islam, Bab 5 Ukhuwah Menurut NU

3. SISTEM KUIS 10 SOAL PER BAB & DROPDOWN NAMA MURID:

Buat halaman kuis interaktif dengan 3 dropdown di awal: Pilih Kelas (VII, VIII, IX A, IX B) -> Pilih Bab Materi -> Pilih Nama Murid sesuai kelas

- Tampilkan 10 soal pilihan ganda acak per halaman sesuai Bab LKS TAQWA yang dipilih siswa (Gunakan fungsi Javascript matematika perulangan array agar hemat token)

- Desain Visual: Jawaban berupa kartu modern minimalis. Jika BENAR berubah hijau (bounce animation), jika SALAH berubah merah (shake animation). Ada progress bar hijau-emas di atas soal

4. DATABASE NAMA MURID:

- KELAS VII: AHMAD FAHMI NURIR ROSYADI, AHMAD FAUZI, ALBAHJATUS TSANIYYAH, ANDINI RATNA D, LUTFIAN FANDI AHMAD SHOLAHUDDIN, MEIKA BILQIS CALISTA, MUKHLIS HILMI AL FARUQ, SYAIRA QOTRUN NADA

- KELAS VIII: AHMAD ARIF SHOMADANI, ALISSA NADA SALSABILA, ALMIRA AZZAHRA RAMADHAN, FADLI AL FARISY, FARZAN AHMAD KHALFANI, GILANG REZKY MAULANA, M FATTAH MAKSUM, M KHOLIDUL ASYHAR, MUHAMMAD ANIS MUSYAFFA', MUHAMMAD FADLAN ROZIN HAMZAH, MUHAMMAD ILHAM ARIFIN, MUHAMMAD IRHAM ARIFIN, MUHAMMAD JAKA FERDIANSYAH, MUHAMMAD SYARIF ALTHOF, NADHIFA FAUHATUL QUDSIYA, QUEEN ULUMI DZAKIYA, RACHEL MARYAM, ZALFA ALFINA LEKSONO

- KELAS IX A: ACHMAD HAMDAN HABIBI, ADIBU SHOLEH AHMAD, AHMAD AQIL FATHANI, AHMAD RAFA ASCARYA EKAMAS PUTRA, AMINAH, ASHFA ACHMAL MUKARROMAH, DANANG AGUNG SAMUDRA, KAFKA ZIDANI CAESAR ALVARO, MUHAMMAD AZAM SATYA ALFARO, MUHAMMAD JAHFAL IQYAN AWWALI, MUHAMMAD RAKHA ALFIANSYAH, MUHAMMAD SYAUQI BANGGA ZUHAYR, NAURA HASNA ANNIDA

- KELAS IX B: ACHMAD CHABIBI FIRMANSYAH, ALMIRA MARSYA LARASATI, ANANDO RAFA HARIYANTO, ARKAAN MUHAMMAD ZUFAR, DWI NURIL 'AQILA, FAIRUZ HIBATULLAH, GHEISA AYU LARASATI, HASNA SAFA SALISA, MOCHAMMAD IRSYAADUN NAJAAH, MUHAMMAD ABDUN NAFI', MUHAMMAD DIMAS DWI PUTRA, MUHAMMAD KENZHI PUTRA ALVARO, MUHAMMAD NAWWAF AL HASANI, NIZAM RABBANI AHMAD, RAHADIAN TEGAR FAHREZA, SITI NABILAH

5. SERTIFIKAT AKHIR, REMEDIAL, & SETOR DATA GFORM:

- Saat kuis selesai, tampilkan skor (0-100) dalam kotak Card mewah berdesain "Sertifikat Resmi" berisi Nama, Kelas, Bab, Nilai, Tanggal, Predikat (Mumtaz/Jayyid/Semangat) + animasi confetti kembang api CSS

- Tombol 1: "Cetak/Simpan PDF Sertifikat" -> Memicu window.print() fokus area sertifikat saja. Sembunyikan header/footer browser dengan CSS '@media print { body * { visibility: hidden; } #sertifikat-card, #sertifikat-card * { visibility: visible; } @page { size: auto; margin: 0mm; } }'.

- Tombol 2: "Setor Nilai ke Data Pak Wildan" -> Membuka tab baru Google Form memakai teknik URL Pre-filled agar Nama, Kelas, Bab, dan Skor otomatis terisi di Google Form. Taruh komentar '// TEMPELKAN LINK PRE-FILLED DI SINI' di kode agar mudah diedit.

- Tombol 3: "Ulangi Kuis (Perbaiki Nilai)" -> Reset skor total, bersihkan jawaban lama, dan kosongkan kembali pilihan nama murid & bab (sistem remedial)

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aswaja-learn-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/79c9bd19-ddce-493c-a560-3fcd863b2690).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
