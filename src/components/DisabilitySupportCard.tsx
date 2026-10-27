import React, { useState } from 'react';
import {
  Accessibility,
  CheckSquare,
  Square,
  Share2,
  Phone,
  Info,
  Heart,
  X
} from 'lucide-react';
import { TALAUD_OFFICES } from '../data/officesData';

interface DisabilitySupportCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisabilitySupportCard: React.FC<DisabilitySupportCardProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [needs, setNeeds] = useState<{
    kursiRoda: boolean;
    tunanetra: boolean;
    tunarungu: boolean;
    pendampingLansia: boolean;
    antarJemputDermaga: boolean;
  }>({
    kursiRoda: true,
    tunanetra: false,
    tunarungu: false,
    pendampingLansia: false,
    antarJemputDermaga: false
  });

  const [serviceTarget, setServiceTarget] = useState<string>('Perekaman KTP-el Pemula / Baru');
  const [estimatedArrival, setEstimatedArrival] = useState<string>('Pukul 09.30 WITA');

  const selectedOffice = TALAUD_OFFICES[0]; // Disdukcapil Melonguane

  const handleSendToOffice = () => {
    const activeNeeds = [];
    if (needs.kursiRoda) activeNeeds.push('- Membutuhkan bantuan Kursi Roda di rampa depan');
    if (needs.tunanetra) activeNeeds.push('- Membutuhkan Petugas Pendamping Tunanetra');
    if (needs.tunarungu) activeNeeds.push('- Membutuhkan Petugas Ramah Tuli / Bahasa Isyarat');
    if (needs.pendampingLansia) activeNeeds.push('- Lansia berusia lanjut / pendamping keluarga');
    if (needs.antarJemputDermaga) activeNeeds.push('- Tiba dari perahu di Dermaga Melonguane, butuh konfirmasi akses rampa');

    const message = `*KONFIRMASI KEBUTUHAN PENDAMPINGAN INKLUSIF*%0A` +
      `Kepada Petugas Loket Disdukcapil Kab. Kepulauan Talaud:%0A%0A` +
      `Saya/Keluarga berencana datang ke kantor untuk urusan: *${encodeURIComponent(serviceTarget)}*%0A` +
      `Perkiraan Waktu Tiba: *${encodeURIComponent(estimatedArrival)}*%0A%0A` +
      `*Kebutuhan Aksesibilitas Kami:*%0A${activeNeeds.join('%0A')}%0A%0A` +
      `Mohon dibantu ketersediaan loket prioritas atau kursi roda saat kami tiba. Terima kasih atas pelayanannya.`;

    window.open(`https://wa.me/${selectedOffice.kontakWa}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disability-card-title"
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden my-auto flex flex-col">
        {/* Header */}
        <div className="bg-emerald-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b-4 border-emerald-400">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-800 rounded-2xl">
              <Accessibility className="w-8 h-8 text-emerald-300" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-400 text-slate-950 px-2 py-0.5 rounded">
                MODE DISABILITAS &amp; PRIORITAS
              </span>
              <h2 id="disability-card-title" className="text-xl sm:text-2xl font-black mt-1">
                Kartu Kebutuhan Saya
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup kartu kebutuhan"
            className="p-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-800 text-sm">
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-start gap-2.5 text-xs text-emerald-950">
            <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p>
              Fitur ini membantu Anda memberi tahu petugas loket resmi Disdukcapil Talaud sebelum Anda tiba di kantor, agar fasilitas pendukung (seperti kursi roda atau petugas pendamping) sudah siap. <strong>Tanpa perantara dan tanpa biaya.</strong>
            </p>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Pilih Bantuan Pendampingan yang Anda Butuhkan:
            </label>

            <label className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={needs.kursiRoda}
                onChange={(e) => setNeeds({ ...needs, kursiRoda: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-bold text-slate-900">
                Kursi Roda di Pintu Masuk / Rampa Gedung
              </span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={needs.tunanetra}
                onChange={(e) => setNeeds({ ...needs, tunanetra: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-bold text-slate-900">
                Petugas Pendamping Tunanetra / Pemandu Jalan
              </span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={needs.tunarungu}
                onChange={(e) => setNeeds({ ...needs, tunarungu: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-bold text-slate-900">
                Petugas Sabar Ramah Tuli / Bahasa Isyarat / Teks
              </span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={needs.pendampingLansia}
                onChange={(e) => setNeeds({ ...needs, pendampingLansia: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-bold text-slate-900">
                Pendamping Keluarga Masuk ke Loket Prioritas Lansia
              </span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label htmlFor="service-target-input" className="block text-xs font-bold text-slate-700 mb-1">
                Urusan yang Akan Dilakukan:
              </label>
              <input
                id="service-target-input"
                type="text"
                value={serviceTarget}
                onChange={(e) => setServiceTarget(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800 font-medium"
              />
            </div>
            <div>
              <label htmlFor="arrival-time-input" className="block text-xs font-bold text-slate-700 mb-1">
                Rencana Jam Kedatangan:
              </label>
              <input
                id="arrival-time-input"
                type="text"
                value={estimatedArrival}
                onChange={(e) => setEstimatedArrival(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Tujuan: Loket Resmi Disdukcapil Melonguane
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleSendToOffice}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Kirim Pesan ke WhatsApp Petugas Loket</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-slate-600 hover:text-slate-900 text-xs font-bold"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
