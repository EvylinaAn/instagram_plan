import { useState } from "react";
import CalendarTab from "./components/CalendarTab";
import Header from "./components/Header";
import ScriptsTab from "./components/ScriptsTab";
import ShootDayTab from "./components/ShootDayTab";
import TrackerTab from "./components/TrackerTab";
import { calendarData } from "./data/calendarData";
import { scripts } from "./data/scripts";
import { shootDays } from "./data/shootDays";
import { trackerData } from "./data/trackerData";

export default function EvyContentSystem() {
  const [tab, setTab] = useState("calendar");
  const [expandedScript, setExpandedScript] = useState(null);
  const [tracker, setTracker] = useState(trackerData);
  const [calData] = useState(calendarData);

  const updateTracker = (idx, field, value) => {
    setTracker((prev) => prev.map((row, i) => (i === idx ? { ...row, [field]: value } : row)));
  };

  const tabs = [
    { id: "calendar", label: "📅 Calendar" },
    { id: "shoot", label: "🎬 Shoot Days" },
    { id: "scripts", label: "📝 Scripts" },
    { id: "tracker", label: "📊 Tracker" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAFAFA", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #F3ECF9; }
        ::-webkit-scrollbar-thumb { background: #9B6FBF; border-radius: 3px; }
        textarea:focus, input:focus { outline: none; }
      `}</style>

      <Header tabs={tabs} tab={tab} setTab={setTab} />

      <div style={{ padding: "20px 28px", maxWidth: 1400, margin: "0 auto" }}>
        {tab === "calendar" && <CalendarTab calData={calData} />}
        {tab === "shoot" && <ShootDayTab shootDays={shootDays} />}
        {tab === "scripts" && <ScriptsTab scripts={scripts} expandedScript={expandedScript} setExpandedScript={setExpandedScript} />}
        {tab === "tracker" && <TrackerTab tracker={tracker} updateTracker={updateTracker} />}
      </div>
    </div>
  );
}
