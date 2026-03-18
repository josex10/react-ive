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
      className={`section reveal ${isVisible ? 'visible' : ''}`}
      style={{
        padding: "120px 0",
        position: "relative",
      }}
    >
      {/* Background element */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "0%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(58, 123, 213, 0.1) 0%, transparent 60%)",
          filter: "blur(60px)",
          zIndex: -1,
          transform: "translateY(-50%)"
        }}
      />

      <div className="container" style={{ maxWidth: "1200px" }}>
        
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "80px",
            alignItems: "center"
          }}
          className="solution-grid"
        >
          {/* Left Side - Text */}
          <div>
            <div 
              style={{
                padding: "6px 16px",
                borderRadius: "100px",
                background: "rgba(58, 123, 213, 0.1)",
                border: "1px solid rgba(58, 123, 213, 0.2)",
                color: "#3A7BD5",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "24px",
                display: "inline-flex",
                alignItems: "center"
              }}
            >
              How we do it
            </div>
            
            <h2 
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
                color: "#F4F7F6",
                lineHeight: 1.1
              }}
            >
              Everything you need to <span className="glow-text">scale flawlessly</span>
            </h2>
            
            <p 
              style={{
                fontSize: "18px",
                color: "rgba(244, 247, 246, 0.7)",
                marginBottom: "40px",
                lineHeight: 1.6
              }}
            >
              We don't just build software. We engineer automated workflows that eliminate human error and dramatically reduce operating costs.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {solutions.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px" }}>
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "12px", 
                    background: "rgba(58, 123, 213, 0.1)", 
                    border: "1px solid rgba(58, 123, 213, 0.2)",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    color: "#00D2FF",
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "18px", fontWeight: 600, color: "#F4F7F6", marginBottom: "8px" }}>{item.title}</h4>
                    <p style={{ fontSize: "15px", color: "rgba(244, 247, 246, 0.6)", lineHeight: 1.5 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visuals */}
          <div style={{ position: "relative" }}>
            <div 
              className="glass-card"
              style={{
                position: "relative",
                padding: "24px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                overflow: "hidden"
              }}
            >
              {/* Fake UI Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
                </div>
                <div style={{ fontSize: "12px", color: "rgba(244, 247, 246, 0.4)", fontWeight: 500 }}>app.reactive.com</div>
              </div>

              {/* Code/Flow Visual */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ padding: "16px", borderRadius: "8px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ color: "#c678dd", fontSize: "13px", fontFamily: "monospace", marginBottom: "8px" }}>// Workflow Pipeline</div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <div style={{ color: "#e5c07b", fontSize: "14px", fontFamily: "monospace" }}>WebHook</div>
                    <div style={{ color: "#abb2bf" }}>→</div>
                    <div style={{ color: "#61afef", fontSize: "14px", fontFamily: "monospace" }}>Transform</div>
                    <div style={{ color: "#abb2bf" }}>→</div>
                    <div style={{ color: "#98c379", fontSize: "14px", fontFamily: "monospace" }}>Database</div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ padding: "16px", borderRadius: "8px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "8px", textTransform: "uppercase" }}>Uptime</div>
                    <div style={{ fontSize: "24px", fontWeight: 700, color: "#4ade80" }}>99.99%</div>
                  </div>
                  <div style={{ padding: "16px", borderRadius: "8px", background: "rgba(0, 210, 255, 0.05)", border: "1px solid rgba(0, 210, 255, 0.2)" }}>
                    <div style={{ fontSize: "11px", color: "rgba(0, 210, 255, 0.7)", marginBottom: "8px", textTransform: "uppercase" }}>Events Processed</div>
                    <div style={{ fontSize: "24px", fontWeight: 700, color: "#00D2FF" }}>1.2M+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div 
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #3A7BD5 0%, #00D2FF 100%)",
                borderRadius: "50%",
                filter: "blur(40px)",
                opacity: 0.5,
                zIndex: -1,
                animation: "pulse-glow 4s infinite alternate"
              }}
            />
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .solution-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
