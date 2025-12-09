import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, User, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/products', label: 'All Products', icon: '📦' },
    { to: '/products/laptop', label: 'Laptop', icon: '💻' },
    { to: '/products/accessories', label: 'Accessories', icon: '🖱️' },
    { to: '/products/used', label: 'Used Products', icon: '♻️' },
    { to: '/about', label: 'About', icon: 'ℹ️' },
    { to: '/contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <nav className="bg-[#001F3F] border-b border-gray-600 sticky top-0 z-50 shadow">

     {/* 🔥 TOP OFFER SLIDER (3 Times Loop) */}
<div className="w-full bg-yellow-400 text-black py-2 overflow-hidden">
  <div className="flex items-center animate-slide whitespace-nowrap font-semibold text-sm">

    {/* OFFER 1 */}
    <div className="flex items-center gap-2 mr-16">
      <Volume2 className="h-5 w-5 inline-block" />
      <span>🔥 “Get 50% discount on the purchase of 5 products!” — Limited Time Offer!</span>
    </div>

    {/* OFFER 2 */}
    <div className="flex items-center gap-2 mr-16">
      <Volume2 className="h-5 w-5 inline-block" />
      <span>🔥 “Get 50% discount on the purchase of 5 products!” — Limited Time Offer!</span>
    </div>

    {/* OFFER 3 */}
    <div className="flex items-center gap-2 mr-16">
      <Volume2 className="h-5 w-5 inline-block" />
      <span>🔥 “Get 50% discount on the purchase of 5 products!” — Limited Time Offer!</span>
    </div>

  </div>
</div>


      {/* Custom Animation */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-slide {
            animation: slide 18s linear infinite;
          }
        `}
      </style>

      {/* Top Bar */}
      <div className="border-b border-gray-600">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center shadow group-hover:scale-105 transition-transform">
              <span className="text-2xl font-bold text-white">MJ</span>
            </div>
            <div className="hidden sm:block text-white">
              <h1 className="font-bold text-xl">MJ Computer</h1>
              <p className="text-xs text-gray-300">Premium Tech Store</p>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4 hidden md:flex">
            <div className="relative flex flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />

              <Input
                type="search"
                placeholder="Search by brand or product..."
                className="pl-10 pr-24 bg-blue-950 text-white !border-none focus:ring-0 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <Button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-white text-black hover:bg-yellow-400 rounded-md"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Admin Button (BLACK TEXT) */}
<Link to="/admin">
  <Button
    variant="outline"
    size="sm"
    className="gap-2 text-black bg-white hover:bg-yellow-400 hover:text-black transition"
  >
    <User className="h-4 w-4" />
    <span className="hidden sm:inline">Admin</span>
  </Button>
</Link>


          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden px-4 pb-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 bg-blue-950 text-white !border-none focus:ring-0 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit" className="px-4 py-1.5 bg-yellow-500 text-black rounded-md">
            Search
          </Button>
        </form>
      </div>

      {/* Main Navigation */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-2 py-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white 
                  border border-transparent hover:border-yellow-400 hover:bg-yellow-400/20 hover:text-yellow-300 
                  rounded-md transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  );
};
