import React, { useState } from 'react';
import {
  Smartphone,
  Copy,
  Check,
  ExternalLink,
  ShieldAlert,
  AlertTriangle,
  QrCode,
  Info,
  Laptop
} from 'lucide-react';

interface MobileAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileAccessModal: React.FC<MobileAccessModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' && window.location.href
    ? window.location.href.split('?')[0]
    : 'https://ais-pre-bbzzucgjzdycma4342zkl4-433289161561.asia-east1.run.app';

  const previewUrl = 'https://ais-pre-bbzzucgjzdycma4342zkl4-433289161561.asia-east1.run.app';

  const handleCopy = (urlToCopy: string) => {
    navigator.clipboard.writeText(urlToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // QR Code SVG representation for quick scanning
  const qrCodeApi = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(previewUrl)}&margin=10`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-2 border-emerald-600/30 my-8 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-900/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#166534] text-white flex items-center justify-center shadow-md">
              <Smartphone className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#14532d]">
                Buka &amp; Coba di Handphone (HP)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Akses KITA Talaud melalui smartphone Anda dengan tampilan responsif
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Tutup jendela"
          >
            &times;
          </button>
        </div>

        <div className="space-y-6 pt-5">
          {/* Active Link Box */}
          <div className="bg-[#FAF6EF] p-4 rounded-2xl border-2 border-emerald-800/20">
            <label className="text-xs font-black uppercase tracking-wider text-emerald-950 block mb-1.5">
              Link Tautan Aktif Aplikasi:
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <input
                type="text"
                readOnly
                value={previewUrl}
                className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono text-slate-800 font-semibold focus:outline-none"
              />
              <button
                onClick={() => handleCopy(previewUrl)}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#166534] hover:bg-[#14532d] text-white rounded-xl text-xs sm:text-sm font-bold shrink-0 shadow-sm transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* QR Code & Direct Scan Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-4 rounded-2xl border border-slate-200">
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-44 h-44 bg-slate-50 border-2 border-emerald-600/30 rounded-2xl p-2 flex items-center justify-center shadow-inner">
                <img
                  src={qrCodeApi}
                  alt="QR Code Akses Smartphone"
                  className="w-full h-full object-contain rounded-xl"
                  onError={(e) => {
                    // Fallback if external QR service is blocked by CSP
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-[11px] font-bold text-slate-600 mt-2 flex items-center gap-1">
                <QrCode className="w-3.5 h-3.5 text-emerald-700" />
                Scan langsung dengan kamera HP Anda
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-sm text-[#14532d] flex items-center gap-1.5">
                <Laptop className="w-4 h-4" />
                Dua Cara Mudah Membuka:
              </h3>
              <ol className="text-xs text-slate-700 space-y-2.5 list-decimal pl-4">
                <li>
                  <strong>Buka di Tab Baru Langsung:</strong> Klik tombol &quot;Buka di Tab Baru&quot; di bawah untuk membuka halaman penuh di browser Anda.
                </li>
                <li>
                  <strong>Scan QR Code dengan Kamera HP:</strong> Buka aplikasi kamera di ponsel Anda, arahkan ke kode QR di samping untuk langsung mengunjungi portal.
                </li>
              </ol>
              <div className="pt-2">
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka di Tab Browser Baru Sekarang</span>
                </a>
              </div>
            </div>
          </div>

          {/* Critical Troubleshooting Notice: Why link might fail on other devices */}
          <div className="bg-amber-50 border-2 border-amber-400/80 rounded-2xl p-4 text-xs space-y-2.5">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-amber-950 text-sm">
                  Penting: Kenapa Link Bisa Muncul Pesan &quot;403 Forbidden&quot; atau Tidak Terbuka di HP?
                </h4>
                <p className="text-amber-900 mt-1 leading-relaxed">
                  Tautan <code>ais-pre-...run.app</code> berada di bawah proteksi sesi akun Google pembuat aplikasi. Jika Anda membuka tautan tersebut di peramban HP (seperti Chrome di Android atau Safari di iPhone), pastikan ponsel Anda sedang <strong>login ke akun Google yang sama</strong> dengan yang Anda pakai di Google AI Studio.
                </p>
              </div>
            </div>
            
            <div className="bg-white/80 p-3 rounded-xl border border-amber-300 text-amber-950 space-y-1.5 text-[11px]">
              <p className="font-bold">Tips Cepat jika membuka di Handphone:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-700">
                <li>Buka aplikasi Chrome di HP &rarr; pastikan akun Google aktif &rarr; paste tautan yang sudah disalin.</li>
                <li>Jika menguji dari laptop, cukup klik ikon <strong>&quot;Open preview in new tab&quot;</strong> di pojok kanan atas jendela Preview AI Studio.</li>
                <li>Anda juga bisa menekan <code>F12</code> di keyboard &rarr; klik ikon HP (Device Toolbar) di Chrome untuk melihat simulasi tampilan HP secara langsung.</li>
              </ul>
            </div>
          </div>

          {/* Mobile Readiness Features Check */}
          <div className="bg-[#FAF6EF] p-4 rounded-2xl border border-emerald-900/10">
            <span className="text-xs font-bold text-slate-700 block mb-2">
              Fitur HP yang sudah aktif di portal ini:
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
                <span>Navigasi bawah khusus layar sentuh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
                <span>Mode Lansia bergambar besar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
                <span>Teks dapat dibesarkan ekstra besar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
                <span>Mode hemat kuota untuk sinyal 3T</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
