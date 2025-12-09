import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  // Load all products from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data.data || []))
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

  // Add product
  const addProduct = async (productData) => {
    try {
      const res = await axios.post("http://localhost:5000/api/products", productData);
      setProducts((prev) => [...prev, res.data.data]);
    } catch (err) {
      console.log(err);
    }
  };

  // Update product
  const updateProduct = async (id, productData) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/products/${id}`, productData);
      setProducts((prev) =>
        prev.map((p) => (p._id === id ? res.data.data : p))
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook
export const useProducts = () => useContext(ProductContext);
