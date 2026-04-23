import { DARK_PURPLE, MID_PURPLE, PURPLE, pillarColors } from "../constants/colors";

export default function CalendarTab({ calData }) {
  return (
    <div>
      <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
        {["Transformation", "Education", "Mindset", "PCOS", "Support", "Fashion"].map((p) => {
          const c = pillarColors[p];
          return (
            <div key={p} style={{ display: "flex", alignItems: "center", gap: 6, background: c.bg, borderRadius: 20, padding: "5px 12px" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.dot }} />
              <span style={{ fontSize: 12, color: c.text, fontWeight: 600 }}>{p}</span>
            </div>
          );
        })}
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#EDE7F6", borderRadius: 20, padding: "5px 12px" }}>
          <span style={{ fontSize: 12, color: PURPLE, fontWeight: 600 }}>🎬 Shoot Day</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
          <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: "#9B6FBF", letterSpacing: 1, padding: "8px 0" }}>{d}</div>
        ))}

        {[0, 1, 2, 3, 4].map((i) => <div key={`empty-${i}`} />)}

        {calData.map((item, idx) => {
          const isShoot = item.type === "shoot";
          const isEdit = item.type === "edit";
          const pc = pillarColors[item.pillar] || pillarColors["—"];
          const bg = isShoot ? "#EDE7F6" : isEdit ? "#F8F4FF" : "#fff";
          const border = isShoot ? `2px solid ${PURPLE}` : isEdit ? `2px dashed #D4B8F0"` : "1px solid #EEE";

          return (
            <div
              key={idx}
              style={{
                background: bg,
                borderRadius: 10,
                border,
                padding: "10px",
                minHeight: 100,
                position: "relative",
                transition: "transform 0.15s, box-shadow 0.15s",
                cursor: "default",
                boxShadow: isShoot ? "0 2px 12px rgba(123,79,166,0.15)" : "0 1px 4px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = isShoot ? "0 2px 12px rgba(123,79,166,0.15)" : "0 1px 4px rgba(0,0,0,0.05)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: isShoot ? PURPLE : "#999" }}>{item.date}</span>
                {!isShoot && !isEdit && item.pillar !== "—" && (
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: pc.dot, flexShrink: 0 }} />
                )}
              </div>
              <div style={{ fontSize: 12, fontWeight: isShoot || isEdit ? 700 : 600, color: isShoot ? DARK_PURPLE : isEdit ? MID_PURPLE : "#2D1B4E", lineHeight: 1.3, marginBottom: 6 }}>
                {item.title}
              </div>
              {!isShoot && !isEdit && (
                <>
                  <div style={{ fontSize: 10, color: "#888", lineHeight: 1.3, marginBottom: 6 }}>
                    {item.hook.length > 55 ? item.hook.slice(0, 55) + "…" : item.hook}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 10, color: PURPLE, fontWeight: 600 }}>{item.time}</span>
                    {item.pillar !== "—" && (
                      <span style={{ fontSize: 9, background: pc.bg, color: pc.text, borderRadius: 8, padding: "2px 6px", fontWeight: 600 }}>{item.pillar}</span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
