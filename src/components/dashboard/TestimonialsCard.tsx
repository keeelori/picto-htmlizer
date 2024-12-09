const TestimonialsCard = () => {
  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200/30 shadow-sm hover:shadow-md transition-shadow duration-200">
      <h2 className="text-xl font-semibold mb-4 text-indigo-900">People say about you</h2>
      <p className="text-indigo-700 italic">"Yehor is a nice person to work with."</p>
      <div className="flex justify-center gap-2 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-indigo-300"
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCard;