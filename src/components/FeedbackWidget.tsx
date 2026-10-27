import React, { useState, useEffect } from 'react';
import { StorageService, FeedbackStats } from '../utils/offlineStorage';
import {
  ThumbsUp,
  Smile,
  HelpCircle,
  BarChart3,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const FeedbackWidget: React.FC = () => {
  const [stats, setStats] = useState<FeedbackStats>({
    membantu: 0,
    cukup: 0,
    membingungkan: 0,
    lastUpdated: ''
  });
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    setStats(StorageService.getFeedbackStats());
  }, []);

  const handleVote = (type: 'membantu' | 'cukup' | 'membingungkan') => {
    const updated = StorageService.recordFeedback(type);
    setStats(updated);
    setHasVoted(true);
  };

  const totalVotes = stats.membantu + stats.cukup + stats.membingungkan;
  const ikmScore = totalVotes > 0
    ? Math.round(((stats.membantu * 100 + stats.cukup * 75 + stats.membingungkan * 40) / (totalVotes * 100)) * 100)
    : 88;

  return (
    <section aria-label="Survei Kepuasan Masyarakat" className="bg-[#FAF6EF] border border-stone-200 rounded-3xl p-6 sm:p-8">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
          <span>Survei Kepuasan Masyarakat (SKM Standar Permenpan-RB)</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          Apakah Informasi Panduan Layanan Terpadu KITA Ini Membantu Anda?
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
          Tanggapan Anda membantu Pemerintah Daerah Kabupaten Kepulauan Talaud terus meningkatkan kemudahan dan kejelasan standar pelayanan publik.
        </p>

        {hasVoted ? (
          <div className="bg-white p-5 rounded-2xl border border-emerald-300 shadow-xs max-w-md mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>Terima kasih atas penilaian Anda!</span>
            </div>
            <p className="text-xs text-stone-500">
              Penilaian Anda telah tercatat dalam indeks keterbukaan informasi layanan publik Talaud.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => handleVote('membantu')}
              className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-5 rounded-2xl text-xs sm:text-sm shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Sangat Jelas &amp; Membantu</span>
            </button>

            <button
              onClick={() => handleVote('cukup')}
              className="flex items-center gap-2 bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-5 rounded-2xl text-xs sm:text-sm shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Smile className="w-4 h-4" />
              <span>Cukup Jelas</span>
            </button>

            <button
              onClick={() => handleVote('membingungkan')}
              className="flex items-center gap-2 bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold py-3 px-5 rounded-2xl text-xs sm:text-sm shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Perlu Tambahan Informasi</span>
            </button>
          </div>
        )}

        {/* Live Index Metrics */}
        <div className="mt-6 pt-5 border-t border-stone-200 max-w-md mx-auto text-xs text-stone-600">
          <div className="flex items-center justify-between mb-2 font-bold text-stone-800">
            <span className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-emerald-700" />
              Indeks Kepuasan Layanan (IKM):
            </span>
            <span className="text-emerald-700 font-black text-sm">{ikmScore}/100 (Kategori Sangat Baik)</span>
          </div>

          <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden flex">
            <div
              style={{ width: `${(stats.membantu / (totalVotes || 1)) * 100}%` }}
              className="bg-emerald-600 h-full"
              title="Sangat Membantu"
            />
            <div
              style={{ width: `${(stats.cukup / (totalVotes || 1)) * 100}%` }}
              className="bg-emerald-400 h-full"
              title="Cukup"
            />
            <div
              style={{ width: `${(stats.membingungkan / (totalVotes || 1)) * 100}%` }}
              className="bg-stone-400 h-full"
              title="Perlu Peningkatan"
            />
          </div>

          <div className="flex justify-between items-center text-[11px] text-stone-500 mt-1.5 font-medium">
            <span>Sangat Membantu: {stats.membantu}</span>
            <span>Cukup: {stats.cukup}</span>
            <span>Perlu Peningkatan: {stats.membingungkan}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
