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
      className={`section reveal ${isVisible ? 'visible' : ''}`}
      style={{
        padding: "120px 0",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 
            style={{
              fontSize: "clamp(32px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              color: "#F4F7F6"
            }}
          >
            See your business, <span style={{ color: "rgba(244, 247, 246, 0.5)" }}>clearly</span>
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
            Our custom dashboards give you real-time visibility into all your operations without touching a single spreadsheet.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div 
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            borderRadius: "24px",
            padding: "8px",
            background: "linear-gradient(135deg, rgba(0, 210, 255, 0.3) 0%, rgba(58, 123, 213, 0.1) 100%)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 100px rgba(0, 210, 255, 0.15)",
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Inner Dashboard UI */}
          <div 
            style={{
              background: "#0A1128", /* Deep Blue Base */
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {/* Top Bar */ }
            <div 
              style={{
                height: "64px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #3A7BD5, #00D2FF)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" /><path d="M8 9L12.5 4.5L15 7L10.5 11.5L8 9Z" fill="white" opacity="0.6" /></svg>
                </div>
                <div style={{ display: "none" }} className="dashboard-text">
                  <span style={{ fontWeight: 600, color: "#fff", fontSize: "14px" }}>Operations Center</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div style={{ padding: "6px 16px", borderRadius: "100px", background: "rgba(255,255,255,0.05)", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
                   Search everything... (⌘K)
                </div>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px", fontWeight: "bold" }}>JB</div>
              </div>
            </div>

            <div style={{ display: "flex", minHeight: "500px" }}>
              {/* Sidebar */}
              <div 
                style={{
                  width: "220px",
                  borderRight: "1px solid rgba(255,255,255,0.05)",
                  padding: "24px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                }}
                className="dashboard-sidebar"
              >
                {['Overview', 'Orders', 'Inventory', 'Customers', 'Analytics', 'Settings'].map((item, i) => (
                  <div 
                    key={item}
                    style={{
                      padding: "10px 16px",
                      borderRadius: "8px",
                      background: i === 0 ? "rgba(0, 210, 255, 0.1)" : "transparent",
                      color: i === 0 ? "#00D2FF" : "rgba(255,255,255,0.5)",
                      fontSize: "13px",
                      fontWeight: i === 0 ? 600 : 500,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px"
                    }}
                  >
                    <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: i === 0 ? "#00D2FF" : "rgba(255,255,255,0.2)", opacity: i === 0 ? 1 : 0.5 }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main Content Area */}
              <div style={{ flex: 1, padding: "32px", background: "rgba(0,0,0,0.2)" }}>
                {/* Header Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "32px" }} className="stats-grid">
                  {[
                    { label: "Total Revenue", value: "$124,500", trend: "+12.5%", positive: true },
                    { label: "Active Orders", value: "843", trend: "+5.2%", positive: true },
                    { label: "Avg. Processing Time", value: "2.4 hrs", trend: "-1.5 hrs", positive: true },
                    { label: "Pending Approvals", value: "12", trend: "Requires action", positive: false }
                  ].map((stat, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        background: "rgba(255,255,255,0.03)", 
                        border: "1px solid rgba(255,255,255,0.05)", 
                        borderRadius: "12px", 
                        padding: "20px",
                      }}
                    >
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>{stat.label}</div>
                      <div style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>{stat.value}</div>
                      <div style={{ fontSize: "11px", color: stat.positive ? "#4ade80" : "#fbb117", fontWeight: 500 }}>{stat.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Charts Area */}
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }} className="chart-grid">
                  
                  {/* Main Chart */}
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", padding: "24px" }}>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "24px" }}>Order Volume (30 Days)</div>
                    
                    {/* Fake Bar Chart */}
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "180px", marginTop: "20px" }}>
                      {[...Array(20)].map((_, i) => {
                        const height = Math.floor(Math.random() * 80) + 20;
                        return (
                          <div 
                            key={i} 
                            style={{
                              flex: 1,
                              background: i === 19 ? "linear-gradient(to top, #3A7BD5, #00D2FF)" : "rgba(255,255,255,0.1)",
                              borderRadius: "4px 4px 0 0",
                              height: "0%",
                              animation: `bar-grow 1s ease forwards ${i * 0.05}s`
                            }}
                            className={`bar-${i}`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* List / Activity */}
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", padding: "24px" }}>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "24px" }}>Recent Activity</div>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      {[
                        { text: "Order #4092 processed", time: "2 min ago", color: "#4ade80" },
                        { text: "Inventory alert: SKU-192", time: "15 min ago", color: "#fbb117" },
                        { text: "New client registered", time: "1 hr ago", color: "#00D2FF" },
                        { text: "Daily report generated", time: "3 hrs ago", color: "rgba(255,255,255,0.5)" },
                        { text: "API Sync completed", time: "4 hrs ago", color: "#4ade80" }
                      ].map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color, marginTop: "4px" }} />
                          <div>
                            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>{item.text}</div>
                            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{item.time}</div>
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

      <style>{`
        ${[...Array(20)].map((_, i) => `.bar-${i} { --bar-h: ${Math.floor(Math.random() * 80) + 20}%; }`).join('\n')}
        
        @media (max-width: 900px) {
          .chart-grid { grid-template-columns: 1fr !important; }
          .dashboard-sidebar { display: none !important; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
