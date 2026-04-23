import { DARK_PURPLE, LIGHT_PURPLE, PURPLE } from "../constants/colors";

export default function ScriptsTab({ scripts, expandedScript, setExpandedScript }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {scripts.map((s, i) => (
        <div key={i} style={{ background: "#fff", borderRadius: 14, border: "1px solid #EEE", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div
            onClick={() => setExpandedScript(expandedScript === i ? null : i)}
            style={{ padding: "16px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", background: expandedScript === i ? LIGHT_PURPLE : "#fff" }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: DARK_PURPLE, marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontSize: 12, color: "#888", fontStyle: "italic" }}>&quot;{s.hook.slice(0, 70)}…&quot;</div>
            </div>
            <div style={{ fontSize: 18, color: PURPLE, fontWeight: 700, flexShrink: 0, marginLeft: 16 }}>
              {expandedScript === i ? "▲" : "▼"}
            </div>
          </div>

          {expandedScript === i && (
            <div style={{ padding: "0 20px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, marginTop: 16 }}>🎤 Full Script / Voiceover</div>
                <div style={{ background: "#F8F4FF", borderRadius: 10, padding: 14, fontSize: 12, color: "#333", lineHeight: 1.8, whiteSpace: "pre-line", border: "1px solid #D4B8F0" }}>
                  {s.script}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, marginTop: 16 }}>📝 Caption</div>
                <div style={{ background: LIGHT_PURPLE, borderRadius: 10, padding: 14, fontSize: 12, color: "#333", lineHeight: 1.8, whiteSpace: "pre-line", marginBottom: 14 }}>
                  {s.caption}
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>🏷️ Hashtags</div>
                <div style={{ fontSize: 11, color: "#7B4FA6", lineHeight: 1.8, marginBottom: 14 }}>{s.hashtags}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>💬 Comment CTA</div>
                <div style={{ background: "#FFF3E0", borderRadius: 10, padding: 12, fontSize: 12, color: "#E65100", fontWeight: 600, border: "1px solid #FFE0B2" }}>
                  {s.cta}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
