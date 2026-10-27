import React from 'react';
import { AccessibilityMode, VisualTheme, FontSizeLevel } from '../types/service';
import {
  Compass,
  Eye,
  Users,
  Accessibility,
  Wifi,
  WifiOff,
  ShieldCheck,
  Info,
  Volume2,
  Printer,
  ChevronDown,
  Layers,
  MapPin,
  HelpCircle,
  Ship,
  Sparkles,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { SpeechService } from '../utils/textToSpeech';

interface HeaderProps {
  mode: AccessibilityMode;
  onModeChange: (m: AccessibilityMode) => void;
  dataSaver: boolean;
  onDataSaverChange: (enabled: boolean) => void;
  visualTheme: VisualTheme;
  onThemeChange: (t: VisualTheme) => void;
  fontSize: FontSizeLevel;
  onFontSizeChange: (s: FontSizeLevel) => void;
  motoricMode: boolean;
  onMotoricModeChange: (m: boolean) => void;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onOpenAbout: () => void;
  onOpenAntiFraud: () => void;
  onOpenPrintGuide: () => void;
  onOpenMobileAccess: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mode,
  onModeChange,
  dataSaver,
  onDataSaverChange,
  visualTheme,
  onThemeChange,
  fontSize,
  onFontSizeChange,
  motoricMode,
  onMotoricModeChange,
  activeTab,
  onTabChange,
  onOpenAbout,
  onOpenAntiFraud,
  onOpenPrintGuide,
  onOpenMobileAccess
}) => {
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const [showAccessMenu, setShowAccessMenu] = React.useState(false);

  const handleSpeechIntro = () => {
    if (isSpeaking) {
      SpeechService.stop();
      setIsSpeaking(false);
    } else {
      const introText =
        'Selamat datang di KITA: Kanal Informasi dan Terpadu Aspirasi Kabupaten Kepulauan Talaud. ' +
        'Portal pengarah layanan publik yang terhubung langsung ke situs resmi pemerintah. ' +
        'Semua layanan bebas biaya dan tanpa meminta NIK Anda. ' +
        'Untuk warga lansia, Anda dapat menyalakan mode bergambar agar langkah-langkah terlihat jelas dengan gambar besar.';
      setIsSpeaking(true);
      SpeechService.speak(introText, () => setIsSpeaking(false), () => setIsSpeaking(false));
    }
  };

  const navItems = [
    { id: 'layanan', label: 'Katalog Layanan', icon: Layers },
    { id: 'planner', label: 'Rute Antarpulau', icon: Ship },
    { id: 'decision', label: 'Cek Online vs Loket', icon: HelpCircle },
    { id: 'events', label: 'Siklus Peristiwa Hidup', icon: Sparkles },
    { id: 'offices', label: 'Direktori Kantor', icon: MapPin }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs">
      {/* Top Bar - Forest Green (#166534) */}
      <div className="bg-[#14532d] text-emerald-100 px-4 py-2 text-xs border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="font-bold text-white tracking-wide">
              KITA: KANAL INFORMASI DAN TERPADU ASPIRASI
            </span>
            <span className="text-emerald-300 hidden lg:inline">&bull;</span>
            <span className="text-emerald-200 hidden lg:inline">
              Kabupaten Kepulauan Talaud, Sulawesi Utara (Wilayah Terdepan &amp; Terluar NKRI)
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Mobile Readiness & Working Link Button */}
            <button
              onClick={onOpenMobileAccess}
              className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1 rounded-full text-[11px] font-black border border-amber-500 shadow-xs cursor-pointer transition-transform hover:scale-105"
              title="Buka atau bagikan tautan website untuk HP"
            >
              <Smartphone className="w-3.5 h-3.5 text-slate-950" />
              <span>Buka di HP / Link</span>
            </button>

            {/* Data-Saver Switch */}
            <button
              onClick={() => onDataSaverChange(!dataSaver)}
              aria-pressed={dataSaver}
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                dataSaver
                  ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                  : 'bg-emerald-900/90 hover:bg-emerald-800 text-emerald-100 border border-emerald-700'
              }`}
              title="Aktifkan penghemat kuota untuk sinyal laut/pulau terluar"
            >
              {dataSaver ? <WifiOff className="w-3 h-3 text-slate-950" /> : <Wifi className="w-3 h-3" />}
              <span>Hemat Kuota (3T): {dataSaver ? 'AKTIF' : 'OFF'}</span>
            </button>

            {/* Dengar Pengantar Suara */}
            <button
              onClick={handleSpeechIntro}
              aria-label="Dengarkan pengantar suara"
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                isSpeaking
                  ? 'bg-amber-400 text-slate-950 font-bold animate-pulse'
                  : 'bg-emerald-900/90 hover:bg-emerald-800 text-emerald-100 border border-emerald-700'
              }`}
            >
              <Volume2 className="w-3 h-3" />
              <span>{isSpeaking ? 'Hentikan Suara' : 'Dengar Suara'}</span>
            </button>

            {/* Cetak Panduan Lembar A4 */}
            <button
              onClick={onOpenPrintGuide}
              className="flex items-center gap-1 text-emerald-100 hover:text-white transition-colors text-[11px]"
              title="Cetak panduan A4 fisik untuk balai desa / posyandu"
            >
              <Printer className="w-3 h-3" />
              <span className="hidden sm:inline">Cetak A4</span>
            </button>

            {/* Anti Pungli & Calo */}
            <button
              onClick={onOpenAntiFraud}
              className="flex items-center gap-1 text-amber-300 hover:text-amber-200 font-bold transition-colors text-[11px]"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Bebas Calo</span>
            </button>

            {/* Tentang & Kebijakan Privasi */}
            <button
              onClick={onOpenAbout}
              className="flex items-center gap-1 text-emerald-200 hover:text-white transition-colors text-[11px]"
            >
              <Info className="w-3 h-3" />
              <span>Tentang</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand Section - Cream/Beige Tint (#FAF6EF) */}
      <div className="bg-[#FAF6EF] border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Logo & Full Acronym Description */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#166534] text-white flex items-center justify-center shadow-md shrink-0 border-2 border-emerald-400/50">
              <Compass className="w-7 h-7 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#14532d]">
                  KITA-TERPADU
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-300">
                  Kab. Kepulauan Talaud
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-950 font-bold mt-0.5">
                KITA: <span className="font-normal text-slate-700">Kanal Informasi dan Terpadu Aspirasi</span> &bull; Terhubung ke Web Resmi Pemerintah
              </p>
            </div>
          </div>

          {/* Access Modes & Accessibility Tools */}
          <div className="flex items-center gap-2 flex-wrap self-start md:self-auto">
            {/* Mode Selector */}
            <div className="bg-white p-1 rounded-2xl border border-emerald-900/15 flex items-center gap-1 shadow-xs">
              <button
                onClick={() => onModeChange('umum')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  mode === 'umum'
                    ? 'bg-[#166534] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Mode Umum</span>
              </button>

              <button
                onClick={() => onModeChange('lansia')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm transition-all ${
                  mode === 'lansia'
                    ? 'bg-amber-400 text-slate-950 shadow-sm font-black ring-2 ring-amber-500'
                    : 'text-amber-950 font-bold bg-amber-50 hover:bg-amber-100 border border-amber-300'
                }`}
                title="Tampilkan gambar besar dan penjelasan mudah untuk orang tua"
              >
                <Eye className="w-4 h-4 text-amber-900" />
                <span>Mode Lansia (Utamakan Gambar)</span>
              </button>

              <button
                onClick={() => onModeChange('disabilitas')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  mode === 'disabilitas'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Accessibility className="w-3.5 h-3.5" />
                <span>Disabilitas</span>
              </button>
            </div>

            {/* Accessibility Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowAccessMenu(!showAccessMenu)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-2xl border border-emerald-900/20 bg-white hover:bg-emerald-50 text-slate-800 text-xs sm:text-sm font-bold transition-colors shadow-xs"
                aria-label="Pengaturan ukuran teks dan warna"
              >
                <span>Ukuran &amp; Tampilan</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {showAccessMenu && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-3xl shadow-2xl border-2 border-emerald-600/30 p-5 z-50 text-xs space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-black text-sm text-slate-900">Pengaturan Kenyamanan Baca</span>
                    <button
                      onClick={() => setShowAccessMenu(false)}
                      className="text-slate-400 hover:text-slate-700 font-bold text-lg p-1"
                    >
                      &times;
                    </button>
                  </div>

                  {/* Font Scaling */}
                  <div>
                    <span className="font-bold text-slate-800 block mb-2">Ukuran Huruf (Teks):</span>
                    <div className="grid grid-cols-3 gap-1.5 bg-[#FAF6EF] p-1.5 rounded-xl border border-amber-200/60">
                      <button
                        onClick={() => onFontSizeChange('normal')}
                        className={`py-2 rounded-lg text-center font-bold ${fontSize === 'normal' ? 'bg-[#166534] text-white shadow-xs' : 'text-slate-700 hover:bg-white'}`}
                      >
                        Standar
                      </button>
                      <button
                        onClick={() => onFontSizeChange('large')}
                        className={`py-2 rounded-lg text-center font-bold ${fontSize === 'large' ? 'bg-[#166534] text-white shadow-xs' : 'text-slate-700 hover:bg-white'}`}
                      >
                        Besar
                      </button>
                      <button
                        onClick={() => onFontSizeChange('xlarge')}
                        className={`py-2 rounded-lg text-center font-black text-amber-950 ${fontSize === 'xlarge' ? 'bg-amber-400 font-black shadow-xs' : 'text-slate-700 hover:bg-white'}`}
                      >
                        Ekstra Besar
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      Pilih <strong>Ekstra Besar</strong> untuk ukuran teks maksimal yang sangat jelas bagi orang tua.
                    </span>
                  </div>

                  {/* Color Theme */}
                  <div>
                    <span className="font-bold text-slate-800 block mb-1.5">Nuansa Warna:</span>
                    <div className="space-y-1.5">
                      <button
                        onClick={() => onThemeChange('default')}
                        className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-colors ${visualTheme === 'default' ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300' : 'hover:bg-slate-50'}`}
                      >
                        &bull; Hijau Alam &amp; Cream (Standar)
                      </button>
                      <button
                        onClick={() => onThemeChange('high-contrast')}
                        className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-colors ${visualTheme === 'high-contrast' ? 'bg-slate-950 text-amber-300 font-bold' : 'hover:bg-slate-50'}`}
                      >
                        &bull; Kontras Tinggi (Latar Gelap &amp; Kuning)
                      </button>
                      <button
                        onClick={() => onThemeChange('colorblind')}
                        className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-colors ${visualTheme === 'colorblind' ? 'bg-emerald-100 text-emerald-900 font-bold' : 'hover:bg-slate-50'}`}
                      >
                        &bull; Ramah Buta Warna
                      </button>
                    </div>
                  </div>

                  {/* Motoric switch */}
                  <div className="pt-2 border-t border-slate-100">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-900">
                      <input
                        type="checkbox"
                        checked={motoricMode}
                        onChange={(e) => onMotoricModeChange(e.target.checked)}
                        className="rounded text-emerald-700 focus:ring-emerald-600 w-5 h-5"
                      />
                      <span>Tombol Sentuh Sangat Besar (Motorik)</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - Soft Beige Backdrop */}
      <nav aria-label="Navigasi Utama Portal" className="bg-[#FAF6EF] border-t border-amber-900/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#166534] text-white shadow-xs'
                    : 'text-slate-700 hover:text-emerald-900 hover:bg-white/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-200' : 'text-emerald-700'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
