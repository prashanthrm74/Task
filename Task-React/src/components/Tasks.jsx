import AssignmentCard from "./AssignmentCard";
import Assignmentone from "./AssignmentOne/Assignmentone";
import AssignmentTwo from "./AssignmentTwo/AssignmentTwo";

const Tasks = () => {
  return (
    <>
      <div className="bg-gray-300 m-5 rounded-xl">
        <h1 className="text-black text-center font-bold text-xl underline">
          Assignments
        </h1>
        <AssignmentCard title="Assignment 1">
          <Assignmentone />
        </AssignmentCard>
        <AssignmentCard title="Assignment 2">
          <AssignmentTwo />
        </AssignmentCard>
      
      </div>
    </>
  );
};

export default Tasks;
