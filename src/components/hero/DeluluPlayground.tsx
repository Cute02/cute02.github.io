"use client";

import { useState } from "react";
import { Terminal, Play, CheckCircle2, ShieldCheck, Sparkles, Copy, Check } from "lucide-react";

interface QueryPreset {
  prompt: string;
  sql: string;
  insight: string;
  rowCount: number;
  tables: string[];
}

const PRESETS: QueryPreset[] = [
  {
    prompt: "Show the top 3 highest revenue customer tiers this quarter",
    tables: ["customers", "orders", "revenue_metrics"],
    sql: `SELECT \n  c.tier AS customer_tier,\n  COUNT(DISTINCT c.id) AS active_accounts,\n  ROUND(SUM(o.amount)::numeric, 2) AS total_revenue\nFROM customers c\nJOIN orders o ON c.id = o.customer_id\nWHERE o.created_at >= NOW() - INTERVAL '90 days'\nGROUP BY c.tier\nORDER BY total_revenue DESC\nLIMIT 3;`,
    insight:
      "Enterprise and Growth tiers contributed 78.4% of total quarterly revenue, with Enterprise showing the highest lifetime value per active account ($14,250 avg).",
    rowCount: 3,
  },
  {
    prompt: "Find churn risk accounts with over 5 orders but zero activity in 60 days",
    tables: ["accounts", "order_logs"],
    sql: `SELECT \n  a.id AS account_id,\n  a.company_name,\n  COUNT(o.id) AS lifetime_orders,\n  MAX(o.created_at) AS last_order_timestamp\nFROM accounts a\nJOIN order_logs o ON a.id = o.account_id\nGROUP BY a.id, a.company_name\nHAVING COUNT(o.id) >= 5 \n   AND MAX(o.created_at) < NOW() - INTERVAL '60 days'\nORDER BY lifetime_orders DESC;`,
    insight:
      "Identified 14 high-value accounts with historical buying momentum currently dormant for 60+ days. Recommended for proactive account-manager re-engagement.",
    rowCount: 14,
  },
  {
    prompt: "Compare average transaction size before vs after recommendation engine rollout",
    tables: ["transactions", "experiment_cohorts"],
    sql: `SELECT \n  ec.cohort_name,\n  ROUND(AVG(t.total_amount)::numeric, 2) AS avg_basket_size,\n  ROUND(STDDEV(t.total_amount)::numeric, 2) AS std_deviation\nFROM transactions t\nJOIN experiment_cohorts ec ON t.cohort_id = ec.id\nGROUP BY ec.cohort_name;`,
    insight:
      "Recommended cohort exhibited a +18.6% lift in average order basket value ($84.20 vs $71.00 baseline), with statistical significance p < 0.01.",
    rowCount: 2,
  },
];

export function DeluluPlayground() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState<number>(3);
  const [copied, setCopied] = useState(false);

  const activePreset = PRESETS[selectedIdx];

  const handleRun = () => {
    setRunning(true);
    setStep(1);

    setTimeout(() => setStep(2), 350);
    setTimeout(() => {
      setStep(3);
      setRunning(false);
    }, 750);
  };

  const handleCopySQL = () => {
    navigator.clipboard.writeText(activePreset.sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#07090F] overflow-hidden shadow-2xl">
      {/* Top Terminal Bar */}
      <div className="px-5 py-3 border-b border-white/10 bg-[#050608] flex items-center justify-between font-mono text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-white font-bold tracking-wider">
            DELULU // TEXT-TO-SQL AGENT SIMULATOR
          </span>
        </div>

        <div className="flex items-center gap-2 text-cyan-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">SANDBOX: READ-ONLY AST GUARDRAIL</span>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Natural Language Prompt Selector */}
        <div>
          <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            Select Or Trigger Natural Language Prompt:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {PRESETS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedIdx(idx);
                  setStep(3);
                }}
                className={`p-3 rounded-xl border text-left text-xs font-sans transition-all flex flex-col justify-between ${
                  selectedIdx === idx
                    ? "border-cyan-400 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                    : "border-white/10 bg-surface-card/60 text-slate-300 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className="font-mono text-[10px] text-cyan-400 mb-1">
                  PROMPT #{idx + 1}
                </span>
                <span className="line-clamp-2 leading-relaxed font-medium">
                  &ldquo;{preset.prompt}&rdquo;
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pipeline Execution Flow */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl border border-white/5 bg-[#050608]/80 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> AGENT PIPELINE:
            </span>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className={step >= 1 ? "text-cyan-300 font-bold" : ""}>
                1. Schema Binding
              </span>
              <span>→</span>
              <span className={step >= 2 ? "text-cyan-300 font-bold" : ""}>
                2. AST Validator
              </span>
              <span>→</span>
              <span className={step >= 3 ? "text-cyan-300 font-bold" : ""}>
                3. Insight Synthesis
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRun}
            disabled={running}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 shadow-cyan-sm"
          >
            <Play className={`w-3.5 h-3.5 fill-current ${running ? "animate-spin" : ""}`} />
            <span>{running ? "Synthesizing..." : "Execute Agent"}</span>
          </button>
        </div>

        {/* Two-Column Output: Generated SQL & Synthesized Insight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Generated SQL Column */}
          <div className="rounded-xl border border-white/10 bg-[#04060A] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5 font-mono text-xs text-slate-400">
                <span className="text-cyan-400 font-bold">// GENERATED POSTGRESQL QUERY</span>
                <button
                  type="button"
                  onClick={handleCopySQL}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copied ? "Copied" : "Copy SQL"}</span>
                </button>
              </div>
              <pre className="font-mono text-xs text-slate-200 overflow-x-auto p-2 rounded bg-black/40 leading-relaxed">
                <code>{activePreset.sql}</code>
              </pre>
            </div>

            <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span>BIND TABLES: {activePreset.tables.join(", ")}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> SYNTAX VALIDATED
              </span>
            </div>
          </div>

          {/* Synthesized Natural Language Insight Column */}
          <div className="rounded-xl border border-cyan-500/30 bg-[#060A14] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5 font-mono text-xs">
                <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SYNTHESIZED BUSINESS INSIGHT</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  ROWS: {activePreset.rowCount}
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 text-sm text-slate-200 leading-relaxed font-sans">
                {activePreset.insight}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
              <span>POWERED BY: DELULU AGENT CORE</span>
              <span className="text-cyan-400">EXECUTION: 42MS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
