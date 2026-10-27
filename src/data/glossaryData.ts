export interface GlossaryItem {
  term: string;
  fullName: string;
  simpleExplanation: string;
  analogyOrTip: string;
}

export const GLOSSARY_DATA: GlossaryItem[] = [
  {
    term: 'KTP-el',
    fullName: 'Kartu Tanda Penduduk Elektronik',
    simpleExplanation: 'Kartu tanda pengenal resmi warga negara Indonesia berusia 17 tahun ke atas yang memiliki chip data kependudukan.',
    analogyOrTip: 'Berlaku seumur hidup. Tidak perlu diperpanjang jika masa berlakunya tercantum tanggal lama.'
  },
  {
    term: 'KK',
    fullName: 'Kartu Keluarga',
    simpleExplanation: 'Selembar surat resmi yang memuat data seluruh anggota keluarga yang tinggal dalam satu rumah tangga (ayah, ibu, anak, atau anggota lain).',
    analogyOrTip: 'Sekarang dicetak di kertas putih HVS biasa dengan tanda tangan barcode, tidak lagi memakai kertas blangko hijau tebal.'
  },
  {
    term: 'KIA',
    fullName: 'Kartu Identitas Anak',
    simpleExplanation: 'KTP khusus untuk anak sejak lahir sampai usia 16 tahun. Mirip KTP mini berwarna merah muda.',
    analogyOrTip: 'Dipakai saat anak naik kapal laut antarpulau, naik pesawat, atau mendaftar sekolah baru.'
  },
  {
    term: 'SKPWNI',
    fullName: 'Surat Keterangan Pindah Warga Negara Indonesia',
    simpleExplanation: 'Surat bukti resmi bahwa Anda telah pamit pindah alamat domisili dari Talaud ke wilayah atau pulau lain.',
    analogyOrTip: 'Surat ini harus diserahkan ke kantor Dukcapil kota tujuan dalam waktu maksimal 100 hari kerja.'
  },
  {
    term: 'Biometrik',
    fullName: 'Perekaman Data Fisik (Sidik Jari, Iris Mata, Foto)',
    simpleExplanation: 'Proses merekam sidik 10 jari, pemindaian selaput mata (iris), dan foto wajah menggunakan kamera khusus komputer Dukcapil.',
    analogyOrTip: 'Inilah alasan kenapa anak usia 17 tahun wajib datang langsung ke kantor loket, karena sidik jari tidak bisa direkam dari jauh.'
  },
  {
    term: 'TTE / Barcode',
    fullName: 'Tanda Tangan Elektronik',
    simpleExplanation: 'Tanda tangan digital berbentuk gambar kode kotak (QR barcode) dari Badan Siber dan Sandi Negara (BSSN).',
    analogyOrTip: 'Dokumen ber-barcode SAH secara hukum tanpa perlu cap stempel tinta basah atau tanda tangan pulpen pejabat.'
  },
  {
    term: 'IKD',
    fullName: 'Identitas Kependudukan Digital',
    simpleExplanation: 'Aplikasi resmi pemerintah di ponsel pintar yang menampilkan KTP dan KK Anda secara digital di layar HP.',
    analogyOrTip: 'Dukcapil Talaud TIDAK PERNAH memungut biaya atau meminta kode SMS untuk aktivasi IKD.'
  },
  {
    term: 'DTKS',
    fullName: 'Data Terpadu Kesejahteraan Sosial',
    simpleExplanation: 'Daftar nama keluarga pra-sejahtera yang berhak menerima bantuan dari pemerintah seperti BPJS PBI gratis atau bansos pangan.',
    analogyOrTip: 'Pendaftaran atau pembaruan nama di DTKS dilakukan melalui Musyawarah Desa (Musdes) di balai desa Anda.'
  },
  {
    term: 'Ta-LoDa',
    fullName: 'Tanpa Antrian Loket Daring (Dukcapil Talaud)',
    simpleExplanation: 'Kanal loket pelayanan online resmi milik Disdukcapil Kabupaten Kepulauan Talaud untuk melayani warga kepulauan.',
    analogyOrTip: 'Sangat berguna bagi warga Miangas, Nanusa, Salibabu, dan Kabaruan agar tidak perlu menyeberang laut.'
  }
];
