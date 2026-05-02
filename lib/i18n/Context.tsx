'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { zh, type Dict } from './zh';
import { en } from './en';

export type Lang = 'zh' | 'en';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  ready: boolean;  // mount 后才为 true，避免 hydration 闪烁
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'rainbow_lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'zh';
  // 1. 用户曾经手动选过 → 沿用
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'zh' || saved === 'en') return saved;
  // 2. 浏览器语言：zh* → 中，其他 → 英
  const browser = (navigator.language || (navigator.languages?.[0] ?? '')).toLowerCase();
  if (browser.startsWith('zh')) return 'zh';
  return 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  // SSR 默认中文，客户端 mount 后会立刻按 detectInitialLang 调整
  const [lang, setLangState] = useState<Lang>('zh');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = detectInitialLang();
    setLangState(initial);
    setReady(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, l);
  };

  const t = lang === 'zh' ? zh : en;

  return <LangContext.Provider value={{ lang, setLang, t, ready }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
