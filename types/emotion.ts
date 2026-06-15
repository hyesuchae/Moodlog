export type EmotionRecord = {
  id: string;
  createdAt: string;
  eventText: string;
  thoughtText: string;
  emotions: string[];
  customEmotion?: string;
  intensity: number;
  bodySignals: string[];
  sentence: string;
  reflection: string;
};

export type EmotionDraft = Omit<EmotionRecord, "id" | "createdAt">;

export type Screen =
  | "onboarding"
  | "home"
  | "flow"
  | "complete"
  | "records"
  | "record-detail"
  | "weekly"
  | "settings"
  | "about";
