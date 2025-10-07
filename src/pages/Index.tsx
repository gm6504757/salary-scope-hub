import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Building2, FileText, Shield, BarChart3 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Comprehensive employee master data with all statutory details"
    },
    {
      icon: FileText,
      title: "Payroll Processing",
      description: "Automated salary calculations with ESI, PF, PT, and LWF"
    },
    {
      icon: Shield,
      title: "Statutory Compliance",
      description: "Complete compliance with labor laws and regulations"
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Detailed reports for clients and statutory requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl mb-6 shadow-lg">
            <Users className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Salary Management System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Complete manpower and payroll management solution for contract staffing providers. 
            Manage multiple companies, clients, and employees with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/login")} 
              size="lg" 
              className="text-lg h-14 px-8 shadow-lg"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button 
              onClick={() => navigate("/login")} 
              variant="outline" 
              size="lg" 
              className="text-lg h-14 px-8"
            >
              Login to Dashboard
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all hover:border-primary/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Multi-Company Support</h4>
                  <p className="text-sm text-muted-foreground">Manage RMS, IMS, and KVS with separate client profiles</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Attendance Management</h4>
                  <p className="text-sm text-muted-foreground">Track and process attendance for accurate payroll</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Automated Documents</h4>
                  <p className="text-sm text-muted-foreground">Generate appointment letters, payslips, and relieving letters</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Statutory Reports</h4>
                  <p className="text-sm text-muted-foreground">ESI, PF, PT, LWF, and insurance statements</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Invoice Generation</h4>
                  <p className="text-sm text-muted-foreground">Automated billing based on attendance and salary</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email Automation</h4>
                  <p className="text-sm text-muted-foreground">Send documents directly to employee emails</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Salary Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
