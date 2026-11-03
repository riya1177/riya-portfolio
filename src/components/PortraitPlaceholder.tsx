import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

export const PortraitPlaceholder: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-[360px] md:max-w-[400px] mx-auto lg:mx-0 group">
      {/* Subtle Electric-Blue Ambient Glow */}
      <div 
        className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#168BFF]/20 via-[#4DB8FF]/10 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true" 
      />

      {/* Main Rectangular Container */}
      <div className="relative aspect-[4/5] w-full rounded-2xl border border-[#168BFF]/40 bg-[#0D1424] overflow-hidden shadow-[0_0_25px_rgba(22,139,255,0.18)] transition-all duration-300">
        
        {/* Real photo if available */}
        {!hasError && (
          <img
            src="/riya.jpeg"
            alt="Riya"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        )}

        {/* Tasteful dark placeholder if photo is missing or loading */}
        {(!isLoaded || hasError) && (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-[#0D1424] bg-grid-pattern relative select-none">
            
            {/* Subtle corner tech accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#168BFF]/40" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#168BFF]/40" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#168BFF]/40" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#168BFF]/40" />

            {/* Central icon container */}
            <div className="w-16 h-16 rounded-xl bg-[#101B30] border border-[#168BFF]/30 flex items-center justify-center text-[#4DB8FF] shadow-[0_0_15px_rgba(22,139,255,0.2)] mb-4">
              <Camera className="w-7 h-7" />
            </div>

            {/* Required text: "Add your photo here" */}
            <h3 className="text-base font-semibold text-[#F5F8FF] tracking-tight">
              Add your photo here
            </h3>
            
            <p className="text-xs text-[#A5B4CC] mt-1.5 max-w-[220px]">
              Drop your photo into <code className="text-[#4DB8FF] font-mono font-medium">/public/riya.jpeg</code>
            </p>

            <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101B30] border border-[#1B2A47] text-[11px] text-[#A5B4CC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] animate-pulse" />
              <span>Portrait placeholder</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
