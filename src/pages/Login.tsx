import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Users } from "lucide-react";

const companies = [
  { value: "rms", label: "RMS (Radiant Manpower Services)" },
  { value: "ims", label: "IMS (InLine Manpower Services Pvt Ltd)" },
  { value: "kvs", label: "KVS Manpower Solutions" },
];

const clients = {
  rms: [
    { value: "brand-studio", label: "Brand Studio Lifestyle Pvt Ltd" },
    { value: "incap", label: "Incap Contract Manufacturing Pvt Ltd" },
  ],
  ims: [
    { value: "online-instruments", label: "Online Instruments India Pvt Ltd" },
    { value: "mahabel", label: "Mahabel Industries" },
  ],
  kvs: [
    { value: "tvs", label: "TVS Electronics Ltd" },
    { value: "spectrus", label: "Spectrus Sustainable Pvt Ltd" },
  ],
};

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleCompanyNext = () => {
    if (selectedCompany) setStep(2);
  };

  const handleClientNext = () => {
    if (selectedClient) setStep(3);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Store selections in localStorage for demo
    localStorage.setItem("company", selectedCompany);
    localStorage.setItem("client", selectedClient);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-3 text-center pb-8">
          <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-2">
            <Users className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-3xl font-bold">Salary Management System</CardTitle>
          <CardDescription className="text-base">
            {step === 1 && "Select your company to continue"}
            {step === 2 && "Select client profile"}
            {step === 3 && "Enter your credentials"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-base font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Main Company
                </Label>
                <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                  <SelectTrigger id="company" className="h-12">
                    <SelectValue placeholder="Select your company" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((company) => (
                      <SelectItem key={company.value} value={company.value} className="cursor-pointer">
                        {company.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleCompanyNext} disabled={!selectedCompany} className="w-full h-12 text-base" size="lg">
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client" className="text-base font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Client Profile
                </Label>
                <Select value={selectedClient} onValueChange={setSelectedClient}>
                  <SelectTrigger id="client" className="h-12">
                    <SelectValue placeholder="Select client profile" />
                  </SelectTrigger>
                  <SelectContent>
                    {clients[selectedCompany as keyof typeof clients]?.map((client) => (
                      <SelectItem key={client.value} value={client.value} className="cursor-pointer">
                        {client.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3">
                <Button onClick={() => setStep(1)} variant="outline" className="flex-1 h-12">
                  Back
                </Button>
                <Button onClick={handleClientNext} disabled={!selectedClient} className="flex-1 h-12">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-base font-medium">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="button" onClick={() => setStep(2)} variant="outline" className="flex-1 h-12">
                  Back
                </Button>
                <Button type="submit" className="flex-1 h-12">
                  Login
                </Button>
              </div>
            </form>
          )}

          {step < 3 && (
            <div className="flex justify-center gap-2 pt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 w-2 rounded-full transition-all ${
                    s === step ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
