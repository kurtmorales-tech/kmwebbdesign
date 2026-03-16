
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Search, MapPin, Brain, Send, Loader2, ExternalLink, MessageSquare, FileText } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const AIMarketingSuite: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'trends' | 'competitors' | 'strategy' | 'social' | 'brief'>('trends');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [sources, setSources] = useState<any[]>([]);
  const [prompt, setPrompt] = useState('');

  const runTrendsAnalysis = async () => {
    setLoading(true);
    setResult(null);
    setSources([]);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: "What are the top 5 digital marketing and web design trends for agencies in late 2024 and early 2025? Provide a concise summary for each.",
        config: {
          tools: [{ googleSearch: {} } as any]
        }
      });
      setResult(response.text || "No response generated.");
      // Grounding metadata access depends on actual SDK version/structure, keeping simple for demo
    } catch (err) {
      setResult("Error fetching trends. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const findLocalCompetitors = async () => {
    setLoading(true);
    setResult(null);
    setSources([]);
    
    let lat = 36.1699; // Default Las Vegas
    let lng = -115.1398;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;
      });
    }

    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: "Find highly-rated web design and SEO agencies near my location in Las Vegas. List their names and what they seem to specialize in.",
      });
      setResult(response.text || "No competitors found.");
    } catch (err) {
      setResult("Error mapping competitors.");
    } finally {
      setLoading(false);
    }
  };

  const generateDeepStrategy = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-pro",
        contents: `Develop a comprehensive, multi-channel marketing strategy for 'Kmwebdesign', a digital agency based in Las Vegas. 
                  Target: Small to medium businesses needing high-performance websites. 
                  Goal: Increase leads by 50% in 6 months.
                  Include: Content strategy, Paid ads approach, and Local networking tips.`
      });
      setResult(response.text || "Strategy generation failed.");
    } catch (err) {
      setResult("Deep reasoning failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const generateProjectBrief = async () => {
    if (!prompt) return;
    setLoading(true);
    setResult(null);
    try {
      const fullPrompt = `You are a Senior Project Manager at Kmwebdesign. Based on this client request: "${prompt}", generate a professional Project Brief.
                         Include:
                         1. Executive Summary
                         2. Technical Requirements (Frontend/Backend)
                         3. Proposed Sitemap/Architecture
                         4. Estimated Timeline (Phases)
                         5. Risk Assessment
                         Make it detailed, technically sound, and ready to send to a client.`;
      const response = await ai.models.generateContent({
        model: "gemini-1.5-pro",
        contents: fullPrompt
      });
      setResult(response.text || "Failed to generate brief.");
    } catch (err) {
      setResult("Brief generation error.");
    } finally {
      setLoading(false);
    }
  };

  const writeSocialPost = async () => {
    if (!prompt) return;
    setLoading(true);
    setResult(null);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: `Write 3 engaging Instagram and LinkedIn posts for a digital agency about this topic: "${prompt}". Include relevant hashtags and a call to action to visit kmwebdesign.xyz.`
      });
      setResult(response.text || "Failed to write posts.");
    } catch (err) {
      setResult("Flash generation error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <Sparkles className="mr-3 text-brand-400" /> AI Marketing & Ops Suite
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <button 
          onClick={() => setActiveTool('trends')}
          className={`p-4 rounded-2xl border transition-all flex flex-col items-center text-center ${activeTool === 'trends' ? 'bg-brand-600/20 border-brand-500 text-white shadow-lg shadow-brand-500/10' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
        >
          <Search size={24} className="mb-2" />
          <span className="font-semibold">Trends</span>
          <span className="text-[10px] mt-1 opacity-60">Web Research</span>
        </button>

        <button 
          onClick={() => setActiveTool('competitors')}
          className={`p-4 rounded-2xl border transition-all flex flex-col items-center text-center ${activeTool === 'competitors' ? 'bg-brand-600/20 border-brand-500 text-white shadow-lg shadow-brand-500/10' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
        >
          <MapPin size={24} className="mb-2" />
          <span className="font-semibold">Local</span>
          <span className="text-[10px] mt-1 opacity-60">Maps Context</span>
        </button>

        <button 
          onClick={() => setActiveTool('strategy')}
          className={`p-4 rounded-2xl border transition-all flex flex-col items-center text-center ${activeTool === 'strategy' ? 'bg-brand-600/20 border-brand-500 text-white shadow-lg shadow-brand-500/10' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
        >
          <Brain size={24} className="mb-2" />
          <span className="font-semibold">6-Mo Plan</span>
          <span className="text-[10px] mt-1 opacity-60">Deep Reasoning</span>
        </button>

        <button 
          onClick={() => setActiveTool('brief')}
          className={`p-4 rounded-2xl border transition-all flex flex-col items-center text-center ${activeTool === 'brief' ? 'bg-brand-600/20 border-brand-500 text-white shadow-lg shadow-brand-500/10' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
        >
          <FileText size={24} className="mb-2" />
          <span className="font-semibold">Brief Gen</span>
          <span className="text-[10px] mt-1 opacity-60">Pro PM Mode</span>
        </button>

        <button 
          onClick={() => setActiveTool('social')}
          className={`p-4 rounded-2xl border transition-all flex flex-col items-center text-center ${activeTool === 'social' ? 'bg-brand-600/20 border-brand-500 text-white shadow-lg shadow-brand-500/10' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
        >
          <MessageSquare size={24} className="mb-2" />
          <span className="font-semibold">Copywriter</span>
          <span className="text-[10px] mt-1 opacity-60">Flash Engine</span>
        </button>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm min-h-[400px] flex flex-col shadow-2xl">
        {activeTool === 'trends' && (
          <div className="space-y-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white">Market Intelligence</h3>
            <p className="text-slate-400">Scan the live web for current agency growth trends.</p>
            <button 
              onClick={runTrendsAnalysis}
              disabled={loading}
              className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl self-start flex items-center disabled:opacity-50 transition-all active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Search size={18} className="mr-2" />}
              Scan Latest Trends
            </button>
          </div>
        )}

        {activeTool === 'competitors' && (
          <div className="space-y-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white">Local Competitor Map</h3>
            <p className="text-slate-400">Analyze the Las Vegas landscape to find where Kmwebdesign can lead.</p>
            <button 
              onClick={findLocalCompetitors}
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl self-start flex items-center disabled:opacity-50 transition-all active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <MapPin size={18} className="mr-2" />}
              Map Competitors
            </button>
          </div>
        )}

        {activeTool === 'strategy' && (
          <div className="space-y-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white">Business Strategy Engine</h3>
            <p className="text-slate-400">Gemini Pro will spend significant time reasoning about your business goals to create a 6-month growth plan.</p>
            <button 
              onClick={generateDeepStrategy}
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl self-start flex items-center disabled:opacity-50 transition-all active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Brain size={18} className="mr-2" />}
              Generate Deep Strategy
            </button>
          </div>
        )}

        {activeTool === 'brief' && (
          <div className="space-y-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white">AI Project Brief Generator</h3>
            <p className="text-slate-400">Convert a messy client request into a structured roadmap.</p>
            <div className="flex flex-col space-y-3">
              <textarea 
                placeholder="Paste client request or goal here..." 
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex-1 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 min-h-[120px]"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button 
                onClick={generateProjectBrief}
                disabled={loading || !prompt}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl self-start flex items-center disabled:opacity-50 transition-all active:scale-95"
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : <FileText size={18} className="mr-2" />}
                Generate Technical Brief
              </button>
            </div>
          </div>
        )}

        {activeTool === 'social' && (
          <div className="space-y-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white">Fast Social Writer</h3>
            <p className="text-slate-400">Instantly turn topics into polished social media posts.</p>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Topic: e.g., 'Why SEO is vital in 2025'..." 
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex-1 text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button 
                onClick={writeSocialPost}
                disabled={loading || !prompt}
                className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl disabled:opacity-50 transition-all"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse">
            <Loader2 className="w-12 h-12 text-brand-500 animate-spin mb-4" />
            <p className="text-brand-400 font-medium">Gemini is processing your request...</p>
            <p className="text-slate-500 text-sm mt-2 font-mono">
              {['strategy', 'brief'].includes(activeTool) ? "Pro Mode Active - Reasoning in progress..." : "Generating high-quality output..."}
            </p>
          </div>
        )}

        {result && !loading && (
          <div className="mt-8 p-8 bg-slate-950/80 rounded-2xl border border-slate-800 text-slate-300 prose prose-invert max-w-none shadow-inner">
            <div className="whitespace-pre-wrap leading-relaxed font-sans">
              {result}
            </div>
            
            {sources.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-black text-brand-400 uppercase tracking-widest mb-4 flex items-center">
                  <ExternalLink size={12} className="mr-2" /> External Evidence
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sources.map((chunk: any, i: number) => {
                    const data = chunk.web || chunk.maps;
                    if (!data) return null;
                    return (
                      <a 
                        key={i} 
                        href={data.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-colors group border border-slate-800"
                      >
                        <div className="flex-1 truncate">
                          <p className="text-sm font-medium text-white truncate">{data.title || "Reference Source"}</p>
                          <p className="text-[10px] text-slate-500 truncate">{data.uri}</p>
                        </div>
                        <ExternalLink size={14} className="ml-2 text-slate-600 group-hover:text-brand-400" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIMarketingSuite;

