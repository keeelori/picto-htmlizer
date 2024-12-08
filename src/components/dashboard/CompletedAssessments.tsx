import { Button } from "@/components/ui/button";

const CompletedAssessments = () => {
  const assessments = [
    { date: "20 Mar", name: "John Doe", department: "Dev" },
    { date: "15 Mar", name: "Kira Coffee", department: "Dev" },
    { date: "03 Mar", name: "Yehor Kuzmin", department: "QA" },
    { date: "25 Feb", name: "Rick Rickson", department: "HR" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recently completed assessments</h2>
        <Button variant="secondary" size="sm">View more</Button>
      </div>
      
      <div className="space-y-3">
        {assessments.map((assessment) => (
          <div 
            key={assessment.name}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm w-16">{assessment.date}</span>
              <span className="font-medium">{assessment.name}</span>
            </div>
            <span className="text-gray-700 text-sm">{assessment.department}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedAssessments;