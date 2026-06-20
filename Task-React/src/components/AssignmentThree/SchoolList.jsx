import { schools } from "../../components/Data/Schools";
import SchoolCard from "./SchoolCard";

const SchoolList = () => {
  return (
    <div className="min-h-screen bg-amber-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        School Management
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <SchoolCard
            key={school.id}
            school={school}
          />
        ))}
      </div>
    </div>
  );
};

export default SchoolList;