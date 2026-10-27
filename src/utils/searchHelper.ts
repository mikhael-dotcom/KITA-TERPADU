import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types/service';

export function searchServices(query: string, categoryFilter: string = 'all'): ServiceItem[] {
  const cleanQuery = query.toLowerCase().trim();

  return SERVICES_DATA.filter(service => {
    // Check category filter
    if (categoryFilter !== 'all' && service.category !== categoryFilter) {
      return false;
    }

    if (!cleanQuery) return true;

    // Search in title, shortDesc, whoNeeds
    if (
      service.title.toLowerCase().includes(cleanQuery) ||
      service.shortDesc.toLowerCase().includes(cleanQuery) ||
      service.whoNeeds.toLowerCase().includes(cleanQuery)
    ) {
      return true;
    }

    // Search in keywords (synonym matching)
    if (service.keywords.some(kw => kw.toLowerCase().includes(cleanQuery) || cleanQuery.includes(kw.toLowerCase()))) {
      return true;
    }

    // Search in documents
    if (service.documents.some(doc => doc.name.toLowerCase().includes(cleanQuery))) {
      return true;
    }

    // Special colloquial synonyms
    if (cleanQuery.includes('hilang') && service.id === 'ktp-el-hilang-rusak') return true;
    if (cleanQuery.includes('patah') && service.id === 'ktp-el-hilang-rusak') return true;
    if ((cleanQuery.includes('bayi') || cleanQuery.includes('anak')) && (service.id === 'akta-kelahiran' || service.id === 'kia-kartu-anak')) return true;
    if (cleanQuery.includes('mati') || cleanQuery.includes('meninggal')) return service.id === 'akta-kematian';
    if (cleanQuery.includes('gratis') || cleanQuery.includes('sakit')) return service.id === 'bpjs-kesehatan-pbi';

    return false;
  });
}
