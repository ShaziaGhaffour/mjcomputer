import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductProvider } from "./contexts/ProductContext";
import { PromotionalBar } from "./components/layout/PromotionalBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import SearchResults from "./pages/SearchResults";
import Contact from "./pages/Contact";
import { AdminProvider } from "./contexts/AdminContext";
import About from "./pages/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Dashboard from "./pages/admin/dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminProductForm from "./pages/admin/AdminProductForm";
import AdminPromotions from "./pages/admin/AdminPromotions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ProductProvider>
          {/* Toaster Notifications */}
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              {/* Promotional Bar safely handles empty products */}
              <PromotionalBar />
              <Navbar />
              <WhatsAppButton />

              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<AllProducts />} />
                  <Route path="/products/:category" element={<AllProducts />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/admin" element={<AdminLogin />} />
                  {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
                  <Route path="/admin/Dashboard" element={<Dashboard />} />
                  <Route path="/admin/products" element={<AdminProducts />} />
                  <Route path="/admin/add-product" element={<AdminProductForm />} />
                  <Route path="/admin/edit-product/:id" element={<AdminProductForm />} />
                  <Route path="/admin/promotions" element={<AdminPromotions />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </BrowserRouter>
        </ProductProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
