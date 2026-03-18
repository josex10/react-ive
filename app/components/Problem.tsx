"use client";
import { useEffect, useRef, useState } from "react";

export default function Problem() {
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

  const problems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      title: "Manual Errors",
      description: "Copy-pasting data across systems leads to expensive mistakes and lost revenue.",
      delay: "delay-0"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      ),
      title: "Duplicated Data",
      description: "Entering the same information in Excel, CRM, and accounting software wastes hours.",
      delay: "delay-100"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Slow Processes",
      description: "Bottlenecks in approval workflows and manual report generation slow down growth.",
      delay: "delay-200"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-cyan">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      ),
      title: "Lack of Visibility",
      description: "Unable to see real-time metrics because data is scattered across multiple spreadsheets.",
      delay: "delay-300"
    }
  ];

  return (
    <section 
      id="problem"
      ref={sectionRef}
      className={`relative py-32 transition-all duration-1000 ease-out z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    >
      <div className="container mx-auto max-w-5xl px-6">
        
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            The hidden cost of <span className="text-white/40">manual work</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Every hour your team spends moving data manually is an hour they aren't growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl transition-all duration-700 hover:border-brand-cyan/30 hover:bg-white/10 hover:-translate-y-1 ${problem.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 shadow-inner">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
