"use client";

import { useCallback, useEffect, useState } from "react";
import { About } from "@/components/About";
import { AppShell } from "@/components/AppShell";
import { EmotionFlow } from "@/components/EmotionFlow";
import { Home } from "@/components/Home";
import { Onboarding } from "@/components/Onboarding";
import { RecordComplete } from "@/components/RecordComplete";
import { RecordDetail } from "@/components/RecordDetail";
import { RecordList } from "@/components/RecordList";
import { Settings } from "@/components/Settings";
import { WeeklyReport } from "@/components/WeeklyReport";
import { emptyDraft } from "@/lib/emotion-data";
import { ONBOARDING_KEY, clearRecords, deleteRecord, getRecords, saveRecord } from "@/lib/storage";
import { EmotionDraft, EmotionRecord, Screen } from "@/types/emotion";

export default function MoodlogApp() {
  const [ready, setReady] = useState(false);
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [records, setRecords] = useState<EmotionRecord[]>([]);
  const [draft, setDraft] = useState<EmotionDraft>({ ...emptyDraft });
  const [latestRecord, setLatestRecord] = useState<EmotionRecord | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<EmotionRecord | null>(null);

  useEffect(() => {
    const onboardingDone = window.localStorage.getItem(ONBOARDING_KEY) === "true";
    setRecords(getRecords());
    setScreen(onboardingDone ? "home" : "onboarding");
    setReady(true);
  }, []);

  const updateDraft = useCallback((patch: Partial<EmotionDraft>) => {
    setDraft((current) => ({ ...current, ...patch }));
  }, []);

  const beginRecord = () => {
    setDraft({ ...emptyDraft, emotions: [], bodySignals: [] });
    setScreen("flow");
  };

  const completeOnboarding = () => {
    window.localStorage.setItem(ONBOARDING_KEY, "true");
    setScreen("home");
  };

  const storeDraft = () => {
    const record: EmotionRecord = {
      ...draft,
      id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      createdAt: new Date().toISOString(),
    };
    setRecords(saveRecord(record));
    setLatestRecord(record);
    setScreen("complete");
  };

  const removeRecord = (id: string) => setRecords(deleteRecord(id));
  const removeAllRecords = () => {
    clearRecords();
    setRecords([]);
    setSelectedRecord(null);
  };

  const replayOnboarding = () => {
    window.localStorage.removeItem(ONBOARDING_KEY);
    setScreen("onboarding");
  };

  const openDetail = (record: EmotionRecord) => {
    setSelectedRecord(record);
    setScreen("record-detail");
  };

  if (!ready) {
    return (
      <AppShell>
        <div className="flex min-h-[100dvh] items-center justify-center sm:min-h-[calc(100vh-48px)]">
          <div className="h-8 w-8 animate-pulse rounded-full bg-sage-100" aria-label="앱 불러오는 중" />
        </div>
      </AppShell>
    );
  }

  if (screen === "onboarding") return <AppShell><Onboarding onComplete={completeOnboarding} /></AppShell>;

  if (screen === "home") {
    return (
      <AppShell showSettings onSettings={() => setScreen("settings")}>
        <Home onStart={beginRecord} onRecords={() => setScreen("records")} onWeekly={() => setScreen("weekly")} />
      </AppShell>
    );
  }

  if (screen === "flow") {
    return (
      <AppShell headerTitle="오늘의 감정 기록">
        <EmotionFlow draft={draft} onChange={updateDraft} onExit={() => setScreen("home")} onSave={storeDraft} />
      </AppShell>
    );
  }

  if (screen === "complete" && latestRecord) {
    return <AppShell><RecordComplete record={latestRecord} onHome={() => setScreen("home")} onRecords={() => setScreen("records")} /></AppShell>;
  }

  if (screen === "records") {
    return (
      <AppShell showBack onBack={() => setScreen("home")} headerTitle="이전 기록">
        <RecordList records={records} onDetail={openDetail} onDelete={removeRecord} onStart={beginRecord} />
      </AppShell>
    );
  }

  if (screen === "record-detail" && selectedRecord) {
    return <AppShell showBack onBack={() => setScreen("records")} headerTitle="기록 자세히 보기"><RecordDetail record={selectedRecord} /></AppShell>;
  }

  if (screen === "weekly") {
    return <AppShell showBack onBack={() => setScreen("home")} headerTitle="이번 주 돌아보기"><WeeklyReport records={records} onStart={beginRecord} /></AppShell>;
  }

  if (screen === "settings") {
    return (
      <AppShell showBack onBack={() => setScreen("home")} headerTitle="설정">
        <Settings hasRecords={records.length > 0} onReplayOnboarding={replayOnboarding} onClearRecords={removeAllRecords} onAbout={() => setScreen("about")} />
      </AppShell>
    );
  }

  if (screen === "about") {
    return <AppShell showBack onBack={() => setScreen("settings")} headerTitle="앱 설명"><About /></AppShell>;
  }

  return null;
}
