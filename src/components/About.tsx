import React from 'react';
import { Store, HeartHandshake, Milk } from 'lucide-react';
import cowJersey from '../assets/images/cow-jersey.jpg';
import cowCalf from '../assets/images/cow-calf.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-18 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E6DED8] shadow-xs space-y-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0E8E1] pb-5">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#B85D38]">
                About Our Shop
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2C2523] mt-1">
                A Local Dairy for the Neighbourhood
              </h2>
            </div>
            
            <div className="self-start sm:self-center px-3 py-1 rounded-full bg-[#EBF4EE] text-[#2F5C43] text-xs font-semibold">
              Kunniyamuthur, Coimbatore
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#473E3A] leading-relaxed">
              <p>
                Queen Milk &amp; Milk Products is a dedicated neighbourhood dairy shop in Kunniyamuthur, Coimbatore,
                known locally for our traditional buffalo ghee simmered the authentic way.
              </p>
              <p>
                We deliberately maintain a small, focused product range—fresh milk, curd, and buttermilk—brought in and
                sold fresh same-day so nothing sits as stored or frozen warehouse stock.
              </p>
              <p>
                We are not a big commercial brand; we are a real, friendly counter you can walk into every day for genuine,
                unadulterated dairy you can trust for your family.
              </p>
            </div>

            {/* Image column: two stacked cow portraits, Milky-style accent imagery */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <img
                src={cowJersey}
                alt="Dairy cow at the source of our milk"
                className="w-full h-40 sm:h-52 object-cover rounded-xl border border-[#E6DED8] mt-6"
              />
              <img
                src={cowCalf}
                alt="Young dairy calf"
                className="w-full h-40 sm:h-52 object-cover rounded-xl border border-[#E6DED8]"
              />
            </div>
          </div>

          {/* Core values row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#F0E8E1]">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE2DC]">
              <div className="w-8 h-8 rounded-lg bg-[#FBEFEA] flex items-center justify-center text-[#B85D38] shrink-0">
                <Store className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#2C2523]">Local &amp; Independent</span>
                <span className="block text-[11px] text-[#7A6B63]">Not a commercial brand</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE2DC]">
              <div className="w-8 h-8 rounded-lg bg-[#EBF4EE] flex items-center justify-center text-[#3F7A59] shrink-0">
                <Milk className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#2C2523]">Same-Day Freshness</span>
                <span className="block text-[11px] text-[#7A6B63]">Daily small batches</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE2DC]">
              <div className="w-8 h-8 rounded-lg bg-[#FBEFEA] flex items-center justify-center text-[#B85D38] shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#2C2523]">Traditional Methods</span>
                <span className="block text-[11px] text-[#7A6B63]">Slow-simmered &amp; natural</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
