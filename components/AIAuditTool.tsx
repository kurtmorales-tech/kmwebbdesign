import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import {
  Search,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const AIAuditTool: React.FC = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<string | null>(null);

  const runAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setAuditResult(null);

    try {
      const prompt = `Perform a high-level digital audit for a potential client with the website or business name: "${url}". 
                     Give 3 specific, actionable points for improvement across: 
                     1. Web Design/UX 
                     2. Modern Features/Tech 
                     3. Conversion Strategy.
                     Format as a punchy, professional list of key opportunities. Bold the headlines. Keep it under 200 words.`;

      const result = await genAI.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: prompt
      });
      setAuditResult(result.text);
    } catch (error) {
      console.error("Audit failed:", error);
      setAuditResult(
        "Unable to complete audit. Please check your business name/URL and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-all duration-700"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>

      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-brand-500 rounded-2xl shadow-lg shadow-brand-500/20">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            AI Strategy Audit
          </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Struggling to convert? Enter your website or business name and our AI
          will pinpoint your biggest growth opportunities in seconds.
        </p>

        <form onSubmit={runAudit} className="space-y-4">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="e.g., myshop.com or 'Fresh Bakery LV'"
              className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none text-slate-900 dark:text-white"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading || !url}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50 active:scale-95 shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <span>Generate Free Audit</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {auditResult && !loading && (
          <div className="mt-8 p-6 bg-brand-50/50 dark:bg-brand-950/20 rounded-2xl border border-brand-100 dark:border-brand-900/30 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-start space-x-3 mb-4">
              <CheckCircle2 className="text-emerald-500 w-5 h-5 mt-1 shrink-0" />
              <h4 className="font-bold text-slate-900 dark:text-white">
                Professional Insights:
              </h4>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
              {auditResult}
            </div>
            <div className="mt-6 pt-6 border-t border-brand-100 dark:border-brand-900/30 flex justify-between items-center">
              <p className="text-xs text-brand-600 dark:text-brand-400 font-medium italic">
                Ready to implement these?
              </p>
              <a
                href="/contact"
                className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline"
              >
                Let's talk →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAuditTool;
