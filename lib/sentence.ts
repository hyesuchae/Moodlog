import { EmotionDraft } from "@/types/emotion";

export const sentenceTemplates = [
  "나는 ~할 때 ~을/를 느꼈다.",
  "나는 ~라고 생각했고, 그때 ~을/를 느꼈다.",
  "나는 ~할 때 ~을 느껴서, 앞으로는 ~하면 좋겠다.",
];

function emotionList(draft: EmotionDraft) {
  const values = [...draft.emotions];
  if (draft.customEmotion?.trim() && !values.includes(draft.customEmotion.trim())) {
    values.push(draft.customEmotion.trim());
  }
  if (!values.length) return "설명하기 어려운 마음";
  if (values.length === 1) return values[0];
  return `${values.slice(0, -1).join(", ")}과 ${values.at(-1)}`;
}

export function createSentence(draft: EmotionDraft, templateIndex = 0) {
  const event = draft.eventText.trim() || "마음이 흔들린 일이 있었";
  const thought = draft.thoughtText.trim() || "여러 생각이 스쳤";
  const emotions = emotionList(draft);

  if (templateIndex === 1) {
    return `나는 '${thought}'라고 생각했고, 그때 ${emotions}을 느꼈다.`;
  }
  if (templateIndex === 2) {
    return `나는 '${event}'라는 일이 있었을 때 ${emotions}을 느껴서, 앞으로는 내 마음을 조금 더 살펴보면 좋겠다.`;
  }
  return `나는 '${event}'라는 일이 있었을 때 ${emotions}을 느꼈다.`;
}
