import React from 'react';
import { MessageCircle, Award } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data';
import gheeImg from '../assets/images/ghee.jpg';
import milkImg from '../assets/images/milk-bottles.jpg';
import curdImg from '../assets/images/curd.png';
import buttermilkImg from '../assets/images/butter-milk.png';

const PRODUCT_IMAGES: Record<string, string> = {
  'buffalo-ghee': gheeImg,
  'fresh-milk': milkImg,
  curd: curdImg,
  buttermilk: buttermilkImg,
};

export const ProductsGrid: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-[#F7F7F7] border-t border-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#5B8C51]">
            Fresh Daily Offerings
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#404A3D]">
            Our Dairy Products
          </h2>
          <p className="text-sm sm:text-base text-[#404A3D]/80">
            A dedicated, small-batch selection prepared fresh and delivered to our Kunniyamuthur counter every morning.
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => {
            const isSignature = product.isSignature;
            const waInquiryUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
              `Hello Queen Milk & Milk Products, I would like to inquire about ${product.name}.`
            )}`;

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-200 flex flex-col justify-between ${
                  isSignature
                    ? 'border-[#5B8C51] ring-2 ring-[#5B8C51]/20 shadow-md relative'
                    : 'border-[#EEEEEE] shadow-xs hover:border-[#5B8C51]/40'
                }`}
              >
                {/* Signature Tag Badge if applicable */}
                {isSignature && (
                  <div className="absolute -top-3 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EDDD5E] text-[#404A3D] text-[11px] font-bold tracking-wide shadow-xs">
                    <Award className="w-3.5 h-3.5" />
                    <span>Signature Product</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Product Photo */}
                  <div className="w-full pt-1">
                    <img
                      id={`product-photo-${product.id}`}
                      src={PRODUCT_IMAGES[product.id]}
                      alt={product.name}
                      className={`w-full aspect-[4/3] object-cover rounded-xl border ${
                        isSignature ? 'border-[#5B8C51]/30' : 'border-[#EEEEEE]'
                      }`}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#404A3D]">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#404A3D]/80 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Order Action */}
                <div className="pt-5 mt-4 border-t border-[#EEEEEE]">
                  <a
                    id={`order-wa-${product.id}`}
                    href={waInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                      isSignature
                        ? 'bg-[#5B8C51] hover:bg-[#4B7342] text-white shadow-xs'
                        : 'bg-[#F7F7F7] hover:bg-[#5B8C51] text-[#404A3D] hover:text-white border border-[#EEEEEE]'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on Availability */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#404A3D]/70">
            * All products are prepared and stocked fresh daily. Connect on WhatsApp to confirm current morning availability.
          </p>
        </div>

      </div>
    </section>
  );
};
