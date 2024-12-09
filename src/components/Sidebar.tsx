import { Home, Plus, LayoutDashboard, Calendar, Settings, BookOpen, Cog } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  const navigation = [
    { name: "Home", icon: Home, path: "/" },
    { name: "New", icon: Plus, path: "/new" },
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Upcoming", icon: Calendar, path: "/upcoming" },
    { name: "Framework", icon: Settings, path: "/framework" },
    { name: "Wiki", icon: BookOpen, path: "/wiki" },
    { name: "Settings", icon: Cog, path: "/settings" },
  ];

  return (
    <div className="h-screen w-64 px-3 py-8 flex flex-col">
      <div className="flex items-center gap-2 px-3 mb-8">
        <div className="w-8 h-8 rounded-full bg-primary"></div>
        <span className="font-semibold text-lg">Competrace</span>
      </div>
      
      <div className="space-y-1 flex-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname === item.path
                ? "bg-secondary text-primary"
                : "text-gray-600 hover:bg-secondary/60"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </div>

      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl mt-4 hover:bg-primary/90 transition-colors shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
        <Plus className="w-5 h-5" />
        New assessment
      </button>
    </div>
  );
};

export default Sidebar;