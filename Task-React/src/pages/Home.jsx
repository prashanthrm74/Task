import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800">
          Welcome to My React Assignment Portfolio
        </h2>

        <p className="text-gray-600 mt-5 leading-8">
          This project contains React assignments covering JavaScript,
          Components, Props, State, Hooks, Routing, Context API,
          Authentication, Tailwind CSS, and many real-world examples.
        </p>
      </div>
    </div>
  );
};

export default Home;