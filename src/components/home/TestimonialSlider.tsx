import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Hassan',
    role: 'Software Developer',
    rating: 5,
    text: 'Excellent service and genuine products! Got my Dell laptop at a great price. Highly recommended!',
    image: '👨‍💻',
  },
  {
    name: 'Fatima Khan',
    role: 'Graphic Designer',
    text: 'Best place for computer accessories in Lahore. The staff is very helpful and knowledgeable.',
    rating: 5,
    image: '👩‍🎨',
  },
  {
    name: 'Ali Raza',
    role: 'Student',
    text: 'Bought a used laptop for my studies. Great condition and affordable price. Thank you MJ Computer!',
    rating: 5,
    image: '👨‍🎓',
  },
  {
    name: 'Sara Malik',
    role: 'Business Owner',
    text: 'Purchased multiple laptops for my office. Professional service and genuine warranty support.',
    rating: 5,
    image: '👩‍💼',
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="bg-card border-border shadow-medium">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{testimonial.image}</div>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 text-foreground italic">"{testimonial.text}"</p>
                  <h4 className="font-display font-semibold text-xl mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary flex items-center justify-center shadow-medium transition-all hover:scale-110"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary flex items-center justify-center shadow-medium transition-all hover:scale-110"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-border hover:bg-muted'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
