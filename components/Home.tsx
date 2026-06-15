import { Card, PrimaryButton, SecondaryButton } from "./ui";

export function Home({ onStart, onRecords, onWeekly }: { onStart: () => void; onRecords: () => void; onWeekly: () => void }) {
  const today = new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "long" }).format(new Date());
  return (
    <div className="px-5 pb-8 pt-7">
      <p className="text-xs font-bold text-sage-600">{today}</p>
      <h1 className="mt-2 text-[31px] font-extrabold tracking-[-0.04em] text-ink">마음문장</h1>
      <p className="mt-2 text-[15px] leading-6 text-muted">오늘의 마음을 한 문장으로 정리해 보세요.</p>

      <Card className="relative mt-8 overflow-hidden border-0 bg-sage-100 px-5 py-7">
        <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-white/45" />
        <div className="relative">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75 text-xl text-sage-700" aria-hidden="true">✦</div>
          <h2 className="max-w-[280px] text-[23px] font-bold leading-[1.4] tracking-[-0.03em] text-ink">지금 마음에 가장 가까운 단어는 무엇인가요?</h2>
          <p className="mb-6 mt-3 text-sm leading-6 text-muted">약 3분이면 충분해요.</p>
          <PrimaryButton onClick={onStart}>오늘의 감정 기록하기</PrimaryButton>
        </div>
      </Card>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <SecondaryButton onClick={onRecords} className="min-h-[86px] px-3">이전 기록 보기</SecondaryButton>
        <SecondaryButton onClick={onWeekly} className="min-h-[86px] px-3">이번 주 돌아보기</SecondaryButton>
      </div>

      <div className="mt-8 rounded-2xl bg-[#EEE9E1] px-4 py-4">
        <p className="text-xs leading-5 text-muted">이 앱은 상담이나 치료를 대신하지 않습니다.</p>
      </div>
    </div>
  );
}
