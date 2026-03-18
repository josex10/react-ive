"use client";
export default function Footer() {
  return (
    <footer 
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "#0A1128",
        padding: "80px 0 40px",
        position: "relative",
        zIndex: 10
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "60px", marginBottom: "80px" }}>
          
          {/* Brand Col */}
          <div style={{ maxWidth: "300px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div 
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  background: "linear-gradient(135deg, #3A7BD5 0%, #00D2FF 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" opacity="0.9" />
                  <path d="M8 9L12.5 4.5L15 7L10.5 11.5L8 9Z" fill="white" opacity="0.5" />
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.03em", color: "#F4F7F6" }}>
                react<span style={{ color: "#00D2FF" }}>IVE</span>
              </span>
            </div>
            
            <p style={{ color: "rgba(244, 247, 246, 0.6)", fontSize: "15px", lineHeight: 1.6, marginBottom: "24px" }}>
              Custom software engineering to automate your business processes and replace manual workflows.
            </p>

            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#F4F7F6",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 16px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "8px",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#25D366";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#F4F7F6";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message us
            </a>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ color: "#F4F7F6", fontWeight: 600, fontSize: "15px", marginBottom: "8px" }}>Platform</div>
              <a href="#" style={{ color: "rgba(244, 247, 246, 0.6)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00D2FF"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(244, 247, 246, 0.6)"}>Custom Software</a>
              <a href="#" style={{ color: "rgba(244, 247, 246, 0.6)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00D2FF"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(244, 247, 246, 0.6)"}>Process Automation</a>
              <a href="#" style={{ color: "rgba(244, 247, 246, 0.6)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00D2FF"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(244, 247, 246, 0.6)"}>Data Dashboards</a>
              <a href="#" style={{ color: "rgba(244, 247, 246, 0.6)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00D2FF"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(244, 247, 246, 0.6)"}>API Integrations</a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ color: "#F4F7F6", fontWeight: 600, fontSize: "15px", marginBottom: "8px" }}>Company</div>
              <a href="#" style={{ color: "rgba(244, 247, 246, 0.6)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00D2FF"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(244, 247, 246, 0.6)"}>About Us</a>
              <a href="#" style={{ color: "rgba(244, 247, 246, 0.6)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00D2FF"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(244, 247, 246, 0.6)"}>Case Studies</a>
              <a href="#" style={{ color: "rgba(244, 247, 246, 0.6)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00D2FF"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(244, 247, 246, 0.6)"}>Contact</a>
            </div>
          </div>
        </div>

        <div 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            paddingTop: "32px", 
            borderTop: "1px solid rgba(255,255,255,0.05)",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          <div style={{ fontSize: "14px", color: "rgba(244, 247, 246, 0.4)" }}>
            © {new Date().getFullYear()} reactIVE. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ fontSize: "13px", color: "rgba(244, 247, 246, 0.4)", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: "13px", color: "rgba(244, 247, 246, 0.4)", textDecoration: "none" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
