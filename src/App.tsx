import React, { useState, useEffect, useMemo } from 'react';
import {
  AccessibilityMode,
  VisualTheme,
  FontSizeLevel,
  ServiceItem
} from './types/service';
import { SERVICES_DATA } from './data/servicesData';
import { searchServices } from './utils/searchHelper';
import { StorageService } from './utils/offlineStorage';

// Components
import { Header } from './components/Header';
import { NoticeBanner } from './components/NoticeBanner';
import { SearchAndCategory } from './components/SearchAndCategory';
import { ServiceCard } from './components/ServiceCard';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LansiaStepGuide } from './components/LansiaStepGuide';
import { OfficeLocator } from './components/OfficeLocator';
import { MultiTripPlanner } from './components/MultiTripPlanner';
import { DecisionTreeModal } from './components/DecisionTreeModal';
import { LifeEventNavigator } from './components/LifeEventNavigator';
import { AntiFraudModal } from './components/AntiFraudModal';
import { DisabilitySupportCard } from './components/DisabilitySupportCard';
import { GlossaryModal } from './components/GlossaryModal';
import { AboutAndPrivacyModal } from './components/AboutAndPrivacyModal';
import { PrintableGuideModal } from './components/PrintableGuideModal';
import { FeedbackWidget } from './components/FeedbackWidget';
import { MobileBottomNav } from './components/MobileBottomNav';
import { MobileAccessModal } from './components/MobileAccessModal';

// Icons
import {
  Ship,
  HelpCircle,
  GitFork,
  MapPin,
  Accessibility,
  BookOpen,
  ShieldCheck,
  Compass,
  ExternalLink,
  CheckCircle2,
  Landmark,
  Smartphone,
  Eye,
  FileCheck
} from 'lucide-react';

