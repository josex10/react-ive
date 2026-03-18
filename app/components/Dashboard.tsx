"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations('Dashboard');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative z-20 py-20 md:py-32 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        <div className="mb-12 md:mb-20 text-center">
          <h2 className="mb-4 md:mb-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {t('title')} <span className="text-white/40">{t('titleHighlight')}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-white/70">
            {t('subtitle')}
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div
          className={`relative mx-auto w-full max-w-5xl rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-brand-cyan/30 via-white/5 to-brand-electric/20 p-1 md:p-2 shadow-2xl transition-all duration-1000 ease-out ${isVisible ? 'scale-100 translate-y-0' : 'scale-[0.98] translate-y-8'}`}
        >
          {/* Inner Dashboard UI */}
          <div className="overflow-hidden rounded-[1.2rem] md:rounded-[2rem] border border-white/10 bg-brand-deep shadow-inner">
            {/* Top Bar */}
            <div className="flex h-14 md:h-16 items-center justify-between border-b border-white/5 px-4 md:px-8">
              <div className="flex items-center gap-3 md:gap-4">
                <Image src="/reactive-logo-isotipo.svg" alt="Logo" width={24} height={24} className="md:w-8 md:h-8" />
                <div className="hidden sm:block">
                  <span className="text-xs md:text-sm font-bold text-white">{t('opsCenter')}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-5">
                <div className="hidden items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-[10px] md:text-xs font-medium text-white/40 md:flex">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  {t('search')}
                </div>
                <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white shadow-inner">
                  JB
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
              {/* Sidebar */}
              <div className="hidden w-60 flex-col gap-2 border-r border-white/5 bg-white/[0.02] px-4 py-6 md:flex">
                {[t('nav1'), t('nav2'), t('nav3'), t('nav4'), t('nav5'), t('nav6')].map((item, i) => (
                  <div
                    key={item}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${i === 0 ? 'bg-brand-cyan/10 font-bold text-brand-cyan' : 'font-medium text-white/50 hover:bg-white/5 hover:text-white/80'}`}
                  >
                    <div className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-brand-cyan shadow-[0_0_8px_#00D2FF]' : 'bg-transparent'}`} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-black/20 p-4 md:p-10">
                {/* Header Stats */}
                <div className="mb-6 md:mb-8 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
                  {[
                    { label: t('stat1'), value: "$124,500", trend: "+12.5%", positive: true },
                    { label: t('stat2'), value: "843", trend: "+5.2%", positive: true },
                    { label: t('stat3'), value: "2.4 hrs", trend: t('stat3Trend'), positive: true },
                    { label: t('stat4'), value: "12", trend: t('stat4Trend'), positive: false }
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-xl md:rounded-2xl border border-white/5 bg-white/5 p-3 md:p-5 shadow-sm backdrop-blur-md"
                    >
                      <div className="mb-2 text-[10px] font-medium text-white/50">{stat.label}</div>
                      <div className="mb-1 text-base md:text-2xl font-extrabold text-white">{stat.value}</div>
                      <div className={`text-[10px] font-bold ${stat.positive ? 'text-green-400' : 'text-yellow-400'}`}>{stat.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-[2fr_1fr]">

                  {/* Main Chart */}
                  <div className="rounded-xl md:rounded-2xl border border-white/5 bg-white/5 p-4 md:p-6 shadow-sm backdrop-blur-md">
                    <div className="mb-4 md:mb-8 text-xs md:text-sm font-bold text-white">{t('chartTitle')}</div>

                    {/* Fake Bar Chart */}
                    <div className="mt-4 flex h-[150px] md:h-[220px] items-end gap-1 md:gap-2.5">
                      {[...Array(24)].map((_, i) => {
                        // Deterministic pseudo-random height so SSR and Client match perfectly
                        const height = 30 + ((i * 37) % 70);
                        return (
                          <div
                            key={i}
                            style={{
                              animation: isVisible ? `bar-grow 1s ease forwards ${i * 0.04}s` : 'none',
                              "--bar-h": `${height}%`,
                              height: isVisible ? 0 : `${height}%` // Initialize at 0 if animating, or fallback to height
                            } as React.CSSProperties}
                            className={`flex-1 rounded-t-[1px] md:rounded-t-sm w-full ${i === 23 ? 'bg-gradient-to-t from-brand-electric to-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.4)]' : 'bg-white/10 hover:bg-white/20 transition-colors'} ${i % 2 !== 0 ? 'hidden sm:block' : ''}`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* List / Activity */}
                  <div className="rounded-xl md:rounded-2xl border border-white/5 bg-white/5 p-4 md:p-6 shadow-sm backdrop-blur-md">
                    <div className="mb-4 md:mb-6 text-xs md:text-sm font-bold text-white">{t('activityTitle')}</div>

                    <div className="flex flex-col gap-4 md:gap-5">
                      {[
                        { text: t('act1'), time: t('act1Time'), color: "bg-green-400" },
                        { text: t('act2'), time: t('act2Time'), color: "bg-yellow-400" },
                        { text: t('act3'), time: t('act3Time'), color: "bg-brand-cyan" },
                        { text: t('act4'), time: t('act4Time'), color: "bg-white/40" },
                        { text: t('act5'), time: t('act5Time'), color: "bg-green-400" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`mt-1.5 h-1.5 w-1.5 md:h-2 md:w-2 shrink-0 rounded-full ${item.color} shadow-sm`} />
                          <div>
                            <div className="mb-0.5 text-xs md:text-sm font-medium text-white/90">{item.text}</div>
                            <div className="text-[10px] md:text-xs text-white/40">{item.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
