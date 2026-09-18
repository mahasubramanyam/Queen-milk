import React from 'react';
import { Sun, ShieldCheck, Store } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Sun key="sun" className="w-6 h-6 text-[#5B8C51]" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-[#5B8C51]" />,
    <Store key="store" className="w-6 h-6 text-[#5B8C51]" />,
  ];

  return (
    <section id="why-us" className="py-16 bg-[#F7F7F7] border-t border-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#5B8C51]">
            Honest Quality
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#404A3D]">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-[#404A3D]/80">
            Rooted in honest neighbourhood dairy traditions—simple, fresh, and trustworthy.
          </p>
        </div>

        {/* 3 Short Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((point, index) => (
            <div
              key={point.id}
              id={`why-choose-${point.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EEEEEE] shadow-xs flex flex-col items-start space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F7F7F7] border border-[#EEEEEE] flex items-center justify-center">
                {icons[index]}
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-xl font-bold text-[#404A3D]">
                  {point.title}
                </h3>
                <p className="text-sm text-[#404A3D]/80 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
