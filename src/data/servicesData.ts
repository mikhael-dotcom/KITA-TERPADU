import { ServiceItem } from '../types/service';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ktp-el-baru',
    title: 'KTP-el (Perekaman & Pembuatan Baru)',
    shortDesc: 'Untuk warga yang genap berusia 17 tahun atau belum pernah memiliki KTP elektronik sebelumnya.',
    category: 'ktp',
    categoryLabel: 'Kependudukan',
    whoNeeds: 'Warga negara Indonesia di Talaud yang telah berusia 17 tahun, sudah kawin, atau pernah kawin.',
    keywords: ['ktp', 'e-ktp', 'ktp baru', 'rekam ktp', 'foto ktp', '17 tahun', 'identitas', 'biometrik'],
    requirements: [
      'Telah berusia 17 tahun atau sudah/pernah kawin',
      'Terdaftar dalam Kartu Keluarga (KK) Kabupaten Kepulauan Talaud',
      'Hadir langsung untuk perekaman biometrik (foto wajah, sidik jari, iris mata, dan tanda tangan digital)'
    ],
    documents: [
      {
        id: 'doc-kk-ktp',
        name: 'Fotokopi Kartu Keluarga (KK) terbaru',
        isMandatory: true,
        notes: 'Pastikan NIK dan nama pemohon sudah tercantum dengan benar.',
        sampleHint: 'Dokumen KK ber-barcode TTE biru atau cetakan legalisir desa.',
        officialGovUrl: 'https://talaudkab.go.id/layanan-kependudukan',
        officialGovDocName: 'Standar Berkas KK di Portal Resmi Pemkab Talaud',
        visualIcon: 'kk'
      },
      {
        id: 'doc-surat-pengantar',
        name: 'Surat Pengantar Desa / Kelurahan (Opsional)',
        isMandatory: false,
        notes: 'Sesuai aturan terbaru tidak wajib jika KK sudah valid, namun disarankan untuk verifikasi alamat di pelosok desa.',
        officialGovUrl: 'https://sippn.menpan.go.id',
        officialGovDocName: 'Regulasi Standar Pelayanan Publik SIPPN Menpan-RB',
        visualIcon: 'surat'
      },
      {
        id: 'doc-akta-lahir',
        name: 'Fotokopi Akta Kelahiran / Ijazah Terakhir',
        isMandatory: false,
        notes: 'Sebagai bukti kecocokan nama dan tanggal lahir bila ada ketidaksesuaian huruf.',
        officialGovUrl: 'https://dukcapil.kemendagri.go.id',
        officialGovDocName: 'Standar Pencocokan Data Ditjen Dukcapil Kemendagri',
        visualIcon: 'akta'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Siapkan Berkas dari Rumah',
        description: 'Bawa fotokopi Kartu Keluarga dan simpan dalam map plastik agar aman dari percikan air laut saat menyeberang pulau.',
        iconName: 'FileCheck',
        lansiaDetail: 'Mintalah anak atau keluarga memeriksa apakah nama dan tanggal lahir di KK sudah cocok.',
        illustType: 'doc',
        lansiaVisualCue: 'Siapkan Kertas Kartu Keluarga dalam Map'
      },
      {
        stepNumber: 2,
        title: 'Datang ke Loket Disdukcapil di Melonguane atau Kantor Camat Terdekat',
        description: 'Kunjungi kantor Disdukcapil di kompleks perkantoran Pemda Melonguane atau pos pelayanan kecamatan.',
        iconName: 'Building',
        lansiaDetail: 'Tanyakan kepada petugas di pintu depan tentang loket prioritas lansia/disabilitas agar tidak perlu berdiri lama.',
        illustType: 'building',
        lansiaVisualCue: 'Menuju Gedung Loket Prioritas Lansia'
      },
      {
        stepNumber: 3,
        title: 'Pengambilan Nomor Antrean & Verifikasi Berkas',
        description: 'Petugas loket memeriksa kelengkapan berkas dan mencocokkan data di database SIAK.',
        iconName: 'Ticket',
        lansiaDetail: 'Duduk di kursi tunggu khusus yang telah disediakan dekat loket 1.',
        illustType: 'counter',
        lansiaVisualCue: 'Duduk Santai di Kursi Prioritas'
      },
      {
        stepNumber: 4,
        title: 'Perekaman Biometrik',
        description: 'Pengambilan foto digital, pemindaian 10 sidik jari, pemindaian selaput pelangi (iris), dan tanda tangan pad.',
        iconName: 'Camera',
        lansiaDetail: 'Petugas akan membantu mengarahkan pandangan ke kamera dan meletakkan jari secara perlahan.',
        illustType: 'camera',
        lansiaVisualCue: 'Foto Wajah dan Tempel Jari ke Alat'
      },
      {
        stepNumber: 5,
        title: 'Penerbitan KTP-el / Surat Keterangan',
        description: 'Pencetakan fisik KTP-el jika blangko tersedia, atau aktivasi Identitas Kependudukan Digital (IKD) di ponsel pintar.',
        iconName: 'CreditCard',
        lansiaDetail: 'KTP fisik bisa diambil hari itu juga atau dititipkan via perangkat desa bagi warga pulau terluar.',
        illustType: 'card',
        lansiaVisualCue: 'Terima Kartu KTP Fisik dari Petugas'
      }
    ],
    cost: 'Gratis Rp 0 (Bebas Biaya Retribusi)',
    estimatedTime: '1 - 2 Hari Kerja (Selesai pada hari yang sama jika blangko siap)',
    destinationOffice: 'Kantor Disdukcapil Kab. Kepulauan Talaud (Melonguane) atau Kantor Camat yang memiliki alat rekam',
    officialActionUrl: 'https://talaudkab.go.id',
    officialActionLabel: 'Buka Portal Resmi Pemkab Talaud',
    officialGovPortalName: 'Portal Resmi Pemkab Talaud & Loket Ta-LoDa Dukcapil',
    officialGovRequirementsUrl: 'https://talaudkab.go.id/layanan-kependudukan',
    canDoFromHome: false,
    canDoFromHomeNote: 'Wajib datang langsung untuk perekaman fisik biometrik sidik jari dan iris mata.',
    source: 'Standar Pelayanan Disdukcapil Kab. Kepulauan Talaud 2026',
    verifiedDate: '26 Oktober 2026',
    biometricRequired: true,
    specialNotice: 'Dukcapil Talaud TIDAK PERNAH memungut biaya. Waspadai calo di dermaga atau pelabuhan feri!',
    lansiaKeyImage: 'ktp',
    lansiaShortVoiceCue: 'Foto KTP baru umur 17 tahun di kantor dinas.'
  },
  {
    id: 'ktp-el-hilang-rusak',
    title: 'KTP-el Penggantian (Hilang atau Rusak)',
    shortDesc: 'Untuk warga yang sudah pernah merekam biometrik namun KTP fisiknya patah, buram, atau hilang.',
    category: 'ktp',
    categoryLabel: 'Kependudukan',
    whoNeeds: 'Warga yang KTP-el sebelumnya rusak atau hilang.',
    keywords: ['ktp hilang', 'ktp rusak', 'ganti ktp', 'cetak ulang ktp', 'surat kehilangan'],
    requirements: [
      'Pernah melakukan perekaman biometrik sebelumnya',
      'Surat Keterangan Kehilangan dari Polsek terdekat (jika hilang)',
      'Membawa fisik KTP lama yang rusak (jika rusak)'
    ],
    documents: [
      {
        id: 'doc-kehilangan-polisi',
        name: 'Surat Tanda Penerimaan Laporan Kehilangan (STPLK) dari Polsek / Polres',
        isMandatory: true,
        notes: 'Wajib jika KTP hilang. Jika KTP hanya rusak, cukup bawa fisik KTP yang rusak.',
        sampleHint: 'Bisa dibuat di Polsek setempat (Polsek Melonguane, Beo, Lirung, Nanusa, Miangas, dll).',
        officialGovUrl: 'https://polri.go.id',
        officialGovDocName: 'Layanan Pengaduan Kepolisian RI',
        visualIcon: 'surat'
      },
      {
        id: 'doc-kk-salinan',
        name: 'Fotokopi Kartu Keluarga',
        isMandatory: true,
        notes: 'Untuk verifikasi kesesuaian NIK.',
        officialGovUrl: 'https://talaudkab.go.id',
        officialGovDocName: 'Portal Dukcapil Pemkab Talaud',
        visualIcon: 'kk'
      },
      {
        id: 'doc-ktp-rusak',
        name: 'Fisik KTP-el Asli yang Rusak / Patah',
        isMandatory: false,
        notes: 'Wajib dibawa bila alasan penggantian adalah rusak untuk diserahkan ke petugas.',
        officialGovUrl: 'https://dukcapil.kemendagri.go.id',
        officialGovDocName: 'Ketentuan Fisik KTP Kemendagri',
        visualIcon: 'ktp'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Urus Surat Kehilangan di Polsek Terdekat (Bila Hilang)',
        description: 'Jika hilang, datangi Polsek terdekat di pulau Anda untuk meminta Surat Keterangan Kehilangan (gratis).',
        iconName: 'ShieldAlert',
        lansiaDetail: 'Jelaskan perkiraan waktu dan tempat KTP hilang kepada petugas polisi.',
        illustType: 'doc',
        lansiaVisualCue: 'Minta Surat Keterangan dari Kantor Polisi'
      },
      {
        stepNumber: 2,
        title: 'Kirim Berkas via Aplikasi Ta-LoDa atau WhatsApp Dukcapil',
        description: 'Karena sudah pernah rekam, Anda TIDAK WAJIB menyeberang pulau. Cukup foto surat kehilangan dan KK, kirim via Ta-LoDa.',
        iconName: 'Smartphone',
        lansiaDetail: 'Minta bantuan kader desa atau anak untuk mengirim foto dokumen via WhatsApp ke nomor resmi Dukcapil.',
        illustType: 'counter',
        lansiaVisualCue: 'Kirim Foto dari HP tanpa Naik Perahu'
      },
      {
        stepNumber: 3,
        title: 'Verifikasi & Pencetakan Ulang',
        description: 'Petugas mencocokkan data pada sistem dan mencetak ulang kartu KTP Anda.',
        iconName: 'Printer',
        lansiaDetail: 'Tunggu konfirmasi bahwa kartu telah selesai dicetak.',
        illustType: 'card',
        lansiaVisualCue: 'Kartu Dicetak Ulang oleh Petugas'
      },
      {
        stepNumber: 4,
        title: 'Pengambilan Kartu Fisik',
        description: 'Ambil di kantor Dukcapil atau melalui program pengantaran dokumen bersama perangkat desa/pos perintis.',
        iconName: 'CheckCircle2',
        lansiaDetail: 'KTP baru bisa diambil oleh anggota keluarga yang satu KK.',
        illustType: 'building',
        lansiaVisualCue: 'Terima Kartu KTP Baru'
      }
    ],
    cost: 'Gratis Rp 0',
    estimatedTime: '1 Hari Kerja',
    destinationOffice: 'Kantor Disdukcapil Kab. Kepulauan Talaud / Online via Loket Ta-LoDa',
    officialActionUrl: 'https://talaudkab.go.id',
    officialActionLabel: 'Buka Loket Ta-LoDa di Web Pemkab',
    officialGovPortalName: 'Layanan Daring Ta-LoDa Disdukcapil Talaud',
    officialGovRequirementsUrl: 'https://talaudkab.go.id/layanan-kependudukan',
    canDoFromHome: true,
    canDoFromHomeNote: 'Bisa diajukan tanpa ke kantor jika sudah pernah rekam biometrik sebelumnya.',
    source: 'SOP Pelayanan KTP Disdukcapil Talaud 2026',
    verifiedDate: '26 Oktober 2026',
    biometricRequired: false,
    lansiaKeyImage: 'ktp',
    lansiaShortVoiceCue: 'Ganti KTP rusak atau hilang tanpa perlu rekam ulang.'
  },
  {
    id: 'kartu-keluarga-baru',
    title: 'Kartu Keluarga (KK) Penerbitan & Perubahan Data',
    shortDesc: 'Penerbitan KK baru karena pembentukan keluarga baru, penambahan anak, atau perubahan status/alamat.',
    category: 'kk',
    categoryLabel: 'Kependudukan',
    whoNeeds: 'Pasangan baru menikah, keluarga yang ketambahan anggota bayi, atau pindah alamat di Talaud.',
    keywords: ['kartu keluarga', 'buat kk', 'pecah kk', 'tambah anak kk', 'ganti status', 'kk baru'],
    requirements: [
      'Surat Nikah / Akta Perkawinan (bagi pasangan baru)',
      'Kartu Keluarga asli kedua orang tua / KK lama',
      'Surat Keterangan Kelahiran anak (jika menambah anggota)'
    ],
    documents: [
      {
        id: 'doc-kk-asli-lama',
        name: 'Kartu Keluarga Asli yang lama',
        isMandatory: true,
        notes: 'Diserahkan untuk diperbarui dan ditarik oleh dinas.',
        officialGovUrl: 'https://talaudkab.go.id',
        officialGovDocName: 'Persyaratan KK Pemkab Talaud',
        visualIcon: 'kk'
      },
      {
        id: 'doc-buku-nikah',
        name: 'Fotokopi Buku Nikah / Kutipan Akta Perkawinan',
        isMandatory: true,
        notes: 'Bagi penerbitan KK pasangan baru menikah.',
        officialGovUrl: 'https://simkah.kemenag.go.id',
        officialGovDocName: 'Sistem Informasi Nikah Kemenag RI',
        visualIcon: 'surat'
      },
      {
        id: 'doc-sk-pindah',
        name: 'SKPWNI (Bila salah satu pihak pindah dari luar kabupaten/provinsi)',
        isMandatory: false,
        notes: 'Wajib jika ada anggota keluarga yang pindah domisili.',
        officialGovUrl: 'https://dukcapil.kemendagri.go.id',
        officialGovDocName: 'Katalog SKPWNI Ditjen Dukcapil',
        visualIcon: 'surat'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Kumpulkan Dokumen Persyaratan',
        description: 'Siapkan KK lama dan dokumen pendukung seperti surat nikah atau akta kelahiran.',
        iconName: 'FileText',
        lansiaDetail: 'Pastikan dokumen tersimpan rapi dan tidak sobek.',
        illustType: 'doc',
        lansiaVisualCue: 'Kumpulkan Kertas Berkas Keluarga'
      },
      {
        stepNumber: 2,
        title: 'Ajukan via Loket Daring Ta-LoDa atau Kantor Kecamatan',
        description: 'Unggah berkas melalui aplikasi daring Ta-LoDa Dukcapil Talaud atau serahkan ke petugas kecamatan setempat.',
        iconName: 'UploadCloud',
        lansiaDetail: 'Dapat dibantu oleh kader Posyandu atau perangkat desa setempat.',
        illustType: 'counter',
        lansiaVisualCue: 'Serahkan ke Petugas Kecamatan'
      },
      {
        stepNumber: 3,
        title: 'Penerbitan Dokumen dengan TTE Barcode',
        description: 'Dokumen KK baru diterbitkan dengan Tanda Tangan Elektronik (TTE) ber-barcode resmi.',
        iconName: 'CheckSquare',
        lansiaDetail: 'Dokumen ber-barcode resmi sah dan tidak memerlukan cap stempel basah lagi.',
        illustType: 'card',
        lansiaVisualCue: 'KK Ber-Barcode Sah Terbit'
      },
      {
        stepNumber: 4,
        title: 'Cetak Mandiri di Kertas HVS A4 80gr',
        description: 'File PDF dikirimkan via email/WhatsApp dan dapat dicetak mandiri di rumah atau kantor desa.',
        iconName: 'Printer',
        lansiaDetail: 'Cukup minta tolong perangkat desa untuk mencetakkan selembar di kertas putih.',
        illustType: 'building',
        lansiaVisualCue: 'Cetak di Kertas Putih Biasa'
      }
    ],
    cost: 'Gratis Rp 0',
    estimatedTime: '1 - 3 Hari Kerja',
    destinationOffice: 'Layanan Daring Ta-LoDa / Kantor Disdukcapil Talaud / Kantor Camat',
    officialActionUrl: 'https://talaudkab.go.id',
    officialActionLabel: 'Buka Portal Pelayanan Dukcapil Talaud',
    officialGovPortalName: 'Standar Pelayanan KK di Portal Pemkab Talaud',
    officialGovRequirementsUrl: 'https://talaudkab.go.id/layanan-kependudukan',
    canDoFromHome: true,
    canDoFromHomeNote: 'Selesai dalam bentuk PDF ber-barcode resmi, bisa dicetak mandiri tanpa ke Melonguane.',
    source: 'Perpres 96/2018 & Dokumen Pelayanan Pemkab Talaud',
    verifiedDate: '26 Oktober 2026',
    biometricRequired: false,
    lansiaKeyImage: 'kk',
    lansiaShortVoiceCue: 'Perubahan dan cetak Kartu Keluarga baru.'
  },
  {
    id: 'akta-kelahiran',
    title: 'Akta Kelahiran Anak',
    shortDesc: 'Pencatatan kelahiran untuk anak baru lahir maupun yang terlambat dicatatkan.',
    category: 'akta',
    categoryLabel: 'Pencatatan Sipil',
    whoNeeds: 'Orang tua bayi yang baru lahir di Kabupaten Kepulauan Talaud.',
    keywords: ['akta lahir', 'surat lahir', 'akte', 'catatan sipil', 'bayi baru lahir', 'bikin akte'],
    requirements: [
      'Surat Keterangan Kelahiran dari Dokter/Bidan/Puskesmas/Rumah Sakit',
      'Kartu Keluarga orang tua yang sudah berdomisili di Talaud',
      'Buku Nikah / Akta Perkawinan orang tua',
      'KTP-el kedua orang tua dan 2 orang saksi'
    ],
    documents: [
      {
        id: 'doc-ket-lahir',
        name: 'Surat Keterangan Lahir Asli dari RS / Puskesmas / Bidan',
        isMandatory: true,
        notes: 'Jika lahir di rumah dibantu tenaga tradisional, mintakan SPTJM Kebenaran Kelahiran di desa.',
        officialGovUrl: 'https://kemkes.go.id',
        officialGovDocName: 'Kemenkes RI Standar Surat Lahir',
        visualIcon: 'hospital'
      },
      {
        id: 'doc-kk-ortu',
        name: 'Kartu Keluarga Orang Tua',
        isMandatory: true,
        notes: 'Data nama anak sebaiknya sudah siap dan mantap.',
        officialGovUrl: 'https://talaudkab.go.id',
        officialGovDocName: 'Portal Kependudukan Talaud',
        visualIcon: 'kk'
      },
      {
        id: 'doc-surat-nikah',
        name: 'Buku Nikah / Akta Perkawinan Orang Tua',
        isMandatory: true,
        notes: 'Untuk mencantumkan nama ayah dan ibu secara sah.',
        officialGovUrl: 'https://sippn.menpan.go.id',
        officialGovDocName: 'SIPPN Menpan-RB Standar Akta Lahir',
        visualIcon: 'surat'
      },
      {
        id: 'doc-ktp-saksi',
        name: 'Salinan KTP-el 2 Orang Saksi Kelahiran',
        isMandatory: true,
        notes: 'Bisa kerabat atau tetangga di desa.',
        officialGovUrl: 'https://dukcapil.kemendagri.go.id',
        officialGovDocName: 'Aturan Saksi Pencatatan Sipil Kemendagri',
        visualIcon: 'ktp'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Minta Surat Kelahiran dari Bidan / Puskesmas',
        description: 'Dapatkan surat keterangan kelahiran segera setelah persalinan berlangsung.',
        iconName: 'FileHeart',
        lansiaDetail: 'Bidan atau perawat puskesmas biasanya langsung memberikan berkas ini.',
        illustType: 'doc',
        lansiaVisualCue: 'Minta Surat Bidan atau Puskesmas'
      },
      {
        stepNumber: 2,
        title: 'Ajukan Sekaligus 3 Dokumen (Akta, KK Baru, KIA)',
        description: 'Di Talaud, pengajuan kelahiran otomatis sekaligus memproses pembaruan KK dan Kartu Identitas Anak (KIA).',
        iconName: 'Layers',
        lansiaDetail: 'Cukup ajukan satu kali, langsung dapat 3 berkas penting untuk cucu tercinta.',
        illustType: 'counter',
        lansiaVisualCue: 'Kirim Berkas Kelahiran Sekaligus'
      },
      {
        stepNumber: 3,
        title: 'Proses Validasi & Terbit Akta Digital',
        description: 'Akta diterbitkan dengan TTE barcode dan file PDF resmi dikirimkan langsung ke kontak pemohon.',
        iconName: 'FileCheck2',
        lansiaDetail: 'Bisa dicetak di kertas HVS putih polos A4 80gr dan berlaku seumur hidup.',
        illustType: 'card',
        lansiaVisualCue: 'Akta Lahir Ber-Barcode Selesai'
      }
    ],
    cost: 'Gratis Rp 0',
    estimatedTime: '1 - 2 Hari Kerja',
    destinationOffice: 'Loket Daring Ta-LoDa / Kantor Disdukcapil Talaud di Melonguane',
    officialActionUrl: 'https://talaudkab.go.id',
    officialActionLabel: 'Akses Portal Pengajuan Akta di Web Pemkab',
    officialGovPortalName: 'Standar Akta Kelahiran di Pemkab Talaud',
    officialGovRequirementsUrl: 'https://talaudkab.go.id/layanan-kependudukan',
    canDoFromHome: true,
    canDoFromHomeNote: 'Bisa dikirim secara online via WhatsApp/Ta-LoDa tanpa perlu naik perahu ke Melonguane.',
    source: 'Standar Pelayanan Akta Capil Talaud 2026',
    verifiedDate: '26 Oktober 2026',
    biometricRequired: false,
    lansiaKeyImage: 'akta',
    lansiaShortVoiceCue: 'Pembuatan akta kelahiran bayi baru lahir.'
  },
  {
    id: 'kia-kartu-anak',
    title: 'Kartu Identitas Anak (KIA)',
    shortDesc: 'Identitas resmi untuk anak usia 0 hingga 17 tahun kurang satu hari.',
    category: 'kia',
    categoryLabel: 'Kependudukan',
    whoNeeds: 'Anak berusia 0 sampai 16 tahun untuk keperluan sekolah, perjalanan kapal/pesawat, dan berobat.',
    keywords: ['kia', 'kartu anak', 'identitas anak', 'ktp anak', 'sekolah'],
    requirements: [
      'Anak usia 0 - 5 tahun: tanpa foto',
      'Anak usia 5 - 17 tahun kurang 1 hari: melampirkan pas foto 2x3 berwarna (2 lembar)',
      'Memiliki Akta Kelahiran dan tercatat di KK Talaud'
    ],
    documents: [
      {
        id: 'doc-kia-akta',
        name: 'Fotokopi Akta Kelahiran Anak',
        isMandatory: true,
        notes: 'Wajib telah memiliki kutipan akta lahir.',
        officialGovUrl: 'https://talaudkab.go.id',
        officialGovDocName: 'Persyaratan KIA Talaud',
        visualIcon: 'akta'
      },
      {
        id: 'doc-kia-kk',
        name: 'Fotokopi Kartu Keluarga',
        isMandatory: true,
        notes: 'Orang tua harus satu KK dengan anak.',
        officialGovUrl: 'https://talaudkab.go.id',
        officialGovDocName: 'Portal Dukcapil Talaud',
        visualIcon: 'kk'
      },
      {
        id: 'doc-kia-foto',
        name: 'Pas Foto Anak 2x3 (Bagi usia > 5 tahun)',
        isMandatory: false,
        notes: 'Tahun lahir ganjil latar merah, genap latar biru.',
        officialGovUrl: 'https://dukcapil.kemendagri.go.id',
        officialGovDocName: 'Ketentuan Foto KIA Kemendagri',
        visualIcon: 'photo'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cek Usia Anak',
        description: 'Untuk anak di bawah 5 tahun tidak perlu foto. Usia di atas 5 tahun siapkan foto berwarna.',
        iconName: 'UserCheck',
        lansiaDetail: 'Foto anak bisa diambil memakai kamera HP dengan dinding polos di rumah.',
        illustType: 'doc',
        lansiaVisualCue: 'Periksa Umur Anak'
      },
      {
        stepNumber: 2,
        title: 'Pengajuan Daring atau Lewat Sekolah / Posyandu',
        description: 'Bisa diajukan kolektif lewat sekolah PAUD/SD atau mandiri via loket Dukcapil Talaud.',
        iconName: 'Send',
        lansiaDetail: 'Seringkali ada petugas keliling Dukcapil yang datang ke sekolah di pulau-pulau.',
        illustType: 'counter',
        lansiaVisualCue: 'Daftar di Sekolah atau Posyandu'
      },
      {
        stepNumber: 3,
        title: 'Pengambilan Kartu Fisik KIA',
        description: 'Kartu fisik berbentuk mirip KTP mini berwarna merah muda cerah.',
        iconName: 'IdCard',
        lansiaDetail: 'Disimpan baik-baik untuk keperluan naik kapal feri atau mendaftar sekolah.',
        illustType: 'card',
        lansiaVisualCue: 'Terima Kartu KIA Merah Muda'
      }
    ],
    cost: 'Gratis Rp 0',
    estimatedTime: '2 - 3 Hari Kerja',
    destinationOffice: 'Disdukcapil Talaud / Sekolah / Kantor Camat',
    officialActionUrl: 'https://talaudkab.go.id',
    officialActionLabel: 'Informasi Layanan KIA di Portal Pemkab',
    officialGovPortalName: 'Layanan Kartu Identitas Anak Pemkab Talaud',
    officialGovRequirementsUrl: 'https://talaudkab.go.id/layanan-kependudukan',
    canDoFromHome: true,
    canDoFromHomeNote: 'Bisa diajukan via WhatsApp Ta-LoDa atau kolektif lewat pihak sekolah.',
    source: 'Permendagri No. 2 Tahun 2016',
    verifiedDate: '26 Oktober 2026',
    biometricRequired: false,
    lansiaKeyImage: 'kia',
    lansiaShortVoiceCue: 'Kartu identitas anak untuk sekolah dan berlayar.'
  },
  {
    id: 'skpwni-pindah-domisili',
    title: 'Surat Keterangan Pindah WNI (SKPWNI)',
    shortDesc: 'Pengurusan kepindahan penduduk antar-desa, antar-kecamatan, atau ke luar Kabupaten Kepulauan Talaud.',
    category: 'pindah',
    categoryLabel: 'Kependudukan',
    whoNeeds: 'Warga yang berpindah tempat tinggal menetap lebih dari 1 tahun atau karena pekerjaan/sekolah.',
    keywords: ['pindah', 'surat pindah', 'skpwni', 'cabut berkas', 'domisili luar pulau'],
    requirements: [
      'Kartu Keluarga asli',
      'KTP-el asli pemohon yang pindah',
      'Alamat tujuan yang jelas (Kecamatan, Kabupaten/Kota, Provinsi, Kode Pos)'
    ],
    documents: [
      {
        id: 'doc-pindah-kk',
        name: 'Kartu Keluarga Asli',
        isMandatory: true,
        notes: 'Jika pindah seluruh keluarga, KK asli diserahkan. Jika pindah sendiri, diterbitkan KK baru tanpa pemohon.',
        officialGovUrl: 'https://talaudkab.go.id',
        officialGovDocName: 'Layanan Pindah Pemkab Talaud',
        visualIcon: 'kk'
      },
      {
        id: 'doc-pindah-ktp',
        name: 'KTP-el Pemohon Asli / Salinan',
        isMandatory: true,
        notes: 'Data akan divalidasi dengan database nasional.',
        officialGovUrl: 'https://dukcapil.kemendagri.go.id',
        officialGovDocName: 'Pedoman Pindah Domisili Ditjen Dukcapil',
        visualIcon: 'ktp'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pastikan Alamat Tujuan Lengkap',
        description: 'Ketahui nama RT/RW, Dusun, Desa/Kelurahan, Kecamatan, dan Kabupaten tujuan pindah.',
        iconName: 'MapPin',
        lansiaDetail: 'Catat alamat kerabat di tempat tujuan agar petugas tidak salah input wilayah.',
        illustType: 'doc',
        lansiaVisualCue: 'Tulis Alamat Baru Tempat Tujuan'
      },
      {
        stepNumber: 2,
        title: 'Tidak Perlu Surat Pengantar RT/RW (Sesuai Aturan Baru)',
        description: 'Cukup datang langsung ke Dukcapil atau proses secara online via Ta-LoDa.',
        iconName: 'Compass',
        lansiaDetail: 'Tidak perlu repot meminta stempel berjenjang di desa jika KK sudah lengkap.',
        illustType: 'counter',
        lansiaVisualCue: 'Kirim Berkas Tanpa Stempel RT'
      },
      {
        stepNumber: 3,
        title: 'Penerbitan SKPWNI Digital (Format PDF Ber-barcode)',
        description: 'Surat Pindah diterbitkan langsung dan berlaku selama 100 hari kerja.',
        iconName: 'FileCheck',
        lansiaDetail: 'Bawa berkas cetak ini ke kantor Dukcapil di kota atau daerah tujuan Anda.',
        illustType: 'card',
        lansiaVisualCue: 'Terima Surat Pindah Ber-Barcode'
      }
    ],
    cost: 'Gratis Rp 0',
    estimatedTime: '1 Hari Kerja',
    destinationOffice: 'Kantor Disdukcapil Talaud (Melonguane) / Online Ta-LoDa',
    officialActionUrl: 'https://talaudkab.go.id',
    officialActionLabel: 'Buka Portal Dukcapil Talaud',
    officialGovPortalName: 'SOP Pindah Penduduk Pemkab Talaud',
    officialGovRequirementsUrl: 'https://talaudkab.go.id/layanan-kependudukan',
    canDoFromHome: true,
    canDoFromHomeNote: 'Bisa diterbitkan online, file PDF SKPWNI langsung dikirim via WhatsApp.',
    source: 'Ditjen Dukcapil Kemendagri & Pemkab Talaud',
    verifiedDate: '26 Oktober 2026',
    biometricRequired: false,
    lansiaKeyImage: 'pindah',
    lansiaShortVoiceCue: 'Surat keterangan pindah domisili antar pulau atau luar daerah.'
  },
  {
    id: 'bpjs-kesehatan-pbi',
    title: 'Pendaftaran BPJS Kesehatan PBI (Bantuan Iuran Gratis)',
    shortDesc: 'Jaminan kesehatan gratis yang iurannya dibayarkan oleh APBN atau APBD Kabupaten Kepulauan Talaud.',
    category: 'bpjs',
    categoryLabel: 'Kesehatan & Bansos',
    whoNeeds: 'Masyarakat pra-sejahtera, pekerja informal berpenghasilan rendah, lansia, dan penyandang disabilitas di Talaud.',
    keywords: ['bpjs gratis', 'bpjs pbi', 'kis', 'kartu indonesia sehat', 'berobat gratis', 'jamkesda'],
    requirements: [
      'Terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS) Kemensos',
      'Memiliki NIK yang sudah valid dan online di Dukcapil Talaud',
      'Surat Keterangan Tidak Mampu (SKTM) dari Desa/Kelurahan'
    ],
    documents: [
      {
        id: 'doc-bpjs-kk',
        name: 'Fotokopi Kartu Keluarga dan KTP-el',
        isMandatory: true,
        notes: 'Pastikan NIK sudah sinkron online di Dukcapil.',
        officialGovUrl: 'https://talaudkab.go.id',
        officialGovDocName: 'Validasi NIK Pemkab Talaud',
        visualIcon: 'kk'
      },
      {
        id: 'doc-bpjs-sktm',
        name: 'Surat Keterangan Tidak Mampu (SKTM) dari Kepala Desa',
        isMandatory: true,
        notes: 'Menyatakan kondisi ekonomi keluarga.',
        officialGovUrl: 'https://kemensos.go.id',
        officialGovDocName: 'Kemensos RI Standar DTKS & SKTM',
        visualIcon: 'surat'
      },
      {
        id: 'doc-bpjs-rekom-dinsos',
        name: 'Rekomendasi dari Dinas Sosial Kabupaten Kepulauan Talaud',
        isMandatory: true,
        notes: 'Diajukan ke Dinas Sosial Talaud di kompleks perkantoran Melonguane.',
        officialGovUrl: 'https://bpjs-kesehatan.go.id',
        officialGovDocName: 'Portal Resmi BPJS Kesehatan RI',
        visualIcon: 'surat'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Minta SKTM di Kantor Desa / Kelurahan',
        description: 'Datangi kantor desa untuk meminta pengantar Surat Keterangan Tidak Mampu.',
        iconName: 'Home',
        lansiaDetail: 'Jelaskan bahwa surat akan digunakan untuk mendaftar BPJS Bantuan Pemerintah.',
        illustType: 'doc',
        lansiaVisualCue: 'Minta Surat Desa di Balai Desa'
      },
      {
        stepNumber: 2,
        title: 'Verifikasi di Dinas Sosial Talaud (Melonguane)',
        description: 'Petugas Dinsos mengecek apakah nama keluarga sudah tercatat di Data DTKS / SIKS-NG.',
        iconName: 'Building2',
        lansiaDetail: 'Jika belum masuk DTKS, minta petugas desa mendaftarkan lewat musyawarah desa (Musdes).',
        illustType: 'counter',
        lansiaVisualCue: 'Petugas Cek Nama di Komputer Dinas'
      },
      {
        stepNumber: 3,
        title: 'Penerbitan Kepesertaan BPJS KIS PBI',
        description: 'Bila kuota PBI daerah tersedia, nomor kartu BPJS langsung aktif dan bisa digunakan berobat di Puskesmas se-Talaud.',
        iconName: 'HeartPulse',
        lansiaDetail: 'Kartu BPJS fisik atau digital disimpan untuk berobat di Puskesmas dan RSUD Talaud di Mala.',
        illustType: 'card',
        lansiaVisualCue: 'Terima Kartu BPJS Berobat Gratis'
      }
    ],
    cost: 'Gratis Rp 0 (Iuran ditanggung pemerintah)',
    estimatedTime: '3 - 7 Hari Kerja (Tergantung periode penetapan data)',
    destinationOffice: 'Kantor Dinas Sosial Kab. Kepulauan Talaud / Kantor BPJS Kesehatan Cabang Talaud',
    officialActionUrl: 'https://bpjs-kesehatan.go.id',
    officialActionLabel: 'Buka Portal Resmi BPJS Kesehatan',
    officialGovPortalName: 'Portal Resmi BPJS Kesehatan & Dinsos Talaud',
    officialGovRequirementsUrl: 'https://bpjs-kesehatan.go.id',
    canDoFromHome: false,
    canDoFromHomeNote: 'Memerlukan koordinasi dengan aparat desa untuk pengusulan Musdes DTKS.',
    source: 'Dinas Sosial Kabupaten Kepulauan Talaud & BPJS Kesehatan 2026',
    verifiedDate: '26 Oktober 2026',
    biometricRequired: false,
    lansiaKeyImage: 'bpjs',
    lansiaShortVoiceCue: 'Pendaftaran BPJS kesehatan berobat gratis dari pemerintah.'
  },
  {
    id: 'layanan-jemput-bola',
    title: 'Layanan Jemput Bola (Lansia Sakit & Disabilitas Berat)',
    shortDesc: 'Petugas Dukcapil Talaud mendatangi langsung rumah warga yang sakit menahun, lansia uzur, atau disabilitas berat.',
    category: 'jemput',
    categoryLabel: 'Layanan Khusus Inklusif',
    whoNeeds: 'Warga lansia, orang dengan disabilitas fisik/mental berat, atau warga sakit yang tidak memungkinkan bepergian ke kantor dinas.',
    keywords: ['jemput bola', 'petugas datang ke rumah', 'lansia sakit', 'disabilitas', 'kursi roda', 'tunanetra', 'keliling'],
    requirements: [
      'Warga berdomisili di Kabupaten Kepulauan Talaud',
      'Kondisi fisik tidak memungkinkan datang ke kantor (surat keterangan dokter/kades)',
      'Diajukan oleh keluarga atau pemerintah desa/kelurahan setempat'
    ],
    documents: [
      {
        id: 'doc-jemput-surat',
        name: 'Surat Permohonan Jemput Bola dari Pemerintah Desa / Kelurahan',
        isMandatory: true,
        notes: 'Dibuatkan oleh Kepala Desa atau Lurah setempat dengan menyebutkan daftar nama dan kondisi pemohon.',
        officialGovUrl: 'https://talaudkab.go.id',
        officialGovDocName: 'Layanan Inklusif Pemkab Talaud',
        visualIcon: 'surat'
      },
      {
        id: 'doc-jemput-kk',
        name: 'Salinan Kartu Keluarga & Dokumen Lama yang Ada',
        isMandatory: true,
        notes: 'Sebagai acuan data awal.',
        officialGovUrl: 'https://talaudkab.go.id',
        officialGovDocName: 'Dukcapil Talaud',
        visualIcon: 'kk'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Laporkan Kondisi ke Kantor Desa / Kader Posyandu',
        description: 'Keluarga melapor ke kader atau kepala dusun bahwa ada anggota keluarga yang butuh perekaman tetapi tidak bisa berjalan/keluar rumah.',
        iconName: 'Users',
        lansiaDetail: 'Keluarga tidak perlu memaksakan membawa orang tua yang sedang sakit berat menaiki perahu.',
        illustType: 'building',
        lansiaVisualCue: 'Lapor ke Kader Desa bahwa Orang Tua Sakit'
      },
      {
        stepNumber: 2,
        title: 'Pemerintah Desa Mengirimkan Permintaan ke Disdukcapil',
        description: 'Daftar pemohon jemput bola dihimpun dan dikirimkan ke Disdukcapil Melonguane untuk dijadwalkan.',
        iconName: 'Send',
        lansiaDetail: 'Disdukcapil Talaud secara berkala menggelar program Jemput Bola ke pulau-pulau.',
        illustType: 'counter',
        lansiaVisualCue: 'Desa Kirim Jadwal ke Kantor Disdukcapil'
      },
      {
        stepNumber: 3,
        title: 'Tim Dukcapil Hadir Membawa Alat Mobile Recording',
        description: 'Petugas datang langsung ke tempat tidur warga membawa kamera dan scanner sidik jari portabel.',
        iconName: 'HeartHandshake',
        lansiaDetail: 'Perekaman dilakukan santai dan ramah di lingkungan rumah warga sendiri.',
        illustType: 'camera',
        lansiaVisualCue: 'Petugas Datang Langsung ke Rumah'
      }
    ],
    cost: 'Gratis Rp 0 (Layanan Prioritas Kemanusiaan)',
    estimatedTime: 'Sesuai jadwal giliran kunjungan tim ke kecamatan/desa terkait',
    destinationOffice: 'Disdukcapil Kabupaten Kepulauan Talaud (Divisi Pelayanan Khusus Keliling)',
    officialActionUrl: 'https://talaudkab.go.id',
    officialActionLabel: 'Informasi Program Inklusif di Web Pemkab',
    officialGovPortalName: 'Program Pelayanan Kemanusiaan Pemkab Talaud',
    officialGovRequirementsUrl: 'https://talaudkab.go.id',
    canDoFromHome: true,
    canDoFromHomeNote: 'Petugas yang akan datang berkunjung ke rumah warga.',
    source: 'Program Pelayanan Inklusif Disdukcapil Kepulauan Talaud 2026',
    verifiedDate: '26 Oktober 2026',
    biometricRequired: true,
    lansiaKeyImage: 'jemput',
    lansiaShortVoiceCue: 'Petugas dinas datang langsung ke rumah merekam data.'
  }
];
