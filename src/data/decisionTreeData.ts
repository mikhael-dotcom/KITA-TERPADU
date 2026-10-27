import { DecisionNode } from '../types/service';

export const DECISION_TREE: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    question: 'Layanan publik apa yang ingin Anda urus di Kabupaten Kepulauan Talaud?',
    description: 'Pilih jenis dokumen untuk mengetahui apakah Anda wajib menyeberang/datang langsung ke kantor atau bisa selesai dari rumah/desa.',
    options: [
      {
        label: 'KTP Elektronik (e-KTP)',
        nextId: 'ktp_branch'
      },
      {
        label: 'Kartu Keluarga (KK)',
        nextId: 'kk_branch'
      },
      {
        label: 'Akta Kelahiran / Akta Kematian',
        nextId: 'akta_branch'
      },
      {
        label: 'Kartu Identitas Anak (KIA)',
        nextId: 'kia_branch'
      },
      {
        label: 'Surat Pindah Domisili (SKPWNI)',
        nextId: 'pindah_branch'
      },
      {
        label: 'Warga Lansia Sakit / Disabilitas Berat',
        nextId: 'jemput_branch'
      }
    ]
  },
  ktp_branch: {
    id: 'ktp_branch',
    question: 'Apakah Anda sudah pernah melakukan perekaman biometrik (foto wajah, sidik jari & iris mata)?',
    description: 'Biometrik biasanya dilakukan saat usia 17 tahun atau pertama kali membuat KTP.',
    options: [
      {
        label: 'Belum Pernah (Pertama Kali / Baru Genap 17 Tahun)',
        result: {
          canOnline: false,
          verdictTitle: 'HARUS DATANG LANGSUNG KE KANTOR',
          verdictDetail: 'Perekaman fisik sidik jari, iris mata, dan foto biometrik wajib dihadiri sendiri oleh pemohon dengan peralatan khusus. Tidak bisa diwakilkan.',
          neededDocuments: [
            'Fotokopi Kartu Keluarga (KK)',
            'Fotokopi Ijazah / Akta Kelahiran (untuk validasi nama)'
          ],
          actionLabel: 'Lihat Jadwal Kantor & Lokasi di Melonguane/Camat',
          actionUrl: '#offices'
        }
      },
      {
        label: 'Sudah Pernah Rekam (KTP Saya Hanya Rusak atau Hilang)',
        result: {
          canOnline: true,
          verdictTitle: 'BISA DARI RUMAH / DESA (TIDAK WAJIB MENYEBERANG KE MELONGUANE)',
          verdictDetail: 'Karena data biometrik Anda sudah tersimpan di database kependudukan nasional, Anda cukup mengajukan cetak ulang lewat Loket Ta-LoDa atau WhatsApp resmi Disdukcapil Talaud.',
          neededDocuments: [
            'Surat Keterangan Kehilangan dari Polsek terdekat (jika hilang)',
            'Fisik KTP lama yang patah/rusak (jika rusak)',
            'Foto Kartu Keluarga'
          ],
          actionLabel: 'Hubungi Loket Daring Ta-LoDa Talaud',
          actionUrl: 'https://talaudkab.go.id'
        }
      }
    ]
  },
  kk_branch: {
    id: 'kk_branch',
    question: 'Apa alasan pengurusan Kartu Keluarga Anda?',
    options: [
      {
        label: 'Pecah KK Karena Baru Menikah / Menambah Anggota Bayi / Perubahan Data',
        result: {
          canOnline: true,
          verdictTitle: 'BISA DARI RUMAH / VIA KANTOR DESA',
          verdictDetail: 'Kartu Keluarga kini diterbitkan menggunakan Tanda Tangan Elektronik (TTE) ber-barcode resmi Kemendagri. Berkas PDF langsung dikirim ke WhatsApp/Email Anda dan sah dicetak mandiri di kertas HVS A4 putih tanpa perlu cap basah.',
          neededDocuments: [
            'Foto Buku Nikah / Akta Perkawinan (bila menikah)',
            'Foto Surat Keterangan Lahir (bila tambah bayi)',
            'Foto KK Asli yang lama'
          ],
          actionLabel: 'Gunakan Loket Daring Ta-LoDa',
          actionUrl: 'https://talaudkab.go.id'
        }
      }
    ]
  },
  akta_branch: {
    id: 'akta_branch',
    question: 'Apakah Anda memiliki akses internet di desa/ponsel dan scanner/kamera HP yang jelas?',
    options: [
      {
        label: 'Ya, Ada Kamera Ponsel & Sinyal Cukup',
        result: {
          canOnline: true,
          verdictTitle: 'BISA DARI RUMAH LEWAT LOKET ONLINE',
          verdictDetail: 'Anda cukup memotret surat keterangan kelahiran/kematian dari puskesmas/desa beserta dokumen KK, lalu kirim ke kontak WhatsApp resmi Disdukcapil Talaud. Kutipan Akta digital ber-barcode akan dikirimkan.',
          neededDocuments: [
            'Surat Keterangan Kelahiran / Kematian asli dari faskes/kades',
            'Buku Nikah orang tua (untuk akta lahir)',
            'Kartu Keluarga'
          ],
          actionLabel: 'Lihat Syarat & Kirim Pengajuan',
          actionUrl: '#services'
        }
      },
      {
        label: 'Tidak Ada Sinyal Stabil di Rumah',
        result: {
          canOnline: true,
          verdictTitle: 'CUKUP TITIPKAN KE KANTOR DESA / POS KECAMATAN',
          verdictDetail: 'Anda tidak perlu membayar ongkos kapal mahal ke Melonguane! Aparat desa dan pos perintis kecamatan di pulau Anda berkewajiban menghimpun berkas untuk diproses secara kolektif.',
          neededDocuments: [
            'Map berkas berisi surat kelahiran/kematian asli',
            'Salinan KK dan KTP orang tua'
          ],
          actionLabel: 'Cek Kantor Kecamatan Terdekat di Pulau Anda',
          actionUrl: '#offices'
        }
      }
    ]
  },
  kia_branch: {
    id: 'kia_branch',
    question: 'Berapa usia anak Anda?',
    options: [
      {
        label: 'Usia 0 - 5 Tahun (Balita)',
        result: {
          canOnline: true,
          verdictTitle: 'BISA DARI RUMAH (TANPA FOTO)',
          verdictDetail: 'KIA untuk balita tidak mencantumkan foto wajah anak. Cukup kirim salinan Akta Lahir dan KK secara daring melalui portal Ta-LoDa.',
          neededDocuments: [
            'Fotokopi Akta Kelahiran Anak',
            'Fotokopi Kartu Keluarga'
          ],
          actionLabel: 'Ajukan KIA Balita Online',
          actionUrl: 'https://talaudkab.go.id'
        }
      },
      {
        label: 'Usia 5 - 16 Tahun (Anak Sekolah)',
        result: {
          canOnline: true,
          verdictTitle: 'BISA KOLEKTIF LEWAT SEKOLAH ATAU DARING',
          verdictDetail: 'Sertakan pas foto anak ukuran 2x3 berwarna. Pengurusan bisa melalui loket Ta-LoDa atau diserahkan saat petugas Dukcapil berkunjung ke sekolah PAUD/SD di wilayah Anda.',
          neededDocuments: [
            'Pas foto 2x3 berwarna (2 lembar)',
            'Fotokopi Akta Lahir dan KK'
          ],
          actionLabel: 'Buka Panduan KIA',
          actionUrl: '#services'
        }
      }
    ]
  },
  pindah_branch: {
    id: 'pindah_branch',
    question: 'Ke mana arah kepindahan Anda?',
    options: [
      {
        label: 'Pindah Antar-Desa / Antar-Kecamatan di Kabupaten Talaud',
        result: {
          canOnline: true,
          verdictTitle: 'BISA DARI RUMAH SECARA DIGITAL',
          verdictDetail: 'Tidak memerlukan surat pengantar RT/RW. Cukup kirim foto KK lama dan sebutkan alamat desa baru di Talaud melalui layanan Ta-LoDa.',
          neededDocuments: [
            'Foto Kartu Keluarga Asli',
            'Catatan alamat desa & dusun tujuan baru'
          ],
          actionLabel: 'Ajukan Pindah Online',
          actionUrl: 'https://talaudkab.go.id'
        }
      },
      {
        label: 'Pindah ke Luar Kabupaten Kepulauan Talaud (Luar Daerah / Luar Provinsi)',
        result: {
          canOnline: true,
          verdictTitle: 'SKPWNI BISA DIKIRIM BERKAS DIGITAL',
          verdictDetail: 'Surat Keterangan Pindah WNI (SKPWNI) format PDF ber-barcode resmi diterbitkan secara elektronik dan dapat langsung Anda unduh untuk diserahkan ke Dukcapil kota tujuan Anda.',
          neededDocuments: [
            'Foto Kartu Keluarga Asli',
            'Foto KTP-el pemohon yang pindah'
          ],
          actionLabel: 'Unduh SKPWNI Daring',
          actionUrl: 'https://talaudkab.go.id'
        }
      }
    ]
  },
  jemput_branch: {
    id: 'jemput_branch',
    question: 'Bagaimana kondisi fisik pemohon saat ini?',
    options: [
      {
        label: 'Lansia Sakit Menahun / Tirah Baring / Disabilitas Fisik Berat',
        result: {
          canOnline: true,
          verdictTitle: 'PETUGAS AKAN JEMPUT BOLA (DATANG KE RUMAH)',
          verdictDetail: 'JANGAN PAKSAKAN berlayar atau menaiki perahu! Disdukcapil Kab. Kepulauan Talaud memiliki armada Jemput Bola Kemanusiaan. Keluarga atau kepala desa cukup melaporkan nama pemohon, dan tim perekam mobile akan datang langsung ke rumah.',
          neededDocuments: [
            'Surat Keterangan Sakit dari Bidan/Dokter Desa atau Surat Pengantar Kades',
            'Kartu Keluarga'
          ],
          actionLabel: 'Lihat Tata Cara Pengajuan Jemput Bola',
          actionUrl: '#services'
        }
      }
    ]
  }
};
