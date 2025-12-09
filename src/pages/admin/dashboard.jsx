import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAdmin } from "../../contexts/AdminContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Laptop, HardDrive, Recycle, Plus, LogOut, Megaphone } from "lucide-react";

export default function Dashboard() {
  const { admin, logout } = useAdmin();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

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
        console.log(err);
        logout();
        navigate("/admin");
      }
    };

    fetchProducts();
  }, [admin, navigate, logout]);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => { logout(); navigate("/admin"); }}>
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>

        {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        </div>*/}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Link to="/admin/products">
    <Card className="h-full">
      <CardHeader><CardTitle>Manage Products</CardTitle></CardHeader>
      <CardContent className="flex flex-col justify-center h-full">
        <Button>View Products</Button>
      </CardContent>
    </Card>
  </Link>

  <Link to="/admin/add-product">
    <Card className="h-full">
      <CardHeader><CardTitle>Add Product</CardTitle></CardHeader>
      <CardContent className="flex flex-col justify-center h-full">
        <Button>Add New Product</Button>
      </CardContent>
    </Card>
  </Link>
</div>

      </div>
    </div>
  );
}
