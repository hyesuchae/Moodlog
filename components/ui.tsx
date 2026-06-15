import { ButtonHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function PrimaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`min-h-14 w-full rounded-2xl bg-sage-600 px-5 py-3.5 text-[15px] font-bold text-white shadow-sm transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-45 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`min-h-13 w-full rounded-2xl border border-[#DDD7CD] bg-white px-5 py-3 text-[15px] font-bold text-ink transition active:bg-[#F8F5F0] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function TextButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`min-h-11 px-2 py-2 text-sm font-semibold text-muted underline-offset-4 hover:underline ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[24px] border border-[#E8E1D8] bg-paper p-5 ${className}`}>{children}</div>;
}

export function TextArea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`min-h-40 w-full resize-none rounded-2xl border border-[#DED8CE] bg-white px-4 py-4 text-[16px] leading-7 text-ink placeholder:text-[#AAA39A] ${className}`}
      {...props}
    />
  );
}

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const percentage = (current / total) * 100;
  return (
    <div aria-label={`${total}단계 중 ${current}단계`} className="space-y-2">
      <div className="flex items-center justify-between text-xs font-bold text-muted">
        <span>감정 기록</span>
        <span>{current} / {total}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[#EAE5DC]">
        <div className="h-full rounded-full bg-sage-500 transition-all duration-300" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export function EmotionChip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition ${
        selected
          ? "border-sage-600 bg-sage-600 text-white shadow-sm"
          : "border-[#DDD7CE] bg-white text-[#5E5A54] active:bg-sage-50"
      }`}
    >
      {label}
    </button>
  );
}

export function StepHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="space-y-3">
      <h1 className="text-[25px] font-bold leading-[1.35] tracking-[-0.025em] text-ink">{title}</h1>
      {description && <p className="text-[14px] leading-6 text-muted">{description}</p>}
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card className="py-10 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-50 text-xl" aria-hidden="true">○</div>
      <h2 className="font-bold text-ink">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </Card>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-sage-50 px-3 py-1.5 text-xs font-bold text-sage-700">{children}</span>;
}
