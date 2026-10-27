import React from 'react';

interface IllustrationProps {
  type: 'doc' | 'building' | 'counter' | 'camera' | 'card' | 'boat' | 'island' | 'accessibility' | 'ktp' | 'kk' | 'akta' | 'kia' | 'pindah' | 'bpjs' | 'jemput' | 'ikd';
  className?: string;
  dataSaver?: boolean;
}

export const ServiceIllustration: React.FC<IllustrationProps> = ({ type, className = 'w-48 h-36', dataSaver = false }) => {
  if (dataSaver) {
    return (
      <div className={`flex flex-col items-center justify-center p-3 border-2 border-emerald-300 bg-emerald-50/60 rounded-2xl text-emerald-900 ${className}`}>
        <span className="text-xs font-black uppercase tracking-wider">Mode Hemat Kuota Aktif</span>
        <span className="text-[11px] text-slate-500 mt-0.5">Ilustrasi disederhanakan</span>
      </div>
    );
  }

  switch (type) {
    case 'ktp':
      return (
        <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Contoh KTP Elektronik">
          {/* Card background */}
          <rect x="10" y="10" width="220" height="130" rx="14" fill="#E0F2FE" stroke="#0369A1" strokeWidth="4" />
          <rect x="10" y="10" width="220" height="32" rx="12" fill="#0284C7" />
          <text x="120" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" letterSpacing="1">REPUBLIK INDONESIA</text>
          <text x="120" y="38" textAnchor="middle" fill="#FEF08A" fontSize="9" fontWeight="bold">KARTU TANDA PENDUDUK</text>
          
          {/* Photo box with friendly person */}
          <rect x="25" y="52" width="55" height="70" rx="8" fill="#F87171" stroke="#DC2626" strokeWidth="2" />
          <circle cx="52" cy="74" r="14" fill="#FEE2E2" />
          <path d="M33 115 C33 96, 71 96, 71 115 Z" fill="#FEE2E2" />

          {/* Golden Smart Chip */}
          <rect x="92" y="54" width="24" height="18" rx="4" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
          <line x1="92" y1="63" x2="116" y2="63" stroke="#B45309" strokeWidth="1.5" />
          <line x1="104" y1="54" x2="104" y2="72" stroke="#B45309" strokeWidth="1.5" />

          {/* Text lines */}
          <rect x="124" y="56" width="90" height="8" rx="4" fill="#0369A1" />
          <rect x="92" y="80" width="122" height="6" rx="3" fill="#64748B" />
          <rect x="92" y="92" width="100" height="6" rx="3" fill="#64748B" />
          <rect x="92" y="104" width="115" height="6" rx="3" fill="#64748B" />
          <rect x="92" y="116" width="70" height="6" rx="3" fill="#64748B" />
        </svg>
      );

    case 'kk':
      return (
        <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Contoh Kartu Keluarga">
          <rect x="15" y="10" width="210" height="140" rx="8" fill="#FFFFFF" stroke="#166534" strokeWidth="4" />
          <rect x="25" y="20" width="190" height="24" rx="4" fill="#DCFCE7" />
          <text x="120" y="34" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="900" letterSpacing="1">KARTU KELUARGA</text>
          <text x="120" y="42" textAnchor="middle" fill="#15803D" fontSize="7" fontWeight="bold">NOMOR KELUARGA INDONESIA</text>
          
          {/* Table rows preview */}
          <rect x="25" y="52" width="190" height="14" fill="#F1F5F9" />
          <rect x="30" y="56" width="50" height="6" rx="2" fill="#475569" />
          <rect x="90" y="56" width="70" height="6" rx="2" fill="#475569" />
          <rect x="170" y="56" width="35" height="6" rx="2" fill="#475569" />

          <rect x="25" y="70" width="190" height="12" fill="#FFFFFF" />
          <rect x="30" y="73" width="40" height="5" rx="2" fill="#94A3B8" />
          <rect x="90" y="73" width="60" height="5" rx="2" fill="#94A3B8" />

          <rect x="25" y="86" width="190" height="12" fill="#F8FAFC" />
          <rect x="30" y="89" width="45" height="5" rx="2" fill="#94A3B8" />
          <rect x="90" y="89" width="55" height="5" rx="2" fill="#94A3B8" />

          {/* Official QR Code Seal */}
          <rect x="175" y="108" width="32" height="32" rx="4" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
          <rect x="179" y="112" width="8" height="8" fill="#0284C7" />
          <rect x="195" y="112" width="8" height="8" fill="#0284C7" />
          <rect x="179" y="128" width="8" height="8" fill="#0284C7" />
          <rect x="191" y="124" width="6" height="6" fill="#0284C7" />
          <text x="120" y="130" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">Tanda Tangan Elektronik Barcode</text>
        </svg>
      );

    case 'akta':
      return (
        <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Contoh Akta Kelahiran">
          <rect x="25" y="10" width="190" height="140" rx="8" fill="#FFFDF8" stroke="#D97706" strokeWidth="4" />
          {/* Ornate border line */}
          <rect x="33" y="18" width="174" height="124" rx="4" fill="none" stroke="#FDE68A" strokeWidth="2" />
          
          {/* Gold Garuda Emblem Seal */}
          <circle cx="120" cy="38" r="14" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <path d="M114 38 L120 32 L126 38 L120 44 Z" fill="#D97706" />

          <text x="120" y="60" textAnchor="middle" fill="#92400E" fontSize="12" fontWeight="900" letterSpacing="1">KUTIPAN AKTA KELAHIRAN</text>
          <rect x="55" y="68" width="130" height="2" fill="#D97706" />

          {/* Certificate Body Lines */}
          <rect x="50" y="76" width="140" height="6" rx="3" fill="#78350F" />
          <rect x="60" y="88" width="120" height="6" rx="3" fill="#B45309" />
          <rect x="70" y="100" width="100" height="6" rx="3" fill="#D97706" />

          {/* Official Red Ribbon Seal */}
          <circle cx="178" cy="120" r="12" fill="#DC2626" />
          <polygon points="178,124 172,136 178,132 184,136" fill="#DC2626" />
        </svg>
      );

    case 'kia':
      return (
        <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Contoh KIA">
          <rect x="15" y="12" width="210" height="126" rx="14" fill="#FDF2F8" stroke="#DB2777" strokeWidth="4" />
          <rect x="15" y="12" width="210" height="30" rx="12" fill="#EC4899" />
          <text x="120" y="31" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900">KARTU IDENTITAS ANAK (KIA)</text>
          
          {/* Child Photo Box */}
          <rect x="30" y="50" width="55" height="70" rx="8" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2" />
          <circle cx="57" cy="72" r="14" fill="#F472B6" />
          <path d="M38 112 C38 96, 76 96, 76 112 Z" fill="#F472B6" />

          <rect x="100" y="56" width="110" height="8" rx="4" fill="#DB2777" />
          <rect x="100" y="72" width="90" height="6" rx="3" fill="#9D174D" />
          <rect x="100" y="86" width="100" height="6" rx="3" fill="#9D174D" />
          <rect x="100" y="100" width="70" height="6" rx="3" fill="#9D174D" />
        </svg>
      );

    case 'bpjs':
      return (
        <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Contoh Kartu BPJS Kesehatan">
          <rect x="15" y="12" width="210" height="126" rx="14" fill="#ECFDF5" stroke="#059669" strokeWidth="4" />
          <rect x="15" y="12" width="210" height="32" rx="12" fill="#047857" />
          <text x="120" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900">BPJS KESEHATAN / KIS PBI</text>
          
          {/* Health Heart Cross */}
          <circle cx="55" cy="85" r="24" fill="#10B981" />
          <rect x="51" y="73" width="8" height="24" rx="2" fill="#FFFFFF" />
          <rect x="43" y="81" width="24" height="8" rx="2" fill="#FFFFFF" />

          <rect x="95" y="60" width="115" height="9" rx="4" fill="#065F46" />
          <rect x="95" y="78" width="90" height="6" rx="3" fill="#047857" />
          <rect x="95" y="92" width="105" height="6" rx="3" fill="#047857" />
          <text x="95" y="118" fill="#059669" fontSize="10" fontWeight="bold">Iuran Gratis Dibayar Negara</text>
        </svg>
      );

    case 'pindah':
      return (
        <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Contoh Surat Pindah">
          <rect x="20" y="15" width="200" height="120" rx="10" fill="#FFFFFF" stroke="#0284C7" strokeWidth="3" />
          <rect x="35" y="30" width="80" height="10" rx="3" fill="#0284C7" />
          <rect x="35" y="48" width="170" height="5" rx="2" fill="#94A3B8" />
          <rect x="35" y="60" width="150" height="5" rx="2" fill="#94A3B8" />
          {/* Arrows of movement */}
          <circle cx="65" cy="100" r="16" fill="#E0F2FE" />
          <text x="65" y="104" textAnchor="middle" fill="#0284C7" fontSize="10" fontWeight="bold">Asal</text>
          
          <path d="M90 100 L140 100 M130 92 L142 100 L130 108" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          
          <circle cx="168" cy="100" r="16" fill="#DCFCE7" />
          <text x="168" y="104" textAnchor="middle" fill="#15803D" fontSize="10" fontWeight="bold">Tujuan</text>
        </svg>
      );

    case 'jemput':
      return (
        <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Petugas Datang ke Rumah Warga">
          <rect x="15" y="15" width="210" height="120" rx="14" fill="#F0FDF4" stroke="#166534" strokeWidth="3" />
          {/* Home icon */}
          <polygon points="65,35 25,65 105,65" fill="#15803D" />
          <rect x="35" y="65" width="60" height="55" fill="#DCFCE7" stroke="#166534" strokeWidth="2" />
          <rect x="55" y="85" width="20" height="35" fill="#166534" />
          
          {/* Friendly Officer Visiting with Mobile Kit */}
          <circle cx="140" cy="55" r="14" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
          <rect x="125" y="72" width="30" height="45" rx="6" fill="#0284C7" />
          {/* Mobile recording briefcase */}
          <rect x="160" y="85" width="28" height="22" rx="4" fill="#334155" />
          <line x1="168" y1="85" x2="168" y2="80" stroke="#334155" strokeWidth="3" />
          <text x="120" y="130" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">Petugas Hadir Melayani di Rumah</text>
        </svg>
      );

    case 'camera':
      return (
        <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Alat Rekam Biometrik">
          <rect x="25" y="20" width="190" height="110" rx="14" fill="#1E293B" stroke="#0F172A" strokeWidth="4" />
          <circle cx="120" cy="75" r="32" fill="#0284C7" stroke="#38BDF8" strokeWidth="4" />
          <circle cx="120" cy="75" r="16" fill="#0369A1" />
          <circle cx="180" cy="45" r="8" fill="#EF4444" />
          <rect x="45" y="32" width="40" height="12" rx="4" fill="#475569" />
          <text x="120" y="122" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">Foto Wajah &amp; Sidik Jari</text>
        </svg>
      );

    case 'boat':
      return (
        <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Kapal Penyeberangan Laut Talaud">
          {/* Waves */}
          <path d="M10 125 C 50 115, 110 135, 170 125 C 200 120, 230 125, 230 125" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" />
          <path d="M25 135 C 75 125, 140 145, 215 135" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          
          {/* Hull */}
          <path d="M40 95 L200 95 L175 122 L65 122 Z" fill="#166534" stroke="#0F172A" strokeWidth="3" />
          {/* Cabin */}
          <rect x="75" y="60" width="85" height="35" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <rect x="85" y="68" width="18" height="16" rx="3" fill="#38BDF8" />
          <rect x="110" y="68" width="18" height="16" rx="3" fill="#38BDF8" />
          <rect x="135" y="68" width="18" height="16" rx="3" fill="#38BDF8" />

          {/* Red Roof */}
          <polygon points="65,60 170,60 160,50 75,50" fill="#DC2626" />
          <text x="120" y="112" textAnchor="middle" fill="#FEF08A" fontSize="10" fontWeight="bold">Penyeberangan Laut Antarpulau</text>
        </svg>
      );

    case 'ikd':
      return (
        <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Identitas Kependudukan Digital di Smartphone">
          {/* Smartphone Frame */}
          <rect x="75" y="10" width="90" height="130" rx="14" fill="#0F172A" stroke="#166534" strokeWidth="3" />
          <rect x="82" y="20" width="76" height="110" rx="8" fill="#F8FAFC" />
          {/* Phone Speaker & Notch */}
          <rect x="110" y="14" width="20" height="3" rx="1.5" fill="#475569" />
          
          {/* App Header */}
          <rect x="82" y="20" width="76" height="24" rx="4" fill="#166534" />
          <text x="120" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">IKD KEMENDAGRI</text>
          
          {/* Photo & QR inside phone */}
          <rect x="90" y="50" width="26" height="32" rx="4" fill="#E2E8F0" stroke="#94A3B8" />
          <circle cx="103" cy="62" r="6" fill="#3B82F6" />
          <rect x="122" y="52" width="30" height="4" rx="2" fill="#166534" />
          <rect x="122" y="60" width="25" height="3" rx="1.5" fill="#64748B" />
          <rect x="122" y="66" width="28" height="3" rx="1.5" fill="#64748B" />
          <rect x="122" y="72" width="20" height="3" rx="1.5" fill="#64748B" />
          
          {/* QR code block */}
          <rect x="98" y="90" width="44" height="34" rx="4" fill="#DCFCE7" stroke="#15803D" strokeWidth="1.5" />
          <text x="120" y="110" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="black">KTP DIGITAL</text>
        </svg>
      );

    case 'building':
    default:
      return (
        <svg viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gambar Kantor Pelayanan">
          <rect x="40" y="45" width="160" height="90" rx="6" fill="#F8FAFC" stroke="#166534" strokeWidth="4" />
          <polygon points="25,45 120,15 215,45" fill="#15803D" stroke="#166534" strokeWidth="3" />
          <rect x="100" y="90" width="40" height="45" fill="#166534" />
          <rect x="60" y="60" width="25" height="25" rx="3" fill="#BAE6FD" stroke="#0F172A" strokeWidth="2" />
          <rect x="155" y="60" width="25" height="25" rx="3" fill="#BAE6FD" stroke="#0F172A" strokeWidth="2" />
          <text x="120" y="40" textAnchor="middle" fill="#FEF08A" fontSize="11" fontWeight="bold">LOKET RESMI KANTOR DINAS</text>
        </svg>
      );
  }
};
