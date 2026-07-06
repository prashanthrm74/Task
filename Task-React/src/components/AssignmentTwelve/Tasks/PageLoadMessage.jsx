import { useEffect, useState } from "react";

const PageLoadMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("✅ Component Loaded");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          React useEffect
        </h1>

        <p className="text-lg font-medium text-green-600 bg-green-100 py-3 rounded-lg">
          {message}
        </p>
      </div>
    </div>
  );
};

export default PageLoadMessage;