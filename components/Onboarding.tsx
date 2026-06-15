import { useState } from "react";
import { PrimaryButton, TextButton } from "./ui";

const slides = [
  { eyebrow: "마음 알아차리기", title: "감정을 잘 몰라도 괜찮아요.", body: "정확한 이름을 바로 찾지 못해도 괜찮습니다. 천천히 가까운 표현부터 골라 보세요.", mark: "01" },
  { eyebrow: "생각과 감정 나누기", title: "생각과 감정은 다를 수 있어요.", body: "머릿속 해석과 그 아래의 마음을 따로 살펴보면, 내 경험을 조금 더 선명하게 이해할 수 있어요.", mark: "02" },
  { eyebrow: "부담 없는 기록", title: "짧게 기록해도 충분해요.", body: "완벽한 문장이나 긴 설명은 필요하지 않아요. 지금 떠오르는 만큼만 적어도 충분합니다.", mark: "03" },
  { eyebrow: "내 기록의 주인", title: "기록은 내가 관리해요.", body: "현재 기록은 이 브라우저에만 저장되며, 설정에서 언제든 직접 삭제할 수 있어요.", mark: "04" },
];

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const isLast = index === slides.length - 1;

  return (
    <div className="flex min-h-[100dvh] flex-col px-6 pb-8 pt-7 sm:min-h-[calc(100vh-48px)]">
      <div className="flex items-center justify-between">
        <span className="text-lg font-extrabold tracking-[-0.03em] text-sage-700">마음문장</span>
        {!isLast && <TextButton onClick={onComplete}>건너뛰기</TextButton>}
      </div>

      <div className="flex flex-1 flex-col justify-center py-10">
        <div className="relative mb-10 h-52 overflow-hidden rounded-[32px] bg-sage-100">
          <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/45" />
          <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-peach-100" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-[30px] border border-white/70 bg-white/65 text-3xl font-light text-sage-700 shadow-sm">{slide.mark}</div>
          </div>
        </div>
        <p className="mb-3 text-xs font-extrabold tracking-[0.12em] text-sage-600">{slide.eyebrow}</p>
        <h1 className="text-[30px] font-bold leading-[1.3] tracking-[-0.035em] text-ink">{slide.title}</h1>
        <p className="mt-4 text-[15px] leading-7 text-muted">{slide.body}</p>
      </div>

      <div className="space-y-5">
        <div className="flex justify-center gap-2" aria-label={`온보딩 ${index + 1} / ${slides.length}`}>
          {slides.map((_, dotIndex) => <span key={dotIndex} className={`h-2 rounded-full transition-all ${dotIndex === index ? "w-7 bg-sage-600" : "w-2 bg-[#D7D1C8]"}`} />)}
        </div>
        <PrimaryButton onClick={() => isLast ? onComplete() : setIndex(index + 1)}>
          {isLast ? "첫 감정 기록하기" : "다음"}
        </PrimaryButton>
      </div>
    </div>
  );
}
