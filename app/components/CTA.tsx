"use client";
import { useEffect, useRef, useState } from "react";

export default function CTA() {
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
      className={`section reveal ${isVisible ? 'visible' : ''}`}
      style={{
        padding: "160px 0",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div 
          className="glass-card"
          style={{
            position: "relative",
            padding: "80px 40px",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(10, 17, 40, 0.9) 0%, rgba(17, 32, 85, 0.9) 100%)",
            border: "1px solid rgba(0, 210, 255, 0.2)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 0 100px rgba(0, 210, 255, 0.05)",
            overflow: "hidden"
          }}
        >
          {/* Decorative Glow elements */}
          <div 
            style={{
              position: "absolute",
              top: "-50%",
              left: "-10%",
              width: "50%",
              height: "100%",
              background: "radial-gradient(circle, rgba(58, 123, 213, 0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />
          <div 
            style={{
              position: "absolute",
              bottom: "-50%",
              right: "-10%",
              width: "50%",
              height: "100%",
              background: "radial-gradient(circle, rgba(0, 210, 255, 0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />
          
          <div style={{ position: "relative", zIndex: 10 }}>
            <h2 
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
                color: "#F4F7F6",
                lineHeight: 1.1
              }}
            >
              Stop wasting time with <br />
              <span className="glow-text">manual processes</span>
            </h2>
            
            <p 
              style={{
                fontSize: "18px",
                color: "rgba(244, 247, 246, 0.8)",
                maxWidth: "600px",
                margin: "0 auto 48px",
                lineHeight: 1.6
              }}
            >
              Transform your business operations in weeks, not months. Join the companies that have already scaled with reactIVE.
            </p>
            
            <div 
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap"
              }}
            >
              <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "18px 40px", fontSize: "16px" }}>
                Schedule your free consultation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <p style={{ marginTop: "24px", fontSize: "14px", color: "rgba(244, 247, 246, 0.5)" }}>
              No pressure. Just a conversation about your business bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
