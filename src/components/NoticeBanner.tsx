import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, Landmark, ExternalLink, Smartphone } from 'lucide-react';

export const NoticeBanner: React.FC = () => {
  return (
    <div aria-label="Informasi Standar Pelayanan Publik" className="bg-[#FAF6EF] border-b border-amber-900/10 px-4 py-2.5 text-xs text-slate-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <Landmark className="w-4 h-4 text-emerald-800 shrink-0" />
          <p className="font-medium text-slate-800">
            <strong className="font-bold text-emerald-950">Terhubung Langsung ke Web Pemerintah:</strong> Syarat berkas dan pengajuan daring diproses melalui situs resmi Pemkab Talaud &amp; Dukcapil Ta-LoDa.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold shrink-0 flex-wrap">
          <span className="flex items-center gap-1.5 text-emerald-900 bg-emerald-100/80 border border-emerald-300 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            100% Bebas Biaya (Rp 0)
          </span>
          <span className="flex items-center gap-1.5 text-emerald-950 bg-white border border-emerald-900/15 px-2.5 py-0.5 rounded-full shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Aman Tanpa Meminta NIK
          </span>
          <span className="flex items-center gap-1.5 text-slate-800 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full shadow-2xs">
            <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
            Ramah Tampilan Handphone
          </span>
          <a
            href="https://talaudkab.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-800 hover:text-emerald-950 underline font-bold"
          >
            <span>talaudkab.go.id</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
