"use client";

import { useState } from "react";

const colors = {
  pink: "#b5005b",
  pinkLight: "#e8006e",
  green: "#2d6a4f",
  greenLight: "#40916c",
  bgLight: "#f0f4ef",
  bgWhite: "#ffffff",
  textDark: "#1a1a1a",
  textMid: "#444",
  border: "#d0ddd0",
};

const steps = [
  {
    id: "start",
    question: "Are you currently living away from your permanent home address?",
    subtitle: "For example: college student, temporary worker, or staying with family in another state",
    options: [
      { label: "Yes — I'm living away from home", next: "election_type" },
      { label: "No — I live at my permanent address", next: "same_address" },
    ],
  },
  {
    id: "election_type",
    question: "What type of election are you voting in?",
    subtitle: "This matters because some elections only affect local residents",
    options: [
      { label: "Presidential or U.S. Senate/House (federal)", next: "competitive" },
      { label: "State or local election (governor, state legislature, ballot measures)", next: "local_matters" },
    ],
  },
  {
    id: "competitive",
    question: "Is your home state or your current state more politically competitive?",
    subtitle: "In a safe blue or red state, your vote has less impact on the outcome",
    options: [
      { label: "My home state is more competitive (swing state)", next: "registered_home" },
      { label: "My current location is more competitive (swing state)", next: "registered_current" },
      { label: "Both are about equally competitive / I'm not sure", next: "registered_current" },
    ],
  },
  {
    id: "local_matters",
    question: "Do you have strong ties to local issues in your current location?",
    subtitle: "School board, city council, rent control, local ballot measures — these affect your daily life where you live now",
    options: [
      { label: "Yes — I care about issues where I currently live", next: "registered_current" },
      { label: "No — I care more about issues back home", next: "registered_home" },
    ],
  },
  {
    id: "registered_home",
    question: "Are you currently registered to vote at your home address?",
    options: [
      { label: "Yes, I'm registered at home", next: "result_home" },
      { label: "No / Not sure", next: "register_home" },
    ],
  },
  {
    id: "registered_current",
    question: "Can you legally establish residency at your current address for voting purposes?",
    subtitle: "Most states allow students and temporary residents to register where they currently live — even in a dorm",
    options: [
      { label: "Yes — I can register here", next: "result_current" },
      { label: "No — I cannot register here", next: "result_home_fallback" },
    ],
  },
];

const results: Record<string, { type: string; headline: string; body: string; cta: { label: string; url: string }; tip: string | null }> = {
  same_address: {
    type: "info",
    headline: "You're all set — vote at home!",
    body: "Since you live at your permanent address, simply make sure you're registered there and vote in your local jurisdiction. No decision needed!",
    cta: { label: "Check Your Registration →", url: "https://vote411.org" },
    tip: null,
  },
  result_home: {
    type: "home",
    headline: "Vote in your home state",
    body: "Based on your answers, voting at your home address makes the most sense. You can vote absentee (by mail) if you're away on election day — most states make this easy!",
    cta: { label: "Request an Absentee Ballot →", url: "https://vote411.org" },
    tip: "⚠️ Remember: It is illegal to vote in both states. Choose one.",
  },
  register_home: {
    type: "home",
    headline: "Register at your home address first",
    body: "You should register to vote at your home address, then request an absentee ballot to vote by mail from where you currently live.",
    cta: { label: "Register & Get Absentee Info →", url: "https://vote411.org" },
    tip: "⚠️ Remember: It is illegal to vote in both states. Choose one.",
  },
  result_current: {
    type: "current",
    headline: "Consider registering where you currently live",
    body: "You can register to vote at your current address — even a dorm room counts in most states. This lets you vote in local elections that affect your daily life and potentially have more impact in a competitive district.",
    cta: { label: "Register at Your Current Address →", url: "https://iwillvote.com" },
    tip: "⚠️ You must cancel your registration at home if you register at your current address. Voting in both states is illegal.",
  },
  result_home_fallback: {
    type: "home",
    headline: "Vote in your home state (by absentee)",
    body: "Since you can't register at your current address, you should vote in your home state using an absentee ballot. Contact your home state's election office to request one.",
    cta: { label: "Request an Absentee Ballot →", url: "https://vote411.org" },
    tip: "⚠️ Remember: It is illegal to vote in both states. Choose one.",
  },
};

