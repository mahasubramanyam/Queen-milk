import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E6DED8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B85D38]">
            Find Our Shop
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C2523]">
            Visit Us in Kunniyamuthur
          </h2>
          <p className="text-sm sm:text-base text-[#5A4F4A]">
            Walk into our counter on Palakadu Main Road for fresh daily dairy and authentic buffalo ghee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours, Phone, and WhatsApp Action */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E6DED8] shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-bold text-[#2C2523] border-b border-[#F0E8E1] pb-3">
                Store Information
              </h3>

              {/* Full Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FBEFEA] text-[#B85D38] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7A6B63]">
                    Shop Address
                  </span>
                  <p className="text-sm text-[#2C2523] font-medium leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Placeholder Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#EBF4EE] text-[#3F7A59] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7A6B63]">
                    Operating Hours
                  </span>
                  <div className="inline-block bg-[#FAF7F2] border border-[#E6DED8] px-2.5 py-1 rounded-md text-xs font-mono font-medium text-[#2C2523]">
                    {BUSINESS_INFO.hoursPlaceholder}
                  </div>
                  <p className="text-xs text-[#8C7D75]">
                    * Please check via WhatsApp before visiting outside usual morning hours.
                  </p>
                </div>
              </div>

              {/* Placeholder Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] text-[#6B605B] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7A6B63]">
                    Contact Phone
                  </span>
                  <div className="inline-block bg-[#FAF7F2] border border-[#E6DED8] px-2.5 py-1 rounded-md text-xs font-mono font-medium text-[#2C2523]">
                    {BUSINESS_INFO.phonePlaceholder}
                  </div>
                  <p className="text-xs text-[#8C7D75]">
                    * Direct phone confirmation pending; please use WhatsApp below.
                  </p>
                </div>
              </div>

            </div>

            {/* Actions: Prominent WhatsApp CTA & Direction Link */}
            <div className="space-y-3 pt-4 border-t border-[#F0E8E1]">
              <a
                id="location-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#3F7A59] hover:bg-[#2F5C43] text-white text-sm font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                id="location-directions-btn"
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F3ECE4] text-[#2C2523] text-xs font-medium border border-[#DCD2C9] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B85D38]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#8C7D75]" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-3 sm:p-4 border border-[#E6DED8] shadow-xs flex flex-col">
            <div className="flex items-center justify-between px-2 py-2 mb-2 text-xs text-[#7A6B63]">
              <span className="font-semibold text-[#2C2523] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B85D38]" />
                Kunniyamuthur, Coimbatore Map View
              </span>
              <span className="font-mono text-[11px] text-[#8C7D75]">
                Palakadu Main Road
              </span>
            </div>

            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-full min-h-[340px] rounded-xl overflow-hidden border border-[#E6DED8] bg-[#EAE2DC]">
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
              <span className="text-[11px] text-[#8C7D75]">
                Landmark: Near C Indicate Bank / Canara Bank, 1st Floor, Kunniyamuthur
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
