import { useEffect, useState } from "react";

export const Loader = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-all duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-2xl bg-gradient-primary animate-spin-slow [animation-duration:3s]" />
          <div className="absolute inset-1 rounded-xl bg-background grid place-items-center">
            <span className="font-display text-3xl font-bold text-gradient">D</span>
          </div>
        </div>
        <div className="font-heading text-sm tracking-[0.3em] uppercase text-muted-foreground">
          Loading Experience
        </div>
        <div className="h-1 w-48 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-gradient-primary animate-[shimmer_1.1s_ease-out_forwards] origin-left" style={{ animation: "loaderfill 1.1s ease-out forwards" }} />
        </div>
      </div>
      <style>{`@keyframes loaderfill { from { width: 0% } to { width: 100% } }`}</style>
    </div>
  );
};
