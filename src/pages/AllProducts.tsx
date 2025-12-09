// import { useProducts } from '@/contexts/ProductContext';
// import { ProductCard } from '@/components/products/ProductCard';
// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Search } from 'lucide-react';

// export default function AllProducts() {
//   const { products } = useProducts();
//   const { category } = useParams();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('newest');

//   let filteredProducts = category
//     ? products.filter(p => p.category === category)
//     : products;

//   if (searchQuery.trim()) {
//     const query = searchQuery.toLowerCase();
//     filteredProducts = filteredProducts.filter(p =>
//       p.brand.toLowerCase().includes(query) ||
//       p.name.toLowerCase().includes(query) ||
//       p.description.toLowerCase().includes(query)
//     );
//   }

//   // Sort products
//   filteredProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case 'price-low':
//         return a.price - b.price;
//       case 'price-high':
//         return b.price - a.price;
//       case 'name':
//         return a.name.localeCompare(b.name);
//       default:
//         return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
//     }
//   });

//   const getCategoryTitle = () => {
//     if (!category) return 'All Products';
//     return category.charAt(0).toUpperCase() + category.slice(1) + 's';
//   };

//   return (
//     <div className="min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         <div className="mb-12">
//           <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
//             {getCategoryTitle()}
//           </h1>
//           <p className="text-muted-foreground text-lg">
//             Showing {filteredProducts.length} products
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="mb-8 flex flex-col md:flex-row gap-4">
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//             <Input
//               type="search"
//               placeholder="Search by brand or product name..."
//               className="pl-10"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//           <Select value={sortBy} onValueChange={setSortBy}>
//             <SelectTrigger className="w-full md:w-48">
//               <SelectValue placeholder="Sort by" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="newest">Newest First</SelectItem>
//               <SelectItem value="price-low">Price: Low to High</SelectItem>
//               <SelectItem value="price-high">Price: High to Low</SelectItem>
//               <SelectItem value="name">Name: A to Z</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Products Grid */}
//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <p className="text-muted-foreground text-lg">No products found</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { useProducts } from '@/contexts/ProductContext';
import { ProductCard } from '@/components/products/ProductCard';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

export default function AllProducts() {
  const { products } = useProducts();
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  let filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(p =>
      p.brand.toLowerCase().includes(query) ||
      p.name.toLowerCase().includes(query) ||
      (p.description || '').toLowerCase().includes(query)
    );
  }

  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      default: return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  const getCategoryTitle = () => {
    if (!category) return 'All Products';
    return category.charAt(0).toUpperCase() + category.slice(1) + 's';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            {getCategoryTitle()}
          </h1>
          <p className="text-muted-foreground text-lg">Showing {filteredProducts.length} products</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by brand or product name..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name: A to Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}
