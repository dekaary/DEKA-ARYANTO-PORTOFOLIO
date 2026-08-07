// Utility to safely access localStorage without throwing errors in sandboxed iframes (like Google Sites)
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn("Storage is blocked or unavailable in this environment (likely a sandboxed iframe):", e);
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn("Storage is blocked or unavailable in this environment (likely a sandboxed iframe):", e);
    }
  },
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn("Storage is blocked or unavailable in this environment (likely a sandboxed iframe):", e);
    }
  }
};
