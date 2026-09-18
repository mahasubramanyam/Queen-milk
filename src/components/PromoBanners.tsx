import React from 'react';
import { ArrowRight, MessageCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { PlaceholderImage } from './PlaceholderImage';

export const PromoBanners: React.FC = () => {
  return (
    <section id="promo-banners" className="py-8 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Promo Banner 1: Fresh Dairy Daily */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6DED8] shadow-xs flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#3F7A59] bg-[#EBF4EE] px-2.5 py-1 rounded-md">
                Daily Freshness
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2C2523] leading-snug">
                We sell fresh dairy, daily
              </h3>
              <p className="text-sm text-[#5A4F4A] leading-relaxed">
                From morning buffalo milk to authentic slow-simmered ghee, our batches are prepared fresh each day so your family gets pure, wholesome dairy without compromises.
              </p>
            </div>

            {/* Structured Placeholder Image */}
            {/* <!-- replace-with-fresh-dairy-photo --> */}
            <div className="w-full">
              <PlaceholderImage
                id="promo-dairy-photo-placeholder"
                label="[replace with fresh dairy photo]"
                altKey="replace-with-fresh-dairy-photo"
                aspectRatio="aspect-[16/9]"
                icon="milk"
                variant="mint"
                hintSize="Landscape dairy items (approx. 600×338px)"
              />
            </div>

            <div>
              <a
                id="promo-view-products-link"
                href="#products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#B85D38] hover:text-[#9A4A28] group transition-colors"
              >
                <span>Browse our full product range</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Promo Banner 2: Order Ahead on WhatsApp */}
          <div className="bg-[#FAF4EE] rounded-2xl p-6 sm:p-7 border border-[#ECD9CE] shadow-xs flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#9A4A28] bg-[#FBEFEA] px-2.5 py-1 rounded-md">
                  Counter Pickup
                </span>
                <span className="text-xs text-[#7A6B63] flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-[#B85D38]" />
                  Save time
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2C2523] leading-snug">
                Order ahead on WhatsApp
              </h3>
              <p className="text-sm text-[#5A4F4A] leading-relaxed">
                Planning your visit? Drop us a WhatsApp message to check availability or reserve your buffalo ghee and milk before coming to the counter.
              </p>
            </div>

            {/* Structured Placeholder Image */}
            {/* <!-- replace-with-order-photo --> */}
            <div className="w-full">
              <PlaceholderImage
                id="promo-order-photo-placeholder"
                label="[replace with order photo]"
                altKey="replace-with-order-photo"
                aspectRatio="aspect-[16/9]"
                icon="shop"
                variant="clay"
                hintSize="Shop counter or packaging (approx. 600×338px)"
              />
            </div>

            <div>
              <a
                id="promo-whatsapp-order-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#3F7A59] hover:bg-[#2F5C43] text-white text-sm font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Order ahead on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
