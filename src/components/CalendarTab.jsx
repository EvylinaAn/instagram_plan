import { useEffect, useState } from "react";
import { DARK_PURPLE, LIGHT_PURPLE, MID_PURPLE, PURPLE, pillarColors } from "../constants/colors";

export default function CalendarTab({ calData }) {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

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
          const border = isShoot ? `2px solid ${PURPLE}` : isEdit ? "2px dashed #D4B8F0" : "1px solid #EEE";

          return (
            <button
              key={idx}
              type="button"
              style={{
                background: bg,
                borderRadius: 10,
                border,
                padding: "10px",
                minHeight: 100,
                position: "relative",
                transition: "transform 0.15s, box-shadow 0.15s",
                cursor: "pointer",
                boxShadow: isShoot ? "0 2px 12px rgba(123,79,166,0.15)" : "0 1px 4px rgba(0,0,0,0.05)",
                width: "100%",
                textAlign: "left",
                fontFamily: "inherit",
                appearance: "none",
              }}
              onClick={() => setSelectedItem(item)}
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
            </button>
          );
        })}
      </div>

      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(45,27,78,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            zIndex: 200,
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedItem.date} details`}
            style={{
              width: "min(560px, 100%)",
              maxHeight: "85vh",
              overflowY: "auto",
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 20px 60px rgba(45,27,78,0.22)",
              padding: 24,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
              <div>
                <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 8 }}>
                  {selectedItem.date} {selectedItem.day}
                </div>
                <div style={{ color: DARK_PURPLE, fontSize: 24, fontWeight: 700, lineHeight: 1.2, marginBottom: 10 }}>
                  {selectedItem.title}
                </div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 700,
                    borderRadius: 999,
                    padding: "6px 10px",
                    background: (pillarColors[selectedItem.pillar] || pillarColors["—"]).bg,
                    color: (pillarColors[selectedItem.pillar] || pillarColors["—"]).text,
                  }}
                >
                  {selectedItem.type === "shoot" ? "Shoot Day" : selectedItem.type === "edit" ? "Edit Day" : selectedItem.pillar}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close date details"
                style={{
                  border: "none",
                  background: LIGHT_PURPLE,
                  color: DARK_PURPLE,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                ×
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 18 }}>
              <div style={{ background: "#FAF7FD", borderRadius: 14, padding: 14 }}>
                <div style={{ fontSize: 11, color: MID_PURPLE, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>Time</div>
                <div style={{ fontSize: 15, color: DARK_PURPLE, fontWeight: 600 }}>{selectedItem.time}</div>
              </div>
              <div style={{ background: "#FAF7FD", borderRadius: 14, padding: 14 }}>
                <div style={{ fontSize: 11, color: MID_PURPLE, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>Status</div>
                <div style={{ fontSize: 15, color: DARK_PURPLE, fontWeight: 600, textTransform: "capitalize" }}>{selectedItem.status}</div>
              </div>
              <div style={{ background: "#FAF7FD", borderRadius: 14, padding: 14 }}>
                <div style={{ fontSize: 11, color: MID_PURPLE, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>Type</div>
                <div style={{ fontSize: 15, color: DARK_PURPLE, fontWeight: 600, textTransform: "capitalize" }}>{selectedItem.type}</div>
              </div>
            </div>

            <div style={{ background: "#fff", border: `1px solid ${LIGHT_PURPLE}`, borderRadius: 16, padding: 18 }}>
              <div style={{ fontSize: 11, color: MID_PURPLE, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Full Details</div>
              <div style={{ color: DARK_PURPLE, fontSize: 15, lineHeight: 1.7 }}>{selectedItem.hook}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
