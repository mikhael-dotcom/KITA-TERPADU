import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import {
  Printer,
  X,
  ExternalLink
} from 'lucide-react';

interface PrintableGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableGuideModal: React.FC<PrintableGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="print-guide-title"
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full border border-stone-200 overflow-hidden my-auto flex flex-col max-h-[94vh]">
        {/* Header - Not printed */}
        <div className="no-print bg-[#166534] text-white p-5 flex items-center justify-between border-b-4 border-emerald-400">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-400 text-stone-950 px-2 py-0.5 rounded">
              FORMAT SIAP CETAK A4
            </span>
            <h2 id="print-guide-title" className="text-lg sm:text-xl font-black mt-1">
              Lembar Panduan Resmi Warga &amp; Kader Desa
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-white hover:bg-stone-100 text-emerald-950 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-emerald-800" />
              <span>Cetak Sekarang (Print / PDF)</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Sheet (Standard A4, ink-efficient black/white typography) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-black bg-white print-page">
          {/* Sheet Header */}
          <div className="border-b-2 border-black pb-4 text-center">
            <span className="text-xs font-bold uppercase tracking-wider block">
              PEMERINTAH KABUPATEN KEPULAUAN TALAUD &bull; DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL
            </span>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
              KITA (Kanal Informasi dan Terpadu Aspirasi)
            </h1>
            <p className="text-xs mt-1 text-stone-700 font-medium">
              Panduan Resmi Kelengkapan Dokumen Sebelum Berangkat Menyeberang Antarpulau
            </p>
          </div>

          {/* Core Warning Notice */}
          <div className="border-2 border-black p-3.5 rounded-lg text-xs leading-relaxed">
            <strong>PERINGATAN PENTING UNTUK WARGA:</strong> Seluruh pelayanan kependudukan di Kabupaten Kepulauan Talaud adalah <strong>100% BEBAS BIAYA (GRATIS RP 0)</strong>. Dilarang memberikan imbalan kepada calo. Pastikan berkas di bawah ini telah lengkap di dalam map plastik anti-air sebelum berlayar ke loket Melonguane atau kantor kecamatan.
          </div>

          {/* Quick Summary of Top Services */}
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider border-b border-black pb-1">
              Ringkasan Persyaratan Dokumen Utama:
            </h2>

            {SERVICES_DATA.slice(0, 5).map((srv, idx) => (
              <div key={srv.id} className="border border-stone-400 p-3 rounded text-xs">
                <div className="flex justify-between items-start font-bold text-sm mb-1">
                  <span>{idx + 1}. {srv.title}</span>
                  <span className="text-[11px] bg-stone-100 px-2 py-0.5 rounded border border-stone-300">
                    {srv.canDoFromHome ? 'Bisa dari Rumah (Online/Desa)' : 'Wajib Hadir Langsung'}
                  </span>
                </div>
                <div className="text-[11px] text-stone-800 mb-1">
                  <strong>Dokumen yang Dibawa:</strong> {srv.documents.map((d) => d.name).join('; ')}
                </div>
                <div className="text-[11px] text-stone-600">
                  <strong>Lokasi Tujuan:</strong> {srv.destinationOffice} &bull; <strong>Biaya:</strong> {srv.cost} &bull; <strong>Portal Resmi:</strong> {srv.officialGovPortalName}
                </div>
              </div>
            ))}
          </div>

          {/* Official Island Contacts */}
          <div className="border-t border-black pt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider mb-2">
              Kanal Pelayanan &amp; Pengaduan Resmi:
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <strong>Disdukcapil Melonguane:</strong><br />
                Telepon: (0433) 21102<br />
                WhatsApp Loket Resmi: +62 821-9555-8822<br />
                Aplikasi Daring: Ta-LoDa Talaud &bull; talaudkab.go.id
              </div>
              <div>
                <strong>Kanal Aduan &amp; Pengawasan Pungli:</strong><br />
                Portal Nasional: www.lapor.go.id<br />
                Ombudsman RI Sulut: 0811-4322-000<br />
                Inspektorat Daerah Talaud: Kompleks Pemkab Melonguane
              </div>
            </div>
          </div>

          {/* Sheet Footer */}
          <div className="border-t border-dashed border-stone-400 pt-3 text-[10px] text-stone-600 flex justify-between">
            <span>Diterbitkan melalui KITA (Kanal Informasi dan Terpadu Aspirasi) Kab. Kepulauan Talaud</span>
            <span>Standar Pelayanan 2026 &bull; Bebas Pengumpulan NIK Warga</span>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="no-print bg-[#FAF6EF] p-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-stone-800 hover:bg-stone-900 text-white px-5 py-2 rounded-xl font-bold text-xs sm:text-sm cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
