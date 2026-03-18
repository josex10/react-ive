"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations('CTA');
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
      className={`relative z-20 py-40 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    >
      <div className="container mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-cyan/20 bg-gradient-to-br from-brand-deep/90 to-brand-navymid/90 px-10 py-24 text-center shadow-2xl backdrop-blur-3xl md:px-20">
          
          {/* Decorative Glow elements */}
          <div className="absolute -left-1/4 -top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand-electric/30 blur-[100px]" />
          <div className="absolute -bottom-1/2 -right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-brand-cyan/20 blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              {t('title')} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">{t('titleHighlight')}</span>
            </h2>
            
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              {t('subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('bookBtn')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <p className="mt-8 text-sm font-medium text-white/50">
              {t('disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
