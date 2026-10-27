export class SpeechService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;
  private static isSpeakingNow = false;

  public static isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }

  public static speak(text: string, onEnd?: () => void, onError?: () => void): boolean {
    if (!this.isSupported() || !this.synth) {
      if (onError) onError();
      return false;
    }

    try {
      this.stop();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 0.95; // Sedikit lebih lambat dan jelas untuk lansia & disabilitas
      utterance.pitch = 1.0;

      // Coba cari suara bahasa Indonesia bila tersedia
      const voices = this.synth.getVoices();
      const idVoice = voices.find(v => v.lang.startsWith('id') || v.lang.includes('ID'));
      if (idVoice) {
        utterance.voice = idVoice;
      }

      utterance.onend = () => {
        this.isSpeakingNow = false;
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = () => {
        this.isSpeakingNow = false;
        this.currentUtterance = null;
        if (onError) onError();
      };

      this.currentUtterance = utterance;
      this.isSpeakingNow = true;
      this.synth.speak(utterance);
      return true;
    } catch {
      this.isSpeakingNow = false;
      if (onError) onError();
      return false;
    }
  }

  public static stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeakingNow = false;
      this.currentUtterance = null;
    }
  }

  public static isSpeaking(): boolean {
    return this.isSpeakingNow;
  }
}
