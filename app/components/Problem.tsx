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
      icon: "❌",
      title: "Manual Errors",
      description: "Copy-pasting data across systems leads to expensive mistakes and lost revenue.",
      delay: "0s"
    },
    {
      icon: "🔄",
      title: "Duplicated Data",
      description: "Entering the same information in Excel, CRM, and accounting software wastes hours.",
      delay: "0.1s"
    },
    {
      icon: "🐢",
      title: "Slow Processes",
      description: "Bottlenecks in approval workflows and manual report generation slow down growth.",
      delay: "0.2s"
    },
    {
      icon: "🙈",
      title: "Lack of Visibility",
      description: "Unable to see real-time metrics because data is scattered across multiple spreadsheets.",
      delay: "0.3s"
    }
  ];

  return (
    <section 
      id="problem"
      ref={sectionRef}
      className={`section reveal ${isVisible ? 'visible' : ''}`}
      style={{
        padding: "120px 0",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "1000px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              color: "#F4F7F6"
            }}
          >
            The hidden cost of <span style={{ color: "rgba(244, 247, 246, 0.5)" }}>manual work</span>
          </h2>
          <p 
            style={{
              fontSize: "18px",
              color: "rgba(244, 247, 246, 0.7)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6
            }}
          >
            Every hour your team spends moving data manually is an hour they aren't growing your business.
          </p>
        </div>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${problem.delay}`,
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div 
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "8px"
                }}
              >
                {problem.icon}
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#F4F7F6" }}>
                {problem.title}
              </h3>
              <p style={{ fontSize: "15px", color: "rgba(244, 247, 246, 0.6)", lineHeight: 1.6 }}>
                {problem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
