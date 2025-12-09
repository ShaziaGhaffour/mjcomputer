import { Card, CardContent } from '@/components/ui/card';

export default function Terms() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display font-bold text-4xl mb-8">Terms & Conditions</h1>
        
        <Card>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="font-display font-semibold text-2xl mb-3">Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                MJ Computer strives to provide accurate product information. However, we do not warrant that 
                product descriptions, pricing, or other content is accurate, complete, or error-free. We reserve 
                the right to correct any errors and update information without prior notice.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-3">Pricing and Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices are in Pakistani Rupees (PKR) and are subject to change without notice. Product 
                availability may vary. We reserve the right to limit quantities and discontinue products at any time.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-3">Warranty and Returns</h2>
              <p className="text-muted-foreground leading-relaxed">
                Products come with manufacturer warranty as specified. Return policies apply as per Pakistani 
                consumer protection laws. Please contact us within the specified warranty period for any issues.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                MJ Computer shall not be liable for any indirect, incidental, or consequential damages arising 
                from the use of our products or services. Our liability is limited to the purchase price of the product.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these terms, please contact us at +92 321 4702737 or 
                Sale@Mjcomputers.pk
              </p>
            </section>

            <p className="text-sm text-muted-foreground pt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
