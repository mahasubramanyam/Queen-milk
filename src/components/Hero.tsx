import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import pasture1 from '../assets/images/pasture-herd-1.jpg';
import pasture2 from '../assets/images/pasture-herd-2.jpg';

interface SlideData {
  id: number;
  image: string;
  alt: string;
  eyebrow: string;
  heading: string;
  ctaText: string;
  ctaHref: string;
  isExternal?: boolean;
  ctaId: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    image: pasture1,
    alt: "Dairy cattle grazing in lush pasture - Queen Milk & Milk Products",
    eyebrow: "Welcome to our dairy shop",
    heading: "Pure, Fresh Dairy from Your Neighbourhood Shop",
    ctaText: "Order on WhatsApp",
    ctaHref: BUSINESS_INFO.whatsappUrl,
    isExternal: true,
    ctaId: "hero-slide-1-cta-btn",
  },
  {
    id: 2,
    image: pasture2,
    alt: "Buffalo and dairy herd in pasture - Queen Milk & Milk Products",
    eyebrow: "Welcome to our dairy shop",
    heading: "Signature Slow-Simmered Buffalo Ghee",
    ctaText: "View Daily Products",
    ctaHref: "#products",
    isExternal: false,
    ctaId: "hero-slide-2-cta-btn",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section
      id="hero-section"
      className="relative isolate flex items-center min-h-[520px] sm:min-h-[600px] md:min-h-[680px] overflow-hidden"
      aria-label="Hero Carousel"
    >
      {/* Slides */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            id={`hero-slide-${slide.id}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            }`}
            aria-hidden={!isActive}
          >
            {/* Full-bleed background photo */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Dark gradient overlay for text legibility, Milky-template style */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#404A3D]/85 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#404A3D]/60 via-transparent to-black/10" />

            {/* Slide Content: Left-aligned, exactly 3 elements */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full h-full flex items-center">
              <div className="max-w-2xl space-y-6 text-left pl-10 sm:pl-16 pr-10 sm:pr-0">
                {/* 1. Eyebrow */}
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#EDDD5E]">
                  {slide.eyebrow}
                </p>

                {/* 2. Headline */}
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-sm">
                  {slide.heading}
                </h1>

                {/* 3. Single Pill CTA Button */}
                <div className="pt-2">
                  <a
                    id={slide.ctaId}
                    href={slide.ctaHref}
                    target={slide.isExternal ? "_blank" : undefined}
                    rel={slide.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#EDDD5E] hover:bg-[#e4d34a] text-[#404A3D] text-base sm:text-lg font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    {slide.ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows (Vertically centered circular buttons on edges) */}
      <button
        id="hero-carousel-prev-btn"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#5B8C51]/80 hover:bg-[#5B8C51] text-white flex items-center justify-center backdrop-blur-xs shadow-lg transition-all active:scale-95 border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      <button
        id="hero-carousel-next-btn"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#5B8C51]/80 hover:bg-[#5B8C51] text-white flex items-center justify-center backdrop-blur-xs shadow-lg transition-all active:scale-95 border border-white/20"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
    </section>
  );
};

