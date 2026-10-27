/**
 * Calendar and Reminder utilities (Serverless & Zero Data Collection)
 */

export function generateIcsFile(event: {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  durationMinutes?: number;
}): void {
  const duration = event.durationMinutes || 120;
  const endDate = new Date(event.startDate.getTime() + duration * 60000);

  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//KITA-TERPADU Talaud//Pengarah Layanan Publik 3T//ID',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@kitaterpadu.talaudkab`,
    `DTSTAMP:${formatDate(new Date())}`,
    `DTSTART:${formatDate(event.startDate)}`,
    `DTEND:${formatDate(endDate)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT12H',
    'DESCRIPTION:Pengingat berkas KITA-TERPADU Talaud',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${event.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_jadwal.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function createWhatsAppReminderUrl(reminder: {
  serviceTitle: string;
  dateStr: string;
  officeName: string;
  docsList: string[];
}): string {
  const docsText = reminder.docsList.map((d, i) => `${i + 1}. ${d}`).join('%0A');
  const message = `*PENGINGAT LAYANAN PUBLIK TALAUD*%0A` +
    `Urusan: ${encodeURIComponent(reminder.serviceTitle)}%0A` +
    `Tanggal Rencana: ${encodeURIComponent(reminder.dateStr)}%0A` +
    `Lokasi Kantor: ${encodeURIComponent(reminder.officeName)}%0A%0A` +
    `*DOKUMEN YANG HARUS DIBAWA (JANGAN SAMPAI KETINGGALAN):*%0A${docsText}%0A%0A` +
    `_Catatan: Di Talaud perjalanan laut memerlukan biaya. Pastikan semua berkas di atas sudah di dalam map plastik anti-air!_%0A` +
    `Dipandu oleh KITA (Kanal Informasi dan Terpadu Aspirasi) Kabupaten Kepulauan Talaud.`;

  return `https://wa.me/?text=${message}`;
}
