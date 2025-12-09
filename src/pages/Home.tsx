import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useProducts } from '@/contexts/ProductContext';
import { ArrowRight, Laptop, HardDrive, Recycle, Keyboard, Mouse, Printer } from 'lucide-react';
import { HeroSlider } from '@/components/home/HeroSlider';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import Slider from "react-slick";

// ✅ Image imports for accessories
import keybaordImg from '@/assets/keybaord.jpg';
import mouseImg from '@/assets/mouse.webp';
import laptopImg from '@/assets/laptop.png';
import printerImg from '@/assets/printer.png';

// ✅ Image import for banner
import slide1Img from '@/assets/slide1.jpg';

export default function Home() {
  const { products } = useProducts();
  
  const featuredLaptops = products.filter(p => p.category === 'laptop').slice(0, 12);
  const featuredAccessories = products.filter(p => p.category === 'accessories').slice(0, 12);

  const categories = [
    { title: 'Laptops', description: 'Premium laptops from top brands', icon: Laptop, link: '/products/laptop', gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Accessories', description: 'High-quality computer accessories', icon: HardDrive, link: '/products/accessories', gradient: 'from-purple-500 to-pink-500' },
    { title: 'Used Products', description: 'Certified refurbished devices', icon: Recycle, link: '/products/used', gradient: 'from-green-500 to-emerald-500' },
  ];

  const accessoriesImages = [
    { title: 'Keyboard', icon: Keyboard, img: keybaordImg },
    { title: 'Mouse', icon: Mouse, img: mouseImg },
    { title: 'Laptop', icon: Laptop, img: laptopImg },
    { title: 'Printer', icon: Printer, img: printerImg },
  ];

  // ✅ Live brand logos with blue color
  const brands = [
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dell.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hp.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/lenovo.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/asus.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/acer.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/msi.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/razer.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/samsung.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/toshiba.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/huawei.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/honor.svg?color=0A4FFF",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/lg.svg?color=0A4FFF",
   
  ];

  // Slider settings
  const brandSliderSettings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* Intro Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-12 mt-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Premium Tech Store in Lahore
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            MJ Computer brings you an extensive range of high-quality laptops, branded accessories, and certified used devices. We guarantee authenticity, best pricing, and top customer experience.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our wide range of premium tech products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link key={category.title} to={category.link}>
              <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Browse Collection
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Laptops */}
      <section className="container mx-auto px-4 mb-24">
        <CategoryShowcase 
          title="Featured Laptops"
          description="New arrivals & top-selling models"
          products={featuredLaptops}
          viewAllLink="/products/laptop"
        />
      </section>

      {/* Popular Accessories */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="font-display font-bold text-4xl text-center mb-12">Popular Accessories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {accessoriesImages.map(item => (
            <Card key={item.title} className="overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-5 text-center">
                <item.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4 mb-24">
        <div className="relative rounded-2xl overflow-hidden bg-hero-gradient p-12 md:p-16 text-white shadow-strong">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Unbeatable Deals on Premium Tech
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Get the latest laptops and accessories at the best prices in Lahore
            </p>
            <Link to="/products">
              <Button size="lg" variant="secondary" className="gap-2">
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
            <div className="absolute inset-0 bg-[url('${slide1Img}')] bg-cover bg-center" />
          </div>
        </div>
      </section>

      {/* Top Accessories */}
      <section className="container mx-auto px-4 mb-24">
        <CategoryShowcase 
          title="Top Accessories"
          description="Best-selling accessories for your setup"
          products={featuredAccessories}
          viewAllLink="/products/accessories"
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-24 mb-15">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-4xl text-center mb-12">
            Why Choose MJ Computer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[ 
              { icon: '✅', title: 'Authentic Products', desc: '100% genuine products from authorized distributors' },
              { icon: '💰', title: 'Best Prices', desc: 'Competitive pricing with unbeatable value' },
              { icon: '🚚', title: 'Fast Delivery', desc: 'Quick delivery across Lahore' },
              { icon: '🛡️', title: 'Warranty', desc: 'Official warranty on all products' }
            ].map(feature => (
              <Card key={feature.title} className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="font-display font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands Slider */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl mb-12">
            Trusted Brands We Carry
          </h2>
          <Slider {...brandSliderSettings}>
            {brands.map((url, idx) => (
              <div key={idx} className="flex justify-center items-center p-4">
                <img
                  src={url}
                  alt="Brand Logo"
                  className="h-14 opacity-85 hover:opacity-100 transition"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Achievements / Stats Section */}
      <section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="font-display font-bold text-4xl mb-12 text-black">
      Our Achievements
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[ 
        { icon: '😊', title: 'Happy Customers', value: '5000+' },
        { icon: '💻', title: 'Total Products', value: '1000+' },
        { icon: '⏳', title: 'Years of Experience', value: '20+' },
        { icon: '⭐', title: 'Satisfaction Rate', value: '99.99%' },
      ].map(stat => (
        <Card key={stat.title} className="text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-6xl mb-4">{stat.icon}</div>
            <h3 className="font-display font-bold text-2xl mb-2">{stat.value}</h3>
            <p className="text-muted-foreground">{stat.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}
