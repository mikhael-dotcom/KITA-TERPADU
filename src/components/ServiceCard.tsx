import React, { useState } from 'react';
import { ServiceItem, AccessibilityMode } from '../types/service';
import { ServiceIllustration } from './ServiceIllustrations';
import { SpeechService } from '../utils/textToSpeech';
import {
  FileText,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Eye,
  Home,
  Building2,
  Volume2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  mode: AccessibilityMode;
  onSelect: (s: ServiceItem) => void;
  onOpenLansiaGuide: (s: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  mode,
  onSelect,
  onOpenLansiaGuide
}) => {
  const isLansia = mode === 'lansia';
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleQuickVoice = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlayingAudio) {
      SpeechService.stop();
      setIsPlayingAudio(false);
    } else {
      const speech = `${service.title}. ${service.shortDesc}. Biaya seratus persen gratis. Dokumen yang disiapkan: ${service.documents.map(d => d.name).join(', ')}.`;
      setIsPlayingAudio(true);
      SpeechService.speak(speech, () => setIsPlayingAudio(false), () => setIsPlayingAudio(false));
    }
  };

  return (
    <article
      className={`rounded-3xl transition-all duration-200 flex flex-col justify-between ${
        isLansia
          ? 'bg-[#FAF6EF] border-4 border-amber-400 p-5 sm:p-6 shadow-md hover:shadow-lg ring-2 ring-amber-300/50'
          : 'bg-white border border-emerald-900/10 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-emerald-600/40'
      }`}
    >
      <div>
        {/* Utamakan Gambar untuk Lansia: Giant Visual Banner on Card */}
        {isLansia ? (
          <div className="mb-4 bg-white rounded-2xl p-4 border-2 border-amber-200/80 shadow-xs flex flex-col items-center justify-center text-center">
            <span className="text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-3 py-1 rounded-full mb-3">
              Petunjuk Bergambar Lansia
            </span>
            <ServiceIllustration
              type={service.lansiaKeyImage}
              className="w-full max-w-[200px] h-32"
            />
            <span className="text-base sm:text-lg font-black text-amber-950 mt-2 block">
              {service.steps[0]?.lansiaVisualCue || service.title}
            </span>
          </div>
        ) : (
          /* Subtle Header for Regular Mode */
          <div className="flex items-center justify-between gap-2 flex-wrap mb-3.5">
            <span className="text-[11px] font-bold text-emerald-900 bg-emerald-100/70 border border-emerald-300 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
              {service.categoryLabel}
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-bold text-emerald-900 bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                100% Gratis Rp 0
              </span>
              {service.canDoFromHome ? (
                <span className="text-[11px] font-semibold text-emerald-950 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Home className="w-3 h-3 text-emerald-700" />
                  Bisa dari Rumah
                </span>
              ) : (
                <span className="text-[11px] font-semibold text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-amber-700" />
                  Hadir ke Kantor
                </span>
              )}
            </div>
          </div>
        )}

        {/* Title */}
        <h3
          className={`font-black text-slate-900 tracking-tight leading-snug mb-2 ${
            isLansia ? 'text-2xl sm:text-3xl text-emerald-950' : 'text-base sm:text-lg text-emerald-950'
          }`}
        >
          {service.title}
        </h3>

        {/* Short Description */}
        <p className={`text-slate-600 mb-4 leading-relaxed ${isLansia ? 'text-lg font-bold text-slate-800' : 'text-xs sm:text-sm'}`}>
          {service.shortDesc}
        </p>

        {/* Quick Facts Specs */}
        <div className="space-y-2 text-xs text-slate-600 mb-4 pt-3.5 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong className="text-slate-900 font-bold">{service.documents.length} Dokumen Syarat</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Estimasi Waktu: <strong className="text-slate-900 font-bold">{service.estimatedTime}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="truncate">{service.destinationOffice}</span>
          </div>
        </div>

        {/* Direct Link to Official Government Website for Requirements */}
        <div className="mb-4 p-3 bg-white rounded-2xl border border-emerald-900/15 flex items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="text-xs text-emerald-950 font-bold">
              Web Resmi: {service.officialGovPortalName}
            </span>
          </div>
          <a
            href={service.officialGovRequirementsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 underline flex items-center gap-1 shrink-0"
            title="Buka data berkas asli di situs web resmi pemerintah"
          >
            <span>Buka Web</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
        {/* Voice button for quick audio listening */}
        <button
          onClick={handleQuickVoice}
          className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl border text-xs font-bold transition-all ${
            isPlayingAudio
              ? 'bg-amber-400 text-slate-950 border-amber-500 animate-pulse font-black'
              : 'bg-[#FAF6EF] text-emerald-950 border-emerald-900/15 hover:bg-emerald-100/50'
          }`}
          title="Dengarkan suara penjelasan kartu ini"
        >
          <Volume2 className="w-4 h-4 text-emerald-800" />
          <span>{isPlayingAudio ? 'Hentikan' : 'Dengar'}</span>
        </button>

        <button
          onClick={() => onSelect(service)}
          className={`flex-1 flex items-center justify-center gap-2 rounded-2xl font-bold transition-all shadow-xs ${
            isLansia
              ? 'bg-[#166534] hover:bg-[#14532d] text-white py-4 text-lg font-black'
              : 'bg-[#166534] hover:bg-[#14532d] text-white py-2.5 text-xs sm:text-sm'
          }`}
        >
          <span>Buka Panduan &amp; Berkas</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {isLansia && (
          <button
            onClick={() => onOpenLansiaGuide(service)}
            className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-4 px-5 rounded-2xl text-lg shadow-sm"
          >
            <Eye className="w-6 h-6 text-slate-950" />
            <span>Lihat Gambar Langkah</span>
          </button>
        )}
      </div>
    </article>
  );
};
