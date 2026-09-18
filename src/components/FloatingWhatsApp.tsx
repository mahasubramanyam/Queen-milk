import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-50 md:hidden">
      <a
        id="floating-whatsapp-btn"
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#5B8C51] hover:bg-[#4B7342] text-white font-semibold text-sm shadow-lg active:scale-95 transition-transform border border-white/20"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span>Order on WhatsApp</span>
      </a>
    </aside>
  );
};
