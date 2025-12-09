// import { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useProducts } from '@/contexts/ProductContext';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent } from '@/components/ui/card';
// import { Switch } from '@/components/ui/switch';
// import { ArrowLeft, Plus, Trash2, Edit2 } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog';

// export default function AdminPromotions() {
//   const navigate = useNavigate();
//   const { promotions, addPromotion, updatePromotion, deletePromotion, togglePromotion } = useProducts();
//   const { toast } = useToast();
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [promoText, setPromoText] = useState('');

//   useEffect(() => {
//     const isAuth = localStorage.getItem('mj-admin-auth');
//     if (!isAuth) {
//       navigate('/admin');
//     }
//   }, [navigate]);

//   const handleSubmit = () => {
//     if (!promoText.trim()) return;

//     if (editingId) {
//       updatePromotion(editingId, promoText);
//       toast({
//         title: 'Promotion updated',
//         description: 'The promotion has been updated successfully',
//       });
//     } else {
//       addPromotion(promoText);
//       toast({
//         title: 'Promotion added',
//         description: 'The promotion has been added successfully',
//       });
//     }

//     setPromoText('');
//     setEditingId(null);
//     setIsDialogOpen(false);
//   };

//   const handleEdit = (id: string, text: string) => {
//     setEditingId(id);
//     setPromoText(text);
//     setIsDialogOpen(true);
//   };

//   const handleDelete = (id: string) => {
//     deletePromotion(id);
//     toast({
//       title: 'Promotion deleted',
//       description: 'The promotion has been removed',
//     });
//   };

//   return (
//     <div className="min-h-screen py-8">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <Link to="/admin/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
//           <ArrowLeft className="h-4 w-4" />
//           Back to Dashboard
//         </Link>

//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="font-display font-bold text-4xl mb-2">Manage Promotions</h1>
//             <p className="text-muted-foreground">Control the promotional banner messages</p>
//           </div>
//           <Button onClick={() => {
//             setEditingId(null);
//             setPromoText('');
//             setIsDialogOpen(true);
//           }} className="gap-2">
//             <Plus className="h-4 w-4" />
//             Add Promotion
//           </Button>
//         </div>

//         {/* Promotions List */}
//         <div className="space-y-4">
//           {promotions.map((promo) => (
//             <Card key={promo.id}>
//               <CardContent className="p-4">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-1">
//                     <p className="mb-2">{promo.text}</p>
//                     <div className="flex items-center gap-2">
//                       <Switch
//                         checked={promo.isActive}
//                         onCheckedChange={() => togglePromotion(promo.id)}
//                       />
//                       <span className="text-sm text-muted-foreground">
//                         {promo.isActive ? 'Active' : 'Inactive'}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => handleEdit(promo.id, promo.text)}
//                       className="gap-2"
//                     >
//                       <Edit2 className="h-4 w-4" />
//                       Edit
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => handleDelete(promo.id)}
//                       className="gap-2 text-destructive hover:text-destructive"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                       Delete
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}

//           {promotions.length === 0 && (
//             <div className="text-center py-12 text-muted-foreground">
//               No promotions yet. Click "Add Promotion" to create one.
//             </div>
//           )}
//         </div>

//         {/* Add/Edit Dialog */}
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>{editingId ? 'Edit Promotion' : 'Add Promotion'}</DialogTitle>
//               <DialogDescription>
//                 Enter the promotional message to display in the top banner
//               </DialogDescription>
//             </DialogHeader>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="promo-text">Promotion Text</Label>
//                 <Input
//                   id="promo-text"
//                   value={promoText}
//                   onChange={(e) => setPromoText(e.target.value)}
//                   placeholder="e.g., 🎉 Limited Time Offer: Up to 30% OFF!"
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={handleSubmit}>
//                 {editingId ? 'Update' : 'Add'}
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// }
// AdminPromotions.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '@/components/ui/card';

interface Promotion {
  id: string;
  title: string;
}

export default function AdminPromotions() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    // Fetch promotions from backend
    axios.get('http://localhost:5000/api/promotions')
      .then(res => setPromotions(res.data))
      .catch(err => console.error('Failed to fetch promotions:', err));
  }, []);

  if (promotions.length === 0) {
    return <p>No promotions found</p>;
  }

  return (
    <div className="mb-4">
      {promotions.map(promo => (
        <Card key={promo.id} className="mb-2 p-4">
          <h3 className="font-bold">{promo.title}</h3>
        </Card>
      ))}
    </div>
  );
}
