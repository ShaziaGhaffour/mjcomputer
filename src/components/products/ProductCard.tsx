import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const BASE_URL = 'http://localhost:5000'; // backend base URL

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.images && product.images.length > 0 ? `${BASE_URL}${product.images[0]}` : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400'}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2 text-xs">
            {product.brand}
          </Badge>
          <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
            Color: {product.color}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-xl text-primary">
              Rs. {product.price.toLocaleString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
