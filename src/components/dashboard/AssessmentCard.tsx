const AssessmentCard = () => {
  return (
    <div className="rounded-xl p-6 card-gradient-yellow h-full">
      <h2 className="text-xl font-semibold mb-4">Pending assessment</h2>
      <p className="text-gray-600">No assessments in queue</p>
    </div>
  );
};

export default AssessmentCard;