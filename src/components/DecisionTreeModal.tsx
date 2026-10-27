import React, { useState } from 'react';
import { DECISION_TREE } from '../data/decisionTreeData';
import { DecisionNode } from '../types/service';
import {
  HelpCircle,
  X,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Home,
  Building,
  FileText
} from 'lucide-react';

interface DecisionTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DecisionTreeModal: React.FC<DecisionTreeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  const [history, setHistory] = useState<string[]>([]);
  const [activeResult, setActiveResult] = useState<{
    canOnline: boolean;
    verdictTitle: string;
    verdictDetail: string;
    actionUrl?: string;
    actionLabel?: string;
    neededDocuments?: string[];
  } | null>(null);

  const currentNode: DecisionNode = DECISION_TREE[currentNodeId] || DECISION_TREE['start'];

  const handleSelectOption = (option: {
    label: string;
    nextId?: string;
    result?: {
      canOnline: boolean;
      verdictTitle: string;
      verdictDetail: string;
      actionUrl?: string;
      actionLabel?: string;
      neededDocuments?: string[];
    };
  }) => {
    if (option.result) {
      setActiveResult(option.result);
    } else if (option.nextId && DECISION_TREE[option.nextId]) {
      setHistory([...history, currentNodeId]);
      setCurrentNodeId(option.nextId);
    }
  };

  const handleReset = () => {
    setCurrentNodeId('start');
    setHistory([]);
    setActiveResult(null);
  };

  const handleBack = () => {
    if (activeResult) {
      setActiveResult(null);
      return;
    }
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentNodeId(prev);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="decision-tree-title"
      className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-stone-200 overflow-hidden my-auto flex flex-col">
        {/* Header */}
        <div className="bg-[#166534] text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b-4 border-emerald-400">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-400 text-stone-950 px-2.5 py-0.5 rounded">
              POHON KEPUTUSAN &bull; HEMAT PERJALANAN LAUT
            </span>
            <h2 id="decision-tree-title" className="text-xl sm:text-2xl font-black mt-1">
              Perlu ke Kantor atau Tidak?
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1">
              Cek apakah urusan Anda wajib menyeberang ke Melonguane atau bisa selesai secara mandiri dari desa/rumah.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup pemeriksaan"
            className="p-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeResult ? (
            /* Result Screen */
            <div className="space-y-5 animate-fade-in">
              <div
                className={`p-6 rounded-3xl border-2 flex flex-col items-center text-center ${
                  activeResult.canOnline
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-amber-50 border-amber-300 text-amber-950'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm ${
                    activeResult.canOnline ? 'bg-emerald-700 text-white' : 'bg-amber-600 text-white'
                  }`}
                >
                  {activeResult.canOnline ? <Home className="w-8 h-8" /> : <Building className="w-8 h-8" />}
                </div>

                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 mb-2 border border-stone-200">
                  Hasil Penilaian
                </span>

                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                  {activeResult.verdictTitle}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed max-w-lg">
                  {activeResult.verdictDetail}
                </p>
              </div>

              {/* Needed documents if required */}
              {activeResult.neededDocuments && activeResult.neededDocuments.length > 0 && (
                <div className="bg-[#FAF6EF] border border-stone-200 p-4 rounded-2xl">
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-emerald-700" />
                    Berkas yang Perlu Disiapkan:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-stone-800">
                    {activeResult.neededDocuments.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Button */}
              {activeResult.actionUrl && (
                <div className="pt-2">
                  <a
                    href={activeResult.actionUrl}
                    onClick={() => {
                      if (activeResult.actionUrl?.startsWith('#')) {
                        onClose();
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-md transition-colors"
                  >
                    <span>{activeResult.actionLabel || 'Lanjutkan Panduan'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ) : (
            /* Question Node Screen */
            <div className="space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                  Pertanyaan:
                </span>
                <h3 className="text-lg sm:text-xl font-black text-stone-900 leading-snug">
                  {currentNode.question}
                </h3>
                {currentNode.description && (
                  <p className="text-xs sm:text-sm text-stone-600">
                    {currentNode.description}
                  </p>
                )}
              </div>

              <div className="space-y-2.5 pt-2">
                {currentNode.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    className="w-full p-4 rounded-2xl border-2 border-stone-200 hover:border-emerald-500 hover:bg-emerald-50 text-left transition-all flex items-center justify-between gap-3 group cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-stone-800 group-hover:text-emerald-950">
                      {opt.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with navigation */}
        <div className="bg-[#FAF6EF] p-4 border-t border-stone-200 flex items-center justify-between gap-3">
          {(history.length > 0 || activeResult) ? (
            <button
              onClick={handleBack}
              className="text-xs sm:text-sm font-bold text-stone-700 hover:text-stone-900 px-3 py-1.5 rounded-lg border border-stone-300 bg-white cursor-pointer"
            >
              &larr; Kembali
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="text-xs text-stone-600 hover:text-stone-800 font-semibold flex items-center gap-1 px-2.5 py-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Mulai Ulang</span>
            </button>

            <button
              onClick={onClose}
              className="bg-stone-800 hover:bg-stone-900 text-white px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
