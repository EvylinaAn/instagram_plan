import { DARK_PURPLE, PURPLE } from "../constants/colors";
import StatusBadge from "./StatusBadge";

export default function TrackerTab({ tracker, updateTracker }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 6px" }}>
        <thead>
          <tr>
            {["Date", "Reel Title", "✍️ Script", "🎬 Filmed", "✂️ Edited", "📝 Caption", "📤 Posted", "👁 Views", "💾 Saves", "🔁 Shares", "👥 Followers"].map((h) => (
              <th
                key={h}
                style={{
                  background: DARK_PURPLE,
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "10px 10px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  fontFamily: "DM Sans, sans-serif",
                  letterSpacing: 0.5,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tracker.map((row, i) => (
            <tr key={i} style={{ background: "#fff" }}>
              <td style={{ padding: "10px 10px", fontSize: 11, fontWeight: 700, color: PURPLE, whiteSpace: "nowrap", borderRadius: "10px 0 0 10px", border: "1px solid #EEE", borderRight: "none" }}>
                {row.date}
              </td>
              <td style={{ padding: "10px 10px", fontSize: 11, color: "#333", minWidth: 200, maxWidth: 240, lineHeight: 1.4, border: "1px solid #EEE", borderLeft: "none", borderRight: "none" }}>
                {row.title}
              </td>
              {["script", "filmed", "edited", "caption", "posted"].map((field) => (
                <td key={field} style={{ padding: "8px 8px", textAlign: "center", border: "1px solid #EEE", borderLeft: "none", borderRight: "none" }}>
                  <StatusBadge status={row[field]} onChange={(val) => updateTracker(i, field, val)} />
                </td>
              ))}
              {["views", "saves", "shares", "followers"].map((field) => (
                <td key={field} style={{ padding: "6px 8px", border: "1px solid #EEE", borderLeft: "none", borderRight: field === "followers" ? "1px solid #EEE" : "none", borderRadius: field === "followers" ? "0 10px 10px 0" : 0 }}>
                  <input
                    value={row[field]}
                    onChange={(e) => updateTracker(i, field, e.target.value)}
                    placeholder="—"
                    style={{ width: "100%", border: "none", background: "transparent", textAlign: "center", fontSize: 12, color: "#333", fontFamily: "DM Sans, sans-serif" }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 16, fontSize: 11, color: "#999", textAlign: "center" }}>
        Click any status badge to cycle through To Do → In Progress → Done. Fill in metrics after posting.
      </div>
    </div>
  );
}
