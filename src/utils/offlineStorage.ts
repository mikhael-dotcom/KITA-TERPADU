export interface FeedbackStats {
  membantu: number;
  cukup: number;
  membingungkan: number;
  lastUpdated: string;
}

const STORAGE_KEYS = {
  DATA_SAVER: 'kt_data_saver',
  ACCESS_MODE: 'kt_access_mode',
  THEME: 'kt_theme',
  FONT_SIZE: 'kt_font_size',
  CHECKLIST_PREFIX: 'kt_checklist_',
  FEEDBACK: 'kt_feedback_stats',
  READY_CARDS: 'kt_ready_cards'
};

export const StorageService = {
  getDataSaver(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(STORAGE_KEYS.DATA_SAVER) === 'true';
  },

  setDataSaver(enabled: boolean): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.DATA_SAVER, enabled ? 'true' : 'false');
  },

  getChecklist(serviceId: string): Record<string, boolean> {
    if (typeof window === 'undefined') return {};
    try {
      const data = localStorage.getItem(`${STORAGE_KEYS.CHECKLIST_PREFIX}${serviceId}`);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  saveChecklist(serviceId: string, checkedMap: Record<string, boolean>): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(`${STORAGE_KEYS.CHECKLIST_PREFIX}${serviceId}`, JSON.stringify(checkedMap));
    } catch {
      // storage quota or private mode handled gracefully
    }
  },

  getFeedbackStats(): FeedbackStats {
    if (typeof window === 'undefined') {
      return { membantu: 42, cukup: 11, membingungkan: 3, lastUpdated: new Date().toISOString() };
    }
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FEEDBACK);
      if (data) return JSON.parse(data);
    } catch {
      // ignore
    }
    const initial: FeedbackStats = { membantu: 42, cukup: 11, membingungkan: 3, lastUpdated: new Date().toISOString() };
    this.saveFeedbackStats(initial);
    return initial;
  },

  saveFeedbackStats(stats: FeedbackStats): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify(stats));
    } catch {
      // ignore
    }
  },

  recordFeedback(type: 'membantu' | 'cukup' | 'membingungkan'): FeedbackStats {
    const current = this.getFeedbackStats();
    current[type] = (current[type] || 0) + 1;
    current.lastUpdated = new Date().toISOString();
    this.saveFeedbackStats(current);
    return current;
  }
};
