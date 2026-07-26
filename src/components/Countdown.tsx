"use client";

import { useEffect, useState } from "react";

// Election Day — November 3, 2026, local midnight.
// Months are 0-indexed, so 10 = November. Edit this line to retarget.
const TARGET = new Date(2026, 10, 3, 0, 0, 0);

function getRemaining(now: number) {
  const diff = TARGET.getTime() - now;
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
  };
}

function Unit({ value, label }: { value: number | null; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none tabular-nums">
        {value === null ? "—" : value}
      </span>
      <span className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] pl-[0.25em] text-white/70">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  // Compute on the client only, so server and first client render match (no hydration mismatch).
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    // Check every 30s — rolls the hour over promptly without a nervous ticking clock.
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

  const remaining = now === null ? null : getRemaining(now);
  const arrived = now !== null && remaining === null;

  return (
    <section id="countdown" className="py-20 px-6 bg-gradient-to-br from-green-50 to-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-berry-900 mb-4">
          Countdown to Election Day
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mb-10 rounded-full" />

        <div className="rounded-3xl bg-gradient-to-br from-purple-logo to-berry-700 text-white shadow-xl px-6 py-10 sm:px-12 sm:py-12">
          {arrived ? (
            <p className="text-4xl sm:text-5xl font-extrabold">
              Election Day is here. Vote!
            </p>
          ) : (
            <>
              <div
                className="flex items-stretch justify-center gap-6 sm:gap-10"
                role="timer"
                aria-label="Time remaining until Election Day, November 3, 2026"
              >
                <Unit value={remaining?.days ?? null} label="Days" />
                <div className="w-px self-stretch bg-white/25" aria-hidden="true" />
                <Unit value={remaining?.hours ?? null} label="Hours" />
              </div>
              <p className="mt-8 text-lg sm:text-xl font-semibold">
                until <span className="font-extrabold">Election Day</span>
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] pl-[0.2em] text-white/70">
                November 3, 2026
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
