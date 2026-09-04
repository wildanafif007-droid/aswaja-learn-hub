export type Chapter = {
  id: string;
  title: string;
  points: string[];
};

export const KELAS_LIST = [
  { id: "VII", label: "Kelas VII" },
  { id: "VIII", label: "Kelas VIII" },
  { id: "IX A", label: "Kelas IX A" },
  { id: "IX B", label: "Kelas IX B" },
] as const;

/** Tingkat materi per kelas (IX A & IX B memakai materi Kelas 9) */
export const tingkatOf = (kelas: string) =>
  kelas === "VII" ? "7" : kelas === "VIII" ? "8" : "9";

export const MATERI: Record<string, { nama: string; chapters: Chapter[] }> = {
  "7": {
    nama: "Kelas 7 — Semester Ganjil",
    chapters: [
      {
        id: "7-1",
        title: "Bab 1 — Proses Perkembangan Islam di Indonesia",
        points: [
          "Islam masuk Nusantara melalui jalur perdagangan, perkawinan, pendidikan, tasawuf, dan seni budaya.",
          "Para pedagang Arab, Persia, dan Gujarat menjadi pintu awal dakwah di kota-kota pelabuhan.",
          "Walisongo mendakwahkan Islam dengan pendekatan budaya yang ramah dan damai (al-hikmah).",
          "Kerajaan Islam seperti Samudra Pasai, Demak, dan Gowa-Tallo memperkuat penyebaran Islam.",
        ],
      },
      {
        id: "7-2",
        title: "Bab 2 — Pondok Pesantren dan Hubungannya dengan NU",
        points: [
          "Pesantren adalah lembaga pendidikan Islam tertua di Indonesia dengan unsur kiai, santri, masjid, pondok, dan kitab kuning.",
          "Tradisi pesantren menjaga sanad keilmuan dari guru ke guru hingga Rasulullah SAW.",
          "NU lahir dari rahim pesantren; para pendirinya adalah pengasuh pesantren.",
          "Nilai pesantren: ikhlas, sederhana, mandiri, ukhuwah, dan ta'zhim kepada guru.",
        ],
      },
      {
        id: "7-3",
        title: "Bab 3 — Kelahiran dan Tokoh Pendiri NU",
        points: [
          "Nahdlatul Ulama didirikan di Surabaya pada 31 Januari 1926 (16 Rajab 1344 H).",
          "Pendiri utama: KH. Hasyim Asy'ari, KH. Abdul Wahab Hasbullah, dan KH. Bisri Syansuri.",
          "Latar belakang: menjaga ajaran Ahlussunnah wal Jama'ah dan tradisi keagamaan Nusantara.",
          "Lambang NU: bola dunia, tali, sembilan bintang, dan tulisan Nahdlatul Ulama karya KH. Ridwan Abdullah.",
        ],
      },
      {
        id: "7-4",
        title: "Bab 4 — Program dan Ikhtiar NU",
        points: [
          "Bidang agama: menjaga akidah Aswaja dan menghidupkan tradisi ibadah umat.",
          "Bidang pendidikan: madrasah, pesantren, sekolah, dan perguruan tinggi NU.",
          "Bidang sosial-ekonomi: LAZISNU, koperasi, dan pemberdayaan masyarakat.",
          "Bidang kebangsaan: menjaga NKRI, Pancasila, dan Islam rahmatan lil 'alamin.",
        ],
      },
      {
        id: "7-5",
        title: "Bab 5 — Bacaan dalam Shalat",
        points: [
          "Niat shalat dilafalkan menurut Aswaja untuk membantu kemantapan hati (talaffuzh bin niyyah).",
          "Doa iftitah dibaca setelah takbiratul ihram sebelum al-Fatihah.",
          "Basmalah dibaca sebagai bagian dari surah al-Fatihah menurut madzhab Syafi'i.",
          "Tasbih ruku' dan sujud, tahiyat awal-akhir, serta qunut pada shalat Subuh.",
        ],
      },
    ],
  },
  "8": {
    nama: "Kelas 8 — Semester Ganjil",
    chapters: [
      {
        id: "8-1",
        title: "Bab 1 — Ahlussunnah wal Jama'ah NU",
        points: [
          "Aswaja adalah golongan yang mengikuti sunnah Nabi dan jalan para sahabat.",
          "Sumber ajaran: Al-Qur'an, Hadis, Ijma', dan Qiyas.",
          "Karakter Aswaja: tawassuth (moderat), tawazun (seimbang), i'tidal (adil), dan tasamuh (toleran).",
          "NU menerapkan Aswaja dalam akidah (Asy'ari–Maturidi), fikih (empat madzhab), dan tasawuf (al-Ghazali–Junaid).",
        ],
      },
      {
        id: "8-2",
        title: "Bab 2 — Bermadzhab",
        points: [
          "Bermadzhab berarti mengikuti metode ulama mujtahid dalam memahami Al-Qur'an dan Hadis.",
          "Bermadzhab menjaga umat dari salah paham terhadap dalil.",
          "Dasar bermadzhab: perintah bertanya kepada ahli ilmu (QS. an-Nahl: 43).",
          "Taqlid bagi orang awam dibolehkan, ittiba' lebih utama bila mampu mengetahui dalil.",
        ],
      },
      {
        id: "8-3",
        title: "Bab 3 — Madzhab-Madzhab Aswaja",
        points: [
          "Empat imam madzhab fikih: Hanafi, Maliki, Syafi'i, dan Hanbali.",
          "Mayoritas muslim Indonesia dan NU mengikuti madzhab Syafi'i.",
          "Akidah mengikuti Imam Abu Hasan al-Asy'ari dan Imam Abu Manshur al-Maturidi.",
          "Tasawuf mengikuti Imam al-Ghazali dan Imam Junaid al-Baghdadi.",
        ],
      },
      {
        id: "8-4",
        title: "Bab 4 — Mempertahankan dan Mengembangkan Aswaja",
        points: [
          "Cara mempertahankan Aswaja: belajar, mengamalkan, dan mengajarkan.",
          "Menghidupkan amaliyah NU: tahlil, istighotsah, maulid, dan ziarah kubur.",
          "Aktif di jam'iyah NU dan badan otonom seperti IPNU-IPPNU dan Ansor.",
          "Berdakwah dengan santun, menghindari ujaran kebencian dan permusuhan.",
        ],
      },
      {
        id: "8-5",
        title: "Bab 5 — Tahun Baru Islam",
        points: [
          "Kalender Hijriah dimulai dari peristiwa hijrah Nabi ke Madinah.",
          "Penetapan kalender Hijriah dilakukan pada masa Khalifah Umar bin Khattab.",
          "Bulan pertama tahun Hijriah adalah Muharram, termasuk bulan haram (mulia).",
          "Amalan: muhasabah, doa awal-akhir tahun, sedekah, dan puasa sunnah.",
        ],
      },
      {
        id: "8-6",
        title: "Bab 6 — Makna Tasu'a dan Asyura",
        points: [
          "Tasu'a adalah tanggal 9 Muharram, Asyura tanggal 10 Muharram.",
          "Puasa Asyura menghapus dosa satu tahun yang lalu (HR. Muslim).",
          "Puasa Tasu'a disyariatkan agar berbeda dengan kebiasaan kaum Yahudi.",
          "Tradisi Asyura di Nusantara: santunan anak yatim dan bubur Asyura.",
        ],
      },
    ],
  },
  "9": {
    nama: "Kelas 9 — Semester Ganjil",
    chapters: [
      {
        id: "9-1",
        title: "Bab 1 — Tradisi Kirim Doa",
        points: [
          "Kirim doa adalah memohon ampunan dan rahmat Allah untuk orang yang telah wafat.",
          "Dalilnya doa dalam QS. al-Hasyr: 10 dan hadis tentang sedekah untuk orang tua.",
          "Bentuk amaliyah: tahlil, yasinan, haul, dan sedekah atas nama mayit.",
          "Pahala bacaan dan sedekah dapat sampai kepada mayit menurut jumhur ulama Aswaja.",
        ],
      },
      {
        id: "9-2",
        title: "Bab 2 — Bidah dan Sunnah",
        points: [
          "Sunnah adalah segala yang bersumber dari Nabi: ucapan, perbuatan, dan ketetapan.",
          "Bidah adalah perkara baru yang tidak ada pada masa Nabi.",
          "Menurut Imam Syafi'i dan Izzuddin bin Abdissalam, bidah terbagi hasanah dan sayyi'ah.",
          "Contoh bidah hasanah: pembukuan Al-Qur'an, adzan dua kali Jumat, dan madrasah.",
        ],
      },
      {
        id: "9-3",
        title: "Bab 3 — Tawasul",
        points: [
          "Tawasul adalah berdoa kepada Allah dengan perantara amal saleh, nama Allah, atau orang saleh.",
          "Yang dimohon tetap hanya Allah; perantara bukan yang menentukan.",
          "Dalil: QS. al-Maidah: 35 dan hadis tawasul sahabat kepada Nabi.",
          "Tawasul bukan syirik karena tidak menyekutukan Allah.",
        ],
      },
      {
        id: "9-4",
        title: "Bab 4 — Firqah-Firqah dalam Islam",
        points: [
          "Firqah adalah kelompok yang muncul karena perbedaan pandangan teologi dan politik.",
          "Firqah besar: Khawarij, Syiah, Murji'ah, Jabariyah, Qadariyah, Mu'tazilah, Ahlussunnah.",
          "Khawarij muncul setelah peristiwa tahkim perang Shiffin.",
          "Aswaja adalah golongan yang bertahan di jalan tengah dan mayoritas umat.",
        ],
      },
      {
        id: "9-5",
        title: "Bab 5 — Ukhuwah Menurut NU",
        points: [
          "Ukhuwah Islamiyah: persaudaraan antar sesama muslim.",
          "Ukhuwah Wathaniyah: persaudaraan sebangsa dan setanah air.",
          "Ukhuwah Basyariyah/Insaniyah: persaudaraan sesama manusia.",
          "Ukhuwah menjaga persatuan bangsa dan mencegah perpecahan.",
        ],
      },
    ],
  },
};

