import AssignmentCard from "./AssignmentCard";
import AssignmentEight from "./AssignmentEight/AssignmentEight";
import AssignmentFive from "./AssignmentFive/AssignmentFive";
import AssignmentFour from "./AssignmentFour/AssignmentFour";
import AssignmentNine from "./AssignmentNine/AssignmenNine";
import Assignmentone from "./AssignmentOne/Assignmentone";
import AssignmentSeven from "./AssignmentSeven/AssignmentSeven";
import AssignmentSix from "./AssignmentSix/AssignmentSix";
import AssignmentThree from "./AssignmentThree/AssignmentThree";

import AssignmentTwo from "./AssignmentTwo/AssignmentTwo";
import SPLClassTest1 from "./SPL_Class_Test1/Task1/SPLClassTest1";

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
         <AssignmentCard title="SPL Class-Test">
          <SPLClassTest1 />
        </AssignmentCard>
        <AssignmentCard title="Assignment 3">
          <AssignmentThree/>
        </AssignmentCard>
        <AssignmentCard title="Assignment 4">
          <AssignmentFour/>
        </AssignmentCard>
        <AssignmentCard title="Assignment 5">
          <AssignmentFive/>
        </AssignmentCard>
        <AssignmentCard title="Assignment 6">
          <AssignmentSix/>
        </AssignmentCard>
         <AssignmentCard title="Assignment 7">
          <AssignmentSeven/>
        </AssignmentCard>
        <AssignmentCard title="Assignment 8">
          <AssignmentEight/>
        </AssignmentCard>
          <AssignmentCard title="Assignment 9">
          <AssignmentNine/>
        </AssignmentCard>
      </div>
    </>
  );
};

export default Tasks;
