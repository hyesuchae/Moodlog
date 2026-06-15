export const emotionGroups = [
  { name: "서운한 마음", color: "peach", emotions: ["서운함", "아쉬움", "소외감", "외로움"] },
  { name: "불안한 마음", color: "sand", emotions: ["걱정", "초조함", "긴장감", "압박감"] },
  { name: "화가 나는 마음", color: "rose", emotions: ["억울함", "답답함", "불쾌감", "짜증"] },
  { name: "작아지는 마음", color: "lavender", emotions: ["위축감", "민망함", "부끄러움", "자책감"] },
  { name: "지친 마음", color: "gray", emotions: ["무기력함", "피로감", "막막함", "허탈감"] },
  { name: "괜찮아지는 마음", color: "sage", emotions: ["안도감", "편안함", "고마움", "뿌듯함"] },
  { name: "잘 모르겠는 마음", color: "blue", emotions: ["혼란스러움", "멍함", "잘 모르겠음"] },
] as const;

export const bodySignals = [
  "가슴이 답답했다",
  "얼굴이 뜨거워졌다",
  "목이 막히는 느낌이 들었다",
  "어깨나 몸에 힘이 들어갔다",
  "속이 불편했다",
  "눈물이 날 것 같았다",
  "머리가 복잡했다",
  "특별한 신체 반응은 잘 모르겠다",
];

export const emptyDraft = {
  eventText: "",
  thoughtText: "",
  emotions: [] as string[],
  customEmotion: "",
  intensity: 5,
  bodySignals: [] as string[],
  sentence: "",
  reflection: "",
};
