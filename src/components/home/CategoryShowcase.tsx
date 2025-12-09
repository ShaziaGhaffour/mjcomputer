import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CategoryShowcaseProps {
  title: string;
  description: string;
  products: Product[];
  viewAllLink: string;
}

export const CategoryShowcase = ({ title, description, products, viewAllLink }: CategoryShowcaseProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-2">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Link to={viewAllLink}>
          <Button variant="outline" className="gap-2 hidden md:flex">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to={viewAllLink}>
          <Button variant="outline" className="gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

