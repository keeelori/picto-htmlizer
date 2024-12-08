import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import AssessmentCard from "@/components/dashboard/AssessmentCard";
import NextAssessmentCard from "@/components/dashboard/NextAssessmentCard";
import SkillsCard from "@/components/dashboard/SkillsCard";
import PromotionCard from "@/components/dashboard/PromotionCard";
import TestimonialsCard from "@/components/dashboard/TestimonialsCard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8">
          <WelcomeCard />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AssessmentCard />
            <NextAssessmentCard />
            <SkillsCard />
            <PromotionCard />
            <TestimonialsCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;