import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Sparkles, 
  RotateCcw, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award
} from 'lucide-react';

export const InterviewCoachInteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prep' | 'session' | 'feedback'>('session');
  const [selectedRole, setSelectedRole] = useState<'frontend-ux' | 'react-engineer' | 'design-systems'>('frontend-ux');
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(42);

  // Timer simulation
  useEffect(() => {
    let interval: any = null;
    if (isRecording) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFinishAnswer = () => {
    setIsRecording(false);
    setActiveTab('feedback');
  };

  return (
    <div className="w-full bg-[#101B30] border border-[#1B2A47] rounded-xl shadow-card overflow-hidden text-[#F5F8FF] font-sans">
      
      {/* Top Application Header */}
      <div className="bg-[#0D1424] border-b border-[#1B2A47] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#168BFF]/20 border border-[#168BFF]/40 text-[#4DB8FF] flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#F5F8FF]">AI Interview Coach</h4>
            <span className="text-[10px] text-[#A5B4CC] font-mono">Interactive Prototype</span>
          </div>
        </div>

        {/* Tab navigation within demo */}
        <div className="flex items-center bg-[#070B14] p-0.5 rounded-lg border border-[#1B2A47] text-xs">
          <button
            onClick={() => setActiveTab('prep')}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === 'prep' ? 'bg-[#168BFF] text-[#F5F8FF] shadow-sm' : 'text-[#A5B4CC] hover:text-[#F5F8FF]'
            }`}
          >
            01. Config
          </button>
          <button
            onClick={() => setActiveTab('session')}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === 'session' ? 'bg-[#168BFF] text-[#F5F8FF] shadow-sm' : 'text-[#A5B4CC] hover:text-[#F5F8FF]'
            }`}
          >
            02. Rehearsal
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === 'feedback' ? 'bg-[#168BFF] text-[#F5F8FF] shadow-sm' : 'text-[#A5B4CC] hover:text-[#F5F8FF]'
            }`}
          >
            03. Feedback
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-4 sm:p-6 min-h-[340px] flex flex-col justify-between">
        
        {/* TAB 1: PREPARATION CONFIG */}
        {activeTab === 'prep' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#4DB8FF] bg-[#168BFF]/10 px-2.5 py-0.5 rounded border border-[#168BFF]/25">
                Practice Track Selection
              </span>
              <h3 className="text-lg font-bold text-[#F5F8FF] mt-2">
                Choose the interview focus area
              </h3>
              <p className="text-xs text-[#A5B4CC] mt-1">
                Calibrates question prompts and STAR diagnostic criteria for specific frontend competencies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <button
                onClick={() => setSelectedRole('frontend-ux')}
                className={`p-3 text-left rounded-xl border transition-all ${
                  selectedRole === 'frontend-ux'
                    ? 'border-[#168BFF] bg-[#168BFF]/15 shadow-[0_0_12px_rgba(22,139,255,0.2)]'
                    : 'border-[#1B2A47] bg-[#0D1424] hover:border-[#168BFF]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#F5F8FF]">Frontend &amp; UX</span>
                  <span className="w-2 h-2 rounded-full bg-[#168BFF]" />
                </div>
                <p className="text-[11px] text-[#A5B4CC]">
                  UI architecture, design systems, and cross-discipline collaboration.
                </p>
              </button>

              <button
                onClick={() => setSelectedRole('react-engineer')}
                className={`p-3 text-left rounded-xl border transition-all ${
                  selectedRole === 'react-engineer'
                    ? 'border-[#168BFF] bg-[#168BFF]/15 shadow-[0_0_12px_rgba(22,139,255,0.2)]'
                    : 'border-[#1B2A47] bg-[#0D1424] hover:border-[#168BFF]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#F5F8FF]">React Architecture</span>
                  <span className="w-2 h-2 rounded-full bg-[#1B2A47]" />
                </div>
                <p className="text-[11px] text-[#A5B4CC]">
                  State management, performance budgets, and TypeScript rigor.
                </p>
              </button>

              <button
                onClick={() => setSelectedRole('design-systems')}
                className={`p-3 text-left rounded-xl border transition-all ${
                  selectedRole === 'design-systems'
                    ? 'border-[#168BFF] bg-[#168BFF]/15 shadow-[0_0_12px_rgba(22,139,255,0.2)]'
                    : 'border-[#1B2A47] bg-[#0D1424] hover:border-[#168BFF]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#F5F8FF]">Accessibility (a11y)</span>
                  <span className="w-2 h-2 rounded-full bg-[#1B2A47]" />
                </div>
                <p className="text-[11px] text-[#A5B4CC]">
                  WCAG compliance, keyboard flow, and design tokens.
                </p>
              </button>
            </div>

            <div className="p-3 bg-[#0D1424] rounded-xl border border-[#1B2A47] flex items-center justify-between text-xs">
              <span className="text-[#A5B4CC]">Ready to simulate practice question:</span>
              <button
                onClick={() => setActiveTab('session')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#168BFF] hover:bg-[#4DB8FF] text-[#F5F8FF] font-semibold transition-colors"
              >
                <span>Launch Rehearsal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: LIVE REHEARSAL SESSION */}
        {activeTab === 'session' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Prompt Card */}
            <div className="p-4 bg-[#0D1424] rounded-xl border border-[#1B2A47]">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#6E82A1] mb-1.5">
                <span>QUESTION PROMPT · FRONTEND &amp; UX DESIGN</span>
                <span className="text-[#4DB8FF] font-medium">Practice Mode</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-[#F5F8FF] leading-snug">
                "Describe a project where you had to balance design elegance with complex frontend engineering constraints. How did you resolve the trade-offs?"
              </h3>
            </div>

            {/* Speaking / Audio Wave Status */}
            <div className="py-5 px-4 bg-[#070B14]/80 rounded-xl border border-[#1B2A47] flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Subtle Audio Waveform Simulation */}
              <div className="flex items-center gap-1.5 h-10 mb-3">
                {[20, 50, 80, 95, 65, 30, 85, 95, 45, 25, 60, 80, 50].map((height, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full transition-all duration-200 ${
                      isRecording ? 'bg-[#4DB8FF] shadow-[0_0_8px_rgba(77,184,255,0.6)] animate-pulse' : 'bg-[#1B2A47]'
                    }`}
                    style={{ 
                      height: isRecording ? `${height}%` : '20%',
                      animationDelay: `${i * 80}ms`
                    }}
                  />
                ))}
              </div>

              {/* Status pill & timer */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${isRecording ? 'bg-[#168BFF] animate-ping' : 'bg-[#4DB8FF]'}`} />
                <span className="text-xs font-mono font-medium text-[#F5F8FF]">
                  {isRecording ? 'Listening & Transcribing...' : 'Rehearsal Ready'}
                </span>
                <span className="text-xs font-mono text-[#A5B4CC] ml-2">
                  <Clock className="w-3.5 h-3.5 inline mr-1 text-[#4DB8FF]" />
                  {formatTime(seconds)}
                </span>
              </div>

              {/* Real-time transcribed snippet preview */}
              <p className="text-xs text-[#A5B4CC] italic max-w-lg line-clamp-2">
                "{isRecording ? 'In my final-year project, encrypting 20MB files was blocking the main UI thread. I implemented a web worker pipeline to keep the dashboard responsive...' : 'Click "Start Answering" to practice speaking aloud or test evaluation...'}"
              </p>
            </div>

            {/* Rehearsal Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isRecording
                      ? 'bg-red-600 hover:bg-red-700 text-[#F5F8FF]'
                      : 'bg-[#168BFF] hover:bg-[#4DB8FF] text-[#F5F8FF] shadow-[0_0_15px_rgba(22,139,255,0.35)]'
                  }`}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  <span>{isRecording ? 'Pause Recording' : 'Start Answering'}</span>
                </button>

                <button
                  onClick={() => { setSeconds(0); setIsRecording(false); }}
                  className="p-2 rounded-xl bg-[#0D1424] hover:bg-[#13223D] border border-[#1B2A47] text-[#A5B4CC] hover:text-[#F5F8FF] transition-colors"
                  title="Reset timer"
                  aria-label="Reset timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleFinishAnswer}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0D1424] hover:bg-[#13223D] border border-[#168BFF]/40 text-[#4DB8FF] hover:text-[#F5F8FF] text-xs font-semibold transition-colors"
              >
                <span>Evaluate Answer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: STRUCTURED AI FEEDBACK */}
        {activeTab === 'feedback' && (
          <div className="space-y-3.5 animate-in fade-in duration-200">
            {/* Scorecard Header */}
            <div className="p-3 bg-[#168BFF]/15 border border-[#168BFF]/30 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#4DB8FF]" />
                <span className="text-xs font-semibold text-[#F5F8FF]">
                  STAR Alignment: Strong Structure
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#4DB8FF]">
                Delivery: 132 wpm (Steady)
              </span>
            </div>

            {/* STAR Framework Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#0D1424] border border-[#1B2A47]">
                <div className="font-mono text-[10px] text-[#6E82A1]">SITUATION</div>
                <div className="font-semibold text-[#F5F8FF] mt-0.5">Clear</div>
                <div className="text-[11px] text-[#4DB8FF]">Context established</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0D1424] border border-[#1B2A47]">
                <div className="font-mono text-[10px] text-[#6E82A1]">TASK</div>
                <div className="font-semibold text-[#F5F8FF] mt-0.5">Defined</div>
                <div className="text-[11px] text-[#4DB8FF]">Specific problem</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0D1424] border border-[#1B2A47]">
                <div className="font-mono text-[10px] text-[#6E82A1]">ACTION</div>
                <div className="font-semibold text-[#F5F8FF] mt-0.5">Technical</div>
                <div className="text-[11px] text-[#4DB8FF]">Offloaded to worker</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0D1424] border border-[#1B2A47]">
                <div className="font-mono text-[10px] text-[#6E82A1]">RESULT</div>
                <div className="font-semibold text-[#F5F8FF] mt-0.5">Impactful</div>
                <div className="text-[11px] text-[#4DB8FF]">Fluid 60fps UI</div>
              </div>
            </div>

            {/* Phrasing Diff */}
            <div className="p-3 bg-[#0D1424] rounded-xl border border-[#1B2A47] space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-[#4DB8FF] font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Side-by-Side Phrasing Suggestion:</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded-lg bg-[#070B14] border border-[#1B2A47]">
                  <span className="font-mono text-[10px] text-[#6E82A1] block mb-1">Your Spoken Delivery:</span>
                  <p className="text-[#A5B4CC] italic">"I realized encrypting was making the app freeze, so I moved it to a worker and it worked much better."</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#168BFF]/10 border border-[#168BFF]/30">
                  <span className="font-mono text-[10px] text-[#4DB8FF] font-semibold block mb-1">Impact-Focused Alternative:</span>
                  <p className="text-[#F5F8FF]">"Recognizing CPU spikes during encryption, I offloaded symmetric crypto calculations to a Web Worker, preserving a constant 60fps frame budget."</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <button
                onClick={() => { setActiveTab('session'); setSeconds(0); setIsRecording(false); }}
                className="inline-flex items-center gap-1 text-[#A5B4CC] hover:text-[#F5F8FF] font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Practice Another Take</span>
              </button>

              <button
                onClick={() => setActiveTab('prep')}
                className="text-[#4DB8FF] hover:text-[#168BFF] font-medium"
              >
                Switch Question Track →
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="bg-[#070B14] border-t border-[#1B2A47] px-4 py-2 text-[11px] text-[#6E82A1] flex items-center justify-between">
        <span className="font-mono">Web Speech API &amp; STAR Diagnostic Engine</span>
        <span className="text-[#4DB8FF] font-medium">Interactive Demo</span>
      </div>

    </div>
  );
};
