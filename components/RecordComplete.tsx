import { EmotionRecord } from "@/types/emotion";
import { Card, PrimaryButton, SecondaryButton, Tag } from "./ui";

export function RecordComplete({ record, onHome, onRecords }: { record: EmotionRecord; onHome: () => void; onRecords: () => void }) {
  const emotions = [...record.emotions, ...(record.customEmotion ? [record.customEmotion] : [])];
  return (
    <div className="px-5 pb-8 pt-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-2xl font-bold text-sage-700" aria-hidden="true">✓</div>
      <h1 className="mt-6 text-center text-[26px] font-bold leading-9 tracking-[-0.03em] text-ink">오늘의 감정 기록이<br />저장되었어요.</h1>
      <p className="mt-3 text-center text-sm leading-6 text-muted">잠시 멈춰 내 마음을 살펴본 시간을 남겼어요.</p>

      <Card className="mt-8 space-y-6">
        <div>
          <p className="mb-2 text-xs font-bold text-muted">선택한 감정어</p>
          <div className="flex flex-wrap gap-2">
            {emotions.length ? emotions.map((emotion) => <Tag key={emotion}>{emotion}</Tag>) : <span className="text-sm text-muted">선택하지 않았어요</span>}
          </div>
        </div>
        <div className="border-t border-[#EBE5DC] pt-5">
          <p className="text-xs font-bold text-muted">감정 강도</p>
          <p className="mt-1 text-3xl font-extrabold text-sage-700">{record.intensity}<span className="ml-1 text-sm font-semibold text-muted">/ 10</span></p>
        </div>
        <div className="border-t border-[#EBE5DC] pt-5">
          <p className="text-xs font-bold text-muted">나의 마음문장</p>
          <p className="mt-2 text-[16px] font-semibold leading-7 text-ink">{record.sentence || "아직 문장으로 표현하지 않았어요."}</p>
        </div>
      </Card>

      <p className="mx-auto mt-7 max-w-[300px] text-center text-sm leading-6 text-muted">감정을 정확히 맞히는 것보다, 천천히 살펴본 것이 중요합니다.</p>
      <div className="mt-7 space-y-3">
        <PrimaryButton onClick={onHome}>홈으로</PrimaryButton>
        <SecondaryButton onClick={onRecords}>이전 기록 보기</SecondaryButton>
      </div>
    </div>
  );
}
