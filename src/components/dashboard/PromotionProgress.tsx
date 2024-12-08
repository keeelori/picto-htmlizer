import { Button } from "@/components/ui/button";

const PromotionProgress = () => {
  const data = [
    { name: "John Doe", progress: 95 },
    { name: "Kira Coffee", progress: 91 },
    { name: "Yehor Kuzmin", progress: 80 },
    { name: "Rick Rickson", progress: 79 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Promotion progress</h2>
        <Button variant="secondary" size="sm">View more</Button>
      </div>
      
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">{item.name}</span>
              <span className="text-gray-500">{item.progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionProgress;