import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display font-bold text-4xl mb-8">Privacy Policy</h1>
        
        <Card>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="font-display font-semibold text-2xl mb-3">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                MJ Computer may collect personal information such as your name, contact details, and purchase 
                preferences when you interact with our store or website. This information helps us provide better 
                service and product recommendations.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-3">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the collected information to process your inquiries, improve our services, and communicate 
                with you about products and promotions. Your information is never shared with third parties without 
                your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-3">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-3">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any privacy-related concerns or questions, please contact us at Sale@Mjcomputers.pk or visit 
                our store at Shop No #22-G, Ground Floor, IT Tower, Gulberg III, Lahore.
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
