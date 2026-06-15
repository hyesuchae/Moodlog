import { EmotionRecord } from "@/types/emotion";
import { Card, Tag } from "./ui";

function DetailSection({ title, value }: { title: string; value: string }) {
  return (
    <div className="border-b border-[#EBE5DC] py-5 last:border-0 last:pb-0 first:pt-0">
      <h2 className="text-xs font-bold text-muted">{title}</h2>
      <p className="mt-2 whitespace-pre-wrap text-[15px] leading-7 text-ink">{value || "기록하지 않았어요."}</p>
    </div>
  );
}

export function RecordDetail({ record }: { record: EmotionRecord }) {
  const date = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(record.createdAt));
  const emotions = [...record.emotions, ...(record.customEmotion ? [record.customEmotion] : [])];
  return (
    <div className="px-5 pb-9 pt-7">
      <p className="text-xs font-bold text-sage-600">{date}</p>
      <h1 className="mt-2 text-[27px] font-bold tracking-[-0.03em] text-ink">마음 기록 자세히 보기</h1>
      <Card className="mt-7">
        <DetailSection title="있었던 일" value={record.eventText} />
        <DetailSection title="떠오른 생각" value={record.thoughtText} />
        <div className="border-b border-[#EBE5DC] py-5">
          <h2 className="text-xs font-bold text-muted">감정어</h2>
          <div className="mt-3 flex flex-wrap gap-2">{emotions.length ? emotions.map((emotion) => <Tag key={emotion}>{emotion}</Tag>) : <span className="text-sm text-muted">선택하지 않았어요.</span>}</div>
        </div>
        <div className="border-b border-[#EBE5DC] py-5">
          <h2 className="text-xs font-bold text-muted">감정 강도</h2>
          <p className="mt-2 text-3xl font-extrabold text-sage-700">{record.intensity}<span className="ml-1 text-sm text-muted">/ 10</span></p>
        </div>
        <DetailSection title="몸의 신호" value={record.bodySignals.join("\n")} />
        <DetailSection title="나의 마음문장" value={record.sentence} />
        <DetailSection title="짧은 성찰" value={record.reflection} />
      </Card>
    </div>
  );
}
