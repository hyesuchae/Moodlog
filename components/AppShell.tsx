import { ReactNode } from "react";

function BackIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>;
}

function SettingsIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></svg>;
}

export function AppShell({
  children,
  showBack = false,
  showSettings = false,
  onBack,
  onSettings,
  headerTitle,
}: {
  children: ReactNode;
  showBack?: boolean;
  showSettings?: boolean;
  onBack?: () => void;
  onSettings?: () => void;
  headerTitle?: string;
}) {
  return (
    <main className="mx-auto min-h-[100dvh] w-full max-w-[430px] overflow-hidden bg-cream shadow-soft sm:min-h-[calc(100vh-48px)] sm:rounded-[32px]">
      {(showBack || showSettings || headerTitle) && (
        <header className="sticky top-0 z-20 grid h-16 grid-cols-[48px_1fr_48px] items-center border-b border-[#E9E3DA] bg-cream/95 px-3 backdrop-blur">
          <div>
            {showBack && (
              <button onClick={onBack} className="flex h-11 w-11 items-center justify-center rounded-full text-ink active:bg-white" aria-label="뒤로 가기"><BackIcon /></button>
            )}
          </div>
          <div className="truncate text-center text-sm font-bold text-ink">{headerTitle}</div>
          <div>
            {showSettings && (
              <button onClick={onSettings} className="flex h-11 w-11 items-center justify-center rounded-full text-ink active:bg-white" aria-label="설정 열기"><SettingsIcon /></button>
            )}
          </div>
        </header>
      )}
      {children}
    </main>
  );
}
