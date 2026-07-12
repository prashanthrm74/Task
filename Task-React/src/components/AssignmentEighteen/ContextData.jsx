import { useContext } from "react";
import UserContext from "./context/UserContext";

const ContextData = () => {
  const { Data } = useContext(UserContext);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gray-900 text-white text-center py-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-white text-gray-900 flex items-center justify-center text-3xl font-bold">
            {Data.name.charAt(0)}
          </div>

          <h1 className="mt-4 text-2xl font-bold">{Data.name}</h1>
          <p className="text-gray-300">{Data.role}</p>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-lg font-semibold">{Data.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="text-lg font-semibold">{Data.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="text-lg font-semibold">{Data.role}</p>
          </div>

          <button className="w-full mt-4 bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-semibold transition">
            Contact User
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContextData;