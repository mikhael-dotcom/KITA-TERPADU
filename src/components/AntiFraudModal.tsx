import React from 'react';
import {
  ShieldAlert,
  X,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  PhoneCall,
  Lock,
  Smartphone
} from 'lucide-react';

interface AntiFraudModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AntiFraudModal: React.FC<AntiFraudModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="antifraud-title"
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-auto flex flex-col">
        {/* Header */}
        <div className="bg-rose-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b-4 border-amber-400">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-800 rounded-2xl">
              <ShieldAlert className="w-8 h-8 text-amber-300" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                PERLINDUNGAN WARGA TALAUD
              </span>
              <h2 id="antifraud-title" className="text-xl sm:text-2xl font-black mt-1">
                Awas Penipuan, Calo &amp; Pungli
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup jendela peringatan"
            className="p-2.5 rounded-xl bg-rose-800 hover:bg-rose-700 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-800 text-sm">
          <div className="bg-rose-50 border-2 border-rose-200 p-4 rounded-2xl flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-rose-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-rose-950 text-base">
                Pernyataan Resmi Disdukcapil Talaud:
              </h4>
              <p className="text-xs sm:text-sm text-rose-900 mt-1 leading-relaxed">
                Semua pelayanan dokumen kependudukan (KTP-el, Kartu Keluarga, Akta Kelahiran, KIA, Surat Pindah) di Kabupaten Kepulauan Talaud adalah <strong>100% GRATIS TANPA BIAYA RETRIBUSI APAPUN</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
              Kenali Ciri-Ciri Modus Penipuan yang Sering Terjadi:
            </h4>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center shrink-0 text-xs">
                1
              </div>
              <div>
                <strong className="text-slate-900 block">Penipuan File APK Aktivasi IKD di WhatsApp:</strong>
                <p className="text-xs text-slate-600 mt-0.5">
                  Dukcapil TIDAK PERNAH mengirim aplikasi berbentuk file (.apk) melalui chat WhatsApp. Aplikasi IKD resmi hanya diunduh langsung dari Google Play Store / Apple App Store resmi.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center shrink-0 text-xs">
                2
              </div>
              <div>
                <strong className="text-slate-900 block">Calo Pelabuhan / Antrean Kilat:</strong>
                <p className="text-xs text-slate-600 mt-0.5">
                  Orang yang menawarkan bantuan pengurusan cepat di dermaga kapal Melonguane atau loket dengan meminta sejumlah uang. Jangan berikan uang atau KTP Anda kepada pihak tidak resmi.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center shrink-0 text-xs">
                3
              </div>
              <div>
                <strong className="text-slate-900 block">Permintaan Kode OTP SMS atau Transfer Uang:</strong>
                <p className="text-xs text-slate-600 mt-0.5">
                  Petugas pemerintah tidak pernah meminta Anda membacakan kode OTP SMS rahasia atau mentransfer uang untuk &apos;biaya meterai digital&apos; atau &apos;antrean VIP&apos;.
                </p>
              </div>
            </div>
          </div>

          {/* Official Complaint Channels */}
          <div className="bg-sky-50 border border-sky-200 p-4 rounded-2xl">
            <h4 className="font-bold text-sky-950 text-sm flex items-center gap-1.5 mb-2">
              <PhoneCall className="w-4 h-4 text-sky-700" />
              Kanal Pengaduan Resmi Pemerintah:
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span>Portal Nasional SP4N-LAPOR!:</span>
                <a
                  href="https://www.lapor.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 font-bold hover:underline flex items-center gap-1"
                >
                  www.lapor.go.id <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>Ombudsman RI Perwakilan Sulawesi Utara:</span>
                <span className="font-bold text-slate-800">0811-4322-000</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Inspektorat Daerah Kab. Kepulauan Talaud:</span>
                <span className="font-bold text-slate-800">Kompleks Perkantoran Pemkab</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors"
          >
            Tutup &amp; Saya Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
