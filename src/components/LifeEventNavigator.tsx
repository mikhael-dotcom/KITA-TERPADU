import React, { useState } from 'react';
import { LIFE_EVENTS_DATA } from '../data/lifeEventsData';
import {
  GitFork,
  Baby,
  HeartHandshake,
  Truck,
  HeartCrack,
  ArrowRight,
  CheckCircle2,
  Building2
} from 'lucide-react';

interface LifeEventNavigatorProps {
  onSelectServiceById: (serviceId: string) => void;
}

export const LifeEventNavigator: React.FC<LifeEventNavigatorProps> = ({ onSelectServiceById }) => {
  const [selectedEventId, setSelectedEventId] = useState<string>('kelahiran-anak');

  const currentEvent = LIFE_EVENTS_DATA.find((e) => e.id === selectedEventId) || LIFE_EVENTS_DATA[0];

  const getEventIcon = (id: string) => {
    switch (id) {
      case 'kelahiran-anak':
        return <Baby className="w-5 h-5" />;
      case 'pernikahan':
        return <HeartHandshake className="w-5 h-5" />;
      case 'pindah-domisili':
        return <Truck className="w-5 h-5" />;
      case 'kematian-keluarga':
        return <HeartCrack className="w-5 h-5" />;
      default:
        return <GitFork className="w-5 h-5" />;
    }
  };

  return (
    <section id="life-events" aria-labelledby="life-events-heading" className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-emerald-100 text-emerald-900 font-bold text-xs px-2.5 py-0.5 rounded-md uppercase tracking-wider border border-emerald-200">
              SIKLUS HIDUP WARGA &bull; ALUR TERPADU LINTAS INSTANSI
            </span>
          </div>
          <h2 id="life-events-heading" className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
            <GitFork className="w-6 h-6 text-emerald-800" />
            Navigator Peristiwa Hidup Warga
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Panduan urutan pengurusan dokumen lintas instansi (Puskesmas, Desa, Capil, KUA, BPJS, Dinsos) agar tidak terbalik dan tidak bolak-balik antar pulau.
          </p>
        </div>
      </div>

      {/* Event Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        {LIFE_EVENTS_DATA.map((evt) => {
          const isSelected = evt.id === selectedEventId;
          return (
            <button
              key={evt.id}
              onClick={() => setSelectedEventId(evt.id)}
              className={`p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex flex-col items-center justify-center text-center gap-2 transition-all cursor-pointer ${
                isSelected
                  ? 'border-emerald-700 bg-emerald-50 text-emerald-950 shadow-sm'
                  : 'border-stone-200 bg-[#FAF6EF] text-stone-700 hover:bg-stone-100'
              }`}
            >
              <div
                className={`p-2 rounded-xl ${
                  isSelected ? 'bg-emerald-800 text-white' : 'bg-white text-stone-600 shadow-xs'
                }`}
              >
                {getEventIcon(evt.id)}
              </div>
              <span className="leading-snug">{evt.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Event Overview */}
      <div className="bg-[#FAF6EF] border border-stone-200 rounded-3xl p-5 sm:p-6">
        <div className="mb-6 pb-4 border-b border-stone-200">
          <h3 className="text-lg sm:text-xl font-black text-stone-900">
            {currentEvent.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {currentEvent.subtitle} &bull; <span className="text-emerald-900 font-semibold">{currentEvent.targetAudience}</span>
          </p>
        </div>

        {/* Sequential Dependency Steps */}
        <div className="relative space-y-4">
          {currentEvent.steps.map((st) => (
            <div
              key={st.order}
              className="relative bg-white rounded-2xl p-4 sm:p-5 border-2 border-stone-200 hover:border-emerald-400 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-black text-base flex items-center justify-center shrink-0 shadow-xs">
                  {st.order}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-black text-stone-900 text-base">
                      {st.title}
                    </h4>
                    <span className="text-xs bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-emerald-200">
                      <Building2 className="w-3 h-3" />
                      {st.institution}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {st.description}
                  </p>

                  <div className="flex items-center gap-3 pt-1 text-xs text-stone-500 flex-wrap">
                    {st.prerequisite && (
                      <span className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200 font-medium">
                        Syarat Wajib: {st.prerequisite}
                      </span>
                    )}
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Hasil Jadi: {st.keyDoc}
                    </span>
                  </div>
                </div>
              </div>

              {/* View guide button */}
              <button
                onClick={() => onSelectServiceById(st.serviceId)}
                className="self-end sm:self-center shrink-0 flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl transition-colors border border-emerald-200 cursor-pointer"
              >
                <span>Buka Detail Layanan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
