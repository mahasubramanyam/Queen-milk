import React from 'react';
import { MessageCircle, Award } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data';
import gheeImg from '../assets/images/ghee.jpg';
import milkImg from '../assets/images/milk-bottles.jpg';
import curdImg from '../assets/images/paneer.jpg';
import buttermilkImg from '../assets/images/butter.jpg';

const PRODUCT_IMAGES: Record<string, string> = {
  'buffalo-ghee': gheeImg,
  'fresh-milk': milkImg,
  curd: curdImg,
  buttermilk: buttermilkImg,
};

export const ProductsGrid: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-[#FAF7F2] border-t border-[#E6DED8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B85D38]">
            Fresh Daily Offerings
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2C2523]">
            Our Dairy Products
          </h2>
          <p className="text-sm sm:text-base text-[#5A4F4A]">
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
                    ? 'border-[#D99A82] ring-2 ring-[#B85D38]/20 shadow-md relative'
                    : 'border-[#E6DED8] shadow-xs hover:border-[#D6CCC3]'
                }`}
              >
                {/* Signature Tag Badge if applicable */}
                {isSignature && (
                  <div className="absolute -top-3 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#B85D38] text-white text-[11px] font-semibold tracking-wide shadow-xs">
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
                        isSignature ? 'border-[#D99A82]' : 'border-[#E6DED8]'
                      }`}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#2C2523]">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5A4F4A] leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Order Action */}
                <div className="pt-5 mt-4 border-t border-[#F0E8E1]">
                  <a
                    id={`order-wa-${product.id}`}
                    href={waInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                      isSignature
                        ? 'bg-[#B85D38] hover:bg-[#9A4A28] text-white shadow-xs'
                        : 'bg-[#FAF7F2] hover:bg-[#EBF4EE] text-[#2C2523] hover:text-[#2F5C43] border border-[#DCD2C9]'
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
          <p className="text-xs text-[#7A6B63]">
            * All products are prepared and stocked fresh daily. Connect on WhatsApp to confirm current morning availability.
          </p>
        </div>

      </div>
    </section>
  );
};
