import React from 'react';
import { Store, HeartHandshake, Milk } from 'lucide-react';
import cowJersey from '../assets/images/cow-jersey.jpg';
import cowCalf from '../assets/images/cow-calf.jpg';
import pastureHerd from '../assets/images/pasture-herd-1.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-14 sm:pt-18 pb-0 bg-[#F7F7F7]">
      {/* 1. Existing About text/values card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EEEEEE] shadow-xs space-y-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EEEEEE] pb-5">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#5B8C51]">
                About Our Shop
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#404A3D] mt-1">
                A Local Dairy for the Neighbourhood
              </h2>
            </div>
            
            <div className="self-start sm:self-center px-3 py-1 rounded-full bg-[#EDDD5E] text-[#404A3D] text-xs font-semibold">
              Kunniyamuthur, Coimbatore
            </div>
          </div>

          {/* Text column - generous line length and relaxed reading space */}
          <div className="max-w-3xl space-y-4 text-base sm:text-lg text-[#404A3D] leading-relaxed">
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

          {/* Core values row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#EEEEEE]">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F7F7] border border-[#EEEEEE]">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#5B8C51] shrink-0 border border-[#EEEEEE]">
                <Store className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#404A3D]">Local &amp; Independent</span>
                <span className="block text-[11px] text-[#404A3D]/70">Not a commercial brand</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F7F7] border border-[#EEEEEE]">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#5B8C51] shrink-0 border border-[#EEEEEE]">
                <Milk className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#404A3D]">Same-Day Freshness</span>
                <span className="block text-[11px] text-[#404A3D]/70">Daily small batches</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F7F7] border border-[#EEEEEE]">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#5B8C51] shrink-0 border border-[#EEEEEE]">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#404A3D]">Traditional Methods</span>
                <span className="block text-[11px] text-[#404A3D]/70">Slow-simmered &amp; natural</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Milky-Style Full-Width Banner Block with Overlapping Portrait Cards */}
      <div
        id="about-banner-block"
        className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24"
        aria-label="Dairy Heritage Highlights"
      >
        {/* Full-width background image */}
        <img
          src={pastureHerd}
          alt="Dairy herd grazing in lush green pasture"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay to keep text high contrast and legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#404A3D]/90 via-[#404A3D]/80 to-black/75" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 items-center">
            
            {/* Left Card: Jersey Cow with Heading & Read More */}
            <div
              id="about-banner-card-1"
              className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 group"
            >
              {/* Portrait photo: full-width & generous on mobile, tall 2:3 card on md+ */}
              <div className="w-full md:w-44 lg:w-52 shrink-0">
                <img
                  src={cowJersey}
                  alt="Purebred dairy cow in open pasture"
                  className="w-full h-64 sm:h-72 md:h-auto md:aspect-[2/3] object-cover rounded-2xl shadow-2xl border-2 border-white/25 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Text and Pill Button beside the portrait */}
              <div className="space-y-4 max-w-sm">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-sm">
                  Local &amp; Trusted Since Day One
                </h3>
                <div>
                  <a
                    id="about-banner-readmore-1"
                    href="#about"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#EDDD5E] hover:bg-[#e4d34a] text-[#404A3D] text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card: Young Calf with Heading & Read More */}
            <div
              id="about-banner-card-2"
              className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 group"
            >
              {/* Portrait photo: full-width & generous on mobile, tall 2:3 card on md+ */}
              <div className="w-full md:w-44 lg:w-52 shrink-0">
                <img
                  src={cowCalf}
                  alt="Healthy young dairy calf cared for naturally"
                  className="w-full h-64 sm:h-72 md:h-auto md:aspect-[2/3] object-cover rounded-2xl shadow-2xl border-2 border-white/25 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Text and Pill Button beside the portrait */}
              <div className="space-y-4 max-w-sm">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-sm">
                  Fresh From the Source
                </h3>
                <div>
                  <a
                    id="about-banner-readmore-2"
                    href="#products"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#EDDD5E] hover:bg-[#e4d34a] text-[#404A3D] text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
