import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLink = (path) =>
    `px-4 py-2 rounded-lg transition-all duration-300 ${
      location.pathname === path
        ? "bg-white text-blue-700 shadow-md"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/90 shadow-lg">
      <div className="max-w-7xl mx-auto h-16 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-white">
            React Assignment Hub - Prashanth
          </h1>
        </div>

        <div className="flex gap-3">
          <Link className={navLink("/")} to="/">
            Home
          </Link>

          <Link className={navLink("/tasks")} to="/tasks">
            Assignments
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;