const AssessmentCard = () => {
  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/30 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      <h2 className="text-xl font-semibold mb-4 text-amber-900">Pending assessment</h2>
      <p className="text-amber-700">No assessments in queue</p>
    </div>
  );
};

export default AssessmentCard;