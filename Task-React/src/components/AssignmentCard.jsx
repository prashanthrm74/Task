const AssignmentCard = ({ title, children }) => {
  return (
    <div className="mb-2 rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <div className="bg-purple-400 px-6 py-2">
        <h2 className="text-xl font-bold text-slate-800 tracking-wide">
          {title}
        </h2>
      </div>

      <div className="bg-white p-3">
        {children}
      </div>
    </div>
  );
};

export default AssignmentCard;