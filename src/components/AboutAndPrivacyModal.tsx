import React from 'react';
import {
  X,
  Lock,
  Landmark,
  Compass,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface AboutAndPrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutAndPrivacyModal: React.FC<AboutAndPrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-stone-200 overflow-hidden my-auto flex flex-col">
        {/* Header */}
        <div className="bg-[#166534] text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b-4 border-emerald-400">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-800 rounded-2xl">
              <Compass className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-400 text-stone-950 px-2 py-0.5 rounded">
                INFORMASI SISTEM &amp; PRIVASI
              </span>
              <h2 id="about-modal-title" className="text-xl sm:text-2xl font-black mt-1">
                KITA (Kanal Informasi dan Terpadu Aspirasi)
              </h2>
              <p className="text-xs text-emerald-100">
                Layanan Panduan Administrasi Terpadu Kabupaten Kepulauan Talaud
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup jendela tentang"
            className="p-2.5 rounded-2xl bg-emerald-800 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-stone-800 text-sm">
          {/* Mission & Purpose */}
          <div className="bg-[#FAF6EF] border border-stone-200 p-4 sm:p-5 rounded-2xl">
            <div className="flex items-center gap-2 mb-1.5">
              <Landmark className="w-5 h-5 text-emerald-800" />
              <h3 className="font-bold text-stone-900 text-base">
                Misi Pengarah Layanan Publik Terpadu Daerah Kepulauan (3T)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              <strong>KITA (Kanal Informasi dan Terpadu Aspirasi)</strong> dibangun sebagai portal panduan terpadu yang memandu warga Kabupaten Kepulauan Talaud—wilayah beranda terdepan NKRI yang berbatasan laut dengan Filipina—dalam mempersiapkan dokumen administrasi secara tuntas sebelum melakukan penyeberangan antarpulau, sehingga menghemat biaya transportasi perahu dan waktu warga.
            </p>
          </div>

          {/* Connected with Official Government Websites */}
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
            <h3 className="font-bold text-emerald-950 text-sm mb-1 flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-emerald-700" />
              Terhubung Langsung dengan Website Resmi Pemerintah
            </h3>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Seluruh data syarat berkas, regulasi, dan pendaftaran diarahkan langsung ke website resmi pemerintah: <strong>Portal Pemkab Kepulauan Talaud (talaudkab.go.id)</strong>, <strong>Layanan Daring Ta-LoDa Disdukcapil Talaud</strong>, <strong>SIPPN Menpan-RB</strong>, dan <strong>Ditjen Dukcapil Kemendagri</strong>.
            </p>
          </div>

          {/* Privacy Commitment */}
          <div className="space-y-3">
            <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-700" />
              Prinsip Perlindungan Privasi &amp; Data Warga:
            </h3>

            <div className="p-3.5 bg-[#FAF6EF] rounded-2xl border border-stone-200 space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Tanpa Pengumpulan NIK atau Dokumen Kependudukan:</strong> Sistem pengarah ini beroperasi dengan prinsip <em>Zero-Data Storage</em>. Kami tidak pernah meminta NIK 16 digit, foto KTP asli, atau nomor kartu keluarga Anda. Seluruh verifikasi resmi dilakukan langsung oleh petugas pemerintah di loket resmi.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Penyimpanan Lokal Mandiri (Peramban Perangkat HP/Komputer):</strong> Checklist dokumen yang Anda centang dan preferensi aksesibilitas tersimpan secara privat di memori peramban Anda (<em>localStorage</em>) tanpa dikirim ke server pihak ketiga.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Compatibility */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
            <strong className="block text-stone-900 mb-1">Akses Mudah dari Handphone (Smartphone):</strong>
            Website ini dirancang 100% responsif dan ringan untuk pengguna handphone Android &amp; iOS, tanpa perlu laptop ataupun kuota besar. Dilengkapi tombol audio narator serta visual ramah lansia.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF6EF] p-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-stone-800 hover:bg-stone-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Tutup Informasi
          </button>
        </div>
      </div>
    </div>
  );
};
