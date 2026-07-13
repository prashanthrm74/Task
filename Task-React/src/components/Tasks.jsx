import AssignmentCard from "./AssignmentCard";
import AssignmentEight from "./AssignmentEight/AssignmentEight";
import AssignmentEighteen from "./AssignmentEighteen/AssignmentEighteen";

import AssignmentEleven from "./AssignmentEleven/AssignmentEleven";
import AssignmentFifteen from "./AssignmentFifteen/AssignmentFifteen";
import AssignmentFive from "./AssignmentFive/AssignmentFive";
import AssignmentFour from "./AssignmentFour/AssignmentFour";
import AssignmentNine from "./AssignmentNine/AssignmenNine";
import AssignmentNineteen from "./AssignmentNineteen/AssignmentNineteen";
import Assignmentone from "./AssignmentOne/Assignmentone";
import AssignmentSeven from "./AssignmentSeven/AssignmentSeven";
import AssignmentSeventeen from "./AssignmentSeventeen.jsx/AssignmentSeventeen";
import AssignmentSix from "./AssignmentSix/AssignmentSix";
import AssignmentSixteen from "./AssignmentSixteen/AssignmenSixteen";
import AssignmentTen from "./AssignmentTen/AssignmentTen";
import AssignmentThirteen from "./AssignmentThirteen/AssignementThirteen";
import AssignmentThree from "./AssignmentThree/AssignmentThree";
import AssignmentTwelve from "./AssignmentTwelve/AssignmentTwelve";

import AssignmentTwo from "./AssignmentTwo/AssignmentTwo";
import SPLClassTest1 from "./SPL_Class_Test1/Task1/SPLClassTest1";

const Tasks = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-5">
    <div className="text-center mb-12">
  <h1 className="text-5xl font-bold text-slate-800">
    React Assignments
  </h1>

  <p className="text-gray-500 mt-3">
    Practice projects built using React & Tailwind CSS
  </p>
</div>

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
        <AssignmentCard title="Assignment 10">
          <AssignmentTen/>
        </AssignmentCard>
         <AssignmentCard title="Assignment 11">
          <AssignmentEleven/>
        </AssignmentCard>
         <AssignmentCard title="Assignment 12">
          <AssignmentTwelve/>
        </AssignmentCard>
           <AssignmentCard title="Assignment 13">
          <AssignmentThirteen/>
        </AssignmentCard>
        <AssignmentCard title="Assignment 15">
          <AssignmentFifteen/>
        </AssignmentCard>
         <AssignmentCard title="Assignment 16">
          <AssignmentSixteen/>
        </AssignmentCard>
        <AssignmentCard title="Assignment 17">
          <AssignmentSeventeen/>
        </AssignmentCard>
        
        <AssignmentCard title="Assignment 18">
          <AssignmentEighteen/>
          </AssignmentCard>

        <AssignmentCard title="Assignment 19">
          <AssignmentNineteen/>
        </AssignmentCard>
      </div>
    </>
  );
};

export default Tasks;