export const SISWA: Record<string, string[]> = {
  VII: [
    "AHMAD FAHMI NURIR ROSYADI",
    "AHMAD FAUZI",
    "ALBAHJATUS TSANIYYAH",
    "ANDINI RATNA D",
    "LUTFIAN FANDI AHMAD SHOLAHUDDIN",
    "MEIKA BILQIS CALISTA",
    "MUKHLIS HILMI AL FARUQ",
    "SYAIRA QOTRUN NADA",
  ],
  VIII: [
    "AHMAD ARIF SHOMADANI",
    "ALISSA NADA SALSABILA",
    "ALMIRA AZZAHRA RAMADHAN",
    "FADLI AL FARISY",
    "FARZAN AHMAD KHALFANI",
    "GILANG REZKY MAULANA",
    "M FATTAH MAKSUM",
    "M KHOLIDUL ASYHAR",
    "MUHAMMAD ANIS MUSYAFFA'",
    "MUHAMMAD FADLAN ROZIN HAMZAH",
    "MUHAMMAD ILHAM ARIFIN",
    "MUHAMMAD IRHAM ARIFIN",
    "MUHAMMAD JAKA FERDIANSYAH",
    "MUHAMMAD SYARIF ALTHOF",
    "NADHIFA FAUHATUL QUDSIYA",
    "QUEEN ULUMI DZAKIYA",
    "RACHEL MARYAM",
    "ZALFA ALFINA LEKSONO",
  ],
  "IX A": [
    "ACHMAD HAMDAN HABIBI",
    "ADIBU SHOLEH AHMAD",
    "AHMAD AQIL FATHANI",
    "AHMAD RAFA ASCARYA EKAMAS PUTRA",
    "AMINAH",
    "ASHFA ACHMAL MUKARROMAH",
    "DANANG AGUNG SAMUDRA",
    "KAFKA ZIDANI CAESAR ALVARO",
    "MUHAMMAD AZAM SATYA ALFARO",
    "MUHAMMAD JAHFAL IQYAN AWWALI",
    "MUHAMMAD RAKHA ALFIANSYAH",
    "MUHAMMAD SYAUQI BANGGA ZUHAYR",
    "NAURA HASNA ANNIDA",
  ],
  "IX B": [
    "ACHMAD CHABIBI FIRMANSYAH",
    "ALMIRA MARSYA LARASATI",
    "ANANDO RAFA HARIYANTO",
    "ARKAAN MUHAMMAD ZUFAR",
    "DWI NURIL 'AQILA",
    "FAIRUZ HIBATULLAH",
    "GHEISA AYU LARASATI",
    "HASNA SAFA SALISA",
    "MOCHAMMAD IRSYAADUN NAJAAH",
    "MUHAMMAD ABDUN NAFI'",
    "MUHAMMAD DIMAS DWI PUTRA",
    "MUHAMMAD KENZHI PUTRA ALVARO",
    "MUHAMMAD NAWWAF AL HASANI",
    "NIZAM RABBANI AHMAD",
    "RAHADIAN TEGAR FAHREZA",
    "SITI NABILAH",
  ],
};
