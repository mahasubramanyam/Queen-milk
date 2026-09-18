import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="w-full bg-[#404A3D] text-[#F7F7F7] text-xs py-2 px-4 border-b border-black/15">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
        {/* Address on left */}
        <div className="flex items-center gap-1.5 text-center sm:text-left truncate max-w-full">
          <MapPin className="w-3.5 h-3.5 text-[#EDDD5E] shrink-0" />
          <span className="truncate text-[#B0B9AE]">
            <span className="hidden md:inline font-normal">{BUSINESS_INFO.address}</span>
            <span className="md:hidden font-normal">{BUSINESS_INFO.shortAddress}</span>
          </span>
        </div>

        {/* Call us placeholder on right */}
        <div className="flex items-center gap-1.5 shrink-0 text-[#B0B9AE]">
          <Phone className="w-3.5 h-3.5 text-[#EDDD5E] shrink-0" />
          <span>Call us:</span>
          <span className="font-mono font-medium tracking-wide bg-black/25 px-2 py-0.5 rounded text-[#F7F7F7] border border-white/15">
            {BUSINESS_INFO.phonePlaceholder}
          </span>
        </div>
      </div>
    </div>
  );
};
