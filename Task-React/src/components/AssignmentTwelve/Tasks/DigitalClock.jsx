import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString("en-US");
      setTime(currentTime);
    };

    updateTime(); // Display time immediately

    const timer = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          🕒 Digital Clock
        </h1>

        <p className="text-5xl font-mono font-bold text-blue-600">
          {time}
        </p>
      </div>
    </div>
  );
};

export default DigitalClock;