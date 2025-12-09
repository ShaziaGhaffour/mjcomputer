

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { useToast } from '@/hooks/use-toast';

// export default function AddProduct() {
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   // Product form states
//   const [name, setName] = useState('');
//   const [brand, setBrand] = useState('');
//   const [price, setPrice] = useState('');
//   const [color, setColor] = useState('');
//   const [category, setCategory] = useState('');
//   const [images, setImages] = useState<File[]>([]); // store selected files

//   // Handle form submit
//   const handleSave = async () => {
//     if (!name || !brand || !price || !color || !category || images.length === 0) {
//       toast({ title: 'Error', description: 'Please fill all fields and select at least one image', variant: 'destructive' });
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('brand', brand);
//     formData.append('price', price);
//     formData.append('color', color);
//     formData.append('category', category);

//     images.forEach(img => formData.append('images', img)); // append each file

//     try {
//       await axios.post('http://localhost:5000/api/products', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       toast({ title: 'Success', description: 'Product added successfully' });
//       navigate('/admin/products'); // go back to product list
//     } catch (error) {
//       toast({ title: 'Error', description: error.message, variant: 'destructive' });
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-8">
//       <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

//       <Input
//         placeholder="Name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//         className="mb-2"
//       />
//       <Input
//         placeholder="Brand"
//         value={brand}
//         onChange={e => setBrand(e.target.value)}
//         className="mb-2"
//       />
//       <Input
//         placeholder="Price"
//         type="number"
//         value={price}
//         onChange={e => setPrice(e.target.value)}
//         className="mb-2"
//       />
//       <Input
//         placeholder="Color"
//         value={color}
//         onChange={e => setColor(e.target.value)}
//         className="mb-2"
//       />
//       <Input
//         placeholder="Category"
//         value={category}
//         onChange={e => setCategory(e.target.value)}
//         className="mb-2"
//       />
//       <label className="block mb-2 font-medium">Select Images</label>
//       <input
//         type="file"
//         multiple
//         onChange={e => setImages(Array.from(e.target.files || []))}
//         className="mb-4"
//       />

//       <Button onClick={handleSave}>Save Product</Button>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ProductCategory } from '@/types/product';

export default function AdminProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Categories array with display names
  const categories: { value: ProductCategory; label: string }[] = [
    { value: 'laptop', label: 'Laptop' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'Used Products', label: 'Used Products' }, // changed display name
  ];

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    color: '',
    description: '',
    category: '' as ProductCategory | '',
  });

  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState('');

  // Fetch product data from backend if editing
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        const product = res.data;

        setFormData({
          name: product.name || '',
          brand: product.brand || '',
          price: product.price ? product.price.toString() : '',
          color: product.color || '',
          description: product.description || '',
          category: product.category?.toLowerCase() || '',
        });

        setImages(
          product.images?.map((img: string) =>
            img.startsWith('http') ? img : `http://localhost:5000/${img}`
          ) || []
        );

        setVideo(
          product.video
            ? product.video.startsWith('http')
              ? product.video
              : `http://localhost:5000/${product.video}`
            : ''
        );
      } catch (error) {
        toast({ title: 'Error', description: 'Failed to load product', variant: 'destructive' });
      }
    };

    fetchProduct();
  }, [id, toast]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (images.length < 5) {
          setImages(prev => [...prev, reader.result as string]);
        } else {
          toast({
            title: 'Maximum images reached',
            description: 'You can only upload up to 5 images',
            variant: 'destructive',
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setVideo(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.category || images.length === 0) {
      toast({
        title: 'Error',
        description: 'Please select a category and upload at least one image',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('brand', formData.brand);
      payload.append('price', formData.price);
      payload.append('color', formData.color);
      payload.append('category', formData.category);
      payload.append('description', formData.description);

      images.forEach((img, i) => {
        if (img.startsWith('data:')) {
          const arr = img.split(',');
          const mime = arr[0].match(/:(.*?);/)![1];
          const bstr = atob(arr[1]);
          let n = bstr.length;
          const u8arr = new Uint8Array(n);
          while (n--) u8arr[n] = bstr.charCodeAt(n);
          payload.append('images', new Blob([u8arr], { type: mime }), `image${i}.png`);
        }
      });

      if (video.startsWith('data:')) {
        const arr = video.split(',');
        const mime = arr[0].match(/:(.*?);/)![1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) u8arr[n] = bstr.charCodeAt(n);
        payload.append('video', new Blob([u8arr], { type: mime }), 'video.mp4');
      }

      if (id) {
        await axios.put(`http://localhost:5000/api/products/${id}`, payload, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast({ title: 'Success', description: 'Product updated successfully' });
      } else {
        await axios.post(`http://localhost:5000/api/products`, payload, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast({ title: 'Success', description: 'Product added successfully' });
      }

      navigate('/admin/products');
    } catch (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          to="/admin/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="font-display text-3xl">
              {id ? 'Edit Product' : 'Add New Product'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="brand">Brand *</Label>
                  <Input
                    id="brand"
                    value={formData.brand}
                    onChange={e => setFormData({ ...formData, brand: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price (Rs.) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="color">Color *</Label>
                  <Input
                    id="color"
                    value={formData.color}
                    onChange={e => setFormData({ ...formData, color: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={value =>
                    setFormData({ ...formData, category: value as ProductCategory })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label} {/* Display name */}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              {/* Images */}
              <div>
                <Label>Product Images * (Max 5)</Label>
                <div className="mt-2">
                  <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload images</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      disabled={images.length >= 5}
                    />
                  </label>
                </div>
                {images.length > 0 && (
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative aspect-square">
                        <img
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Video */}
              <div>
                <Label>Product Video (Optional)</Label>
                <div className="mt-2">
                  <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload video</p>
                    </div>
                    <input type="file" className="hidden" accept="video/*" onChange={handleVideoUpload} />
                  </label>
                </div>
                {video && (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Video uploaded ✓</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? 'Saving...' : id ? 'Update Product' : 'Add Product'}
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate('/admin/products')}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
