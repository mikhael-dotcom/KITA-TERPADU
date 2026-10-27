import React, { useState, useEffect } from 'react';
import { ServiceItem, AccessibilityMode } from '../types/service';
import { StorageService } from '../utils/offlineStorage';
import { generateIcsFile, createWhatsAppReminderUrl } from '../utils/calendarExport';
import { SpeechService } from '../utils/textToSpeech';
import {
  X,
  CheckSquare,
  Clock,
  ExternalLink,
  Calendar,
  Share2,
  Volume2,
  ShieldCheck,
  AlertTriangle,
  Building,
  Eye,
  CheckCircle2,
  FileCheck2,
  Landmark,
  ArrowUpRight
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  mode: AccessibilityMode;
  dataSaver: boolean;
  onClose: () => void;
  onOpenLansiaGuide: (s: ServiceItem) => void;
  onOpenAntiFraud: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  mode,
  dataSaver,
  onClose,
  onOpenLansiaGuide,
  onOpenAntiFraud
}) => {
  if (!service) return null;

  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [targetVisitDate, setTargetVisitDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split('T')[0];
  });

  useEffect(() => {
    if (service) {
      const stored = StorageService.getChecklist(service.id);
      setCheckedDocs(stored);
    }
  }, [service]);

  const toggleDoc = (docId: string) => {
    const updated = { ...checkedDocs, [docId]: !checkedDocs[docId] };
    setCheckedDocs(updated);
    if (service) {
      StorageService.saveChecklist(service.id, updated);
    }
  };

  const completedCount = service.documents.filter(d => checkedDocs[d.id]).length;
  const totalCount = service.documents.length;
  const isAllReady = completedCount === totalCount;

  const handleReadAloud = () => {
    if (isSpeaking) {
      SpeechService.stop();
      setIsSpeaking(false);
    } else {
      const textToRead = `Panduan ${service.title}. ${service.shortDesc}. Siapa yang butuh: ${service.whoNeeds}. ` +
        `Biaya: ${service.cost}. Estimasi waktu: ${service.estimatedTime}. ` +
        `Dokumen yang harus dibawa: ${service.documents.map(d => d.name).join(', ')}. ` +
        `Untuk pengurusan, kami menghubungkan Anda langsung ke situs resmi pemerintah di ${service.officialGovPortalName}.`;
      setIsSpeaking(true);
      SpeechService.speak(textToRead, () => setIsSpeaking(false), () => setIsSpeaking(false));
    }
  };

  const handleSaveToCalendar = () => {
    const visitDate = new Date(targetVisitDate);
    visitDate.setHours(9, 0, 0, 0);

    const docNames = service.documents.map(d => `- ${d.name}`).join('\n');
    generateIcsFile({
      title: `Urus ${service.title} di Talaud`,
      description: `Rencana pengurusan layanan publik.\n\nDokumen yang dibawa:\n${docNames}\n\nIngat: Dokumen di Kepulauan Talaud harus lengkap dalam map plastik agar aman saat perjalanan laut!`,
      location: service.destinationOffice,
      startDate: visitDate,
      durationMinutes: 120
    });
  };

  const handleSendWhatsAppReminder = () => {
    const docNames = service.documents.map(d => d.name + (checkedDocs[d.id] ? ' [Sudah Siap]' : ' [Belum Siap]'));
    const url = createWhatsAppReminderUrl({
      serviceTitle: service.title,
      dateStr: targetVisitDate,
      officeName: service.destinationOffice,
      docsList: docNames
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-title"
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      <div className="bg-[#FAF6EF] rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col border-2 border-emerald-900/20 overflow-hidden my-auto">
        {/* Header - Forest Green */}
        <div className="bg-[#14532d] text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-emerald-900">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-emerald-800 text-emerald-200 text-xs font-bold px-3 py-0.5 rounded-full border border-emerald-600">
                {service.categoryLabel}
              </span>
              <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-md">
                100% Bebas Biaya (Rp 0)
              </span>
              {service.canDoFromHome && (
                <span className="bg-amber-400 text-slate-950 text-xs font-bold px-2.5 py-0.5 rounded-md">
                  Bisa Selesai dari Rumah
                </span>
              )}
            </div>
            <h2 id="service-detail-title" className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {service.title}
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm font-medium leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleReadAloud}
              aria-label="Bacakan panduan ini"
              className={`p-2.5 rounded-2xl border transition-colors ${
                isSpeaking
                  ? 'bg-amber-400 text-slate-950 border-amber-300 animate-pulse'
                  : 'bg-emerald-900 hover:bg-emerald-800 text-white border-emerald-700'
              }`}
              title="Dengarkan Suara Pembaca"
            >
              <Volume2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                SpeechService.stop();
                onClose();
              }}
              aria-label="Tutup modal panduan"
              className="p-2.5 rounded-2xl bg-emerald-900 hover:bg-emerald-800 text-white border border-emerald-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body - Cream & White Cards */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-800">
          {/* Government Connection Card: Direct Link to Government Web */}
          <div className="bg-white border-2 border-emerald-600/30 p-4 sm:p-5 rounded-3xl shadow-xs space-y-2">
            <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-emerald-100 rounded-2xl text-emerald-800 shrink-0 mt-0.5">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">
                    Terhubung ke Web Resmi Pemerintah
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Data syarat, formulir, dan ketentuan pengurusan kependudukan ini bersumber resmi dari <strong>{service.officialGovPortalName}</strong>.
                  </p>
                </div>
              </div>

              <a
                href={service.officialGovRequirementsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#166534] hover:bg-[#14532d] text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all shrink-0"
              >
                <span>Buka Web Resmi Pemerintah</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white border border-emerald-900/10 p-4 rounded-2xl shadow-2xs">
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Biaya Layanan</span>
              <span className="text-base font-black text-emerald-800 mt-1 block flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {service.cost}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Sesuai UU No. 24/2013</span>
            </div>

            <div className="bg-white border border-emerald-900/10 p-4 rounded-2xl shadow-2xs">
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Waktu Proses</span>
              <span className="text-base font-black text-slate-900 mt-1 block flex items-center gap-1">
                <Clock className="w-4 h-4 text-emerald-700" />
                {service.estimatedTime}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Bila berkas lengkap &amp; jaringan normal</span>
            </div>

            <div className="bg-white border border-emerald-900/10 p-4 rounded-2xl shadow-2xs">
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Kantor Tujuan</span>
              <span className="text-sm font-bold text-slate-900 mt-1 block flex items-center gap-1">
                <Building className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="truncate">{service.destinationOffice}</span>
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Pusat Layanan Melonguane / Camat</span>
            </div>
          </div>

          {/* Interactive Document Checklist with Direct Government Links */}
          <div className="bg-white border-2 border-emerald-900/15 rounded-3xl p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-emerald-700" />
                  Daftar Berkas Persyaratan (Checklist Mandiri)
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Centang dokumen yang sudah Anda siapkan. Anda juga dapat menekan tautan di tiap berkas untuk mengecek standar aslinya di web pemerintah.
                </p>
              </div>

              {/* Progress pill */}
              <div className="bg-[#FAF6EF] border border-emerald-900/15 px-3.5 py-1.5 rounded-xl shadow-2xs text-xs font-bold text-emerald-950 flex items-center gap-2 self-start sm:self-auto">
                <span>Kesiapan Berkas:</span>
                <span className={`px-2 py-0.5 rounded-md ${isAllReady ? 'bg-[#166534] text-white font-black' : 'bg-amber-100 text-amber-950 font-bold'}`}>
                  {completedCount} dari {totalCount} Siap
                </span>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              {service.documents.map((doc) => {
                const isChecked = !!checkedDocs[doc.id];
                return (
                  <div
                    key={doc.id}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-400 shadow-2xs'
                        : 'bg-[#FAF6EF]/60 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <label className="flex items-start gap-3.5 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDoc(doc.id)}
                        className="mt-1 w-5 h-5 text-emerald-700 rounded cursor-pointer shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`font-bold text-sm sm:text-base ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                            {doc.name}
                          </span>
                          {doc.isMandatory ? (
                            <span className="text-[11px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                              Wajib
                            </span>
                          ) : (
                            <span className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                              Opsional
                            </span>
                          )}
                        </div>
                        {doc.notes && (
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {doc.notes}
                          </p>
                        )}
                        {doc.sampleHint && (
                          <p className="text-xs text-emerald-900 font-semibold mt-1 bg-emerald-100/70 px-2.5 py-0.5 rounded-md inline-block">
                            Petunjuk fisik: {doc.sampleHint}
                          </p>
                        )}
                      </div>
                    </label>

                    {/* Direct Government Document Verification Link */}
                    {doc.officialGovUrl && (
                      <a
                        href={doc.officialGovUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-end sm:self-center text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-white hover:bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-900/20 flex items-center gap-1 shadow-2xs transition-colors shrink-0"
                        title={`Buka verifikasi ${doc.name} di situs resmi pemerintah`}
                      >
                        <span>Cek di Web Resmi</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Advisory note */}
            <div className="mt-4 p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                <strong>Perhatian Wilayah Kepulauan Talaud:</strong> Berkas yang tertinggal mengharuskan Anda menyeberang perahu bolak-balik berbiaya mahal. Pastikan semua berkas telah masuk ke map plastik sebelum berangkat.
              </span>
            </div>
          </div>

          {/* Workflow Steps */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Alur Tahapan Pengurusan
              </h3>
              <button
                onClick={() => onOpenLansiaGuide(service)}
                className="text-xs font-black bg-amber-400 text-slate-950 hover:bg-amber-300 px-3.5 py-2 rounded-xl border border-amber-500 flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <Eye className="w-4 h-4" />
                <span>Lihat Panduan Bergambar (Mode Lansia)</span>
              </button>
            </div>

            <div className="space-y-3">
              {service.steps.map((st) => (
                <div key={st.stepNumber} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-[#166534] text-white font-black flex items-center justify-center shrink-0 text-sm shadow-xs">
                    {st.stepNumber}
                  </div>
                  <div className="space-y-1 flex-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {st.description}
                    </p>
                    {st.lansiaDetail && (
                      <p className="text-xs bg-amber-50 text-amber-950 p-2.5 rounded-xl border border-amber-200 mt-2 font-medium">
                        Tips Orang Tua / Keluarga: {st.lansiaDetail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Self-Reminder Tools */}
          <div className="bg-white border-2 border-emerald-900/15 rounded-3xl p-5 shadow-xs">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2 mb-1.5">
              <Calendar className="w-4 h-4 text-emerald-700" />
              Pengingat Mandiri (Tersimpan di Handphone Anda)
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Pilih tanggal rencana Anda untuk mengunduh alarm kalender ponsel atau mengirim catatan ringkas ke WhatsApp pribadi.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:w-auto">
                <label htmlFor="visit-date-input" className="block text-xs font-bold text-slate-700 mb-1">
                  Pilih Tanggal Rencana:
                </label>
                <input
                  id="visit-date-input"
                  type="date"
                  value={targetVisitDate}
                  onChange={(e) => setTargetVisitDate(e.target.value)}
                  className="bg-[#FAF6EF] border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto sm:mt-5 flex-wrap">
                <button
                  onClick={handleSaveToCalendar}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-[#166534] hover:bg-[#14532d] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Simpan ke Kalender (.ics)</span>
                </button>

                <button
                  onClick={handleSendWhatsAppReminder}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Kirim ke WhatsApp Saya</span>
                </button>
              </div>
            </div>
          </div>

          {/* Direct Government Application Button */}
          <div className="p-5 bg-[#14532d] text-white rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase">
                  Website Resmi Pemerintah
                </span>
                <span className="text-xs text-emerald-200">{service.officialGovPortalName}</span>
              </div>
              <p className="text-xs text-emerald-100">
                Lanjutkan pendaftaran daring, unduh berkas asli, atau verifikasi antrean di portal resmi pemerintah Kabupaten Kepulauan Talaud.
              </p>
            </div>

            <a
              href={service.officialActionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-5 py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shrink-0 shadow-sm transition-colors"
            >
              <span>{service.officialActionLabel}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF6EF] p-4 border-t border-amber-900/10 flex items-center justify-between gap-3">
          <button
            onClick={onOpenAntiFraud}
            className="text-xs text-emerald-950 font-bold hover:underline flex items-center gap-1"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Pusat Edukasi Keamanan &amp; Bebas Pungli</span>
          </button>

          <button
            onClick={() => {
              SpeechService.stop();
              onClose();
            }}
            className="bg-[#166534] hover:bg-[#14532d] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
