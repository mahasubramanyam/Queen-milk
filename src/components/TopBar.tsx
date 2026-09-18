import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="w-full bg-[#3A302D] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#4D423E]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
        {/* Address on left */}
        <div className="flex items-center gap-1.5 text-center sm:text-left truncate max-w-full">
          <MapPin className="w-3.5 h-3.5 text-[#E8A588] shrink-0" />
          <span className="truncate text-[#E8DFD8]">
            <span className="hidden md:inline font-normal">{BUSINESS_INFO.address}</span>
            <span className="md:hidden font-normal">{BUSINESS_INFO.shortAddress}</span>
          </span>
        </div>

        {/* Call us placeholder on right */}
        <div className="flex items-center gap-1.5 shrink-0 text-[#E8DFD8]">
          <Phone className="w-3.5 h-3.5 text-[#A5D6B6] shrink-0" />
          <span>Call us:</span>
          <span className="font-mono font-medium tracking-wide bg-[#2C2523] px-2 py-0.5 rounded text-[#F5EFEB] border border-[#544844]">
            {BUSINESS_INFO.phonePlaceholder}
          </span>
        </div>
      </div>
    </div>
  );
};
