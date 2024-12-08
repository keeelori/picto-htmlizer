import { Button } from "@/components/ui/button";

const AssessmentsInProgress = () => {
  const assessments = [
    { date: "20 Jul", name: "Marry May", progress: 15, department: "Dev" },
    { date: "15 Jul", name: "Jakob June", progress: 5, department: "Dev" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Assessments in progress</h2>
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
            <div className="flex items-center gap-8">
              <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${assessment.progress}%` }}
                />
              </div>
              <span className="text-gray-500 text-sm w-12">{assessment.progress}%</span>
              <span className="text-gray-700 text-sm w-16">{assessment.department}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentsInProgress;