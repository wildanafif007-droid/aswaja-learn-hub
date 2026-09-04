/**
 * Bank soal LKS TAQWA (CV. Karya Digital Pustaka) — Semester Ganjil.
 * Format hemat token: "pertanyaan|opsiA|opsiB|opsiC|opsiD|indexJawabanBenar"
 * Diproses dengan perulangan array + shuffle Fisher-Yates di helper bawah.
 */
export const BANK: Record<string, string[]> = {
  "7-1": [
    "Islam pertama kali masuk ke Indonesia terutama melalui jalur...|Perdagangan|Peperangan|Penjajahan|Perbudakan|0",
    "Kerajaan Islam pertama di Nusantara adalah...|Demak|Samudra Pasai|Mataram|Banten|1",
    "Sebutan bagi sembilan penyebar Islam di Jawa adalah...|Walisongo|Khulafa|Sahabat|Tabiin|0",
    "Sunan yang berdakwah lewat wayang adalah...|Sunan Kalijaga|Sunan Ampel|Sunan Muria|Sunan Drajat|0",
    "Dakwah Walisongo dilakukan dengan cara...|Damai dan budaya|Kekerasan|Paksaan|Ancaman|0",
    "Jalur dakwah melalui pernikahan disebut saluran...|Perkawinan|Politik|Militer|Ekonomi|0",
    "Kerajaan Islam pertama di Jawa adalah...|Demak|Pajang|Kediri|Singasari|0",
    "Pusat penyebaran Islam awal berada di daerah...|Pelabuhan|Pegunungan|Hutan|Gurun|0",
    "Ajaran tasawuf mempermudah dakwah karena bersifat...|Lembut dan mudah diterima|Keras|Rumit|Tertutup|0",
    "Islam menyebar cepat karena ajarannya...|Tidak mengenal kasta|Mahal|Sulit|Terbatas|0",
  ],
  "7-2": [
    "Lembaga pendidikan Islam tertua di Indonesia adalah...|Pesantren|Universitas|SMA|Kursus|0",
    "Pemimpin pesantren biasa disebut...|Kiai|Bupati|Camat|Lurah|0",
    "Kitab yang dikaji di pesantren disebut kitab...|Kuning|Putih|Merah|Biru|0",
    "Unsur pesantren berikut yang benar adalah...|Kiai, santri, masjid, pondok|Kiai, pasar|Santri, kantor|Masjid, sawah|0",
    "Hubungan NU dan pesantren adalah...|NU lahir dari pesantren|Tidak berhubungan|NU melawan pesantren|Pesantren cabang bank|0",
    "Sanad keilmuan berarti...|Mata rantai guru|Nama kitab|Jenis pondok|Gelar santri|0",
    "Nilai utama pesantren adalah...|Ikhlas dan sederhana|Sombong|Boros|Malas|0",
    "Tempat menginap santri disebut...|Pondok|Aula|Kantin|Gudang|0",
    "Sikap santri kepada guru harus...|Ta'zhim/hormat|Meremehkan|Membantah|Menjauhi|0",
    "Pesantren berperan menjaga...|Tradisi Aswaja|Adat asing|Politik uang|Kekerasan|0",
  ],
  "7-3": [
    "NU didirikan pada tanggal...|31 Januari 1926|17 Agustus 1945|1 Muharram 1900|20 Mei 1908|0",
    "NU didirikan di kota...|Surabaya|Jakarta|Semarang|Bandung|0",
    "Pendiri NU yang dijuluki Hadratussyaikh adalah...|KH. Hasyim Asy'ari|KH. Ahmad Dahlan|KH. Wahid Hasyim|KH. Ridwan|0",
    "Penggagas berdirinya NU dari Surabaya adalah...|KH. Abdul Wahab Hasbullah|KH. Bisri Musthofa|KH. Sahal|KH. Ali Maksum|0",
    "Pencipta lambang NU adalah...|KH. Ridwan Abdullah|KH. Bisri Syansuri|KH. Wahab|KH. Hasyim|0",
    "Arti Nahdlatul Ulama adalah...|Kebangkitan para ulama|Rumah ulama|Sekolah ulama|Kitab ulama|0",
    "Jumlah bintang pada lambang NU adalah...|9|5|7|11|0",
    "Bola dunia pada lambang NU bermakna...|Tempat hidup manusia|Kekayaan|Perang|Politik|0",
    "Tali pada lambang NU melambangkan...|Persatuan|Perpecahan|Kekuasaan|Kekayaan|0",
    "Tujuan didirikan NU adalah...|Menjaga ajaran Aswaja|Mencari kekayaan|Berkuasa|Berdagang|0",
  ],
  "7-4": [
    "Ikhtiar NU di bidang pendidikan berupa...|Madrasah dan pesantren|Pabrik|Hotel|Pasar|0",
    "Lembaga zakat NU bernama...|LAZISNU|BAZNAS|LPNU|LKKNU|0",
    "Badan otonom pelajar NU adalah...|IPNU-IPPNU|PMII|Fatayat|Ansor|0",
    "Barisan pemuda NU disebut...|GP Ansor|Muslimat|Fatayat|Lakpesdam|0",
    "NU berperan dalam kebangsaan dengan...|Menjaga NKRI|Memisahkan diri|Menolak Pancasila|Membuat negara baru|0",
    "Program NU bidang sosial contohnya...|Santunan yatim|Balap liar|Judi|Riba|0",
    "Organisasi perempuan NU adalah...|Muslimat NU|IPNU|Ansor|PMII|0",
    "Dakwah NU dilakukan dengan cara...|Santun dan bijaksana|Kasar|Memaksa|Mengancam|0",
    "Islam yang diperjuangkan NU adalah...|Rahmatan lil alamin|Radikal|Ekstrem|Liberal bebas|0",
    "Ikhtiar NU bidang ekonomi contohnya...|Koperasi|Kasino|Rente|Lotre|0",
  ],
  "7-5": [
    "Melafalkan niat shalat disebut...|Talaffuzh bin niyyah|Takbir|Tasbih|Tahmid|0",
    "Doa iftitah dibaca setelah...|Takbiratul ihram|Salam|Sujud|Tahiyat|0",
    "Menurut madzhab Syafi'i, basmalah adalah bagian dari...|Surah al-Fatihah|Doa qunut|Tasbih|Tahiyat|0",
    "Bacaan tasbih dibaca ketika...|Ruku' dan sujud|Salam|Niat|Iftitah|0",
    "Qunut dibaca pada shalat...|Subuh|Isya|Ashar|Dhuhur|0",
    "Tahiyat akhir berisi shalawat kepada...|Nabi Muhammad SAW|Sahabat|Wali|Ulama|0",
    "Rukun shalat yang berupa bacaan wajib adalah...|Al-Fatihah|Iftitah|Qunut|Tasbih|0",
    "Bacaan sujud yang benar adalah...|Subhana rabbiyal a'la|Subhana rabbiyal azhim|Alhamdulillah|Allahu akbar|0",
    "Bacaan ruku' adalah...|Subhana rabbiyal azhim|Subhana rabbiyal a'la|Bismillah|Astaghfirullah|0",
    "Qunut yang dibaca pada shalat Subuh hukumnya...|Sunnah ab'ad|Wajib|Haram|Makruh|0",
  ],
  "8-1": [
    "Ahlussunnah wal Jama'ah artinya...|Pengikut sunnah Nabi dan jama'ah sahabat|Pengikut hawa nafsu|Golongan baru|Pengikut raja|0",
    "Sumber ajaran Aswaja adalah...|Al-Qur'an, Hadis, Ijma', Qiyas|Adat saja|Akal saja|Mimpi|0",
    "Sikap moderat dalam Aswaja disebut...|Tawassuth|Tasamuh|Tawazun|I'tidal|0",
    "Sikap toleran disebut...|Tasamuh|Tawassuth|I'tidal|Tawazun|0",
    "Sikap seimbang disebut...|Tawazun|Tasamuh|Tawassuth|Amar ma'ruf|0",
    "Sikap tegak lurus dan adil disebut...|I'tidal|Tasamuh|Tawazun|Tawassuth|0",
    "Dalam akidah, NU mengikuti imam...|Al-Asy'ari dan Al-Maturidi|Al-Ghazali|Ibnu Sina|Al-Farabi|0",
    "Dalam tasawuf, NU mengikuti...|Al-Ghazali dan Junaid al-Baghdadi|Ibnu Rusyd|Al-Kindi|Ibnu Khaldun|0",
    "Dalam fikih, NU mengikuti...|Empat madzhab|Tanpa madzhab|Madzhab sendiri|Dua madzhab|0",
    "Aswaja menolak sikap...|Ekstrem dan berlebihan|Moderat|Adil|Seimbang|0",
  ],
  "8-2": [
    "Bermadzhab artinya...|Mengikuti metode ulama mujtahid|Membuat hukum sendiri|Meninggalkan dalil|Menolak ulama|0",
    "Dalil bertanya kepada ahli ilmu terdapat dalam QS...|An-Nahl: 43|Al-Fatihah: 1|Yasin: 10|Al-Kautsar: 2|0",
    "Mengikuti pendapat ulama tanpa tahu dalilnya disebut...|Taqlid|Ittiba'|Ijtihad|Talfiq|0",
    "Mengikuti pendapat ulama dengan mengetahui dalilnya disebut...|Ittiba'|Taqlid|Ijma'|Qiyas|0",
    "Usaha maksimal ulama menggali hukum disebut...|Ijtihad|Taqlid|Tawasul|Tabarruk|0",
    "Bermadzhab penting agar...|Tidak salah memahami dalil|Bebas berpendapat|Meninggalkan ibadah|Membuat aliran baru|0",
    "Orang awam sebaiknya...|Bermadzhab|Berijtihad sendiri|Menolak fatwa|Diam saja|0",
    "Syarat mujtahid antara lain...|Menguasai Al-Qur'an dan Hadis|Kaya|Terkenal|Berkuasa|0",
    "Kesepakatan ulama disebut...|Ijma'|Qiyas|Urf|Istishab|0",
    "Menyamakan hukum karena kemiripan disebut...|Qiyas|Ijma'|Taqlid|Ittiba'|0",
  ],
  "8-3": [
    "Jumlah imam madzhab fikih Aswaja adalah...|4|2|3|5|0",
    "Madzhab yang dianut mayoritas muslim Indonesia adalah...|Syafi'i|Hanafi|Maliki|Hanbali|0",
    "Imam madzhab yang tertua adalah...|Imam Hanafi|Imam Syafi'i|Imam Maliki|Imam Hanbali|0",
    "Kitab Al-Muwaththa' disusun oleh...|Imam Malik|Imam Syafi'i|Imam Hanafi|Imam Ahmad|0",
    "Kitab Ar-Risalah dan Al-Umm karya...|Imam Syafi'i|Imam Malik|Imam Ahmad|Imam Hanafi|0",
    "Musnad Ahmad disusun oleh...|Imam Ahmad bin Hanbal|Imam Syafi'i|Imam Bukhari|Imam Muslim|0",
    "Imam Syafi'i berguru kepada...|Imam Malik|Imam Ahmad|Imam Bukhari|Imam Nawawi|0",
    "Pendiri madzhab akidah Aswaja adalah...|Abu Hasan al-Asy'ari|Abu Hanifah|Ibnu Taimiyah|Al-Kindi|0",
    "Imam tasawuf yang bergelar Hujjatul Islam adalah...|Al-Ghazali|Junaid|Al-Qusyairi|Rabi'ah|0",
    "Perbedaan antar madzhab harus disikapi dengan...|Saling menghormati|Bermusuhan|Mencela|Memutus hubungan|0",
  ],
  "8-4": [
    "Cara utama mempertahankan Aswaja adalah...|Belajar dan mengamalkan|Diam|Menjauhi ulama|Meninggalkan tradisi|0",
    "Amaliyah NU yang membaca kalimat thayyibah untuk mayit disebut...|Tahlil|Talqin|Tarawih|Tasyahud|0",
    "Doa bersama memohon pertolongan Allah disebut...|Istighotsah|Iftitah|Istinja|Iqamah|0",
    "Peringatan kelahiran Nabi disebut...|Maulid|Isra|Haul|Nisfu|0",
    "Berkunjung ke makam untuk mendoakan disebut...|Ziarah kubur|Tawaf|Sa'i|I'tikaf|0",
    "Organisasi pelajar NU yang perlu diikuti pelajar adalah...|IPNU-IPPNU|OSIS asing|Karang taruna|Pramuka saja|0",
    "Dakwah Aswaja dilakukan dengan...|Santun dan hikmah|Ujaran kebencian|Provokasi|Kekerasan|0",
    "Menjaga Aswaja di media sosial dilakukan dengan...|Konten dakwah positif|Menyebar hoaks|Mencela orang|Adu debat kasar|0",
    "Mengembangkan Aswaja berarti...|Mengajarkan kepada orang lain|Menyimpannya sendiri|Melupakannya|Menolaknya|0",
    "Sikap terhadap perbedaan pendapat adalah...|Tasamuh|Takfir|Permusuhan|Fitnah|0",
  ],
  "8-5": [
    "Kalender Hijriah dihitung sejak peristiwa...|Hijrah Nabi ke Madinah|Isra Mi'raj|Fathu Makkah|Lahir Nabi|0",
    "Kalender Hijriah ditetapkan pada masa khalifah...|Umar bin Khattab|Abu Bakar|Utsman|Ali|0",
    "Bulan pertama tahun Hijriah adalah...|Muharram|Ramadhan|Syawal|Rajab|0",
    "Jumlah bulan dalam kalender Hijriah adalah...|12|10|13|11|0",
    "Perhitungan Hijriah berdasarkan peredaran...|Bulan|Matahari|Bintang|Bumi|0",
    "Muharram termasuk bulan...|Haram (mulia)|Biasa|Terlarang ibadah|Makruh|0",
    "Amalan awal tahun Hijriah antara lain...|Doa dan muhasabah|Pesta pora|Membuang makanan|Bermalas-malasan|0",
    "Muhasabah berarti...|Introspeksi diri|Menghitung uang|Menari|Berdebat|0",
    "Nabi hijrah dari Makkah ke...|Madinah|Thaif|Habasyah|Syam|0",
    "Semangat hijrah bagi pelajar adalah...|Berubah menjadi lebih baik|Pindah sekolah|Berhenti belajar|Bermain terus|0",
  ],
  "8-6": [
    "Tasu'a adalah tanggal ... Muharram|9|10|1|11|0",
    "Asyura adalah tanggal ... Muharram|10|9|8|12|0",
    "Keutamaan puasa Asyura adalah...|Menghapus dosa setahun lalu|Menambah harta|Menaikkan pangkat|Menghapus semua dosa besar|0",
    "Puasa Tasu'a disyariatkan agar...|Berbeda dengan kaum Yahudi|Lebih lama|Lebih berat|Menambah pahala haji|0",
    "Hukum puasa Tasu'a dan Asyura adalah...|Sunnah|Wajib|Haram|Makruh|0",
    "Tradisi Asyura di Nusantara antara lain...|Santunan anak yatim|Pesta kembang api|Lomba balap|Arak-arakan|0",
    "Bulan Muharram disebut juga bulan...|Anak yatim|Panen|Dagang|Liburan|0",
    "Pada 10 Muharram Nabi Musa diselamatkan dari...|Fir'aun|Namrud|Abu Lahab|Qarun|0",
    "Puasa Asyura diriwayatkan dalam kitab hadis...|Sahih Muslim|Al-Umm|Ihya|Fathul Bari saja|0",
    "Hikmah Asyura bagi siswa adalah...|Peduli sesama|Sombong|Boros|Malas|0",
  ],
  "9-1": [
    "Kirim doa untuk orang yang wafat berarti...|Memohon rahmat Allah baginya|Menyembah mayit|Meminta kepada kubur|Memuja arwah|0",
    "Dalil mendoakan orang yang telah wafat ada dalam QS...|Al-Hasyr: 10|Al-Ikhlas: 1|An-Nas: 3|Al-Fil: 2|0",
    "Amaliyah NU untuk mendoakan mayit disebut...|Tahlil|Tawaf|Talbiyah|Tarawih|0",
    "Peringatan tahunan wafatnya seseorang disebut...|Haul|Maulid|Isra|Nisfu|0",
    "Sedekah atas nama mayit hukumnya...|Boleh dan bermanfaat|Haram|Syirik|Bidah sayyi'ah|0",
    "Menurut jumhur ulama, pahala bacaan Al-Qur'an untuk mayit...|Dapat sampai|Tidak pernah sampai|Haram|Sia-sia|0",
    "Bacaan dalam tahlil antara lain...|Surah Yasin dan tahlil|Syair|Mantra|Puisi|0",
    "Kirim doa mengajarkan sikap...|Berbakti kepada orang tua|Melupakan keluarga|Meminta harta|Bermusuhan|0",
    "Amal yang pahalanya terus mengalir disebut...|Sedekah jariyah|Riba|Ghibah|Israf|0",
    "Doa anak saleh untuk orang tua yang wafat hukumnya...|Sangat dianjurkan|Terlarang|Sia-sia|Makruh|0",
  ],
  "9-2": [
    "Sunnah adalah segala sesuatu yang bersumber dari...|Nabi Muhammad SAW|Raja|Ulama saja|Adat|0",
    "Bidah adalah...|Perkara baru yang tidak ada pada masa Nabi|Sunnah Nabi|Ijma' sahabat|Ayat Al-Qur'an|0",
    "Menurut Imam Syafi'i, bidah terbagi menjadi...|Hasanah dan sayyi'ah|Satu macam|Tiga macam|Lima macam|0",
    "Contoh bidah hasanah adalah...|Pembukuan Al-Qur'an|Mencuri|Berbohong|Meninggalkan shalat|0",
    "Ulama yang membagi bidah dalam lima hukum adalah...|Izzuddin bin Abdissalam|Imam Bukhari|Imam Muslim|Ibnu Majah|0",
    "Adzan dua kali pada shalat Jumat mulai pada masa...|Utsman bin Affan|Abu Bakar|Umar|Ali|0",
    "Bidah sayyi'ah adalah bidah yang...|Menyalahi syariat|Sesuai syariat|Dianjurkan|Wajib|0",
    "Sunnah menurut ulama fikih berarti...|Dianjurkan, tidak wajib|Wajib|Haram|Makruh|0",
    "Menuduh sesat setiap amalan baru termasuk sikap...|Berlebihan/ekstrem|Moderat|Adil|Bijak|0",
    "Sikap Aswaja terhadap tradisi baik masyarakat adalah...|Melestarikan bila tak melanggar syariat|Melarang semuanya|Mengabaikan syariat|Menolak mutlak|0",
  ],
  "9-3": [
    "Tawasul artinya...|Berdoa kepada Allah dengan perantara|Menyembah perantara|Meminta kepada makhluk|Memuja kubur|0",
    "Dalil tawasul terdapat dalam QS...|Al-Maidah: 35|Al-Ikhlas: 2|Al-Falaq: 1|Al-Ma'un: 3|0",
    "Yang dimohon dalam tawasul hanyalah...|Allah|Nabi|Wali|Kiai|0",
    "Tawasul dengan amal saleh contohnya...|Menyebut amal baik dalam doa|Menyembah amal|Bangga diri|Riya|0",
    "Tawasul bukan syirik karena...|Tidak menyekutukan Allah|Boleh menyembah selain Allah|Perantara berkuasa|Doa tidak penting|0",
    "Tawasul dengan asma' Allah artinya berdoa dengan...|Nama-nama Allah|Nama raja|Nama kitab|Nama tempat|0",
    "Sahabat bertawasul kepada Nabi ketika...|Meminta hujan/istisqa|Perang saja|Berdagang|Bepergian|0",
    "Tabarruk berarti...|Mengharap berkah|Meminta harta|Menyembah benda|Menolak doa|0",
    "Tawasul kepada orang saleh yang telah wafat menurut Aswaja...|Boleh|Haram|Syirik|Kufur|0",
    "Yang menentukan terkabulnya doa adalah...|Allah|Perantara|Waktu|Tempat|0",
  ],
  "9-4": [
    "Firqah artinya...|Kelompok/golongan|Kitab|Masjid|Madzhab fikih|0",
    "Firqah yang muncul setelah tahkim perang Shiffin adalah...|Khawarij|Mu'tazilah|Syiah|Murji'ah|0",
    "Golongan yang mengagungkan Ali dan keturunannya disebut...|Syiah|Khawarij|Jabariyah|Qadariyah|0",
    "Golongan yang menganggap manusia tidak berdaya sama sekali adalah...|Jabariyah|Qadariyah|Mu'tazilah|Aswaja|0",
    "Golongan yang menganggap manusia berkuasa penuh atas perbuatannya adalah...|Qadariyah|Jabariyah|Murji'ah|Aswaja|0",
    "Golongan yang mengutamakan akal secara berlebihan adalah...|Mu'tazilah|Aswaja|Maturidiyah|Asy'ariyah|0",
    "Golongan yang menunda hukum atas pelaku dosa disebut...|Murji'ah|Khawarij|Syiah|Mu'tazilah|0",
    "Golongan mayoritas umat Islam adalah...|Ahlussunnah wal Jama'ah|Khawarij|Mu'tazilah|Jabariyah|0",
    "Khawarij dikenal mudah...|Mengkafirkan orang lain|Bertoleransi|Bermusyawarah|Berdamai|0",
    "Sikap kita terhadap firqah menyimpang adalah...|Berpegang pada Aswaja|Ikut semuanya|Bermusuhan fisik|Membiarkan akidah rusak|0",
  ],
  "9-5": [
    "Ukhuwah artinya...|Persaudaraan|Permusuhan|Perlombaan|Perpecahan|0",
    "Persaudaraan antar sesama muslim disebut ukhuwah...|Islamiyah|Wathaniyah|Basyariyah|Ashabiyah|0",
    "Persaudaraan sebangsa disebut ukhuwah...|Wathaniyah|Islamiyah|Insaniyah|Diniyah|0",
    "Persaudaraan sesama manusia disebut ukhuwah...|Basyariyah/Insaniyah|Islamiyah|Wathaniyah|Nahdliyah|0",
    "Dalil ukhuwah Islamiyah terdapat dalam QS...|Al-Hujurat: 10|Al-Kafirun: 1|Al-Lahab: 2|Quraisy: 3|0",
    "Manfaat ukhuwah adalah...|Persatuan dan kedamaian|Perpecahan|Permusuhan|Kekacauan|0",
    "Sikap yang merusak ukhuwah adalah...|Ghibah dan fitnah|Tolong-menolong|Silaturahmi|Sedekah|0",
    "NU menjaga ukhuwah wathaniyah dengan...|Cinta tanah air|Menolak negara|Memberontak|Memecah bangsa|0",
    "Ukhuwah dalam sekolah diwujudkan dengan...|Saling menghargai teman|Membully|Mengucilkan|Mencela|0",
    "Toleransi terhadap non-muslim dalam muamalah hukumnya...|Boleh|Haram|Syirik|Kufur|0",
  ],
};

export type Question = {
  q: string;
  options: string[];
  answer: number;
};

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]!;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a;
};

/** Ambil 10 soal acak dari bank + acak urutan opsinya. */
export const buildQuiz = (chapterId: string, total = 10): Question[] => {
  const raw = BANK[chapterId] ?? [];
  return shuffle(raw)
    .slice(0, total)
    .map((line) => {
      const parts = line.split("|");
      const q = parts[0]!;
      const correct = parts[1 + Number(parts[5])]!;
      const options = shuffle(parts.slice(1, 5));
      return { q, options, answer: options.indexOf(correct) };
    });
};
