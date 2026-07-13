import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myData = JSON.parse(localStorage.getItem("userdata")) || [];

    const checkEmail = myData.find(
      (e) => e.useremail === registerData.useremail
    );

    if (checkEmail) {
      alert("Email already registered");
      return;
    }

    myData.push(registerData);

    localStorage.setItem("userdata", JSON.stringify(myData));

    setRegisterData({
      username: "",
      useremail: "",
      userpassword: "",
    });

    navigate("/routeapp/loginpage");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Register to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            value={registerData.username}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="useremail"
            placeholder="Email Address"
            value={registerData.useremail}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="userpassword"
            placeholder="Password"
            value={registerData.userpassword}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?
          <button
            onClick={() => navigate("/routeapp/loginpage")}
            className="ml-2 text-blue-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;