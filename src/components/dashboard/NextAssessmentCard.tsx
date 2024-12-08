const NextAssessmentCard = () => {
  return (
    <div className="rounded-xl p-6 bg-white border shadow-sm h-full">
      <h2 className="text-xl font-semibold mb-2">Your next assessment</h2>
      <p className="text-gray-600 mb-4">Thu, Sep 10 16:00 pm</p>
      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
        in 1 week
      </span>
    </div>
  );
};

export default NextAssessmentCard;