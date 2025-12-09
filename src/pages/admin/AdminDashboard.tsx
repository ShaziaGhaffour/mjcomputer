import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { useAdmin } from "../../contexts/AdminContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Product } from "@/types/product"; // Make sure you have a Product type defined

export default function Dashboard() {
  const { admin, logout } = useAdmin();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!admin) {
      navigate("/admin"); 
      return;
    }

    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("mj-admin-auth");
        const res = await axios.get("http://localhost:5000/api/admin/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(res.data.data || []);
      } catch (err) {
        console.error(err);
        logout();
        navigate("/admin");
      }
    };

    fetchProducts();
  }, [admin, navigate, logout]);

  const getFirstImage = (product: Product) => {
    return product.images && product.images.length > 0
      ? `http://localhost:5000${product.images[0]}`
      : "https://via.placeholder.com/150"; 
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => { logout(); navigate("/admin"); }}>
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent>Total Products: {products.length}</CardContent>
          </Card>
          <Card>
            <CardContent>Laptops: {products.filter(p => p.category === "laptop").length}</CardContent>
          </Card>
          <Card>
            <CardContent>Accessories: {products.filter(p => p.category === "accessories").length}</CardContent>
          </Card>
          <Card>
            <CardContent>Used Products: {products.filter(p => p.category === "used").length}</CardContent>
          </Card>
        </div>

        {/* Product Management Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/admin/products">
            <Card>
              <CardHeader><CardTitle>Manage Products</CardTitle></CardHeader>
              <CardContent>
                <Button>View Products</Button>
                {products.filter(p => p.category === "laptop").slice(0, 1).map(p => (
                  <img key={p.id} src={getFirstImage(p)} alt={p.name} className="mt-2 w-full h-32 object-cover rounded" />
                ))}
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/add-product">
            <Card>
              <CardHeader><CardTitle>Add Product</CardTitle></CardHeader>
              <CardContent><Button>Add New Product</Button></CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
