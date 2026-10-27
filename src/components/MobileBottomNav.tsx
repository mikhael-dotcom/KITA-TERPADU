import React from 'react';
import {
  Layers,
  Ship,
  HelpCircle,
  MapPin,
  Volume2,
  Eye,
  CheckSquare
} from 'lucide-react';
import { SpeechService } from '../utils/textToSpeech';

interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  isLansiaMode: boolean;
  onToggleLansia: () => void;
  onOpenDecisionTree: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
  isLansiaMode,
  onToggleLansia,
  onOpenDecisionTree
}) => {
  const [isSpeaking, setIsSpeaking] = React.useState(false);

  const handleAudioTour = () => {
    if (isSpeaking) {
      SpeechService.stop();
      setIsSpeaking(false);
    } else {
      const text =
        'Anda membuka KITA: Kanal Informasi dan Terpadu Aspirasi Kabupaten Kepulauan Talaud. ' +
        'Sentuh salah satu kartu layanan untuk melihat dokumen yang wajib dibawa, atau sentuh tombol rute kapal untuk menghitung ongkos penyeberangan Anda.';
      setIsSpeaking(true);
      SpeechService.speak(text, () => setIsSpeaking(false), () => setIsSpeaking(false));
    }
  };

  return (
    <nav
      aria-label="Navigasi Khusus Handphone"
      className="mobile-bottom-nav fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-emerald-600/30 px-2 py-1.5 md:hidden shadow-2xl flex items-center justify-around"
    >
      {/* Layanan */}
      <button
        onClick={() => onTabChange('layanan')}
        className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
          activeTab === 'layanan'
            ? 'text-emerald-800 font-black'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        <Layers className={`w-5 h-5 ${activeTab === 'layanan' ? 'text-emerald-700 stroke-[2.5]' : ''}`} />
        <span className="text-[10px] mt-0.5">Layanan</span>
      </button>

      {/* Rute Kapal */}
      <button
        onClick={() => onTabChange('planner')}
        className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
          activeTab === 'planner'
            ? 'text-emerald-800 font-black'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        <Ship className={`w-5 h-5 ${activeTab === 'planner' ? 'text-emerald-700 stroke-[2.5]' : ''}`} />
        <span className="text-[10px] mt-0.5">Rute Laut</span>
      </button>

      {/* Cek Online vs Kantor (Decision Tree) */}
      <button
        onClick={onOpenDecisionTree}
        className="flex flex-col items-center justify-center p-1 rounded-xl text-amber-900 font-black"
      >
        <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-md">
          <HelpCircle className="w-5 h-5" />
        </div>
        <span className="text-[10px] mt-0.5 text-slate-800 font-bold">Cek Loket</span>
      </button>

      {/* Loket Kantor */}
      <button
        onClick={() => onTabChange('offices')}
        className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
          activeTab === 'offices'
            ? 'text-emerald-800 font-black'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        <MapPin className={`w-5 h-5 ${activeTab === 'offices' ? 'text-emerald-700 stroke-[2.5]' : ''}`} />
        <span className="text-[10px] mt-0.5">Kantor</span>
      </button>

      {/* Mode Lansia (Bergambar) */}
      <button
        onClick={onToggleLansia}
        className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
          isLansiaMode
            ? 'text-emerald-800 font-black'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        <Eye className={`w-5 h-5 ${isLansiaMode ? 'text-amber-600 stroke-[2.5]' : ''}`} />
        <span className="text-[10px] mt-0.5">{isLansiaMode ? 'Lansia: ON' : 'Mode Gambar'}</span>
      </button>

      {/* Dengar Suara HP */}
      <button
        onClick={handleAudioTour}
        className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
          isSpeaking
            ? 'text-emerald-700 animate-pulse font-black'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        <Volume2 className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">{isSpeaking ? 'Henti' : 'Suara'}</span>
      </button>
    </nav>
  );
};
