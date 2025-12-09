import { Product } from '@/types/product';

const brands = ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Apple', 'MSI', 'Razer', 'Samsung', 'Logitech'];
const laptopModels = ['Latitude', 'Inspiron', 'XPS', 'ThinkPad', 'IdeaPad', 'Pavilion', 'EliteBook', 'VivoBook', 'ROG', 'MacBook'];
const accessoryTypes = ['Mouse', 'Keyboard', 'Headset', 'Webcam', 'Monitor', 'SSD', 'RAM', 'Cooling Pad', 'Laptop Bag', 'USB Hub'];
const colors = ['Black', 'Silver', 'Gray', 'White', 'Blue', 'Red'];

const placeholderImages = [
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
  'https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=800',
  'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800',
  'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
];

export const generateDummyProducts = (): Product[] => {
  const products: Product[] = [];
  
  // Generate 250 laptops
  for (let i = 0; i < 250; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const model = laptopModels[Math.floor(Math.random() * laptopModels.length)];
    products.push({
      id: `laptop-${i}`,
      brand,
      name: `${brand} ${model} ${Math.floor(Math.random() * 9) + 1}th Gen`,
      price: Math.floor(Math.random() * 200000) + 50000,
      color: colors[Math.floor(Math.random() * colors.length)],
      description: `High-performance ${brand} laptop with Intel processor, 8GB RAM, 256GB SSD. Perfect for work and entertainment.`,
      category: 'laptop',
      images: placeholderImages.slice(0, Math.floor(Math.random() * 3) + 2),
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    });
  }
  
  // Generate 150 accessories
  for (let i = 0; i < 150; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const type = accessoryTypes[Math.floor(Math.random() * accessoryTypes.length)];
    products.push({
      id: `accessory-${i}`,
      brand,
      name: `${brand} ${type}`,
      price: Math.floor(Math.random() * 15000) + 1000,
      color: colors[Math.floor(Math.random() * colors.length)],
      description: `Premium quality ${type} from ${brand}. Durable, reliable, and high-performance accessory.`,
      category: 'accessories',
      images: placeholderImages.slice(0, Math.floor(Math.random() * 3) + 1),
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    });
  }
  
  // Generate 100 used products
  for (let i = 0; i < 100; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const model = laptopModels[Math.floor(Math.random() * laptopModels.length)];
    products.push({
      id: `used-${i}`,
      brand,
      name: `Used ${brand} ${model}`,
      price: Math.floor(Math.random() * 80000) + 20000,
      color: colors[Math.floor(Math.random() * colors.length)],
      description: `Well-maintained used ${brand} laptop. Tested and verified. Great value for money.`,
      category: 'used',
      images: placeholderImages.slice(0, Math.floor(Math.random() * 2) + 1),
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    });
  }
  
  return products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};
