// src/components/layout/PromotionalBar.tsx
import React from "react";
import { useProducts } from "@/contexts/ProductContext";

export const PromotionalBar = () => {
  const { products } = useProducts() || {}; // fallback if context is undefined

  // Filter promotional products safely
  const promoProducts = products?.filter(p => p.isPromotional) || [];

  if (promoProducts.length === 0) return null; // nothing to show

  return (
    <div className="promotional-bar bg-yellow-100 p-4 flex gap-4 overflow-x-auto">
      {promoProducts.map(product => (
        <div
          key={product._id}
          className="promo-item bg-white p-2 rounded shadow"
        >
          {product.name}
        </div>
      ))}
    </div>
  );
};
