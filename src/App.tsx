import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PromoBanners } from './components/PromoBanners';
import { ProductsGrid } from './components/ProductsGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7] text-[#404A3D] selection:bg-[#EDDD5E] selection:text-[#404A3D]">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header */}
      <Header />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. About Section */}
        <About />

        {/* 5. Two Promo Banners side by side */}
        <PromoBanners />

        {/* 6. Products Grid */}
        <ProductsGrid />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Location Section */}
        <LocationSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Quick Mobile Contact Action */}
      <FloatingWhatsApp />
    </div>
  );
}
