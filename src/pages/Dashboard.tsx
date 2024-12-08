import { Calendar } from "lucide-react";
import CompanySeniority from "@/components/dashboard/CompanySeniority";
import PromotionProgress from "@/components/dashboard/PromotionProgress";
import AssessmentsInProgress from "@/components/dashboard/AssessmentsInProgress";
import CompletedAssessments from "@/components/dashboard/CompletedAssessments";

const Dashboard = () => {
  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold mb-1">SET University</h1>
          <p className="text-gray-500">Dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span className="text-sm">Period</span>
          </div>
          <div className="flex items-center gap-4">
            {[
              { label: "Promotions", value: "+12", color: "text-green-600" },
              { label: "Departments", value: "+2", color: "text-green-600" },
              { label: "Skills", value: "-2", color: "text-red-600" },
              { label: "Total assessments", value: "+28", color: "text-green-600" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 py-2 bg-white rounded-lg shadow-sm border">
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className={`font-semibold ${stat.color}`}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <CompanySeniority />
        <AssessmentsInProgress />
        <PromotionProgress />
        <CompletedAssessments />
      </div>
    </div>
  );
};

export default Dashboard;