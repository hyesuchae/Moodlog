import { bodySignals } from "@/lib/emotion-data";
import { StepHeading } from "../ui";

export function StepBodySignals({ selected, onToggle }: { selected: string[]; onToggle: (signal: string) => void }) {
  return (
    <div className="space-y-7">
      <StepHeading title="몸에서는 어떤 신호가 있었나요?" description="마음은 몸의 변화로 먼저 나타나기도 해요. 기억나는 것이 없다면 건너뛰어도 괜찮습니다." />
      <fieldset className="space-y-3">
        <legend className="sr-only">신체 반응 선택</legend>
        {bodySignals.map((signal) => {
          const isSelected = selected.includes(signal);
          return (
            <label key={signal} className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 transition ${isSelected ? "border-sage-500 bg-sage-50" : "border-[#E2DCD3] bg-white"}`}>
              <input type="checkbox" checked={isSelected} onChange={() => onToggle(signal)} className="sr-only" />
              <span aria-hidden="true" className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-sm font-bold ${isSelected ? "border-sage-600 bg-sage-600 text-white" : "border-[#CFC8BE] bg-white text-transparent"}`}>✓</span>
              <span className="text-sm font-semibold leading-5 text-ink">{signal}</span>
            </label>
          );
        })}
      </fieldset>
    </div>
  );
}
