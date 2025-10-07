import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Building2, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const companies = [
  { id: "rms", name: "RMS Solutions", description: "Resource Management Systems" },
  { id: "ims", name: "IMS Technologies", description: "Information Management Systems" },
  { id: "kvs", name: "KVS Enterprises", description: "Knowledge Value Systems" },
];

const clients = {
  rms: [
    { id: "brand-studio", name: "Brand Studio Lifestyle", description: "Lifestyle & Retail Management" },
    { id: "incap", name: "Incap Contract Manufacturing", description: "Manufacturing Solutions" },
  ],
  ims: [
    { id: "online-instruments", name: "Online Instruments India", description: "Industrial Instrumentation" },
    { id: "mahabel", name: "Mahabel Industries", description: "Industrial Solutions" },
  ],
  kvs: [
    { id: "tvs", name: "TVS Electronics", description: "Electronics & Technology" },
    { id: "spectrus", name: "Spectrus Sustainable", description: "Sustainable Solutions" },
  ],
};

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    if (step === 1 && !selectedCompany) {
      toast.error("Please select a company");
      return;
    }
    if (step === 2 && !selectedClient) {
      toast.error("Please select a client profile");
      return;
    }
    if (step === 3) {
      if (!username || !password) {
        toast.error("Please enter username and password");
        return;
      }
      localStorage.setItem("company", selectedCompany);
      localStorage.setItem("client", selectedClient);
      toast.success("Login successful!");
      navigate("/dashboard");
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#2B5876] to-[#4E94C1]">
      <div className="w-full max-w-2xl text-center space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
            <h1 className="text-white font-semibold text-lg tracking-wide">PMS</h1>
          </div>
          <h2 className="text-4xl font-bold text-white">Payroll Management</h2>
          <p className="text-white/80 text-lg">Professional Salary & Payroll System</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4">
          {[1, 2, 3].map((num, idx) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  num === step
                    ? "bg-white text-[#2B5876]"
                    : num < step
                    ? "bg-white/80 text-[#2B5876]"
                    : "bg-white/20 text-white"
                }`}
              >
                {num}
              </div>
              {idx < 2 && <div className="w-12 h-0.5 bg-white/30 mx-2" />}
            </div>
          ))}
        </div>

        {/* Main Card */}
        <Card className="w-full shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Building2 className="w-5 h-5" />
              {step === 1 && "Select Company"}
              {step === 2 && "Select Client Profile"}
              {step === 3 && "Login Credentials"}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <RadioGroup value={selectedCompany} onValueChange={setSelectedCompany} className="space-y-3">
                {companies.map((company) => (
                  <Label
                    key={company.id}
                    htmlFor={company.id}
                    className="flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-accent/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                  >
                    <RadioGroupItem value={company.id} id={company.id} />
                    <div className="flex-1 text-left">
                      <div className="font-semibold">{company.name}</div>
                      <div className="text-sm text-muted-foreground">{company.description}</div>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            )}

            {step === 2 && (
              <RadioGroup value={selectedClient} onValueChange={setSelectedClient} className="space-y-3">
                {clients[selectedCompany as keyof typeof clients]?.map((client) => (
                  <Label
                    key={client.id}
                    htmlFor={client.id}
                    className="flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-accent/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                  >
                    <RadioGroupItem value={client.id} id={client.id} />
                    <div className="flex-1 text-left">
                      <div className="font-semibold">{client.name}</div>
                      <div className="text-sm text-muted-foreground">{client.description}</div>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            )}

            <Button onClick={handleNext} className="w-full" size="lg">
              {step === 3 ? "Login" : "Next"}
              {step !== 3 && <ChevronRight className="ml-2 w-4 h-4" />}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
