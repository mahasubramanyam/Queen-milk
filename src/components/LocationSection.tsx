import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-20 bg-[#F7F7F7] border-t border-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#5B8C51]">
            Find Our Shop
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#404A3D]">
            Visit Us in Kunniyamuthur
          </h2>
          <p className="text-sm sm:text-base text-[#404A3D]/80">
            Walk into our counter on Palakadu Main Road for fresh daily dairy and authentic buffalo ghee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours, Phone, and WhatsApp Action */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#EEEEEE] shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-bold text-[#404A3D] border-b border-[#EEEEEE] pb-3">
                Store Information
              </h3>

              {/* Full Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#F7F7F7] text-[#5B8C51] border border-[#EEEEEE] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#404A3D]/70">
                    Shop Address
                  </span>
                  <p className="text-sm text-[#404A3D] font-medium leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Placeholder Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#F7F7F7] text-[#5B8C51] border border-[#EEEEEE] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#404A3D]/70">
                    Operating Hours
                  </span>
                  <div className="inline-block bg-[#F7F7F7] border border-[#EEEEEE] px-2.5 py-1 rounded-md text-xs font-mono font-medium text-[#404A3D]">
                    {BUSINESS_INFO.hoursPlaceholder}
                  </div>
                  <p className="text-xs text-[#404A3D]/60">
                    * Please check via WhatsApp before visiting outside usual morning hours.
                  </p>
                </div>
              </div>

              {/* Placeholder Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#F7F7F7] text-[#5B8C51] border border-[#EEEEEE] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#404A3D]/70">
                    Contact Phone
                  </span>
                  <div className="inline-block bg-[#F7F7F7] border border-[#EEEEEE] px-2.5 py-1 rounded-md text-xs font-mono font-medium text-[#404A3D]">
                    {BUSINESS_INFO.phonePlaceholder}
                  </div>
                  <p className="text-xs text-[#404A3D]/60">
                    * Direct phone confirmation pending; please use WhatsApp below.
                  </p>
                </div>
              </div>

            </div>

            {/* Actions: Prominent WhatsApp CTA & Direction Link */}
            <div className="space-y-3 pt-4 border-t border-[#EEEEEE]">
              <a
                id="location-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#5B8C51] hover:bg-[#4B7342] text-white text-sm font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                id="location-directions-btn"
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F7F7F7] hover:bg-[#EEEEEE] text-[#404A3D] text-xs font-medium border border-[#EEEEEE] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#5B8C51]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#404A3D]/60" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-3 sm:p-4 border border-[#EEEEEE] shadow-xs flex flex-col">
            <div className="flex items-center justify-between px-2 py-2 mb-2 text-xs text-[#404A3D]/70">
              <span className="font-semibold text-[#404A3D] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#5B8C51]" />
                Kunniyamuthur, Coimbatore Map View
              </span>
              <span className="font-mono text-[11px] text-[#404A3D]/60">
                Palakadu Main Road
              </span>
            </div>

            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-full min-h-[340px] rounded-xl overflow-hidden border border-[#EEEEEE] bg-[#F7F7F7]">
              <iframe
                id="embedded-google-map"
                title="Google Map location of Queen Milk & Milk Products"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            
            <div className="pt-2 px-2 text-right">
              <span className="text-[11px] text-[#404A3D]/60">
                Landmark: Near C Indicate Bank / Canara Bank, 1st Floor, Kunniyamuthur
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
