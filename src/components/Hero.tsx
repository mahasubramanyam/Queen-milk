import React from 'react';
import { MessageCircle, ArrowDown, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { PlaceholderImage } from './PlaceholderImage';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-8 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#F5EFEB] border-b border-[#E6DED8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & WhatsApp CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FBEFEA] border border-[#E8C7BA] text-[#9A4A28] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#B85D38]" />
              <span>Neighbourhood Dairy in Kunniyamuthur</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C2523] leading-[1.18]">
              Pure, Fresh Dairy from Your Neighbourhood Shop
            </h1>

            {/* Short Subtext */}
            <p className="text-base sm:text-lg text-[#5A4F4A] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Famous for our signature slow-simmered buffalo ghee, pure fresh milk brought in daily, 
              thick natural curd, and seasoned buttermilk. Prepared fresh every morning with traditional care.
            </p>

            {/* Actions: Primary WhatsApp CTA & Secondary Browse */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                id="hero-whatsapp-cta-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#3F7A59] hover:bg-[#2F5C43] text-white text-base font-semibold shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                id="hero-view-products-btn"
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#F3ECE4] text-[#2C2523] text-base font-medium border border-[#DCD2C9] transition-colors"
              >
                <span>View Daily Products</span>
                <ArrowDown className="w-4 h-4 text-[#8C7D75]" />
              </a>
            </div>

            {/* Quick reassurance note */}
            <p className="text-xs text-[#7A6B63]">
              * Quick WhatsApp ordering for immediate counter pickup or daily inquiry.
            </p>
          </div>

          {/* Right Column: Placeholder Shop Photo Area */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Sized and structured placeholder box for shop photo */}
            {/* <!-- replace-with-shop-photo --> */}
            <div className="w-full max-w-md lg:max-w-none shadow-sm rounded-xl bg-white p-2 border border-[#E6DED8]">
              <PlaceholderImage
                id="hero-shop-photo-placeholder"
                label="[replace with shop photo]"
                altKey="replace-with-shop-photo"
                aspectRatio="aspect-[4/3]"
                icon="shop"
                variant="clay"
                hintSize="Shop storefront or counter (approx. 800×600px)"
              />
              <div className="px-2 pt-2.5 pb-1 text-center">
                <span className="text-xs text-[#7A6B63] italic">
                  Counter & storefront view &bull; Queen Milk &amp; Milk Products
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
