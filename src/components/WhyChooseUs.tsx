import React from 'react';
import { Sun, ShieldCheck, Store } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Sun key="sun" className="w-6 h-6 text-[#B85D38]" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-[#3F7A59]" />,
    <Store key="store" className="w-6 h-6 text-[#B85D38]" />,
  ];

  return (
    <section id="why-us" className="py-16 bg-[#F5EFEB] border-t border-[#E6DED8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B85D38]">
            Honest Quality
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C2523]">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-[#5A4F4A]">
            Rooted in honest neighbourhood dairy traditions—simple, fresh, and trustworthy.
          </p>
        </div>

        {/* 3 Short Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((point, index) => (
            <div
              key={point.id}
              id={`why-choose-${point.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6DED8] shadow-xs flex flex-col items-start space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-center">
                {icons[index]}
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-xl font-bold text-[#2C2523]">
                  {point.title}
                </h3>
                <p className="text-sm text-[#5A4F4A] leading-relaxed">
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
