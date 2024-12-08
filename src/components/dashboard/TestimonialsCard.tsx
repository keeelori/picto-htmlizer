const TestimonialsCard = () => {
  return (
    <div className="rounded-xl p-6 card-gradient-blue">
      <h2 className="text-xl font-semibold mb-4">People say about you</h2>
      <p className="text-gray-600 italic">"Yehor is a nice person to work with."</p>
      <div className="flex justify-center gap-1 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-300"
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCard;