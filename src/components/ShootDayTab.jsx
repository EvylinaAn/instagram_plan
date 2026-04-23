import { DARK_PURPLE, LIGHT_PURPLE, PURPLE } from "../constants/colors";

export default function ShootDayTab({ shootDays }) {
  return (
    <div>
      <div style={{ background: `linear-gradient(135deg, ${LIGHT_PURPLE}, #fff)`, borderRadius: 12, padding: "16px 20px", marginBottom: 20, border: "1px solid #D4B8F0" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: DARK_PURPLE, marginBottom: 4 }}>💡 Shoot Day Tips</div>
        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6 }}>
          Film back camera so people can't tell you're recording · Hold each pose for 3–4 seconds · Charge your phone before every shoot · Film in the morning when possible · Always get more footage than you think you need
        </div>
      </div>
      <div style={{ display: "grid", gap: 14 }}>
        {shootDays.map((s, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 14, border: "1px solid #EEE", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ background: `linear-gradient(90deg, ${DARK_PURPLE}, ${PURPLE})`, padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{s.date}</div>
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{s.topic}</div>
              </div>
            </div>
            <div style={{ padding: "14px 18px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>🎣 Hook</div>
                <div style={{ fontSize: 12, color: "#333", lineHeight: 1.5 }}>{s.hook}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>📍 Location + Outfit</div>
                <div style={{ fontSize: 12, color: "#333", lineHeight: 1.5, marginBottom: 6 }}><strong>Location:</strong> {s.location}</div>
                <div style={{ fontSize: 12, color: "#333", lineHeight: 1.5 }}><strong>Outfit:</strong> {s.outfit}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>📋 Notes</div>
                <div style={{ fontSize: 12, color: "#333", lineHeight: 1.5, marginBottom: 6 }}><strong>Equipment:</strong> {s.equipment}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{s.notes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
