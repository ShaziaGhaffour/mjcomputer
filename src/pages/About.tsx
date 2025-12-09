import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Authentic Products',
      description: 'We deal only in 100% genuine products from authorized distributors and brands.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks before reaching our customers.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our knowledgeable staff helps you find the perfect tech solution for your needs.',
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Quick processing, delivery, and after-sales support for all your purchases.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 animate-slide-up">
            About MJ Computer
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
            Located in the heart of Lahore's tech hub, MJ Computer has been serving customers with premium laptops,
            computers, and accessories. We pride ourselves on offering genuine products, competitive prices,
            and exceptional customer service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="font-display font-bold text-3xl text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="font-display font-bold text-3xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MJ Computer started with a simple mission: to provide quality computer products at fair prices
                  to the people of Lahore. Located in Gulberg III, near the famous Hafeez Centre, we've become
                  a trusted name in the tech retail industry.
                </p>
                <p>
                  We understand that technology is essential for work, education, and entertainment. That's why
                  we carefully curate our product selection to include only the best brands and models, ensuring
                  our customers get reliable, high-performance products.
                </p>
                <p>
                  Whether you're a student looking for an affordable laptop, a professional needing high-end
                  equipment, or someone searching for quality accessories, MJ Computer has you covered. Our team
                  is always ready to help you make informed decisions.
                </p>
                <p className="font-semibold text-foreground">
                  Visit us today and experience the difference!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
