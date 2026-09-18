import React from 'react';
import { MapPin, MessageCircle, Phone, Clock, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#2C2523] text-[#FAF7F2] pt-12 pb-8 border-t border-[#443834]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#443834]">
          
          {/* Shop Name & Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#B85D38] text-[#FAF7F2] flex items-center justify-center font-heading text-xl font-bold">
                Q
              </div>
              <div>
                <span className="block font-heading text-xl font-bold tracking-tight text-[#FAF7F2]">
                  {BUSINESS_INFO.name}
                </span>
                <span className="block text-xs uppercase tracking-wider text-[#C7BDB7]">
                  Traditional Dairy &amp; Buffalo Ghee
                </span>
              </div>
            </div>

            <p className="text-sm text-[#C7BDB7] leading-relaxed max-w-md">
              A neighbourhood dairy shop in Kunniyamuthur, Coimbatore. Known for authentic buffalo ghee, 
              fresh milk, thick curd, and refreshing buttermilk sourced and served same-day.
            </p>

            <div className="pt-2">
              <a
                id="footer-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#3F7A59] hover:bg-[#2F5C43] text-white text-sm font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links & Information */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-[#E8A588]">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-[#C7BDB7]">
                <li>
                  <a href="#hero-section" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About the Shop
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Dairy Products
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-white transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-white transition-colors">
                    Shop Location &amp; Map
                  </a>
                </li>
              </ul>
            </div>

            {/* Address & Contact */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-[#E8A588]">
                Shop Details
              </h4>
              <div className="space-y-2.5 text-xs text-[#C7BDB7] leading-relaxed">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E8A588] shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#A5D6B6] shrink-0" />
                  <span>Phone: <span className="font-mono text-white">{BUSINESS_INFO.phonePlaceholder}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E8A588] shrink-0" />
                  <span>{BUSINESS_INFO.hoursPlaceholder}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A89D96]">
          <p id="copyright-text">
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted for honest neighbourhood dairy in Kunniyamuthur</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
