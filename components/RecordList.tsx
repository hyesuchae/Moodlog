import { useState } from "react";
import { EmotionRecord } from "@/types/emotion";
import { Card, EmptyState, PrimaryButton, SecondaryButton, Tag } from "./ui";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "short" }).format(new Date(value));
}

export function RecordList({ records, onDetail, onDelete, onStart }: { records: EmotionRecord[]; onDetail: (record: EmotionRecord) => void; onDelete: (id: string) => void; onStart: () => void }) {
  const [deleteTarget, setDeleteTarget] = useState<EmotionRecord | null>(null);
  return (
    <div className="px-5 pb-9 pt-7">
      <h1 className="text-[27px] font-bold tracking-[-0.03em] text-ink">이전 기록</h1>
      <p className="mt-2 text-sm leading-6 text-muted">그날의 마음을 다시 천천히 살펴보세요.</p>

      <div className="mt-7 space-y-4">
        {!records.length && (
          <>
            <EmptyState title="아직 저장된 기록이 없어요" description="마음이 흔들린 순간을 짧게 남기며 첫 기록을 시작해 보세요." />
            <PrimaryButton onClick={onStart}>첫 감정 기록하기</PrimaryButton>
          </>
        )}
        {records.map((record) => {
          const emotions = [...record.emotions, ...(record.customEmotion ? [record.customEmotion] : [])];
          return (
            <Card key={record.id}>
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-bold text-muted">{formatDate(record.createdAt)}</p>
                <span className="rounded-full bg-peach-50 px-2.5 py-1 text-xs font-bold text-[#966746]">강도 {record.intensity}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {emotions.length ? emotions.slice(0, 4).map((emotion) => <Tag key={emotion}>{emotion}</Tag>) : <Tag>표현하기 어려운 마음</Tag>}
              </div>
              <p className="mt-4 line-clamp-3 text-[15px] font-semibold leading-6 text-ink">{record.sentence || "문장으로 표현하지 않은 기록입니다."}</p>
              <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
                <SecondaryButton onClick={() => onDetail(record)}>상세 보기</SecondaryButton>
                <button onClick={() => setDeleteTarget(record)} className="min-h-13 rounded-2xl px-4 text-sm font-bold text-[#A15D56] active:bg-[#FFF0EC]">삭제</button>
              </div>
            </Card>
          );
        })}
      </div>

      {deleteTarget && (
        <div role="dialog" aria-modal="true" aria-labelledby="delete-title" className="fixed inset-0 z-50 flex items-end justify-center bg-black/35 p-4 sm:items-center">
          <div className="w-full max-w-[398px] rounded-[28px] bg-paper p-5 shadow-soft">
            <h2 id="delete-title" className="text-xl font-bold text-ink">기록을 삭제할까요?</h2>
            <p className="mt-3 text-sm leading-6 text-muted">이 기록을 삭제하면 다시 볼 수 없습니다. 삭제할까요?</p>
            <div className="mt-6 space-y-2">
              <button onClick={() => { onDelete(deleteTarget.id); setDeleteTarget(null); }} className="min-h-14 w-full rounded-2xl bg-[#A15D56] px-5 font-bold text-white">삭제하기</button>
              <SecondaryButton onClick={() => setDeleteTarget(null)}>취소</SecondaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
