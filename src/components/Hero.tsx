import React from 'react';
import { MessageCircle, ArrowDown, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import heroCow from '../assets/images/hero-cow-dark.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative isolate flex items-center min-h-[520px] sm:min-h-[600px] md:min-h-[680px] overflow-hidden"
    >
      {/* Full-bleed background photo */}
      <img
        src={heroCow}
        alt="Dairy cow at Queen Milk & Milk Products"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark gradient overlay for text legibility, Milky-template style */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="max-w-2xl space-y-6 text-center sm:text-left mx-auto sm:mx-0">
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 text-[#F5EFEB] text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A588]" />
            <span>Welcome to Our Neighbourhood Dairy</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-sm">
            Pure, Fresh Dairy from Your Neighbourhood Shop
          </h1>

          {/* Short Subtext */}
          <p className="text-base sm:text-lg text-[#EDE6DF]/95 leading-relaxed max-w-xl mx-auto sm:mx-0">
            Famous for our signature slow-simmered buffalo ghee, pure fresh milk brought in daily,
            thick natural curd, and seasoned buttermilk. Prepared fresh every morning with traditional care.
          </p>

          {/* Actions: Primary WhatsApp CTA & Secondary Browse */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3.5 pt-2">
            <a
              id="hero-whatsapp-cta-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#3F7A59] hover:bg-[#2F5C43] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Order on WhatsApp</span>
            </a>

            <a
              id="hero-view-products-btn"
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/95 hover:bg-white text-[#2C2523] text-base font-medium border border-white/40 transition-colors"
            >
              <span>View Daily Products</span>
              <ArrowDown className="w-4 h-4 text-[#8C7D75]" />
            </a>
          </div>

          {/* Quick reassurance note */}
          <p className="text-xs text-[#EDE6DF]/80">
            * Quick WhatsApp ordering for immediate counter pickup or daily inquiry.
          </p>
        </div>
      </div>
    </section>
  );
};
