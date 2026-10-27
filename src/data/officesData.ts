import { TalaudOffice } from '../types/service';

export const TALAUD_OFFICES: TalaudOffice[] = [
  {
    id: 'dukcapil-melonguane',
    nama: 'Kantor Disdukcapil Kabupaten Kepulauan Talaud',
    kategori: 'dukcapil_pusat',
    alamat: 'Kompleks Perkantoran Pemerintah Daerah Talaud, Melonguane, Kab. Kepulauan Talaud, Sulawesi Utara 95885',
    pulau: 'Pulau Karakelang',
    kecamatanDilayani: [
      'Melonguane', 'Melonguane Timur', 'Beo', 'Beo Utara', 'Beo Selatan',
      'Rainis', 'Pulutan', 'Essang', 'Essang Selatan', 'Gemeh', 'Tampan Amma',
      'Lirung', 'Salibabu', 'Moronge', 'Kabaruan', 'Damau', 'Nanusa', 'Miangas', 'Karatung'
    ],
    jamLayanan: 'Senin - Kamis: 08.00 - 15.30 WITA | Jumat: 08.00 - 16.00 WITA (Sabtu-Minggu/Hari Libur Nasional: Tutup)',
    kontakTelepon: '(0433) 21102',
    kontakWa: '6282195558822',
    lat: 4.0042,
    lng: 126.6853,
    catatanPulau: 'Terletak di Pulau Karakelang (Ibukota Melonguane). Bagi warga dari Pulau Salibabu, Kabaruan, Nanusa, dan Miangas, perjalanan memerlukan penyeberangan laut dengan perahu motor/kapal feri. Pastikan berkas lengkap sebelum berlayar agar tidak perlu bolak-balik berbiaya tinggi.',
    aksesibilitas: {
      rampaKursiRoda: true,
      loketPrioritas: true,
      toiletAksesibel: true,
      kursiTungguPrioritas: true,
      parkirAksesibel: true,
      petugasPendamping: true
    },
    sumber: 'Disdukcapil Kabupaten Kepulauan Talaud',
    terakhirDiverifikasi: '23 Oktober 2026'
  },
  {
    id: 'kantor-camat-lirung',
    nama: 'Kantor Kecamatan Lirung (Sentra Layanan Pulau Salibabu)',
    kategori: 'kantor_camat',
    alamat: 'Jl. Trans Salibabu, Kelurahan Lirung, Kec. Lirung, Kab. Kepulauan Talaud',
    pulau: 'Pulau Salibabu',
    kecamatanDilayani: ['Lirung', 'Salibabu', 'Moronge'],
    jamLayanan: 'Senin - Jumat: 08.00 - 15.00 WITA',
    kontakTelepon: '(0433) 21250',
    kontakWa: '6285240118833',
    lat: 3.9312,
    lng: 126.7021,
    catatanPulau: 'Sentra pelayanan di Pulau Salibabu. Menampung berkas kependudukan, pengantar legalisasi desa, dan permohonan KIA/KK. Penyeberangan perahu motor menuju Melonguane memakan waktu ±35 menit bila laut tenang.',
    aksesibilitas: {
      rampaKursiRoda: true,
      loketPrioritas: true,
      toiletAksesibel: false,
      kursiTungguPrioritas: true,
      parkirAksesibel: true,
      petugasPendamping: true
    },
    sumber: 'Pemerintah Kecamatan Lirung & Portal Pemkab Talaud',
    terakhirDiverifikasi: '23 Oktober 2026'
  },
  {
    id: 'kantor-camat-kabaruan',
    nama: 'Kantor Kecamatan Kabaruan (Sentra Layanan Pulau Kabaruan)',
    kategori: 'kantor_camat',
    alamat: 'Desa Mangaran, Kec. Kabaruan, Kab. Kepulauan Talaud',
    pulau: 'Pulau Kabaruan',
    kecamatanDilayani: ['Kabaruan', 'Damau'],
    jamLayanan: 'Senin - Jumat: 08.00 - 15.00 WITA',
    kontakTelepon: '(0433) 21320',
    kontakWa: '6285240118844',
    lat: 3.7541,
    lng: 126.8322,
    catatanPulau: 'Melayani warga Pulau Kabaruan dan Damau. Penyeberangan laut ke ibukota Melonguane memakan waktu ±1,5 - 2 jam tergantung kondisi gelombang laut Talaud.',
    aksesibilitas: {
      rampaKursiRoda: false,
      loketPrioritas: true,
      toiletAksesibel: false,
      kursiTungguPrioritas: true,
      parkirAksesibel: true,
      petugasPendamping: true
    },
    sumber: 'Pemerintah Kecamatan Kabaruan',
    terakhirDiverifikasi: '23 Oktober 2026'
  },
  {
    id: 'kantor-camat-beo',
    nama: 'Kantor Kecamatan Beo (Karakelang Barat)',
    kategori: 'kantor_camat',
    alamat: 'Kelurahan Beo, Kec. Beo, Kab. Kepulauan Talaud',
    pulau: 'Pulau Karakelang',
    kecamatanDilayani: ['Beo', 'Beo Utara', 'Beo Selatan', 'Rainis'],
    jamLayanan: 'Senin - Jumat: 08.00 - 15.30 WITA',
    kontakTelepon: '(0433) 21411',
    kontakWa: '6285240118855',
    lat: 4.2378,
    lng: 126.7951,
    catatanPulau: 'Satu daratan di Pulau Karakelang. Akses darat ke Melonguane menggunakan jalan lingkar Karakelang (±1 - 1,5 jam perjalanan darat mobil/motor).',
    aksesibilitas: {
      rampaKursiRoda: true,
      loketPrioritas: true,
      toiletAksesibel: true,
      kursiTungguPrioritas: true,
      parkirAksesibel: true,
      petugasPendamping: true
    },
    sumber: 'Pemerintah Kecamatan Beo',
    terakhirDiverifikasi: '23 Oktober 2026'
  },
  {
    id: 'pos-layanan-miangas',
    nama: 'Pos Layanan Terpadu Pulau Terluar Miangas',
    kategori: 'pos_pelayanan',
    alamat: 'Kompleks Kantor Kecamatan Miangas, Pulau Miangas, Kab. Kepulauan Talaud (Perbatasan RI - Filipina)',
    pulau: 'Pulau Miangas (Terluar)',
    kecamatanDilayani: ['Miangas'],
    jamLayanan: 'Senin - Jumat: 08.30 - 14.30 WITA',
    kontakTelepon: '0812-4411-9922',
    kontakWa: '6281244119922',
    lat: 5.5667,
    lng: 126.5833,
    catatanPulau: 'PULAU TERDEPAN & TERLUAR NKRI: Berjarak > 100 mil laut dari Melonguane. Transportasi kapal perintis / KM Sabuk Nusantara sangat bergantung cuaca. Disarankan warga menggunakan bantuan internet satelit Starlink/BAKTI yang ada di kantor camat untuk mengirim dokumen lewat aplikasi daring, tanpa perlu berlayar.',
    aksesibilitas: {
      rampaKursiRoda: true,
      loketPrioritas: true,
      toiletAksesibel: false,
      kursiTungguPrioritas: true,
      parkirAksesibel: false,
      petugasPendamping: true
    },
    sumber: 'Kantor Kecamatan Miangas & Satgas Terluar',
    terakhirDiverifikasi: '23 Oktober 2026'
  },
  {
    id: 'pos-layanan-nanusa',
    nama: 'Pos Pelayanan Terpadu Kepulauan Nanusa',
    kategori: 'pos_pelayanan',
    alamat: 'Desa Karatung, Pulau Karatung, Kec. Nanusa, Kab. Kepulauan Talaud',
    pulau: 'Kepulauan Nanusa',
    kecamatanDilayani: ['Nanusa'],
    jamLayanan: 'Senin - Jumat: 08.00 - 14.30 WITA',
    kontakTelepon: '0813-5522-8811',
    kontakWa: '6281355228811',
    lat: 4.7167,
    lng: 127.1333,
    catatanPulau: 'Gugusan pulau di perbatasan timur laut Talaud (Karatung, Kakorotan, Marampit). Mengandalkan perahu motor antar-pulau. Petugas Disdukcapil berkeliling setiap semester.',
    aksesibilitas: {
      rampaKursiRoda: false,
      loketPrioritas: true,
      toiletAksesibel: false,
      kursiTungguPrioritas: true,
      parkirAksesibel: false,
      petugasPendamping: true
    },
    sumber: 'Pemerintah Kecamatan Nanusa',
    terakhirDiverifikasi: '23 Oktober 2026'
  }
];
