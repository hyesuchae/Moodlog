import { EmotionRecord } from "@/types/emotion";
import { Card, EmptyState, PrimaryButton, Tag } from "./ui";

export function WeeklyReport({ records, onStart }: { records: EmotionRecord[]; onStart: () => void }) {
  const boundary = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const weekly = records.filter((record) => Date.parse(record.createdAt) >= boundary);
  const frequencies = new Map<string, number>();
  weekly.forEach((record) => [...record.emotions, ...(record.customEmotion ? [record.customEmotion] : [])].forEach((emotion) => frequencies.set(emotion, (frequencies.get(emotion) ?? 0) + 1)));
  const top = [...frequencies.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3);
  const average = weekly.length ? (weekly.reduce((sum, record) => sum + record.intensity, 0) / weekly.length).toFixed(1) : "0";
  const highest = weekly.reduce<EmotionRecord | null>((current, record) => !current || record.intensity > current.intensity ? record : current, null);
  const recentSentences = weekly.filter((record) => record.sentence.trim()).slice(0, 3);

  return (
    <div className="px-5 pb-9 pt-7">
      <p className="text-xs font-bold text-sage-600">최근 7일</p>
      <h1 className="mt-2 text-[27px] font-bold tracking-[-0.03em] text-ink">이번 주 돌아보기</h1>
      <p className="mt-2 text-sm leading-6 text-muted">기록을 판단하지 않고, 이번 주 마음의 흐름을 가볍게 살펴봐요.</p>

      {!weekly.length ? (
        <div className="mt-7 space-y-4">
          <EmptyState title="이번 주 기록이 아직 없어요" description="기록이 쌓이면 자주 적은 감정어와 마음문장을 이곳에서 함께 볼 수 있어요." />
          <PrimaryButton onClick={onStart}>오늘의 감정 기록하기</PrimaryButton>
        </div>
      ) : (
        <div className="mt-7 space-y-4">
          <Card className="bg-sage-50">
            <p className="text-xs font-bold text-sage-700">이번 주 기록</p>
            <p className="mt-2 text-4xl font-extrabold text-ink">{weekly.length}<span className="ml-1 text-base font-semibold text-muted">개</span></p>
          </Card>

          <Card>
            <h2 className="text-base font-bold text-ink">이번 주에는 이런 감정어가 자주 기록되었어요.</h2>
            <div className="mt-4 space-y-3">
              {top.length ? top.map(([emotion, count], index) => (
                <div key={emotion} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-100 text-xs font-extrabold text-sage-700">{index + 1}</span>
                  <Tag>{emotion}</Tag>
                  <span className="ml-auto text-xs font-bold text-muted">{count}번</span>
                </div>
              )) : <p className="text-sm text-muted">선택한 감정어가 아직 없어요.</p>}
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4">
              <p className="text-xs font-bold leading-5 text-muted">평균 감정 강도</p>
              <p className="mt-3 text-3xl font-extrabold text-sage-700">{average}</p>
              <p className="mt-1 text-xs text-muted">기록한 정도의 평균</p>
            </Card>
            <Card className="p-4">
              <p className="text-xs font-bold leading-5 text-muted">가장 크게 느낀 기록</p>
              <p className="mt-3 text-3xl font-extrabold text-[#A06E4D]">{highest?.intensity ?? 0}</p>
              <p className="mt-1 text-xs text-muted">10 중에 표시한 값</p>
            </Card>
          </div>

          {highest && (
            <Card>
              <h2 className="text-sm font-bold text-ink">가장 크게 느껴졌던 순간</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{highest.eventText || "사건을 따로 적지 않은 기록이에요."}</p>
            </Card>
          )}

          <Card>
            <h2 className="text-base font-bold text-ink">최근 마음문장</h2>
            <div className="mt-3 divide-y divide-[#EBE5DC]">
              {recentSentences.length ? recentSentences.map((record) => <p key={record.id} className="py-4 text-sm font-semibold leading-6 text-ink first:pt-2 last:pb-0">{record.sentence}</p>) : <p className="pt-2 text-sm text-muted">저장된 마음문장이 아직 없어요.</p>}
            </div>
          </Card>

          <p className="rounded-2xl bg-[#EEE9E1] p-4 text-xs leading-5 text-muted">이 기록은 감정을 판단하기 위한 것이 아니라, 반복되는 마음의 흐름을 살펴보기 위한 자료입니다.</p>
        </div>
      )}
    </div>
  );
}