const stepMap = Object.fromEntries(steps.map((s) => [s.id, s]));

function ProgressBar({ history }: { history: string[] }) {
  const total = 5;
  const progress = Math.min((history.length / total) * 100, 95);
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: colors.green, fontWeight: 600, marginBottom: 6, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase" }}>
        <span>Progress</span>
        <span>{history.length} of ~{total} questions</span>
      </div>
      <div style={{ height: 6, background: colors.border, borderRadius: 99, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${colors.green}, ${colors.greenLight})`, borderRadius: 99, transition: "width 0.4s ease" }} />
      </div>
    </div>
  );
}

function Question({ step, onAnswer, onBack, canGoBack }: { step: (typeof steps)[0]; onAnswer: (nextId: string) => void; onBack: () => void; canGoBack: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (opt: { label: string; next: string }) => {
    setSelected(opt.next);
    setTimeout(() => onAnswer(opt.next), 280);
  };

  return (
    <div style={{ animation: "fadeSlideIn 0.35s ease" }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: colors.green, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, fontFamily: "'Outfit', sans-serif" }}>
        Question
      </p>
      <h2 style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 700, color: colors.textDark, marginBottom: 10, fontFamily: "'Playfair Display', serif", lineHeight: 1.3 }}>
        {step.question}
      </h2>
      {step.subtitle && (
        <p style={{ fontSize: 14, color: colors.textMid, marginBottom: 24, lineHeight: 1.6, fontFamily: "'Outfit', sans-serif" }}>
          {step.subtitle}
        </p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {step.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(opt)}
            style={{
              textAlign: "left",
              padding: "16px 20px",
              borderRadius: 12,
              border: `2px solid ${selected === opt.next ? colors.pink : colors.border}`,
              background: selected === opt.next ? "#fdf0f5" : colors.bgWhite,
              cursor: "pointer",
              fontSize: 15,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              color: selected === opt.next ? colors.pink : colors.textDark,
              transition: "all 0.2s ease",
              boxShadow: selected === opt.next ? `0 0 0 3px ${colors.pink}22` : "0 1px 3px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={(e) => { if (selected !== opt.next) { e.currentTarget.style.borderColor = colors.greenLight; e.currentTarget.style.background = "#f4f9f6"; }}}
            onMouseLeave={(e) => { if (selected !== opt.next) { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.background = colors.bgWhite; }}}
          >
            <span style={{ marginRight: 10, fontSize: 16 }}>
              {selected === opt.next ? "✓" : "○"}
            </span>
            {opt.label}
          </button>
        ))}
      </div>
      {canGoBack && (
        <button onClick={onBack} style={{ marginTop: 20, background: "none", border: "none", color: colors.green, fontSize: 13, cursor: "pointer", fontFamily: "'Outfit', sans-serif", fontWeight: 600, padding: 0, textDecoration: "underline" }}>
          ← Go back
        </button>
      )}
    </div>
  );
}

function linkStyle(color: string): React.CSSProperties {
  return {
    display: "inline-block",
    padding: "9px 18px",
    border: `1.5px solid ${color}`,
    borderRadius: 99,
    color: color,
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    textDecoration: "none",
  };
}

function Result({ result, onRestart }: { result: (typeof results)[string]; onRestart: () => void }) {
  const isHome = result.type === "home";
  const isCurrent = result.type === "current";
  const accentColor = isCurrent ? colors.green : isHome ? colors.pink : colors.green;

  return (
    <div style={{ animation: "fadeSlideIn 0.4s ease" }}>
      <div style={{
        background: isCurrent ? "#edf7f2" : isHome ? "#fdf0f5" : "#edf7f2",
        border: `2px solid ${accentColor}44`,
        borderRadius: 16,
        padding: "28px 24px",
        marginBottom: 24,
      }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>
          {isCurrent ? "📍" : isHome ? "🏠" : "✅"}
        </div>
        <h2 style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 700, color: accentColor, marginBottom: 12, fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}>
          {result.headline}
        </h2>
        <p style={{ fontSize: 15, color: colors.textMid, lineHeight: 1.7, marginBottom: 20, fontFamily: "'Outfit', sans-serif" }}>
          {result.body}
        </p>
        <a
          href={result.cta.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: accentColor,
            color: "#fff",
            borderRadius: 99,
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          {result.cta.label}
        </a>
      </div>

      {result.tip && (
        <div style={{
          background: "#fffbea",
          border: "1.5px solid #f0c030",
          borderRadius: 12,
          padding: "14px 18px",
          fontSize: 14,
          color: "#7a5c00",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 500,
          marginBottom: 24,
          lineHeight: 1.6,
        }}>
          {result.tip}
        </div>
      )}

      <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: 20 }}>
        <p style={{ fontSize: 14, color: colors.textMid, fontFamily: "'Outfit', sans-serif", marginBottom: 12 }}>
          Want to find state-specific voting deadlines and info?
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="https://vote411.org" target="_blank" rel="noopener noreferrer" style={linkStyle(colors.green)}>Vote411.org →</a>
          <a href="https://iwillvote.com" target="_blank" rel="noopener noreferrer" style={linkStyle(colors.pink)}>IWillVote.com →</a>
        </div>
      </div>

      <button
        onClick={onRestart}
        style={{ marginTop: 24, background: "none", border: `1.5px solid ${colors.border}`, borderRadius: 99, padding: "10px 20px", color: colors.textMid, fontSize: 13, cursor: "pointer", fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}
      >
        ↺ Start over
      </button>
    </div>
  );
}

export default function WhereToVote() {
  const [history, setHistory] = useState(["start"]);
  const currentId = history[history.length - 1];
  const isResult = currentId in results;
  const currentStep = !isResult ? stepMap[currentId] : null;

  const handleAnswer = (nextId: string) => {
    setHistory((prev) => [...prev, nextId]);
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, -1));
  };

  const handleRestart = () => {
    setHistory(["start"]);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Outfit:wght@400;500;600;700&display=swap');
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ padding: "40px 16px", fontFamily: "'Outfit', sans-serif" }}>
        {/* Header */}
        <div style={{ maxWidth: 640, margin: "0 auto 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div style={{ width: 4, height: 36, background: colors.pink, borderRadius: 2 }} />
            <div>
              <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: colors.textDark, fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}>
                Make Your Vote Count
              </h1>
            </div>
          </div>
          <p style={{ fontSize: 15, color: colors.textMid, marginLeft: 14, lineHeight: 1.6 }}>
            Students and temporary residents can often choose <em>where</em> to vote. This tool helps you decide which state gives your vote more impact.
          </p>
        </div>

        {/* Card */}
        <div style={{
          maxWidth: 640,
          margin: "0 auto",
          background: colors.bgWhite,
          borderRadius: 20,
          padding: "32px 28px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          border: `1px solid ${colors.border}`,
        }}>
          {!isResult && <ProgressBar history={history} />}

          {isResult ? (
            <Result result={results[currentId]} onRestart={handleRestart} />
          ) : currentStep ? (
            <Question
              step={currentStep}
              onAnswer={handleAnswer}
              onBack={handleBack}
              canGoBack={history.length > 1}
            />
          ) : null}
        </div>

        {/* Footer */}
        <p style={{ maxWidth: 640, margin: "24px auto 0", textAlign: "center", fontSize: 12, color: "#999", fontFamily: "'Outfit', sans-serif", lineHeight: 1.6 }}>
          This tool provides general guidance only. Laws vary by state. Consult your state&rsquo;s official election website for exact rules and deadlines. Voting in two states is a federal crime.
        </p>
      </div>
    </>
  );
}
