import { sentenceTemplates } from "@/lib/sentence";
import { StepHeading, TextArea } from "../ui";

export function StepSentence({ value, onChange, onTemplate }: { value: string; onChange: (value: string) => void; onTemplate: (index: number) => void }) {
  return (
    <div className="space-y-7">
      <StepHeading title="내 감정을 한 문장으로 표현해 볼까요?" description="지금까지 적은 내용으로 초안을 만들었어요. 내 말투에 맞게 자유롭게 고쳐 보세요." />
      <div className="rounded-[24px] bg-sage-50 p-4">
        <label htmlFor="emotion-sentence" className="mb-3 block text-xs font-bold text-sage-700">나의 마음문장</label>
        <TextArea id="emotion-sentence" value={value} onChange={(event) => onChange(event.target.value)} className="min-h-44 border-sage-100 bg-white font-semibold" />
      </div>
      <div>
        <p className="mb-3 text-sm font-bold text-ink">다른 문장 틀로 바꾸기</p>
        <div className="space-y-2">
          {sentenceTemplates.map((template, index) => (
            <button key={template} type="button" onClick={() => onTemplate(index)} className="min-h-14 w-full rounded-2xl border border-[#E1DBD2] bg-white px-4 py-3 text-left text-sm font-semibold leading-5 text-[#5E5A54] active:border-sage-500">
              {template}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
