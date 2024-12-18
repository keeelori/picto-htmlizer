import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 h-[88px]">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-semibold leading-none">SET University</div>
        <div className="text-sm text-gray-500">Home</div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200 text-sm w-64 focus:ring-2 focus:ring-primary/30 focus:border-primary/30 shadow-sm transition-all hover:border-gray-300"
          />
        </div>

        <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-medium">YK</span>
          </div>
          <div>
            <div className="text-sm font-medium">Yehor Kuzmin</div>
            <div className="text-xs text-gray-500">Product Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;