import { CSSProperties } from "react";
import { StepHeading } from "../ui";

export function StepIntensity({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  const rangeStyle = { "--range-progress": `${value * 10}%` } as CSSProperties;
  return (
    <div className="space-y-10">
      <StepHeading title="그 감정은 어느 정도 크게 느껴졌나요?" description="숫자에는 좋고 나쁨이 없어요. 그 순간 느껴진 정도를 편하게 표시해 주세요." />
      <div className="rounded-[28px] border border-[#E6E0D7] bg-paper px-5 py-8 text-center">
        <p className="text-xs font-bold text-muted">내가 느낀 정도</p>
        <div aria-live="polite" className="my-4 text-[68px] font-extrabold leading-none tracking-[-0.05em] text-sage-700">{value}</div>
        <p className="text-sm text-muted">0에서 10 사이</p>
        <label htmlFor="intensity" className="sr-only">감정 강도</label>
        <input id="intensity" type="range" min="0" max="10" step="1" value={value} onChange={(event) => onChange(Number(event.target.value))} style={rangeStyle} className="mt-9" />
        <div className="mt-4 flex justify-between gap-4 text-left text-[11px] leading-4 text-muted">
          <span>거의 느껴지지 않음</span>
          <span className="text-right">매우 크게 느껴짐</span>
        </div>
      </div>
    </div>
  );
}
