import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}2

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (scrollRef.current) {
      const activeThumb = scrollRef.current.children[activeIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeIndex]);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image Stage */}
      <div className="relative group rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5 aspect-[4/3] lg:aspect-square bg-slate-900">
        <img 
          src={images[activeIndex]} 
          alt={`${title} - View ${activeIndex + 1}`} 
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Navigation Controls */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.preventDefault(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails Navigation */}
      {images.length > 1 && (
        <div 
          ref={scrollRef}
          className="flex space-x-3 overflow-x-auto py-2 scrollbar-hide snap-x" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden snap-start transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                idx === activeIndex 
                  ? 'border-brand-600 ring-2 ring-brand-100 shadow-md scale-105 z-10' 
                  : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
              {idx === activeIndex && (
                 <div className="absolute inset-0 bg-brand-600/10 mix-blend-multiply" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
