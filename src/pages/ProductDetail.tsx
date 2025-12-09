import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '@/contexts/ProductContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useProducts();
  const navigate = useNavigate();
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display font-bold text-2xl mb-4">Product not found</h2>
          <Link to="/products">
            <Button variant="outline">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in: ${product.name} (Rs. ${product.price.toLocaleString()})`;
    const whatsappUrl = `https://wa.me/923214702737?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNextProduct = () => {
    const nextIndex = (productIndex + 1) % products.length;
    const nextProduct = products[nextIndex];
    navigate(`/product/${nextProduct.id}`);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square bg-secondary rounded-xl overflow-hidden mb-4">
              <img
                src={product.images[currentImageIndex] || 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-medium transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-medium transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-border'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <Badge variant="secondary" className="mb-4">
              {product.category}
            </Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl mb-4">
              {product.name}
            </h1>
            <div className="mb-6">
              <span className="font-display font-bold text-4xl text-primary">
                Rs. {product.price.toLocaleString()}
              </span>
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Brand</p>
                    <p className="font-semibold">{product.brand}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Color</p>
                    <p className="font-semibold">{product.color}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-8">
              <h2 className="font-display font-semibold text-xl mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* WhatsApp Contact Button */}
            <Button
              size="lg"
              className="w-full gap-2 text-lg mb-4"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="h-5 w-5" />
              Contact on WhatsApp
            </Button>

            {/* Next Product Button */}
            {products.length > 1 && (
              <Button
                size="lg"
                className="w-full gap-2 text-lg"
                onClick={handleNextProduct}
              >
                Next Product
              </Button>
            )}

            <p className="text-sm text-muted-foreground text-center mt-4">
              Have questions? Get in touch with us directly!
            </p>
          </div>
        </div>

        {/* Video Section */}
        {product.video && (
          <div className="mt-12">
            <h2 className="font-display font-bold text-2xl mb-6">Product Video</h2>
            <div className="aspect-video bg-secondary rounded-xl overflow-hidden">
              <video
                src={product.video}
                controls
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

