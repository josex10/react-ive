"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Glows */}
      <div 
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: "800px",
          maxHeight: "800px",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: -1,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.5s ease"
        }}
      />
      
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Eyebrow */}
          <div 
            style={{
              padding: "6px 16px",
              borderRadius: "100px",
              background: "rgba(0, 210, 255, 0.1)",
              border: "1px solid rgba(0, 210, 255, 0.2)",
              color: "#00D2FF",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 0 20px rgba(0, 210, 255, 0.15)",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00D2FF", display: "inline-block", boxShadow: "0 0 10px #00D2FF" }}></span>
            Make your business work smarter
          </div>
          
          {/* Headline */}
          <h1 
            style={{
              fontSize: "clamp(46px, 6vw, 76px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
              color: "#F4F7F6"
            }}
          >
            Automate your<br/>
            <span className="glow-text">business processes</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            style={{
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.6,
              color: "rgba(244, 247, 246, 0.7)",
              marginBottom: "48px",
              maxWidth: "600px",
              fontWeight: 400
            }}
          >
            We replace Excel and manual workflows with custom software solutions designed for scale.
          </p>
          
          {/* CTAs */}
          <div 
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "16px 36px", fontSize: "16px" }}>
              Book a free call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "16px 36px", fontSize: "16px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Floating Cards Diagram - Chaos to Order */}
        <div style={{ position: "relative", height: "300px", marginTop: "80px", width: "100%", maxWidth: "900px", margin: "80px auto 0" }}>
          
          {/* Messy Cards / Chaos */}
          <div 
            className="glass-card"
            style={{
              position: "absolute",
              padding: "16px",
              width: "180px",
              top: "20px",
              left: "5%",
              animation: "float-slow 6s ease-in-out infinite",
              transform: "rotate(-12deg)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 0.3s",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              zIndex: 3
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div style={{ width: "24px", height: "24px", background: "#107c41", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "12px", fontWeight: "bold" }}>X</div>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>inventory.xlsx</span>
            </div>
            <div style={{ height: "4px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "2px", marginBottom: "6px" }} />
            <div style={{ height: "4px", width: "80%", background: "rgba(255,255,255,0.1)", borderRadius: "2px", marginBottom: "6px" }} />
            <div style={{ height: "4px", width: "60%", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }} />
          </div>

          <div 
            className="glass-card"
            style={{
              position: "absolute",
              padding: "16px",
              width: "160px",
              top: "140px",
              left: "15%",
              animation: "float-medium 5s ease-in-out infinite 1s",
              transform: "rotate(8deg)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 0.5s",
              background: "rgba(255,255,255,0.06)",
              zIndex: 2
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: 600, color: "#fbb117", marginBottom: "8px" }}>⚠️ Manual orders</div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }}>Order #4092 - Pending...</div>
          </div>

          <div 
            className="glass-card"
            style={{
              position: "absolute",
              padding: "16px",
              width: "170px",
              top: "40px",
              right: "4%",
              animation: "float-fast 4s ease-in-out infinite 0.5s",
              transform: "rotate(15deg)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 0.4s",
              zIndex: 3
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <div style={{ width: "20px", height: "20px", background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0z"/></svg>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>Client Messages</span>
            </div>
            <div style={{ padding: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", fontSize: "9px", color: "rgba(255,255,255,0.6)", marginBottom: "4px" }}>Where is my order?</div>
            <div style={{ padding: "6px", background: "rgba(0, 210, 255, 0.1)", borderRadius: "6px", fontSize: "9px", color: "rgba(0, 210, 255, 0.9)", textAlign: "right" }}>Let me check...</div>
          </div>

          <div 
            className="glass-card"
            style={{
              position: "absolute",
              padding: "16px",
              width: "150px",
              top: "160px",
              right: "18%",
              animation: "float-slow 7s ease-in-out infinite 2s",
              transform: "rotate(-8deg)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 0.6s",
              background: "#FFF9C4", /* Post-it note look */
              color: "#333",
              zIndex: 1
            }}
          >
            <div style={{ fontSize: "12px", fontFamily: "'Comic Sans MS', cursive, sans-serif", fontWeight: 600, transform: "rotate(-2deg)" }}>Call supplier tomorrow!</div>
            <div style={{ fontSize: "10px", marginTop: "8px", color: "rgba(0,0,0,0.5)", fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>- don't forget</div>
          </div>

          {/* Central System / Order (reactIVE) */}
          <div 
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "280px",
              zIndex: 10,
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 1s",
            }}
          >
            {/* Glowing connecting lines */}
            <svg style={{ position: "absolute", inset: "-100px", zIndex: -1, width: "calc(100% + 200px)", height: "calc(100% + 200px)" }}>
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

            <div 
              className="glass-card"
              style={{
                background: "rgba(10, 17, 40, 0.8)",
                border: "1px solid rgba(0, 210, 255, 0.3)",
                padding: "24px",
                position: "relative",
                boxShadow: "0 0 40px rgba(0, 210, 255, 0.2)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "linear-gradient(135deg, #3A7BD5, #00D2FF)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" /><path d="M8 9L12.5 4.5L15 7L10.5 11.5L8 9Z" fill="white" opacity="0.6" /></svg>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: "14px", color: "white" }}>reactIVE System</span>
                </div>
                <div style={{ padding: "4px 8px", background: "rgba(0, 210, 255, 0.1)", borderRadius: "100px", fontSize: "10px", color: "#00D2FF", fontWeight: 600 }}>SYNCED</div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>Inventory DB</span>
                  <span style={{ fontSize: "12px", color: "#4ade80", fontWeight: 500 }}>Updated</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>Orders API</span>
                  <span style={{ fontSize: "12px", color: "#4ade80", fontWeight: 500 }}>Processing</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "rgba(255,255,255,0.03)", borderRadius: "8px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>Client Comms</span>
                  <span style={{ fontSize: "12px", color: "#4ade80", fontWeight: 500 }}>Automated</span>
                </div>
              </div>

              <div style={{ marginTop: "16px", height: "4px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: "100%", background: "linear-gradient(90deg, #3A7BD5, #00D2FF)", animation: "border-flow 3s linear infinite", backgroundSize: "200% 100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
