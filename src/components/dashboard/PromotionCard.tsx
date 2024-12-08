const PromotionCard = () => {
  return (
    <div className="rounded-xl p-6 bg-white border shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Promotion progress</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Middle</span>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm text-gray-600">Senior</span>
      </div>
    </div>
  );
};

export default PromotionCard;