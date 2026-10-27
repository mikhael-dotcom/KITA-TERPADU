import React, { useState } from 'react';
import { DISTRICTS_DATA } from '../data/districtsData';
import { TALAUD_OFFICES } from '../data/officesData';
import { TalaudOffice } from '../types/service';
import {
  MapPin,
  Compass,
  Phone,
  MessageSquare,
  Navigation,
  ExternalLink,
  Ship,
  Clock,
  Accessibility,
  Check,
  X,
  AlertTriangle,
  Info
} from 'lucide-react';

export const OfficeLocator: React.FC = () => {
  const [selectedDistrictName, setSelectedDistrictName] = useState<string>('Melonguane');
  const [selectedVillageName, setSelectedVillageName] = useState<string>('Melonguane');
  const [geoLocating, setGeoLocating] = useState<boolean>(false);
  const [geoMessage, setGeoMessage] = useState<string | null>(null);

  const selectedDistrict = DISTRICTS_DATA.find((d) => d.nama === selectedDistrictName) || DISTRICTS_DATA[0];

  // Determine primary office
  const designatedOffice =
    TALAUD_OFFICES.find((o) => o.id === selectedDistrict.kantorRujukanId) || TALAUD_OFFICES[0];

  // Also show central Dukcapil if designated is subdistrict
  const centralOffice = TALAUD_OFFICES[0];
  const isDifferentFromCentral = designatedOffice.id !== centralOffice.id;

  const handleDistrictChange = (districtName: string) => {
    setSelectedDistrictName(districtName);
    const district = DISTRICTS_DATA.find((d) => d.nama === districtName);
    if (district && district.desa.length > 0) {
      setSelectedVillageName(district.desa[0]);
    }
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setGeoMessage('Perangkat ini tidak mendukung GPS Geolocation.');
      return;
    }

    setGeoLocating(true);
    setGeoMessage(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoLocating(false);
        const { latitude, longitude } = pos.coords;
        let nearestOffice = TALAUD_OFFICES[0];
        let minDistance = 999999;

        TALAUD_OFFICES.forEach((off) => {
          const d = Math.hypot(off.lat - latitude, off.lng - longitude);
          if (d < minDistance) {
            minDistance = d;
            nearestOffice = off;
          }
        });

        const matchingDistrict = DISTRICTS_DATA.find(
          (d) => d.kantorRujukanId === nearestOffice.id
        ) || DISTRICTS_DATA[0];

        setSelectedDistrictName(matchingDistrict.nama);
        setSelectedVillageName(matchingDistrict.desa[0] || '');
        setGeoMessage(`Lokasi terdeteksi dekat kantor: ${nearestOffice.nama}`);
      },
      () => {
        setGeoLocating(false);
        setGeoMessage('Izin GPS tidak diberikan. Silakan pilih kecamatan secara manual lewat menu dropdown.');
      },
      { timeout: 10000 }
    );
  };

  return (
    <section id="offices" aria-labelledby="locator-heading" className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-emerald-100 text-emerald-900 font-bold text-xs px-2.5 py-0.5 rounded-md uppercase tracking-wider border border-emerald-200">
              DIREKTORI 19 KECAMATAN &bull; PANDUAN PENYEBERANGAN LAUT
            </span>
          </div>
          <h2 id="locator-heading" className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
            <MapPin className="w-6 h-6 text-emerald-700" />
            Cari Loket Kecamatan &amp; Panduan Jalur Laut
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Pilih kecamatan domisili Anda di Kepulauan Talaud untuk melihat kantor rujukan terdekat, fasilitas disabilitas, dan petunjuk perjalanan perahu.
          </p>
        </div>

        <button
          onClick={handleUseMyLocation}
          disabled={geoLocating}
          className="self-start md:self-auto flex items-center gap-2 bg-[#FAF6EF] hover:bg-stone-200 text-stone-800 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border border-stone-300 transition-colors shadow-xs"
        >
          <Compass className={`w-4 h-4 text-emerald-700 ${geoLocating ? 'animate-spin' : ''}`} />
          <span>{geoLocating ? 'Mencari GPS...' : 'Gunakan Lokasi GPS Saya'}</span>
        </button>
      </div>

      {geoMessage && (
        <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>{geoMessage}</span>
        </div>
      )}

      {/* 3-Tier Hierarchy Selection (Kabupaten -> Kecamatan -> Desa) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-[#FAF6EF] p-4 sm:p-5 rounded-2xl border border-stone-200">
        <div>
          <label className="block text-xs font-bold text-stone-600 mb-1">
            1. Kabupaten (Wilayah Kepulauan 3T):
          </label>
          <input
            type="text"
            readOnly
            value="Kab. Kepulauan Talaud, Sulawesi Utara"
            className="w-full bg-stone-200/80 border border-stone-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-stone-700 cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="select-district" className="block text-xs font-bold text-stone-900 mb-1">
            2. Pilih Kecamatan Anda:
          </label>
          <select
            id="select-district"
            value={selectedDistrictName}
            onChange={(e) => handleDistrictChange(e.target.value)}
            className="w-full bg-white border-2 border-emerald-400 rounded-xl px-3 py-2.5 text-sm font-bold text-stone-900 focus:outline-none focus:border-emerald-600 shadow-xs"
          >
            {DISTRICTS_DATA.map((d) => (
              <option key={d.nama} value={d.nama}>
                Kecamatan {d.nama} ({d.pulau})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="select-village" className="block text-xs font-bold text-stone-900 mb-1">
            3. Pilih Desa / Kelurahan:
          </label>
          <select
            id="select-village"
            value={selectedVillageName}
            onChange={(e) => setSelectedVillageName(e.target.value)}
            className="w-full bg-white border-2 border-stone-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-stone-900 focus:outline-none focus:border-emerald-600 shadow-xs"
          >
            {selectedDistrict.desa.map((v) => (
              <option key={v} value={v}>
                Desa/Kelurahan {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Island Status Banner */}
      <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-start gap-3">
        <Ship className="w-6 h-6 text-emerald-800 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
            Posisi Domisili: Kecamatan {selectedDistrict.nama} terletak di {selectedDistrict.pulau}
          </h4>
          <p className="text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed">
            {selectedDistrict.pulau === 'Pulau Karakelang'
              ? 'Anda berada di pulau utama (Pulau Karakelang). Layanan pusat di Melonguane dapat diakses via jalur darat lingkar Karakelang.'
              : `PERINGATAN JALUR LAUT: Anda berada di gugus pulau terpisah (${selectedDistrict.pulau}). Urusan yang memerlukan ke Melonguane wajib menyeberang via perahu/speedboat. Pastikan berkas lengkap sebelum berlayar agar tidak rugi ongkos!`}
          </p>
        </div>
      </div>

      {/* Office Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Designated Local Office */}
        <OfficeCard office={designatedOffice} isPrimary={true} districtName={selectedDistrict.nama} />

        {/* Central Dukcapil Office if different */}
        {isDifferentFromCentral && (
          <OfficeCard office={centralOffice} isPrimary={false} districtName={selectedDistrict.nama} isCentral={true} />
        )}
      </div>
    </section>
  );
};

