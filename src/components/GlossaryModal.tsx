import React, { useState } from 'react';
import { GLOSSARY_DATA, GlossaryItem } from '../data/glossaryData';
import { SpeechService } from '../utils/textToSpeech';
import {
  BookOpen,
  X,
  Volume2,
  Search,
  Sparkles
} from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [searchWord, setSearchWord] = useState('');
  const [activeSpeechTerm, setActiveSpeechTerm] = useState<string | null>(null);

  const filtered = GLOSSARY_DATA.filter(
    (g) =>
      g.term.toLowerCase().includes(searchWord.toLowerCase()) ||
      g.fullName.toLowerCase().includes(searchWord.toLowerCase()) ||
      g.simpleExplanation.toLowerCase().includes(searchWord.toLowerCase())
  );

  const handleSpeak = (item: GlossaryItem) => {
    if (activeSpeechTerm === item.term) {
      SpeechService.stop();
      setActiveSpeechTerm(null);
    } else {
      const speech = `${item.term}, singkatan dari ${item.fullName}. Artinya: ${item.simpleExplanation}. Tips: ${item.analogyOrTip}`;
      setActiveSpeechTerm(item.term);
      SpeechService.speak(speech, () => setActiveSpeechTerm(null), () => setActiveSpeechTerm(null));
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="glossary-modal-title"
      className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-stone-200 overflow-hidden my-auto flex flex-col">
        {/* Header */}
        <div className="bg-[#166534] text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b-4 border-emerald-400">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-800 rounded-2xl">
              <BookOpen className="w-8 h-8 text-emerald-300" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-400 text-stone-950 px-2.5 py-0.5 rounded">
                BAHASA SANGAT SEDERHANA
              </span>
              <h2 id="glossary-modal-title" className="text-xl sm:text-2xl font-black mt-1">
                Kamus Istilah Birokrasi &amp; Kependudukan
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              SpeechService.stop();
              onClose();
            }}
            aria-label="Tutup kamus istilah"
            className="p-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 bg-[#FAF6EF] border-b border-stone-200">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
            <input
              type="text"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              placeholder="Cari singkatan (misal: KIA, TTE, IKD, SKPWNI)..."
              className="w-full bg-white border border-stone-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-emerald-600 shadow-xs"
            />
          </div>
        </div>

        {/* List of terms */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 max-h-[60vh]">
          {filtered.map((item) => {
            const isSpeaking = activeSpeechTerm === item.term;
            return (
              <div
                key={item.term}
                className="p-4 rounded-2xl border-2 border-stone-200 hover:border-emerald-400 bg-white transition-all shadow-xs"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-black text-emerald-900 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                      {item.term}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-600">
                      {item.fullName}
                    </span>
                  </div>
                  <button
                    onClick={() => handleSpeak(item)}
                    aria-label={`Dengarkan penjelasan ${item.term}`}
                    className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                      isSpeaking
                        ? 'bg-emerald-600 text-white border-emerald-500 animate-pulse'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Dengar</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium mt-1">
                  {item.simpleExplanation}
                </p>

                <div className="mt-2.5 pt-2 border-t border-stone-100 text-xs text-amber-900 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Tips Praktis Warga:</strong> {item.analogyOrTip}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-[#FAF6EF] p-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={() => {
              SpeechService.stop();
              onClose();
            }}
            className="bg-stone-800 hover:bg-stone-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors cursor-pointer"
          >
            Tutup Kamus
          </button>
        </div>
      </div>
    </div>
  );
};
