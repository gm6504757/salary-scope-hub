import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Users,
  CalendarDays,
  DollarSign,
  FileText,
  Settings,
  LogOut,
  BarChart3,
  UserPlus,
  FileCheck,
  Mail,
  Shield,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState("");
  const [client, setClient] = useState("");

  useEffect(() => {
    const storedCompany = localStorage.getItem("company");
    const storedClient = localStorage.getItem("client");
    
    if (!storedCompany || !storedClient) {
      navigate("/login");
      return;
    }
    
    setCompany(storedCompany);
    setClient(storedClient);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("company");
    localStorage.removeItem("client");
    navigate("/login");
  };

  const handleSwitchProfile = () => {
    localStorage.removeItem("company");
    localStorage.removeItem("client");
    navigate("/login");
  };

  const stats = [
    { label: "Active Employees", value: "248", icon: Users, color: "text-blue-600" },
    { label: "This Month Payroll", value: "₹12.5L", icon: DollarSign, color: "text-green-600" },
    { label: "Pending Approvals", value: "12", icon: FileCheck, color: "text-orange-600" },
    { label: "Attendance Rate", value: "94.2%", icon: CalendarDays, color: "text-purple-600" },
  ];

  const quickActions = [
    { label: "Employee Master", icon: Users, description: "Manage employee data" },
    { label: "Attendance", icon: CalendarDays, description: "Track & manage attendance" },
    { label: "Salary Statement", icon: DollarSign, description: "Process payroll" },
    { label: "Reports", icon: BarChart3, description: "Generate reports" },
    { label: "Documents", icon: FileText, description: "Letters & payslips" },
    { label: "Form-T", icon: FileCheck, description: "Statutory forms" },
  ];

  const recentActivities = [
    { action: "Salary processed", detail: "March 2024 - 248 employees", time: "2 hours ago" },
    { action: "Appointment letters sent", detail: "15 new joiners", time: "5 hours ago" },
    { action: "ESI statement generated", detail: "March 2024", time: "1 day ago" },
    { action: "Attendance locked", detail: "March 2024", time: "2 days ago" },
  ];

  const companyLabels: Record<string, string> = {
    rms: "RMS (Radiant Manpower Services)",
    ims: "IMS (InLine Manpower Services Pvt Ltd)",
    kvs: "KVS Manpower Solutions",
  };

  const clientLabels: Record<string, string> = {
    "brand-studio": "Brand Studio Lifestyle Pvt Ltd",
    "incap": "Incap Contract Manufacturing Pvt Ltd",
    "online-instruments": "Online Instruments India Pvt Ltd",
    "mahabel": "Mahabel Industries",
    "tvs": "TVS Electronics Ltd",
    "spectrus": "Spectrus Sustainable Pvt Ltd",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Salary Management System</h1>
                <p className="text-sm text-muted-foreground">{companyLabels[company]}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handleSwitchProfile} size="sm">
                <Building2 className="w-4 h-4 mr-2" />
                Switch Profile
              </Button>
              <Button variant="outline" onClick={handleLogout} size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Client Profile Card */}
        <Card className="mb-8 border-primary/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">Client Profile</CardTitle>
                <CardDescription className="text-lg font-medium text-foreground">
                  {clientLabels[client]}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Dobaspet</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-medium">Contract</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
                <CardDescription>Access key features and modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto py-4 px-4 flex items-start justify-start gap-4 hover:bg-primary/5 hover:border-primary transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <action.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-semibold text-foreground">{action.label}</p>
                        <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest updates and actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.detail}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statutory Compliance Section */}
        <Card className="mt-8 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Statutory Compliance Reports
            </CardTitle>
            <CardDescription>Generate and view compliance statements</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="esic" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="esic">ESIC</TabsTrigger>
                <TabsTrigger value="pf">PF</TabsTrigger>
                <TabsTrigger value="pt">PT</TabsTrigger>
                <TabsTrigger value="lwf">LWF</TabsTrigger>
                <TabsTrigger value="insurance">Insurance</TabsTrigger>
              </TabsList>
              <TabsContent value="esic" className="pt-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">ESIC Statement - March 2024</p>
                    <p className="text-sm text-muted-foreground">248 employees covered</p>
                  </div>
                  <Button>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="pf" className="pt-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">PF Statement - March 2024</p>
                    <p className="text-sm text-muted-foreground">248 employees covered</p>
                  </div>
                  <Button>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="pt" className="pt-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">PT Statement - March 2024</p>
                    <p className="text-sm text-muted-foreground">248 employees covered</p>
                  </div>
                  <Button>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="lwf" className="pt-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">LWF Statement - March 2024</p>
                    <p className="text-sm text-muted-foreground">Applicable employees</p>
                  </div>
                  <Button>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="insurance" className="pt-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Insurance Statement - March 2024</p>
                    <p className="text-sm text-muted-foreground">Enrolled employees</p>
                  </div>
                  <Button>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
