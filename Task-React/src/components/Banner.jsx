import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <img
          src="/React_project.jpg"
          alt="React"
          className="w-full h-[550px] object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/20 flex items-center">
          <div className="ml-12 text-white max-w-xl">
            <h1 className="text-5xl font-bold mb-4">
              React Assignment Portfolio
            </h1>

            <p className="text-lg text-gray-200">
              Explore React fundamentals, hooks, routing, Context API,
              authentication, Tailwind CSS, and many more assignments.
            </p>

            <button
              onClick={() => navigate("/tasks")}
              className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition duration-300 shadow-lg hover:scale-105"
            >
              Explore Assignments →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;