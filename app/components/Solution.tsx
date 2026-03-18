"use client";
import { useEffect, useRef, useState } from "react";

export default function Solution() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      title: "Custom Software",
      description: "Tailor-made web applications that fit your exact business workflows perfectly, not standard templates.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "Process Automation",
      description: "We connect APIs and automate repetitive tasks across your tools using modern architectures.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      title: "Real-time Dashboards",
      description: "Get instant visibility into your entire operation with unified data metrics all in one place.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: "Native Integrations",
      description: "We integrate directly with ERPs, CRMs, WhatsApp, and Stripe for seamless business continuity.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="solutions"
      ref={sectionRef}
      className={`relative z-20 py-32 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    >
      {/* Background element */}
      <div className="absolute left-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-electric/10 blur-[100px]" />

      <div className="container mx-auto max-w-6xl px-6">
        
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Side - Text */}
          <div className="flex flex-col">
            <div className="mb-6 self-start rounded-full border border-brand-electric/30 bg-brand-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-electric">
              How we do it
            </div>
            
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">scale flawlessly</span>
            </h2>
            
            <p className="mb-12 text-lg leading-relaxed text-white/70">
              We don't just build software. We engineer automated workflows that eliminate human error and dramatically reduce operating costs.
            </p>

            <div className="flex flex-col gap-8">
              {solutions.map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-electric/20 bg-brand-electric/10 text-brand-cyan shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-white">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visuals */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 backdrop-blur-2xl shadow-2xl">
              {/* Fake UI Header */}
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2.5">
                  <div className="h-3 w-3 rounded-full bg-red-500 shadow-sm" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-sm" />
                  <div className="h-3 w-3 rounded-full bg-green-500 shadow-sm" />
                </div>
                <div className="text-xs font-medium text-white/40">app.reactive.com</div>
              </div>

              {/* Code/Flow Visual */}
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-white/5 bg-black/50 p-5 shadow-inner">
                  <div className="mb-3 font-mono text-xs text-purple-400">// Workflow Pipeline</div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded bg-yellow-500/10 px-2 py-1 font-mono text-sm text-yellow-500">WebHook</div>
                    <div className="text-white/40">→</div>
                    <div className="rounded bg-blue-400/10 px-2 py-1 font-mono text-sm text-blue-400">Transform</div>
                    <div className="text-white/40">→</div>
                    <div className="rounded bg-green-400/10 px-2 py-1 font-mono text-sm text-green-400">Database</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-5 shadow-inner">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">Uptime</div>
                    <div className="text-3xl font-extrabold text-green-400">99.99%</div>
                  </div>
                  <div className="rounded-xl border border-brand-cyan/20 bg-brand-cyan/10 p-5 shadow-inner">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-cyan/80">Events Processed</div>
                    <div className="text-3xl font-extrabold text-brand-cyan">1.2M+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -right-8 -top-8 -z-10 h-32 w-32 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-brand-electric to-brand-cyan opacity-40 blur-[50px]" />
            <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-gradient-to-tr from-purple-500/30 to-brand-cyan/30 opacity-40 blur-[60px]" />
          </div>
        </div>

      </div>
    </section>
  );
}
