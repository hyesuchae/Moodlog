import { useEffect, useState } from "react";
import { createSentence } from "@/lib/sentence";
import { EmotionDraft } from "@/types/emotion";
import { PrimaryButton, ProgressBar, TextButton } from "./ui";
import { StepEvent } from "./steps/StepEvent";
import { StepThought } from "./steps/StepThought";
import { StepEmotion } from "./steps/StepEmotion";
import { StepIntensity } from "./steps/StepIntensity";
import { StepBodySignals } from "./steps/StepBodySignals";
import { StepSentence } from "./steps/StepSentence";
import { StepReflection } from "./steps/StepReflection";

export function EmotionFlow({ draft, onChange, onExit, onSave }: { draft: EmotionDraft; onChange: (patch: Partial<EmotionDraft>) => void; onExit: () => void; onSave: () => void }) {
  const [step, setStep] = useState(0);
  const total = 7;

  useEffect(() => {
    if (step === 5 && !draft.sentence.trim()) onChange({ sentence: createSentence(draft) });
  }, [step, draft, onChange]);

  const next = () => step < total - 1 ? setStep(step + 1) : onSave();
  const back = () => step > 0 ? setStep(step - 1) : onExit();
  const toggleList = (key: "emotions" | "bodySignals", value: string) => {
    const list = draft[key];
    onChange({ [key]: list.includes(value) ? list.filter((item) => item !== value) : [...list, value] });
  };

  return (
    <div className="flex min-h-[calc(100dvh-64px)] flex-col">
      <div className="px-5 pt-5"><ProgressBar current={step + 1} total={total} /></div>
      <section className="flex-1 px-5 pb-8 pt-8">
        {step === 0 && <StepEvent value={draft.eventText} onChange={(eventText) => onChange({ eventText })} />}
        {step === 1 && <StepThought value={draft.thoughtText} onChange={(thoughtText) => onChange({ thoughtText })} />}
        {step === 2 && <StepEmotion selected={draft.emotions} customEmotion={draft.customEmotion} onToggle={(value) => toggleList("emotions", value)} onCustomChange={(customEmotion) => onChange({ customEmotion })} />}
        {step === 3 && <StepIntensity value={draft.intensity} onChange={(intensity) => onChange({ intensity })} />}
        {step === 4 && <StepBodySignals selected={draft.bodySignals} onToggle={(value) => toggleList("bodySignals", value)} />}
        {step === 5 && <StepSentence value={draft.sentence} onChange={(sentence) => onChange({ sentence })} onTemplate={(index) => onChange({ sentence: createSentence(draft, index) })} />}
        {step === 6 && <StepReflection value={draft.reflection} sentence={draft.sentence} onChange={(reflection) => onChange({ reflection })} />}
      </section>
      <footer className="sticky bottom-0 border-t border-[#E7E1D8] bg-cream/95 px-5 pb-[max(20px,env(safe-area-inset-bottom))] pt-3 backdrop-blur">
        <PrimaryButton onClick={next}>{step === 6 ? "오늘의 감정 기록 저장하기" : "다음"}</PrimaryButton>
        <div className="mt-1 flex items-center justify-between">
          <TextButton onClick={back}>뒤로 가기</TextButton>
          {step < 6 && <TextButton onClick={next}>이 단계 건너뛰기</TextButton>}
        </div>
      </footer>
    </div>
  );
}
