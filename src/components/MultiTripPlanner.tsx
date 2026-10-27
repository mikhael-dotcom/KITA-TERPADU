import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { consolidateTripServices } from '../utils/multiTripConsolidator';
import {
  Ship,
  CheckSquare,
  Square,
  AlertTriangle,
  Calculator,
  Download,
  Share2,
  Building,
  CheckCircle2,
  Info,
  DollarSign
} from 'lucide-react';

interface MultiTripPlannerProps {
  onClose?: () => void;
}

export const MultiTripPlanner: React.FC<MultiTripPlannerProps> = ({ onClose }) => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'ktp-el-baru',
    'akta-kelahiran'
  ]);
  const [userIsland, setUserIsland] = useState<string>('Pulau Salibabu');
  const [boatFare, setBoatFare] = useState<number>(45000);
  const [bentorFare, setBentorFare] = useState<number>(20000);
  const [mealBudget, setMealBudget] = useState<number>(30000);

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter((s) => s !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const plan = consolidateTripServices(selectedServiceIds, userIsland);
  const totalEstimatedCost = (boatFare * 2) + (bentorFare * 2) + mealBudget;

  const handleSharePlan = () => {
    const docList = plan.consolidatedDocuments.map((d, i) => `${i + 1}. ${d.name} (${d.requiredByServices.join(', ')})`).join('%0A');
    const msg = `*RENCANA PERJALANAN LAYANAN PUBLIK TALAUD*%0A` +
      `*Pesan:* 1 Perjalanan untuk ${plan.selectedServices.length} Urusan Sekaligus!%0A` +
      `Asal Pulau: ${encodeURIComponent(userIsland)}%0A` +
      `Estimasi Biaya Transportasi PP: Rp ${totalEstimatedCost.toLocaleString('id-ID')}%0A%0A` +
      `*DOKUMEN GABUNGAN YANG WAJIB DIBAWA:*%0A${docList}%0A%0A` +
      `_Pastikan berkas lengkap dalam map plastik agar aman saat menyeberang laut._%0A` +
      `Disusun via KITA-TERPADU Talaud.`;

    window.open(`https://wa.me/?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="trip-planner" aria-labelledby="multi-trip-heading" className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-emerald-900/10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-emerald-100 text-emerald-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-300">
              PERENCANA RUTE ANTARPULAU &amp; PENGHEMATAN ONGKOS
            </span>
          </div>
          <h2 id="multi-trip-heading" className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Ship className="w-6 h-6 text-emerald-700" />
            Satu Perjalanan, Banyak Urusan
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Gabungkan beberapa keperluan dokumen kependudukan dalam 1 kali penyeberangan perahu ke Melonguane. Berkas digabung otomatis agar Anda tidak perlu pulang-pergi berbiaya mahal.
          </p>
        </div>

        <button
          onClick={handleSharePlan}
          className="self-start md:self-auto flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-xs transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span>Kirim Rencana ke WhatsApp</span>
        </button>
      </div>

      {/* Step 1: Select services to combine */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Langkah 1: Centang Semua Urusan yang Mau Diselesaikan Sekaligus:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {SERVICES_DATA.slice(0, 7).map((srv) => {
            const isSelected = selectedServiceIds.includes(srv.id);
            return (
              <label
                key={srv.id}
                className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'border-sky-600 bg-sky-50/80 shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleService(srv.id)}
                  className="w-5 h-5 text-sky-600 rounded cursor-pointer shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                    {srv.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 block">
                    {srv.documents.length} Dokumen Persyaratan
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Origin Island Selector */}
      <div className="mb-6 p-4 rounded-2xl bg-[#FAF6EF] border border-amber-900/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Ship className="w-5 h-5 text-emerald-800" />
          <span className="text-xs font-bold text-slate-800">
            Pilih Pulau Asal Anda untuk Menghitung Penyeberangan:
          </span>
        </div>
        <select
          value={userIsland}
          onChange={(e) => setUserIsland(e.target.value)}
          className="bg-white border-2 border-emerald-700/40 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-700"
        >
          <option value="Pulau Salibabu">Pulau Salibabu (Lirung, Moronge, Salibabu)</option>
          <option value="Pulau Kabaruan">Pulau Kabaruan (Mangaran, Damau)</option>
          <option value="Kepulauan Nanusa">Kepulauan Nanusa (Karatung, Kakorotan)</option>
          <option value="Pulau Miangas (Terluar)">Pulau Miangas (Perbatasan Utara)</option>
          <option value="Pulau Karakelang">Pulau Karakelang (Satu daratan Melonguane)</option>
        </select>
      </div>

      {/* Grid Result: Consolidated Documents vs Trip Budget */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Consolidated Checklist (2 cols) */}
        <div className="lg:col-span-2 bg-[#FAF6EF] border-2 border-emerald-900/15 rounded-3xl p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-lg font-black text-emerald-950 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              Daftar Gabungan Dokumen yang Harus Masuk Map Anda
            </h3>
            <span className="bg-[#166534] text-white font-bold text-xs px-3 py-1 rounded-full">
              {plan.consolidatedDocuments.length} Berkas
            </span>
          </div>
          <p className="text-xs text-slate-600 mb-4">
            Dokumen rangkuman untuk menyelesaikan <strong>{plan.selectedServices.length} urusan</strong>. Dokumen yang sama (misal Kartu Keluarga) sudah digabung otomatis sehingga Anda tidak perlu fotokopi berlebihan.
          </p>

          <div className="space-y-2.5">
            {plan.consolidatedDocuments.map((doc, idx) => (
              <div
                key={doc.id || idx}
                className="bg-white p-3.5 rounded-2xl border border-emerald-900/10 shadow-2xs flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900 text-sm">{doc.name}</span>
                    {doc.isMandatory ? (
                      <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-1.5 py-0.5 rounded">
                        Wajib
                      </span>
                    ) : (
                      <span className="text-[10px] bg-slate-100 text-slate-600 font-medium px-1.5 py-0.5 rounded">
                        Pendukung
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Dibutuhkan untuk: <strong className="text-slate-700">{doc.requiredByServices.join(', ')}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Tips Pelaut Talaud:</strong> Simpan semua berkas di dalam <em>map plastik anti-air</em>. Ombak di Selat Salibabu atau laut terbuka Talaud sering memercikkan air ke perahu.
            </p>
          </div>
        </div>

        {/* Self-Budget Travel Estimator (1 col) */}
        <div className="bg-[#FAF6EF] border-2 border-emerald-900/15 rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-1">
              <Calculator className="w-5 h-5 text-emerald-700" />
              Kalkulator Ongkos Mandiri
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Hitung estimasi pengeluaran perjalanan Anda untuk melihat seberapa besar penghematan jika disatukan.
            </p>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Ongkos Tiket Kapal / Perahu (1x Jalan):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-bold">Rp</span>
                  <input
                    type="number"
                    value={boatFare}
                    onChange={(e) => setBoatFare(Number(e.target.value) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Dikalikan 2 untuk Pulang-Pergi (PP)</span>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Bentor / Ojek dari Dermaga ke Pemda (1x Jalan):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-bold">Rp</span>
                  <input
                    type="number"
                    value={bentorFare}
                    onChange={(e) => setBentorFare(Number(e.target.value) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Konsumsi / Bekal Air Minum &amp; Makan:
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-bold">Rp</span>
                  <input
                    type="number"
                    value={mealBudget}
                    onChange={(e) => setMealBudget(Number(e.target.value) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Total Ongkos 1 Kali Berlayar PP:
            </span>
            <span className="text-2xl font-black text-emerald-950 block mt-0.5">
              Rp {totalEstimatedCost.toLocaleString('id-ID')}
            </span>
            <div className="mt-2 bg-emerald-100/70 border border-emerald-300 p-2.5 rounded-xl text-xs text-emerald-950 font-medium">
              Dengan menyelesaikan {plan.selectedServices.length} urusan sekaligus, Anda menghemat sekitar{' '}
              <strong>Rp {((plan.selectedServices.length - 1) * totalEstimatedCost).toLocaleString('id-ID')}</strong> dibanding bolak-balik terpisah!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