export default function App() {
  // Modes & Accessibility
  const [mode, setMode] = useState<AccessibilityMode>('umum');
  const [dataSaver, setDataSaver] = useState<boolean>(() => StorageService.getDataSaver());
  const [visualTheme, setVisualTheme] = useState<VisualTheme>('default');
  const [fontSize, setFontSize] = useState<FontSizeLevel>('normal');
  const [motoricMode, setMotoricMode] = useState<boolean>(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<string>('layanan');

  // Search & Filtering
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modals
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [lansiaGuideService, setLansiaGuideService] = useState<ServiceItem | null>(null);
  const [isDecisionTreeOpen, setIsDecisionTreeOpen] = useState<boolean>(false);
  const [isAntiFraudOpen, setIsAntiFraudOpen] = useState<boolean>(false);
  const [isDisabilityCardOpen, setIsDisabilityCardOpen] = useState<boolean>(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [isPrintGuideOpen, setIsPrintGuideOpen] = useState<boolean>(false);
  const [isMobileAccessOpen, setIsMobileAccessOpen] = useState<boolean>(false);

  // Sync Data Saver
  const handleDataSaverToggle = (enabled: boolean) => {
    setDataSaver(enabled);
    StorageService.setDataSaver(enabled);
  };

  // Sync Body Classes for Theme & Font Size
  useEffect(() => {
    const classList = document.body.classList;
    classList.remove('theme-high-contrast', 'theme-colorblind');
    if (visualTheme === 'high-contrast') classList.add('theme-high-contrast');
    if (visualTheme === 'colorblind') classList.add('theme-colorblind');

    classList.remove('font-large', 'font-xlarge');
    if (fontSize === 'large' || mode === 'lansia') classList.add('font-large');
    if (fontSize === 'xlarge') classList.add('font-xlarge');

    if (motoricMode) {
      classList.add('theme-motoric');
    } else {
      classList.remove('theme-motoric');
    }
  }, [visualTheme, fontSize, motoricMode, mode]);

  // Filtered services
  const filteredServices = useMemo(() => {
    return searchServices(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  const handleOpenLansiaGuide = (service: ServiceItem) => {
    setLansiaGuideService(service);
  };

  const handleSelectServiceById = (serviceId: string) => {
    const found = SERVICES_DATA.find((s) => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  const handleTabSelect = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'decision') {
      setIsDecisionTreeOpen(true);
      return;
    }
    const sectionMap: Record<string, string> = {
      layanan: 'services-section',
      planner: 'trip-planner',
      events: 'life-events',
      offices: 'offices'
    };
    const targetId = sectionMap[tabId];
    if (targetId) {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EF] text-stone-900 flex flex-col font-sans antialiased selection:bg-emerald-700 selection:text-white pb-20 md:pb-0">
      {/* Top Header */}
      <Header
        mode={mode}
        onModeChange={setMode}
        dataSaver={dataSaver}
        onDataSaverChange={handleDataSaverToggle}
        visualTheme={visualTheme}
        onThemeChange={setVisualTheme}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        motoricMode={motoricMode}
        onMotoricModeChange={setMotoricMode}
        activeTab={activeTab}
        onTabChange={handleTabSelect}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenAntiFraud={() => setIsAntiFraudOpen(true)}
        onOpenPrintGuide={() => setIsPrintGuideOpen(true)}
        onOpenMobileAccess={() => setIsMobileAccessOpen(true)}
      />

      {/* Official Government Connection Notice Banner */}
      <NoticeBanner />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:py-8 space-y-8">
        {/* Hero Banner: Forest Green & Cream & Gold Badges */}
        <section aria-label="Ringkasan Portal" className="bg-[#166534] text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 text-white font-black text-xs px-3 py-1.5 rounded-full uppercase tracking-wider border border-emerald-500/30">
                <Compass className="w-3.5 h-3.5 text-emerald-300" />
                <span>Portal Resmi KITA &bull; Kab. Kepulauan Talaud</span>
              </span>
              <button
                onClick={() => setIsMobileAccessOpen(true)}
                className="text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-3 py-1 rounded-full border border-amber-500 flex items-center gap-1.5 shadow-xs cursor-pointer transition-transform hover:scale-105"
                title="Buka atau salin link untuk handphone"
              >
                <Smartphone className="w-3.5 h-3.5 text-slate-950" />
                <span>Buka di Handphone (Link &amp; QR)</span>
              </button>
              {mode === 'lansia' && (
                <span className="text-xs font-black text-amber-950 bg-amber-300 px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                  <Eye className="w-3.5 h-3.5 text-amber-950" />
                  <span>Mode Lansia Aktif: Tampilan Mengutamakan Gambar</span>
                </span>
              )}
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                KITA (Kanal Informasi dan Terpadu Aspirasi)
              </h1>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Panduan resmi syarat berkas kependudukan terpadu Kabupaten Kepulauan Talaud. Terhubung langsung ke website resmi pemerintah agar warga tidak perlu bolak-balik menyeberang laut. Seluruh pengurusan dokumen <strong>100% Bebas Biaya (Gratis Rp 0)</strong> tanpa calo.
              </p>
            </div>

            {/* Live Operational Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-emerald-700/60">
              <div className="p-3.5 bg-white/10 backdrop-blur-xs rounded-2xl border border-white/15">
                <span className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider block">Biaya Retribusi</span>
                <span className="text-base sm:text-lg font-black text-white flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Gratis Rp 0
                </span>
                <span className="text-[10px] text-emerald-200">Bebas pungutan liar</span>
              </div>

              <div className="p-3.5 bg-white/10 backdrop-blur-xs rounded-2xl border border-white/15">
                <span className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider block">Wilayah Terlayani</span>
                <span className="text-base sm:text-lg font-black text-white flex items-center gap-1 mt-0.5">
                  <Landmark className="w-4 h-4 text-emerald-300" />
                  19 Kecamatan
                </span>
                <span className="text-[10px] text-emerald-200">Karakelang, Salibabu, Kabaruan, Nanusa, Miangas</span>
              </div>

              <div className="p-3.5 bg-white/10 backdrop-blur-xs rounded-2xl border border-white/15">
                <span className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider block">Web Pemerintah</span>
                <span className="text-base sm:text-lg font-black text-white flex items-center gap-1 mt-0.5">
                  <ExternalLink className="w-4 h-4 text-emerald-300" />
                  talaudkab.go.id
                </span>
                <span className="text-[10px] text-emerald-200">Link berkas &amp; formulir resmi</span>
              </div>

              <div className="p-3.5 bg-white/10 backdrop-blur-xs rounded-2xl border border-white/15">
                <span className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider block">Keamanan Privasi</span>
                <span className="text-base sm:text-lg font-black text-white flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Zero-NIK Storage
                </span>
                <span className="text-[10px] text-emerald-200">Privat di perangkat Anda</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Navigation Cards */}
        <section aria-label="Menu Akses Cepat" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => handleTabSelect('planner')}
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors w-fit mb-2">
              <Ship className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                Satu Perjalanan
              </h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Gabung urusan &amp; jadwal perahu</p>
            </div>
          </button>

          <button
            onClick={() => setIsDecisionTreeOpen(true)}
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition-colors w-fit mb-2">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                Perlu ke Kantor?
              </h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Pohon keputusan hemat ongkos</p>
            </div>
          </button>

          <button
            onClick={() => handleTabSelect('events')}
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors w-fit mb-2">
              <GitFork className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                Peristiwa Hidup
              </h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Lahir, nikah, pindah, wafat</p>
            </div>
          </button>

          <button
            onClick={() => handleTabSelect('offices')}
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors w-fit mb-2">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                Kantor &amp; Peta Laut
              </h3>
              <p className="text-[11px] text-stone-500 mt-0.5">19 Kecamatan Talaud</p>
            </div>
          </button>

          <button
            onClick={() => setIsDisabilityCardOpen(true)}
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors w-fit mb-2">
              <Accessibility className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                Bantuan Disabilitas
              </h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Pesan kursi roda &amp; pendamping</p>
            </div>
          </button>

          <button
            onClick={() => setIsGlossaryOpen(true)}
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
          >
            <div className="p-2.5 rounded-xl bg-stone-100 text-stone-700 group-hover:bg-stone-800 group-hover:text-white transition-colors w-fit mb-2">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                Kamus Birokrasi
              </h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Penjelasan KK, KIA, TTE, IKD</p>
            </div>
          </button>
        </section>

        {/* Section: Search and Filter */}
        <section id="services-section" aria-label="Katalog Layanan Publik" className="scroll-mt-32">
          <SearchAndCategory
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            resultCount={filteredServices.length}
          />
        </section>

        {/* Section: Services Grid */}
        <section aria-label="Daftar Layanan Publik">
          {filteredServices.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 text-center border border-stone-200 space-y-3">
              <HelpCircle className="w-10 h-10 text-stone-400 mx-auto" />
              <h3 className="text-base font-bold text-stone-800">
                Layanan tidak ditemukan untuk kata kunci &quot;{searchQuery}&quot;
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
                Silakan coba kata kunci lain seperti: KTP, KK, akta lahir, pindah domisili, atau klik tombol di bawah untuk menampilkan seluruh katalog.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-emerald-900 transition-colors cursor-pointer"
              >
                Tampilkan Semua Layanan
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  mode={mode}
                  onSelect={setSelectedService}
                  onOpenLansiaGuide={handleOpenLansiaGuide}
                />
              ))}
            </div>
          )}
        </section>

        {/* Section: Satu Perjalanan, Banyak Urusan (Multi-Trip Planner) */}
        <MultiTripPlanner />

        {/* Section: Navigator Peristiwa Hidup */}
        <LifeEventNavigator onSelectServiceById={handleSelectServiceById} />

        {/* Section: Kantor Terdekat & Peta Laut */}
        <OfficeLocator />

        {/* Section: Survei Kepuasan Masyarakat (Permenpan-RB) */}
        <FeedbackWidget />
      </main>

      {/* Modern Official Footer */}
      <footer className="no-print bg-stone-900 text-stone-400 text-xs py-10 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
            <div className="space-y-1.5 max-w-lg">
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-base tracking-tight">
                  KITA &bull; KANAL INFORMASI DAN TERPADU ASPIRASI
                </span>
                <span className="bg-emerald-400 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded uppercase">
                  Resmi
                </span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">
                Portal Panduan Standar Pelayanan Publik Terpadu Kabupaten Kepulauan Talaud. Terhubung ke website resmi pemerintah daerah, ramah lansia dengan gambar dominan, dan siap digunakan dari handphone.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap text-xs">
              <button
                onClick={() => setIsAboutOpen(true)}
                className="text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                Tentang &amp; Privasi
              </button>
              <button
                onClick={() => setIsAntiFraudOpen(true)}
                className="text-amber-400 hover:text-amber-300 font-bold transition-colors cursor-pointer"
              >
                Awas Calo &amp; Pungli
              </button>
              <button
                onClick={() => setIsPrintGuideOpen(true)}
                className="text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                Lembar Cetak A4
              </button>
              <a
                href="https://talaudkab.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
              >
                <span>Portal Pemkab Talaud (talaudkab.go.id)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] text-stone-400">
            <div>
              <strong className="text-stone-200 block mb-1">Sekretariat Pelayanan:</strong>
              <p>Kompleks Perkantoran Pemerintah Daerah Kabupaten Kepulauan Talaud, Melonguane, Sulawesi Utara 95885.</p>
            </div>
            <div>
              <strong className="text-stone-200 block mb-1">Standar Layanan &amp; Kepatuhan:</strong>
              <p>Mengacu pada Undang-Undang No. 24/2013, Standar Pelayanan Disdukcapil 2026, dan WCAG 2.2 Level AA.</p>
            </div>
            <div>
              <strong className="text-stone-200 block mb-1">Kontak Darurat &amp; Aduan:</strong>
              <p>Loket Daring Ta-LoDa: +62 821-9555-8822 &bull; SP4N-LAPOR: www.lapor.go.id</p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800 text-[11px] text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Pemerintah Kabupaten Kepulauan Talaud. Hak Cipta Dilindungi.</span>
            <span>Bebas Biaya Retribusi &bull; Tanpa Pengumpulan NIK Warga &bull; Siap Akses Smartphone</span>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Nav for Mobile / Smartphone */}
      <MobileBottomNav
        activeTab={activeTab}
        onTabChange={handleTabSelect}
        isLansiaMode={mode === 'lansia'}
        onToggleLansia={() => setMode(mode === 'lansia' ? 'umum' : 'lansia')}
        onOpenDecisionTree={() => setIsDecisionTreeOpen(true)}
      />

      {/* Modals & Dialogs */}
      <ServiceDetailModal
        service={selectedService}
        mode={mode}
        dataSaver={dataSaver}
        onClose={() => setSelectedService(null)}
        onOpenLansiaGuide={(s) => {
          setSelectedService(null);
          setLansiaGuideService(s);
        }}
        onOpenAntiFraud={() => {
          setSelectedService(null);
          setIsAntiFraudOpen(true);
        }}
      />

      <LansiaStepGuide
        service={lansiaGuideService}
        dataSaver={dataSaver}
        onClose={() => setLansiaGuideService(null)}
      />

      <DecisionTreeModal
        isOpen={isDecisionTreeOpen}
        onClose={() => setIsDecisionTreeOpen(false)}
      />

      <AntiFraudModal
        isOpen={isAntiFraudOpen}
        onClose={() => setIsAntiFraudOpen(false)}
      />

      <DisabilitySupportCard
        isOpen={isDisabilityCardOpen}
        onClose={() => setIsDisabilityCardOpen(false)}
      />

      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      <AboutAndPrivacyModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <PrintableGuideModal
        isOpen={isPrintGuideOpen}
        onClose={() => setIsPrintGuideOpen(false)}
      />

      <MobileAccessModal
        isOpen={isMobileAccessOpen}
        onClose={() => setIsMobileAccessOpen(false)}
      />
    </div>
  );
}
