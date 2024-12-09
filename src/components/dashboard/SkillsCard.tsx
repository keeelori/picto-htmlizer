const SkillsCard = () => {
  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/30 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      <div className="text-4xl font-bold mb-2 text-purple-600">40%</div>
      <p className="text-purple-700">
        of your skills are <span className="font-medium">higher</span> than the company average
      </p>
    </div>
  );
};

export default SkillsCard;