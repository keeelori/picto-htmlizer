const AssessmentCard = () => {
  return (
    <div className="rounded-xl p-6 bg-[radial-gradient(circle_at_center,#F7FBC8_0%,#FFFFFF_100%)] border border-gray-200/30 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      <h2 className="text-xl font-semibold mb-4 text-black">Pending assessment</h2>
      <p className="text-black">No assessments in queue</p>
    </div>
  );
};

export default AssessmentCard;