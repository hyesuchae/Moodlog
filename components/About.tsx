import { Card } from "./ui";

export function About() {
  return (
    <div className="px-5 pb-9 pt-7">
      <p className="text-xs font-bold text-sage-600">Moodlog MVP</p>
      <h1 className="mt-2 text-[27px] font-bold tracking-[-0.03em] text-ink">마음문장 소개</h1>
      <div className="mt-7 space-y-4">
        <Card>
          <h2 className="text-base font-bold text-ink">마음을 구체적으로 표현하는 연습</h2>
          <p className="mt-3 text-sm leading-7 text-muted">마음문장은 일상에서 있었던 일, 그때 떠오른 생각, 감정을 차례로 살펴보고 나의 언어로 한 문장을 만들어 보는 교육용 기록 앱입니다.</p>
        </Card>
        <Card>
          <h2 className="text-base font-bold text-ink">평가하거나 진단하지 않아요</h2>
          <p className="mt-3 text-sm leading-7 text-muted">감정에는 정답이 없습니다. 이 앱은 사용자의 상태를 평가하거나 상담·치료를 제공하지 않으며, 스스로 마음을 알아차리고 표현하는 과정을 돕습니다.</p>
        </Card>
        <Card>
          <h2 className="text-base font-bold text-ink">기록은 이 브라우저에만</h2>
          <p className="mt-3 text-sm leading-7 text-muted">로그인이나 외부 서버 없이 현재 브라우저에 기록을 저장합니다. 브라우저 데이터가 지워지면 기록도 함께 사라질 수 있습니다.</p>
        </Card>
      </div>
    </div>
  );
}