interface OfficeCardProps {
  office: TalaudOffice;
  isPrimary: boolean;
  districtName: string;
  isCentral?: boolean;
}

const OfficeCard: React.FC<OfficeCardProps> = ({ office, isPrimary, isCentral = false }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${office.lat},${office.lng}`;

  return (
    <div className={`rounded-3xl border-2 p-5 sm:p-6 flex flex-col justify-between ${
      isPrimary
        ? 'border-emerald-600 bg-white shadow-md'
        : 'border-stone-300 bg-[#FAF6EF]/80 shadow-sm'
    }`}>
      <div>
        <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
          <span className={`text-xs font-black px-2.5 py-1 rounded-md ${
            isPrimary ? 'bg-emerald-800 text-white' : 'bg-stone-700 text-white'
          }`}>
            {isCentral ? 'KANTOR PUSAT KABUPATEN' : 'KANTOR RUJUKAN UTAMA WILAYAH ANDA'}
          </span>
          <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-200">
            {office.pulau}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-stone-900 leading-snug mb-2">
          {office.nama}
        </h3>

        <p className="text-xs sm:text-sm text-stone-600 flex items-start gap-2 mb-3">
          <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <span>{office.alamat}</span>
        </p>

        {/* Hours & Contact */}
        <div className="space-y-2 text-xs bg-white p-3.5 rounded-xl border border-stone-200 mb-4">
          <div className="flex items-center gap-2 text-stone-700">
            <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{office.jamLayanan}</span>
          </div>
          <div className="flex items-center gap-2 text-stone-700">
            <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Telp: {office.kontakTelepon}</span>
          </div>
          <div className="flex items-center gap-2 text-stone-700">
            <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>WhatsApp Loket Resmi: +{office.kontakWa}</span>
          </div>
        </div>

        {/* Island Caution Note */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 mb-4 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Catatan Perjalanan:</strong> {office.catatanPulau}
          </p>
        </div>

        {/* Accessibility Features Card */}
        <div className="pt-3 border-t border-stone-200 mb-4">
          <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <Accessibility className="w-4 h-4 text-emerald-700" />
            Fasilitas Aksesibilitas Kantor (Survei Pelayanan):
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
            <div className="flex items-center gap-1.5">
              {office.aksesibilitas.rampaKursiRoda ? (
                <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
              ) : (
                <X className="w-3.5 h-3.5 text-rose-500" />
              )}
              <span>Rampa Kursi Roda</span>
            </div>
            <div className="flex items-center gap-1.5">
              {office.aksesibilitas.loketPrioritas ? (
                <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
              ) : (
                <X className="w-3.5 h-3.5 text-rose-500" />
              )}
              <span>Loket Khusus Lansia</span>
            </div>
            <div className="flex items-center gap-1.5">
              {office.aksesibilitas.kursiTungguPrioritas ? (
                <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
              ) : (
                <X className="w-3.5 h-3.5 text-rose-500" />
              )}
              <span>Kursi Prioritas Dekat</span>
            </div>
            <div className="flex items-center gap-1.5">
              {office.aksesibilitas.toiletAksesibel ? (
                <Check className="w-3.5 h-3.5 text-emerald-700 font-bold" />
              ) : (
                <X className="w-3.5 h-3.5 text-rose-500" />
              )}
              <span>Toilet Ramah Difabel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Maps & Contact Buttons */}
      <div className="pt-3 border-t border-stone-200 flex flex-wrap gap-2">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white py-2.5 px-3 rounded-xl text-xs font-bold transition-colors shadow-xs"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Buka di Maps</span>
        </a>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-stone-800 hover:bg-stone-900 text-white py-2.5 px-3 rounded-xl text-xs font-bold transition-colors shadow-xs"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Petunjuk Arah</span>
        </a>

        <a
          href={`https://wa.me/${office.kontakWa}?text=Halo%20Loket%20Pelayanan%20Dukcapil%20Talaud,%20saya%20warga%20Kecamatan%20${office.pulau}%20ingin%20konsultasi%20berkas`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-xl text-xs font-bold transition-colors mt-1"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Loket Resmi Kantor Ini</span>
        </a>
      </div>
    </div>
  );
};
