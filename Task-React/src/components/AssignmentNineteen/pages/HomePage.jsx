import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/routeapp/loginpage");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center w-[400px]">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome 👋
        </h1>

        <p className="text-gray-500 mt-3">
          You have successfully logged in.
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;