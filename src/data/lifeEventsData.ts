import { LifeEvent } from '../types/service';

export const LIFE_EVENTS_DATA: LifeEvent[] = [
  {
    id: 'kelahiran-anak',
    title: 'Kelahiran Bayi / Anak Baru',
    subtitle: 'Alur terpadu mengurus berkas identitas dan perlindungan kesehatan anak sejak lahir.',
    icon: 'Baby',
    targetAudience: 'Orang tua baru dan keluarga yang baru dikaruniai momongan di Kepulauan Talaud.',
    steps: [
      {
        order: 1,
        serviceId: 'medis-ket-lahir',
        title: '1. Surat Keterangan Lahir (Faskes)',
        institution: 'Puskesmas / RSUD Talaud di Mala / Bidan Desa',
        description: 'Dapatkan Surat Keterangan Kelahiran segera setelah persalinan. Jika bersalin di rumah tanpa nakes, minta Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) di Kantor Desa.',
        keyDoc: 'Surat Asli Keterangan Kelahiran Medis'
      },
      {
        order: 2,
        serviceId: 'kartu-keluarga-baru',
        title: '2. Pembaruan Kartu Keluarga (KK)',
        institution: 'Disdukcapil Kab. Kepulauan Talaud (via Ta-LoDa)',
        prerequisite: 'Surat Keterangan Lahir & Buku Nikah',
        description: 'Menambahkan nama bayi ke dalam Kartu Keluarga sehingga bayi resmi memiliki NIK (Nomor Induk Kependudukan).',
        keyDoc: 'KK Baru dengan NIK Bayi Tercantum'
      },
      {
        order: 3,
        serviceId: 'akta-kelahiran',
        title: '3. Penerbitan Akta Kelahiran',
        institution: 'Disdukcapil Talaud',
        prerequisite: 'KK yang sudah memuat NIK bayi',
        description: 'Kutipan Akta Kelahiran diterbitkan dengan tanda tangan elektronik barcode. Di Talaud, KK dan Akta bisa diproses paket 3-in-1 secara bersamaan.',
        keyDoc: 'Kutipan Akta Kelahiran Resmi'
      },
      {
        order: 4,
        serviceId: 'kia-kartu-anak',
        title: '4. Penerbitan Kartu Identitas Anak (KIA)',
        institution: 'Disdukcapil Talaud',
        prerequisite: 'Akta Kelahiran & KK Baru',
        description: 'Mendapatkan kartu fisik KIA untuk identitas anak saat berlayar naik feri atau mendaftar imunisasi dan sekolah.',
        keyDoc: 'Kartu Fisik KIA Merah Muda'
      },
      {
        order: 5,
        serviceId: 'bpjs-kesehatan-pbi',
        title: '5. Daftarkan Bayi ke BPJS Kesehatan',
        institution: 'Kantor BPJS Kesehatan Talaud / Dinas Sosial Talaud',
        prerequisite: 'NIK Bayi & KK Baru',
        description: 'Daftarkan bayi ke BPJS dalam 28 hari sejak kelahiran agar seluruh biaya imunisasi dan kontrol kesehatan bayi gratis ditanggung negara.',
        keyDoc: 'Nomor Kartu BPJS / JKN Aktif'
      }
    ]
  },
  {
    id: 'pernikahan',
    title: 'Pernikahan Baru',
    subtitle: 'Langkah memecah Kartu Keluarga, memperbarui status KTP-el suami istri, dan penggabungan jaminan.',
    icon: 'HeartHandshake',
    targetAudience: 'Pengantin baru di Kepulauan Talaud.',
    steps: [
      {
        order: 1,
        serviceId: 'akta-nikah',
        title: '1. Kutipan Akta Perkawinan / Buku Nikah',
        institution: 'KUA (Muslim) / Disdukcapil Talaud (Kristen/Katolik/dll)',
        description: 'Melakukan pencatatan perkawinan resmi setelah pemberkatan di Gereja atau akad di KUA.',
        keyDoc: 'Buku Nikah KUA / Akta Perkawinan Capil'
      },
      {
        order: 2,
        serviceId: 'kartu-keluarga-baru',
        title: '2. Pembuatan Kartu Keluarga (Pecah KK)',
        institution: 'Disdukcapil Kab. Kepulauan Talaud (via Ta-LoDa)',
        prerequisite: 'Buku Nikah & KK orang tua masing-masing',
        description: 'Keluar dari KK orang tua dan membentuk KK mandiri sebagai Kepala Keluarga dan Istri.',
        keyDoc: 'Kartu Keluarga Baru Pasangan'
      },
      {
        order: 3,
        serviceId: 'ktp-el-baru',
        title: '3. Perubahan Status Kawin pada KTP-el',
        institution: 'Disdukcapil Talaud / Kantor Camat',
        prerequisite: 'KK Baru & Akta Nikah',
        description: 'Memperbarui status perkawinan pada KTP-el dari Belum Kawin menjadi Kawin. Jika sudah pernah rekam, bisa cetak ulang atau aktifkan di IKD digital.',
        keyDoc: 'KTP-el dengan Status "Kawin"'
      },
      {
        order: 4,
        serviceId: 'bpjs-keluarga',
        title: '4. Penggabungan Kepesertaan BPJS Keluarga',
        institution: 'BPJS Kesehatan Talaud',
        prerequisite: 'KK Baru Pasangan',
        description: 'Menggabungkan data kepesertaan BPJS Kesehatan agar istri/suami masuk dalam satu tanggungan keluarga.',
        keyDoc: 'Data Kepesertaan Keluarga Terpadu'
      }
    ]
  },
  {
    id: 'pindah-domisili',
    title: 'Pindah Domisili (Masuk / Keluar)',
    subtitle: 'Panduan pindah alamat antar-desa di Talaud atau pindah ke luar pulau/provinsi.',
    icon: 'Truck',
    targetAudience: 'Warga yang berpindah tempat tinggal karena tugas, perkawinan, atau menetap.',
    steps: [
      {
        order: 1,
        serviceId: 'skpwni-pindah-domisili',
        title: '1. Penerbitan SKPWNI dari Daerah Asal',
        institution: 'Disdukcapil Kabupaten Kepulauan Talaud (Asal)',
        description: 'Meminta Surat Keterangan Pindah WNI (SKPWNI) secara daring atau langsung. Tidak perlu lagi surat pengantar RT/RW berjenjang.',
        keyDoc: 'SKPWNI Resmi Ber-barcode (PDF)'
      },
      {
        order: 2,
        serviceId: 'lapor-kedatangan',
        title: '2. Lapor Kedatangan di Disdukcapil Tujuan',
        institution: 'Disdukcapil Kabupaten/Kota Tempat Tujuan',
        prerequisite: 'SKPWNI dan KTP-el',
        description: 'Menyerahkan SKPWNI ke kantor Dukcapil daerah tujuan maksimal dalam 100 hari kerja.',
        keyDoc: 'Tanda Terima Lapor Pindah'
      },
      {
        order: 3,
        serviceId: 'kk-tujuan',
        title: '3. Penerbitan KK & KTP Alamat Baru',
        institution: 'Disdukcapil Daerah Tujuan',
        prerequisite: 'SKPWNI yang telah divalidasi',
        description: 'Penerbitan KK dan KTP dengan alamat domisili yang baru.',
        keyDoc: 'KTP-el & KK Alamat Baru'
      },
      {
        order: 4,
        serviceId: 'faskes-pindah',
        title: '4. Pemindahan Faskes Tingkat I BPJS Kesehatan',
        institution: 'Aplikasi Mobile JKN / Kantor BPJS Kesehatan',
        prerequisite: 'KTP Baru',
        description: 'Pindahkan Fasilitas Kesehatan Tingkat Pertama (Puskesmas/Klinik) ke faskes terdekat di tempat domisili baru.',
        keyDoc: 'Puskesmas Terdaftar yang Baru'
      }
    ]
  },
  {
    id: 'kematian-keluarga',
    title: 'Kematian Anggota Keluarga',
    subtitle: 'Urus akta kematian, pembaruan KK, penghentian jaminan, dan penetapan ahli waris secara tertib.',
    icon: 'HeartCrack',
    targetAudience: 'Keluarga yang sedang berduka di Kabupaten Kepulauan Talaud.',
    steps: [
      {
        order: 1,
        serviceId: 'surat-medis-kematian',
        title: '1. Surat Kematian Medis atau Desa',
        institution: 'Puskesmas / RSUD Talaud / Kepala Desa',
        description: 'Mendapatkan surat keterangan sebab dan waktu wafat dari dokter puskesmas atau surat kematian dari kades.',
        keyDoc: 'Surat Keterangan Kematian Asli'
      },
      {
        order: 2,
        serviceId: 'akta-kematian',
        title: '2. Penerbitan Akta Kematian & KK Pengganti',
        institution: 'Disdukcapil Kab. Kepulauan Talaud',
        prerequisite: 'Surat Kematian & KK Asli',
        description: 'Nama almarhum dihapus dari KK keluarga untuk mencegah penyalahgunaan data, dan diterbitkan Akta Kematian resmi.',
        keyDoc: 'Akta Kematian & KK Pembaruan'
      },
      {
        order: 3,
        serviceId: 'stop-bpjs',
        title: '3. Penutupan Kepesertaan BPJS Mendiang',
        institution: 'BPJS Kesehatan Talaud',
        prerequisite: 'Akta Kematian',
        description: 'Melaporkan status kematian agar tagihan iuran BPJS mandiri berhenti ditagihkan ke rekening keluarga.',
        keyDoc: 'Bukti Penutupan Polis JKN'
      },
      {
        order: 4,
        serviceId: 'waris-santunan',
        title: '4. Pengurusan Santunan Kematian / Waris',
        institution: 'Taspen / BPJS Ketenagakerjaan / Bank / Notaris',
        prerequisite: 'Akta Kematian & Surat Keterangan Ahli Waris Desa',
        description: 'Mengurus pencairan santunan kematian, uang duka wafat, tabungan almarhum, atau pensiunan janda/duda.',
        keyDoc: 'SK Ahli Waris & Tanda Terima Santunan'
      }
    ]
  }
];
