import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EEEEEE] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Shop Name & Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#5B8C51] text-white flex items-center justify-center font-heading text-xl font-bold shadow-xs transition-transform group-hover:scale-105">
            Q
          </div>
          <div>
            <span className="block font-heading text-lg sm:text-xl font-bold tracking-tight text-[#404A3D] leading-tight">
              {BUSINESS_INFO.name}
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-[#404A3D]/70 font-medium">
              Kunniyamuthur &bull; Coimbatore
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#404A3D] hover:text-[#5B8C51] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5B8C51] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA button */}
        <div className="hidden md:flex items-center">
          <a
            id="header-whatsapp-btn"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5B8C51] hover:bg-[#4B7342] text-white text-sm font-semibold tracking-wide shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="mobile-quick-wa-btn"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#5B8C51] hover:bg-[#4B7342] text-white"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#404A3D] hover:bg-[#EEEEEE] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="md:hidden bg-white border-b border-[#EEEEEE] px-4 pt-2 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#404A3D] rounded-md hover:bg-[#F7F7F7] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#EEEEEE]">
            <a
              id="mobile-drawer-whatsapp-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#5B8C51] hover:bg-[#4B7342] text-white text-base font-semibold shadow-xs"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
