import { TextArea, StepHeading } from "../ui";

export function StepEvent({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-7">
      <StepHeading
        title="최근 마음이 조금 흔들렸던 순간이 있었나요?"
        description="거창한 사건이 아니어도 괜찮습니다. 기분이 불편했던 순간, 말로 설명하기 어려웠던 순간이면 충분합니다."
      />
      <div>
        <label htmlFor="event-text" className="mb-2 block text-sm font-bold text-ink">있었던 일</label>
        <TextArea id="event-text" value={value} onChange={(event) => onChange(event.target.value)} placeholder="예: 회의에서 내가 낸 의견이 별다른 반응 없이 넘어갔다." autoFocus />
      </div>
    </div>
  );
}
