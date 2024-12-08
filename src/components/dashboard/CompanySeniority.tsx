import { Button } from "@/components/ui/button";

const CompanySeniority = () => {
  const data = [
    { level: "Trainee", percentage: 42, color: "rgb(59, 130, 246)" },
    { level: "Junior", percentage: 36, color: "rgb(96, 165, 250)" },
    { level: "Middle", percentage: 15, color: "rgb(147, 197, 253)" },
    { level: "Senior", percentage: 5, color: "rgb(191, 219, 254)" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Company seniority overview</h2>
        <Button variant="secondary" size="sm">View more</Button>
      </div>
      
      <div className="flex gap-8">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90">
            {data.map((item, index) => {
              const circumference = 2 * Math.PI * 38;
              const offset = circumference - (item.percentage / 100) * circumference;
              const rotation = data.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0) * 3.6;
              
              return (
                <circle
                  key={item.level}
                  cx="50%"
                  cy="50%"
                  r="38"
                  stroke={item.color}
                  strokeWidth="24"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '50% 50%' }}
                  className="transition-all duration-1000 ease-out"
                />
              );
            })}
          </svg>
        </div>
        
        <div className="flex flex-col justify-center gap-3">
          {data.map((item) => (
            <div key={item.level} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-gray-700">{item.level}</span>
              <span className="text-gray-500">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySeniority;