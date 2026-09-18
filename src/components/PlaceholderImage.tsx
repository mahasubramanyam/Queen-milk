import React from 'react';
import { Camera, Image as ImageIcon, Flame, Milk, Soup, GlassWater, Store } from 'lucide-react';

interface PlaceholderImageProps {
  id?: string;
  label: string;
  altKey: string;
  aspectRatio?: string; // e.g., 'aspect-4/3' or 'aspect-16/10' or 'aspect-square'
  heightClass?: string;
  icon?: 'shop' | 'ghee' | 'milk' | 'curd' | 'buttermilk' | 'general';
  variant?: 'clay' | 'mint' | 'cream' | 'subtle';
  className?: string;
  hintSize?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  id,
  label,
  altKey,
  aspectRatio = 'aspect-[4/3]',
  heightClass,
  icon = 'general',
  variant = 'cream',
  className = '',
  hintSize,
}) => {
  // Theme tone variations matching the warm, earthy palette
  const variantStyles = {
    clay: 'bg-[#FBEFEA] border-[#E8C7BA] text-[#9A4A28]',
    mint: 'bg-[#EBF4EE] border-[#C2DBCB] text-[#2F5C43]',
    cream: 'bg-[#F5EFEB] border-[#E4D9D0] text-[#7A6B63]',
    subtle: 'bg-[#FAF7F2] border-[#E8DFD8] text-[#8C7D75]',
  };

  const renderIcon = () => {
    switch (icon) {
      case 'shop':
        return <Store className="w-8 h-8 md:w-10 md:h-10 opacity-75" strokeWidth={1.5} />;
      case 'ghee':
        return <Flame className="w-8 h-8 md:w-9 md:h-9 opacity-80 text-[#B85D38]" strokeWidth={1.75} />;
      case 'milk':
        return <Milk className="w-8 h-8 md:w-9 md:h-9 opacity-80 text-[#3F7A59]" strokeWidth={1.75} />;
      case 'curd':
        return <Soup className="w-8 h-8 md:w-9 md:h-9 opacity-80 text-[#B85D38]" strokeWidth={1.75} />;
      case 'buttermilk':
        return <GlassWater className="w-8 h-8 md:w-9 md:h-9 opacity-80 text-[#3F7A59]" strokeWidth={1.75} />;
      default:
        return <ImageIcon className="w-8 h-8 md:w-9 md:h-9 opacity-70" strokeWidth={1.5} />;
    }
  };

  return (
    <div
      id={id}
      data-placeholder={altKey}
      className={`relative w-full ${aspectRatio} ${heightClass || ''} ${variantStyles[variant]} border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-4 text-center select-none overflow-hidden transition-all duration-200 group hover:border-solid hover:shadow-xs ${className}`}
      aria-label={altKey}
    >
      {/* Corner badge indicating placeholder photo slot */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/85 text-[11px] font-mono font-medium tracking-tight text-[#6B605B] border border-black/5 shadow-xs">
        <Camera className="w-3 h-3 text-[#B85D38]" />
        <span>Photo Slot</span>
      </div>

      <div className="flex flex-col items-center gap-2 max-w-[85%]">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 shadow-xs flex items-center justify-center border border-black/5">
          {renderIcon()}
        </div>
        
        <div className="space-y-0.5">
          <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#3A302D]">
            {label}
          </p>
          <p className="text-[11px] font-mono text-[#82746D]">
            alt: &quot;{altKey}&quot;
          </p>
        </div>

        {hintSize && (
          <span className="text-[10px] text-[#9E9088] bg-black/5 px-2 py-0.5 rounded font-mono">
            {hintSize}
          </span>
        )}
      </div>
    </div>
  );
};
