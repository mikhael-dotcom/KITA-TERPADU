import React, { useState } from 'react';
import { ServiceItem } from '../types/service';
import { ServiceIllustration } from './ServiceIllustrations';
import { SpeechService } from '../utils/textToSpeech';
import {
  Volume2,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  Landmark,
  Eye
} from 'lucide-react';

interface LansiaStepGuideProps {
  service: ServiceItem | null;
  dataSaver: boolean;
  onClose: () => void;
}

export const LansiaStepGuide: React.FC<LansiaStepGuideProps> = ({
  service,
  dataSaver,
  onClose
}) => {
  if (!service) return null;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const steps = service.steps;
  const currentStep = steps[currentStepIndex] || steps[0];
  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === steps.length - 1;

  const handleSpeakCurrentStep = () => {
    if (isSpeaking) {
      SpeechService.stop();
      setIsSpeaking(false);
    } else {
      const speechText = `Langkah ke ${currentStep.stepNumber} dari ${steps.length}. ${currentStep.title}. ${currentStep.description}. ${currentStep.lansiaDetail ? 'Catatan penting: ' + currentStep.lansiaDetail : ''}`;
      setIsSpeaking(true);
      SpeechService.speak(speechText, () => setIsSpeaking(false), () => setIsSpeaking(false));
    }
  };

  const nextStep = () => {
    SpeechService.stop();
    setIsSpeaking(false);
    if (!isLast) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const prevStep = () => {
    SpeechService.stop();
    setIsSpeaking(false);
    if (!isFirst) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lansia-guide-heading"
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-5 overflow-y-auto"
    >
      <div className="bg-[#FAF6EF] rounded-3xl shadow-2xl max-w-2xl w-full border-4 border-amber-400 overflow-hidden my-auto flex flex-col">
        {/* Top Header - Warm Amber & Green */}
        <div className="bg-amber-400 text-slate-950 p-4 sm:p-5 flex items-center justify-between border-b-2 border-amber-500">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-300 flex items-center justify-center font-black">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider bg-slate-950 text-amber-300 px-2.5 py-0.5 rounded-full">
                MODE LANSIA &bull; UTAMAKAN GAMBAR
              </span>
              <h2 id="lansia-guide-heading" className="text-lg sm:text-xl font-black mt-0.5">
                {service.title}
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              SpeechService.stop();
              onClose();
            }}
            aria-label="Tutup petunjuk bergambar"
            className="p-3 bg-slate-950 hover:bg-slate-900 text-amber-300 rounded-2xl font-bold flex items-center gap-1 transition-colors"
          >
            <X className="w-6 h-6" />
            <span className="text-sm font-black hidden sm:inline">Tutup</span>
          </button>
        </div>

        {/* Visual Progress Steps */}
        <div className="px-5 py-3 bg-white border-b border-amber-200/80 flex items-center justify-between text-base font-black text-amber-950">
          <span className="flex items-center gap-2">
            <span>Langkah {currentStepIndex + 1} dari {steps.length}</span>
          </span>
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  SpeechService.stop();
                  setIsSpeaking(false);
                  setCurrentStepIndex(idx);
                }}
                aria-label={`Lompat ke langkah ${idx + 1}`}
                className={`h-4 rounded-full transition-all ${
                  idx === currentStepIndex
                    ? 'w-10 bg-[#166534]'
                    : idx < currentStepIndex
                    ? 'w-4 bg-emerald-500'
                    : 'w-4 bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Canvas: Picture-First (Gambar Sangat Menonjol) */}
        <div className="p-5 sm:p-7 flex flex-col items-center text-center space-y-5">
          {/* Big Visual Illustration Card */}
          <div className="w-full bg-white rounded-3xl p-6 border-3 border-amber-300/80 shadow-sm flex flex-col items-center justify-center">
            <span className="text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-950 px-3 py-1 rounded-full mb-3">
              Gambar Panduan: {currentStep.lansiaVisualCue || currentStep.title}
            </span>
            <ServiceIllustration
              type={currentStep.illustType || 'doc'}
              className="w-full max-w-[280px] h-48 drop-shadow-sm"
              dataSaver={dataSaver}
            />
          </div>

          {/* Short, Clear Big Sentence Headline */}
          <div className="space-y-2">
            <div className="inline-block bg-[#166534] text-white font-black text-base px-4 py-1 rounded-full">
              Langkah {currentStep.stepNumber}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
              {currentStep.title}
            </h3>
            <p className="text-lg sm:text-xl text-slate-800 font-bold max-w-lg mx-auto leading-relaxed mt-2">
              {currentStep.description}
            </p>
          </div>

          {/* Tips Keluarga / Lansia Card */}
          {currentStep.lansiaDetail && (
            <div className="bg-white border-2 border-amber-400 p-4 rounded-2xl max-w-lg w-full text-left shadow-xs">
              <span className="text-xs font-black uppercase text-amber-900 tracking-wider block mb-1">
                Catatan untuk Orang Tua &amp; Pendamping:
              </span>
              <p className="text-base sm:text-lg text-slate-900 font-bold leading-normal">
                {currentStep.lansiaDetail}
              </p>
            </div>
          )}

          {/* Big Audio Narration Button */}
          <button
            onClick={handleSpeakCurrentStep}
            className={`flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-black text-lg transition-all shadow-md w-full max-w-md ${
              isSpeaking
                ? 'bg-amber-400 text-slate-950 border-2 border-amber-500 animate-pulse'
                : 'bg-[#166534] hover:bg-[#14532d] text-white'
            }`}
          >
            <Volume2 className="w-7 h-7" />
            <span>{isSpeaking ? 'Hentikan Suara' : 'Dengarkan Suara Langkah Ini'}</span>
          </button>

          {/* Official Government Web Link inside Lansia Guide */}
          <a
            href={service.officialActionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline flex items-center gap-1"
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Kunjungi Web Resmi Pemerintah ({service.officialGovPortalName})</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Big Navigation Buttons - Previous / Next */}
        <div className="bg-[#FAF6EF] p-4 sm:p-5 border-t-2 border-amber-300 flex items-center justify-between gap-3">
          <button
            onClick={prevStep}
            disabled={isFirst}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-2xl text-lg font-black transition-all ${
              isFirst
                ? 'bg-amber-100/50 text-amber-300 cursor-not-allowed border border-amber-200'
                : 'bg-white hover:bg-slate-100 text-slate-950 border-2 border-slate-400 shadow-xs'
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
            <span>Sebelumnya</span>
          </button>

          {isLast ? (
            <button
              onClick={() => {
                SpeechService.stop();
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-2xl text-lg font-black bg-[#166534] hover:bg-[#14532d] text-white shadow-md transition-all"
            >
              <CheckCircle2 className="w-6 h-6" />
              <span>Selesai</span>
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-2xl text-lg font-black bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-md transition-all"
            >
              <span>Langkah Berikutnya</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
