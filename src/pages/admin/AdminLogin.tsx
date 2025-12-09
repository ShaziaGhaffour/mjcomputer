import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
// import Dashboard from "../../pages/admin/Dashboard"; 
import Dashboard from "../../pages/admin/AdminDashboard"; 

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    // Simple login without backend
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Dashboard />; // direct show dashboard component
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div>
              <Label>Password</Label>
              <Input type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <Button type="button" className="w-full" onClick={handleLoginClick}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
