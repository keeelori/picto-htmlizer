const NextAssessmentCard = () => {
  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/30 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      <h2 className="text-xl font-semibold mb-2 text-blue-900">Your next assessment</h2>
      <p className="text-blue-700 mb-4">Thu, Sep 10 16:00 pm</p>
      <span className="px-3 py-1 bg-amber-100/80 text-amber-800 rounded-full text-sm font-medium inline-block">
        in 1 week
      </span>
    </div>
  );
};

export default NextAssessmentCard;