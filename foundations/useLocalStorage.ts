export function getLocalStorageString(key: string): string {
  if (typeof window === "undefined") return "";

  const value = window.localStorage.getItem(key);
  if (!value) return "";

  return value;
}

export const setLocalStorageString = (key: string, value: string) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(key, value);
};
