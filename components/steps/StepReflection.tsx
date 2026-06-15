import { StepHeading, TextArea } from "../ui";

export function StepReflection({
  value,
  sentence,
  onChange,
}: {
  value: string;
  sentence: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-7">
      <StepHeading
        title="이번 기록에서 알게 된 점이 있나요?"
        description="새롭게 보인 마음이나 다음에 기억하고 싶은 점이 있다면 짧게 남겨 보세요."
      />

      <div className="rounded-[24px] border border-sage-100 bg-sage-50 p-4">
        <p className="text-xs font-bold text-sage-700">내가 완성한 마음문장</p>
        <p className="mt-3 whitespace-pre-wrap text-[15px] font-semibold leading-7 text-ink">
          {sentence.trim() || "앞 단계에서 마음문장을 완성하면 이곳에 보여드려요."}
        </p>
      </div>

      <div>
        <label htmlFor="reflection" className="mb-2 block text-sm font-bold text-ink">
          짧은 성찰
        </label>
        <TextArea
          id="reflection"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="예: 나는 의견이 충분히 다뤄지지 않을 때 소외감을 자주 느끼는 것 같다."
          autoFocus
        />
      </div>
    </div>
  );
}
