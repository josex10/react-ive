"use client";
import { useEffect, useRef, useState } from "react";

export default function Dashboard() {
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
      className={`relative z-20 py-32 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            See your business, <span className="text-white/40">clearly</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Our custom dashboards give you real-time visibility into all your operations without touching a single spreadsheet.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div 
          className={`relative mx-auto w-full max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-brand-cyan/30 via-white/5 to-brand-electric/20 p-2 shadow-2xl transition-all duration-1000 ease-out ${isVisible ? 'scale-100 translate-y-0' : 'scale-[0.98] translate-y-8'}`}
        >
          {/* Inner Dashboard UI */}
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-brand-deep shadow-inner">
            {/* Top Bar */}
            <div className="flex h-16 items-center justify-between border-b border-white/5 px-6 lg:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-electric to-brand-cyan shadow">
                   <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" /><path d="M8 9L12.5 4.5L15 7L10.5 11.5L8 9Z" fill="white" className="opacity-60" /></svg>
                </div>
                <div className="hidden sm:block">
                  <span className="text-sm font-bold text-white">Operations Center</span>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="hidden items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-white/40 md:flex">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                   Search everything... (⌘K)
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-品牌-cyan to-white/20 text-xs font-bold text-white shadow-inner">
                  JB
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row min-h-[600px]">
              {/* Sidebar */}
              <div className="hidden w-60 flex-col gap-2 border-r border-white/5 bg-white/[0.02] px-4 py-6 md:flex">
                {['Overview', 'Orders', 'Inventory', 'Customers', 'Analytics', 'Settings'].map((item, i) => (
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
              <div className="flex-1 bg-black/20 p-6 lg:p-10">
                {/* Header Stats */}
                <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: "Total Revenue", value: "$124,500", trend: "+12.5%", positive: true },
                    { label: "Active Orders", value: "843", trend: "+5.2%", positive: true },
                    { label: "Avg. Processing Time", value: "2.4 hrs", trend: "-1.5 hrs", positive: true },
                    { label: "Pending Approvals", value: "12", trend: "Requires action", positive: false }
                  ].map((stat, i) => (
                    <div 
                      key={i} 
                      className="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-sm backdrop-blur-md"
                    >
                      <div className="mb-3 text-xs font-medium text-white/50">{stat.label}</div>
                      <div className="mb-2 text-2xl font-extrabold text-white">{stat.value}</div>
                      <div className={`text-xs font-bold ${stat.positive ? 'text-green-400' : 'text-yellow-400'}`}>{stat.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
                  
                  {/* Main Chart */}
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-sm backdrop-blur-md">
                    <div className="mb-8 text-sm font-bold text-white">Order Volume (30 Days)</div>
                    
                    {/* Fake Bar Chart */}
                    <div className="mt-5 flex h-[220px] items-end gap-2.5">
                      {[...Array(24)].map((_, i) => {
                        const height = Math.floor(Math.random() * 70) + 30;
                        return (
                          <div 
                            key={i} 
                            style={{
                              animation: `bar-grow 1s ease forwards ${i * 0.04}s`,
                              height: `${height}%` // Using inline style ONLY for dynamic height mapping
                            }}
                            className={`flex-1 rounded-t-sm w-full ${i === 23 ? 'bg-gradient-to-t from-brand-electric to-brand-cyan shadow-[0_0_15px_rgba(0,210,255,0.4)]' : 'bg-white/10 hover:bg-white/20 transition-colors'}`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* List / Activity */}
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-sm backdrop-blur-md">
                    <div className="mb-6 text-sm font-bold text-white">Recent Activity</div>
                    
                    <div className="flex flex-col gap-5">
                      {[
                        { text: "Order #4092 processed", time: "2 min ago", color: "bg-green-400" },
                        { text: "Inventory alert: SKU-192", time: "15 min ago", color: "bg-yellow-400" },
                        { text: "New client registered", time: "1 hr ago", color: "bg-brand-cyan" },
                        { text: "Daily report generated", time: "3 hrs ago", color: "bg-white/40" },
                        { text: "API Sync completed", time: "4 hrs ago", color: "bg-green-400" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${item.color} shadow-sm`} />
                          <div>
                            <div className="mb-1 text-sm font-medium text-white/90">{item.text}</div>
                            <div className="text-xs text-white/40">{item.time}</div>
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
