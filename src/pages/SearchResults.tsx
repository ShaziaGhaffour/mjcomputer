import { useSearchParams } from 'react-router-dom';
import { useProducts } from '@/contexts/ProductContext';
import { ProductCard } from '@/components/products/ProductCard';
import { Search } from 'lucide-react';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { searchProducts } = useProducts();
  
  const results = searchProducts(query);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-8 w-8 text-primary" />
            <h1 className="font-display font-bold text-4xl">Search Results</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Found {results.length} products for "{query}"
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-4">
              No products found for "{query}"
            </p>
            <p className="text-sm text-muted-foreground">
              Try searching with different keywords or brand names
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
