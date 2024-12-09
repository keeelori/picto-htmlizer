const PromotionCard = () => {
  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200/30 shadow-sm hover:shadow-md transition-shadow duration-200">
      <h2 className="text-xl font-semibold mb-4 text-green-900">Promotion progress</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm text-green-700 font-medium">Middle</span>
        <div className="flex-1 h-2 bg-green-200 rounded-full overflow-hidden">
          <div className="w-4/5 h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
        </div>
        <span className="text-sm text-green-700 font-medium">Senior</span>
      </div>
    </div>
  );
};

export default PromotionCard;