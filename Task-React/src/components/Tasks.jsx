import AssignmentCard from "./AssignmentCard";
import AssignmentEight from "./AssignmentEight/AssignmentEight";
import AssignmentEighteen from "./AssignmentEighteen/AssignmentEighteen";
import UserProvider from "./AssignmentEighteen/provider/UserProvider";
import AssignmentEleven from "./AssignmentEleven/AssignmentEleven";
import AssignmentFifteen from "./AssignmentFifteen/AssignmentFifteen";
import AssignmentFive from "./AssignmentFive/AssignmentFive";
import AssignmentFour from "./AssignmentFour/AssignmentFour";
import AssignmentNine from "./AssignmentNine/AssignmenNine";
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
          <UserProvider>
          <AssignmentEighteen/>
          </UserProvider>
        </AssignmentCard>
      </div>
    </>
  );
};

export default Tasks;
