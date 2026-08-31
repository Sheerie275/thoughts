import { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-300">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      <span>{formattedTime}</span>
      <span className="text-slate-400 dark:text-slate-500">•</span>
      <span>{formattedDate}</span>
    </div>
  );
};

export default LiveClock;