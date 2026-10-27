export type AccessibilityMode = 'umum' | 'lansia' | 'disabilitas';
export type VisualTheme = 'default' | 'high-contrast' | 'colorblind';
export type FontSizeLevel = 'normal' | 'large' | 'xlarge';

export interface ServiceDocument {
  id: string;
  name: string;
  isMandatory: boolean;
  notes?: string;
  sampleHint?: string;
  officialGovUrl?: string;
  officialGovDocName?: string;
  visualIcon?: 'kk' | 'ktp' | 'akta' | 'surat' | 'photo' | 'hospital';
}

export interface ServiceStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
  lansiaDetail?: string;
  illustType?: 'doc' | 'building' | 'counter' | 'camera' | 'card' | 'boat';
  lansiaVisualCue?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: 'ktp' | 'kk' | 'akta' | 'kia' | 'pindah' | 'bpjs' | 'bansos' | 'ikd' | 'jemput';
  categoryLabel: string;
  whoNeeds: string;
  keywords: string[];
  requirements: string[];
  documents: ServiceDocument[];
  steps: ServiceStep[];
  cost: string;
  estimatedTime: string;
  destinationOffice: string;
  officialActionUrl: string;
  officialActionLabel: string;
  officialGovPortalName: string;
  officialGovRequirementsUrl: string;
  canDoFromHome: boolean;
  canDoFromHomeNote: string;
  source: string;
  verifiedDate: string;
  biometricRequired: boolean;
  specialNotice?: string;
  lansiaKeyImage: 'ktp' | 'kk' | 'akta' | 'kia' | 'pindah' | 'bpjs' | 'ikd' | 'jemput';
  lansiaShortVoiceCue: string;
}

export interface TalaudOffice {
  id: string;
  nama: string;
  kategori: 'dukcapil_pusat' | 'kantor_camat' | 'pos_pelayanan';
  alamat: string;
  pulau: string;
  kecamatanDilayani: string[];
  jamLayanan: string;
  kontakTelepon: string;
  kontakWa: string;
  lat: number;
  lng: number;
  catatanPulau: string;
  aksesibilitas: {
    rampaKursiRoda: boolean;
    loketPrioritas: boolean;
    toiletAksesibel: boolean;
    kursiTungguPrioritas: boolean;
    parkirAksesibel: boolean;
    petugasPendamping: boolean;
  };
  sumber: string;
  terakhirDiverifikasi: string;
}

export interface DistrictInfo {
  nama: string;
  pulau: string;
  desa: string[];
  kantorRujukanId: string;
}

export interface LifeEventStep {
  order: number;
  serviceId: string;
  title: string;
  institution: string;
  prerequisite?: string;
  description: string;
  keyDoc: string;
}

export interface LifeEvent {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  targetAudience: string;
  steps: LifeEventStep[];
}

export interface DecisionNode {
  id: string;
  question: string;
  description?: string;
  options: {
    label: string;
    nextId?: string;
    result?: {
      canOnline: boolean;
      verdictTitle: string;
      verdictDetail: string;
      actionUrl?: string;
      actionLabel?: string;
      neededDocuments?: string[];
    };
  }[];
}
