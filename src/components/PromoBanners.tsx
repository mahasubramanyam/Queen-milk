import React from 'react';
import { ArrowRight, MessageCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import pastureHerd1 from '../assets/images/pasture-herd-1.jpg';
import pastureHerd2 from '../assets/images/pasture-herd-2.jpg';

export const PromoBanners: React.FC = () => {
  return (
    <section id="promo-banners" className="py-8 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Promo Banner 1: Fresh Dairy Daily */}
          <div className="relative isolate overflow-hidden rounded-2xl min-h-[320px] flex flex-col justify-end shadow-xs group">
            <img
              src={pastureHerd1}
              alt="Cows in a green pasture, source of our fresh dairy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#404A3D]/85 via-black/50 to-black/30" />

            <div className="relative z-10 p-6 sm:p-7 space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#404A3D] bg-[#EDDD5E] backdrop-blur-sm px-2.5 py-1 rounded-md">
                Daily Freshness
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                We sell fresh dairy, daily
              </h3>
              <p className="text-sm text-white/90 leading-relaxed max-w-sm">
                From morning buffalo milk to authentic slow-simmered ghee, our batches are prepared fresh each day so your family gets pure, wholesome dairy without compromises.
              </p>
              <a
                id="promo-view-products-link"
                href="#products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#EDDD5E] group/link transition-colors pt-1"
              >
                <span>Browse our full product range</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Promo Banner 2: Order Ahead on WhatsApp */}
          <div className="relative isolate overflow-hidden rounded-2xl min-h-[320px] flex flex-col justify-end shadow-xs group">
            <img
              src={pastureHerd2}
              alt="Dairy cow up close in the pasture"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#404A3D]/85 via-black/50 to-black/30" />

            <div className="relative z-10 p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#404A3D] bg-[#EDDD5E] backdrop-blur-sm px-2.5 py-1 rounded-md">
                  Counter Pickup
                </span>
                <span className="text-xs text-white/90 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-[#EDDD5E]" />
                  Save time
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                Order ahead on WhatsApp
              </h3>
              <p className="text-sm text-white/90 leading-relaxed max-w-sm">
                Planning your visit? Drop us a WhatsApp message to check availability or reserve your buffalo ghee and milk before coming to the counter.
              </p>
              <a
                id="promo-whatsapp-order-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#5B8C51] hover:bg-[#4B7342] text-white text-sm font-semibold shadow-xs transition-colors mt-1"
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
