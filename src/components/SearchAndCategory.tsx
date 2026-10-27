import React from 'react';
import { Search, X, Sparkles, Filter } from 'lucide-react';

interface SearchAndCategoryProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  resultCount: number;
}

const CATEGORIES = [
  { id: 'all', label: 'Semua Layanan' },
  { id: 'ktp', label: 'KTP-el' },
  { id: 'kk', label: 'Kartu Keluarga' },
  { id: 'akta', label: 'Akta Capil' },
  { id: 'kia', label: 'KIA Anak' },
  { id: 'pindah', label: 'Pindah Domisili' },
  { id: 'bpjs', label: 'BPJS & Bansos' },
  { id: 'jemput', label: 'Layanan Jemput Bola' }
];

const SUGGESTIONS = [
  'Rekam KTP baru 17 tahun',
  'KTP hilang / patah',
  'Akta kelahiran bayi',
  'Pecah Kartu Keluarga pengantin baru',
  'Surat pindah domisili antarpulau',
  'Jemput bola lansia sakit di rumah'
];

export const SearchAndCategory: React.FC<SearchAndCategoryProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  resultCount
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-emerald-900/10 space-y-4">
      {/* Modern Search Field */}
      <div>
        <label htmlFor="service-search-input" className="block text-xs font-black uppercase tracking-wider text-emerald-950 mb-2">
          Cari Kebutuhan Layanan atau Masalah Dokumen:
        </label>
        <div className="relative flex items-center">
          <div className="absolute left-4 text-emerald-700 pointer-events-none">
            <Search className="w-5 h-5" />
          </div>
          <input
            id="service-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Ketik apa saja, misal: 'KTP hilang', 'bikin akta bayi', 'pecah KK'..."
            className="w-full pl-12 pr-11 py-3.5 bg-[#FAF6EF]/70 border-2 border-emerald-900/15 rounded-2xl text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg transition-colors"
              aria-label="Bersihkan pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Suggested Quick Queries */}
      <div className="flex items-center gap-2 flex-wrap text-xs">
        <span className="text-emerald-900 font-bold flex items-center gap-1 shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Pencarian Cepat:
        </span>
        {SUGGESTIONS.map((sug) => (
          <button
            key={sug}
            onClick={() => onSearchChange(sug)}
            className="bg-[#FAF6EF] hover:bg-emerald-100/70 text-emerald-950 px-3 py-1.5 rounded-full transition-colors font-semibold border border-emerald-900/15"
          >
            {sug}
          </button>
        ))}
      </div>

      {/* Category Pills & Count */}
      <div className="pt-3 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#166534] text-white shadow-xs'
                  : 'bg-[#FAF6EF] text-slate-700 hover:text-emerald-950 hover:bg-emerald-100/50 border border-emerald-900/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-600 font-medium shrink-0">
          Tersedia <strong className="text-emerald-900 font-black">{resultCount}</strong> panduan layanan
        </div>
      </div>
    </div>
  );
};
