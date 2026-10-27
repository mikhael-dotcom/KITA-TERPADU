import { ServiceItem, ServiceDocument } from '../types/service';
import { SERVICES_DATA } from '../data/servicesData';
import { TALAUD_OFFICES } from '../data/officesData';

export interface MultiTripPlan {
  selectedServices: ServiceItem[];
  consolidatedDocuments: {
    id: string;
    name: string;
    isMandatory: boolean;
    requiredByServices: string[];
    sampleHint?: string;
  }[];
  targetOffices: {
    officeId: string;
    officeName: string;
    pulau: string;
    address: string;
    forServices: string[];
    crossSeaTravel: boolean;
  }[];
  totalOfficesCount: number;
  hasBiometricNeed: boolean;
}

export function consolidateTripServices(serviceIds: string[], userIsland: string = 'Pulau Karakelang'): MultiTripPlan {
  const selectedServices = SERVICES_DATA.filter(s => serviceIds.includes(s.id));

  // Consolidate documents by normalized name
  const docMap = new Map<string, {
    id: string;
    name: string;
    isMandatory: boolean;
    requiredByServices: string[];
    sampleHint?: string;
  }>();

  selectedServices.forEach(srv => {
    srv.documents.forEach((doc: ServiceDocument) => {
      // Normalize name to merge common documents like "Kartu Keluarga", "KTP", etc.
      const normalizedKey = doc.name.toLowerCase().includes('kartu keluarga')
        ? 'kartu_keluarga'
        : doc.name.toLowerCase().includes('ktp')
        ? 'ktp_identitas'
        : doc.name.toLowerCase().trim();

      if (!docMap.has(normalizedKey)) {
        docMap.set(normalizedKey, {
          id: doc.id,
          name: doc.name,
          isMandatory: doc.isMandatory,
          requiredByServices: [srv.title],
          sampleHint: doc.sampleHint
        });
      } else {
        const existing = docMap.get(normalizedKey)!;
        if (!existing.requiredByServices.includes(srv.title)) {
          existing.requiredByServices.push(srv.title);
        }
        if (doc.isMandatory) {
          existing.isMandatory = true;
        }
      }
    });
  });

  const consolidatedDocuments = Array.from(docMap.values());

  // Determine offices
  const officeMap = new Map<string, {
    officeId: string;
    officeName: string;
    pulau: string;
    address: string;
    forServices: string[];
    crossSeaTravel: boolean;
  }>();

  const hasBiometricNeed = selectedServices.some(s => s.biometricRequired);

  selectedServices.forEach(srv => {
    // Determine office
    let targetOffice = TALAUD_OFFICES[0]; // default Disdukcapil Melonguane
    if (srv.id === 'bpjs-kesehatan-pbi') {
      targetOffice = TALAUD_OFFICES[0]; // Dinsos / BPJS in Melonguane
    }

    const crossSea = targetOffice.pulau !== userIsland;

    if (!officeMap.has(targetOffice.id)) {
      officeMap.set(targetOffice.id, {
        officeId: targetOffice.id,
        officeName: targetOffice.nama,
        pulau: targetOffice.pulau,
        address: targetOffice.alamat,
        forServices: [srv.title],
        crossSeaTravel: crossSea
      });
    } else {
      const existing = officeMap.get(targetOffice.id)!;
      if (!existing.forServices.includes(srv.title)) {
        existing.forServices.push(srv.title);
      }
    }
  });

  return {
    selectedServices,
    consolidatedDocuments,
    targetOffices: Array.from(officeMap.values()),
    totalOfficesCount: officeMap.size,
    hasBiometricNeed
  };
}
