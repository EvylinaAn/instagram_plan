export default function StatusBadge({ status, onChange }) {
  const styles = {
    todo: { bg: "#F5F5F5", text: "#9E9E9E", label: "⬜ To Do" },
    progress: { bg: "#FFF8E1", text: "#F57F17", label: "🟡 In Progress" },
    done: { bg: "#E8F5E9", text: "#2E7D32", label: "✅ Done" },
  };
  const s = styles[status] || styles.todo;
  const cycle = { todo: "progress", progress: "done", done: "todo" };

  return (
    <button
      onClick={() => onChange(cycle[status] || "todo")}
      style={{
        background: s.bg,
        color: s.text,
        border: "none",
        borderRadius: 20,
        padding: "3px 10px",
        fontSize: 11,
        fontFamily: "DM Sans, sans-serif",
        fontWeight: 600,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {s.label}
    </button>
  );
}
