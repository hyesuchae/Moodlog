import { EmotionRecord } from "@/types/emotion";

export const ONBOARDING_KEY = "maeum_sentence_onboarding_done";
export const RECORDS_KEY = "maeum_sentence_records";

export function getRecords(): EmotionRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(RECORDS_KEY);
    const records = raw ? (JSON.parse(raw) as EmotionRecord[]) : [];
    return Array.isArray(records)
      ? records.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
      : [];
  } catch {
    return [];
  }
}

export function saveRecord(record: EmotionRecord): EmotionRecord[] {
  const next = [record, ...getRecords()];
  window.localStorage.setItem(RECORDS_KEY, JSON.stringify(next));
  return next;
}

export function deleteRecord(id: string): EmotionRecord[] {
  const next = getRecords().filter((record) => record.id !== id);
  window.localStorage.setItem(RECORDS_KEY, JSON.stringify(next));
  return next;
}

export function clearRecords(): void {
  window.localStorage.removeItem(RECORDS_KEY);
}
