import { useState } from "react";
import { emotionGroups } from "@/lib/emotion-data";
import { EmotionChip, StepHeading } from "../ui";

export function StepEmotion({
  selected,
  customEmotion,
  onToggle,
  onCustomChange,
}: {
  selected: string[];
  customEmotion?: string;
  onToggle: (emotion: string) => void;
  onCustomChange: (emotion: string) => void;
}) {
  const [customInput, setCustomInput] = useState(customEmotion ?? "");

  const addCustom = () => {
    const value = customInput.trim();
    if (value) onCustomChange(value);
  };

  return (
    <div className="space-y-7">
      <StepHeading title="그 생각 아래에 어떤 감정이 있었나요?" description="가까운 단어를 여러 개 골라도 괜찮아요. 잘 모르겠는 마음도 그대로 선택할 수 있습니다." />

      {(selected.length > 0 || customEmotion) && (
        <div className="rounded-2xl bg-sage-50 p-4">
          <p className="mb-3 text-xs font-bold text-sage-700">내가 고른 감정</p>
          <div className="flex flex-wrap gap-2">
            {selected.map((emotion) => <EmotionChip key={emotion} label={emotion} selected onClick={() => onToggle(emotion)} />)}
            {customEmotion && <EmotionChip label={customEmotion} selected onClick={() => { onCustomChange(""); setCustomInput(""); }} />}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {emotionGroups.map((group) => (
          <fieldset key={group.name}>
            <legend className="mb-3 text-sm font-bold text-ink">{group.name}</legend>
            <div className="flex flex-wrap gap-2">
              {group.emotions.map((emotion) => (
                <EmotionChip key={emotion} label={emotion} selected={selected.includes(emotion)} onClick={() => onToggle(emotion)} />
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div>
        <label htmlFor="custom-emotion" className="mb-2 block text-sm font-bold text-ink">다른 감정어 직접 적기</label>
        <div className="flex gap-2">
          <input
            id="custom-emotion"
            value={customInput}
            onChange={(event) => setCustomInput(event.target.value)}
            onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); addCustom(); } }}
            className="min-w-0 flex-1 rounded-2xl border border-[#DED8CE] bg-white px-4 text-base"
            placeholder="예: 섭섭함"
          />
          <button type="button" onClick={addCustom} className="min-h-12 rounded-2xl bg-[#E7EDE8] px-5 text-sm font-bold text-sage-700">추가</button>
        </div>
      </div>
    </div>
  );
}
