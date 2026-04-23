import { DARK_PURPLE, PURPLE } from "../constants/colors";

export default function Header({ tabs, tab, setTab }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${DARK_PURPLE} 0%, ${PURPLE} 100%)`,
        padding: "24px 28px 0",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 20px rgba(45,27,78,0.3)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>💜</div>
        <div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase" }}>@notheavywithevy</div>
          <div style={{ color: "#fff", fontSize: 18, fontWeight: 700, fontFamily: "Playfair Display, serif" }}>30-Day Content System</div>
        </div>
        <div style={{ marginLeft: "auto", background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: "6px 14px", color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 500 }}>
          25 Apr – 24 May 2026
        </div>
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              background: tab === t.id ? "#fff" : "transparent",
              color: tab === t.id ? DARK_PURPLE : "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "10px 10px 0 0",
              padding: "10px 18px",
              fontSize: 13,
              fontWeight: tab === t.id ? 700 : 500,
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
              transition: "all 0.2s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
