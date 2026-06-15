import { TextArea, StepHeading } from "../ui";

export function StepThought({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-7">
      <StepHeading
        title="그때 머릿속에 어떤 생각이 지나갔나요?"
        description="생각은 사실이 아닐 수도 있어요. 순간적으로 떠오른 해석이나 걱정을 적어도 괜찮습니다."
      />
      <div>
        <label htmlFor="thought-text" className="mb-2 block text-sm font-bold text-ink">떠오른 생각</label>
        <TextArea id="thought-text" value={value} onChange={(event) => onChange(event.target.value)} placeholder="예: 내 의견은 별로 중요하지 않은가 보다." autoFocus />
      </div>
    </div>
  );
}
