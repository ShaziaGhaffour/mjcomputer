import { useEffect, useState } from 'react';
import { useProducts } from '@/contexts/ProductContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PromotionalBar = () => {
  const { promotions } = useProducts();
  const activePromotions = promotions.filter(p => p.isActive);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activePromotions.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % activePromotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activePromotions.length]);

  if (activePromotions.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? activePromotions.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % activePromotions.length);
  };

  return (
    <div className="bg-accent text-accent-foreground py-2.5 relative overflow-hidden">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        {activePromotions.length > 1 && (
          <button
            onClick={goToPrevious}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Previous promotion"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}
        
        <div className="flex-1 text-center font-medium text-sm md:text-base animate-fade-in">
          {activePromotions[currentIndex]?.text}
        </div>

        {activePromotions.length > 1 && (
          <button
            onClick={goToNext}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Next promotion"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};
