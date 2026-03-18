"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-20 pt-32 z-10">
      {/* Background Glows */}
      <div 
        className="absolute left-1/2 top-1/4 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/20 blur-[80px] transition-opacity duration-1000"
        style={{ opacity: mounted ? 1 : 0 }}
      />
      
      <div className="container relative mx-auto w-full max-w-6xl px-6 z-20">
        <div 
          className="mx-auto flex max-w-3xl flex-col items-center text-center transition-all duration-1000"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-cyan shadow-lg shadow-brand-cyan/20">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-cyan shadow-[0_0_10px_#00D2FF]"></span>
            Make your business work smarter
          </div>
          
          {/* Headline */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
            Automate your<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-electric to-purple-400">business processes</span>
          </h1>
          
          {/* Subheadline */}
          <p className="mb-10 max-w-2xl text-lg text-white/70 md:text-xl">
            We replace Excel and manual workflows with custom software solutions designed for scale.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a free call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Floating Cards Diagram - Chaos to Order */}
        <div className="relative mx-auto mt-24 h-[320px] w-full max-w-4xl">
          
          {/* Messy Cards / Chaos */}
          <div 
            className="absolute left-0 top-4 z-20 w-48 -rotate-12 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-2xl transition-all duration-1000"
            style={{
              animation: "float-slow 6s ease-in-out infinite",
              opacity: mounted ? 1 : 0,
              transitionDelay: "300ms"
            }}
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-green-700 text-xs font-bold text-white">X</div>
              <span className="text-xs font-medium text-white/90">inventory.xlsx</span>
            </div>
            <div className="mb-2 h-1.5 w-full rounded-full bg-white/20" />
            <div className="mb-2 h-1.5 w-4/5 rounded-full bg-white/20" />
            <div className="h-1.5 w-3/5 rounded-full bg-white/20" />
          </div>

          <div 
            className="absolute left-[20%] top-32 z-10 w-44 rotate-6 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm shadow-xl transition-all duration-1000"
            style={{
              animation: "float-medium 5s ease-in-out infinite 1s",
              opacity: mounted ? 1 : 0,
              transitionDelay: "500ms"
            }}
          >
            <div className="mb-2 text-xs font-bold text-yellow-400">⚠️ Manual orders</div>
            <div className="text-[10px] text-white/60">Order #4092 - Pending...</div>
          </div>

          <div 
            className="absolute right-[5%] top-10 z-[25] w-48 rotate-12 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-2xl transition-all duration-1000"
            style={{
              animation: "float-fast 4s ease-in-out infinite 0.5s",
              opacity: mounted ? 1 : 0,
              transitionDelay: "400ms"
            }}
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0z"/></svg>
              </div>
              <span className="text-xs font-medium text-white/90">Client Messages</span>
            </div>
            <div className="mb-2 rounded-lg bg-white/10 p-2 text-[10px] text-white/70">Where is my order?</div>
            <div className="rounded-lg bg-brand-cyan/20 p-2 text-right text-[10px] text-brand-cyan">Let me check...</div>
          </div>

          <div 
            className="absolute right-[22%] top-40 z-0 w-40 -rotate-6 rounded-md bg-yellow-100 p-4 text-gray-800 shadow-xl transition-all duration-1000"
            style={{
              animation: "float-slow 7s ease-in-out infinite 2s",
              opacity: mounted ? 1 : 0,
              transitionDelay: "600ms"
            }}
          >
            <div className="-rotate-2 font-['Comic_Sans_MS',cursive,sans-serif] text-xs font-bold">Call supplier tomorrow!</div>
            <div className="mt-3 font-['Comic_Sans_MS',cursive,sans-serif] text-[10px] text-gray-500">- don't forget</div>
          </div>

          {/* Central System / Order (reactIVE) */}
          <div 
            className="absolute left-1/2 top-1/2 z-30 w-72 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
            style={{
              opacity: mounted ? 1 : 0,
              transitionDelay: "1s"
            }}
          >
            {/* Glowing connecting lines */}
            <svg className="absolute -inset-24 -z-10 h-[calc(100%+192px)] w-[calc(100%+192px)]">
              <path d="M50,150 Q100,100 150,150" fill="none" stroke="url(#blue-grad)" strokeWidth="2" strokeDasharray="4 4" style={{ animation: "dash 10s linear infinite" }}/>
              <path d="M400,50 Q300,100 250,150" fill="none" stroke="url(#cyan-grad)" strokeWidth="2" strokeDasharray="4 4" style={{ animation: "dash 10s linear infinite reverse" }}/>
              <path d="M400,250 Q300,200 250,150" fill="none" stroke="url(#blue-grad)" strokeWidth="2" strokeDasharray="4 4" style={{ animation: "dash 10s linear infinite" }}/>
              <path d="M50,250 Q150,200 150,150" fill="none" stroke="url(#cyan-grad)" strokeWidth="2" strokeDasharray="4 4" style={{ animation: "dash 10s linear infinite reverse" }}/>
              
              <defs>
                <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#3A7BD5" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative rounded-2xl border border-brand-cyan/40 bg-brand-deep/90 p-6 shadow-[0_0_50px_rgba(0,210,255,0.3)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-electric to-brand-cyan shadow-lg">
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" /><path d="M8 9L12.5 4.5L15 7L10.5 11.5L8 9Z" fill="white" className="opacity-60" /></svg>
                  </div>
                  <span className="text-sm font-bold text-white">reactIVE System</span>
                </div>
                <div className="rounded-full bg-brand-cyan/20 px-2.5 py-1 text-[10px] font-bold text-brand-cyan tracking-wider">SYNCED</div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-2.5">
                  <span className="text-xs font-medium text-white/80">Inventory DB</span>
                  <span className="text-xs font-bold text-green-400">Updated</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-2.5">
                  <span className="text-xs font-medium text-white/80">Orders API</span>
                  <span className="text-xs font-bold text-green-400">Processing</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-2.5">
                  <span className="text-xs font-medium text-white/80">Client Comms</span>
                  <span className="text-xs font-bold text-green-400">Automated</span>
                </div>
              </div>

              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div 
                  className="h-full w-full bg-gradient-to-r from-brand-electric via-brand-cyan to-brand-electric"
                  style={{ animation: "border-flow 3s linear infinite", backgroundSize: "200% 100%" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
