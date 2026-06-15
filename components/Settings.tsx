import { useState } from "react";
import { Card, SecondaryButton } from "./ui";

export function Settings({ hasRecords, onReplayOnboarding, onClearRecords, onAbout }: { hasRecords: boolean; onReplayOnboarding: () => void; onClearRecords: () => void; onAbout: () => void }) {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="px-5 pb-9 pt-7">
      <h1 className="text-[27px] font-bold tracking-[-0.03em] text-ink">설정</h1>
      <div className="mt-7 space-y-4">
        <Card className="space-y-2 p-3">
          <button onClick={onReplayOnboarding} className="flex min-h-14 w-full items-center justify-between rounded-2xl px-3 text-left text-sm font-bold text-ink active:bg-cream"><span>온보딩 다시 보기</span><span aria-hidden="true">›</span></button>
          <button onClick={onAbout} className="flex min-h-14 w-full items-center justify-between rounded-2xl px-3 text-left text-sm font-bold text-ink active:bg-cream"><span>앱 설명 보기</span><span aria-hidden="true">›</span></button>
          <button disabled={!hasRecords} onClick={() => setShowConfirm(true)} className="flex min-h-14 w-full items-center justify-between rounded-2xl px-3 text-left text-sm font-bold text-[#A15D56] active:bg-[#FFF0EC] disabled:text-[#BEB7AE]"><span>전체 기록 삭제</span><span aria-hidden="true">›</span></button>
        </Card>

        <Card>
          <h2 className="text-sm font-bold text-ink">내 기록과 개인정보</h2>
          <p className="mt-3 text-sm leading-6 text-muted">현재 MVP에서는 기록이 사용자의 브라우저 localStorage에만 저장됩니다.</p>
          <p className="mt-2 text-sm leading-6 text-muted">기록은 사용자가 직접 삭제할 수 있습니다.</p>
        </Card>

        <Card className="border-peach-100 bg-peach-50">
          <h2 className="text-sm font-bold text-ink">도움이 더 필요할 때</h2>
          <p className="mt-3 text-sm leading-6 text-muted">지속적인 우울감, 자해 생각, 폭력 피해, 심각한 불안이 있다면 이 앱만으로 해결하려 하지 말고 학교 상담센터, 지역 상담기관, 정신건강복지센터 등 전문적인 도움을 받아야 합니다.</p>
        </Card>
      </div>

      {showConfirm && (
        <div role="dialog" aria-modal="true" aria-labelledby="clear-title" className="fixed inset-0 z-50 flex items-end justify-center bg-black/35 p-4 sm:items-center">
          <div className="w-full max-w-[398px] rounded-[28px] bg-paper p-5 shadow-soft">
            <h2 id="clear-title" className="text-xl font-bold text-ink">모든 기록을 삭제할까요?</h2>
            <p className="mt-3 text-sm leading-6 text-muted">삭제한 기록은 다시 볼 수 없습니다. 저장된 감정 기록을 모두 삭제할까요?</p>
            <div className="mt-6 space-y-2">
              <button onClick={() => { onClearRecords(); setShowConfirm(false); }} className="min-h-14 w-full rounded-2xl bg-[#A15D56] px-5 font-bold text-white">전체 삭제하기</button>
              <SecondaryButton onClick={() => setShowConfirm(false)}>취소</SecondaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
