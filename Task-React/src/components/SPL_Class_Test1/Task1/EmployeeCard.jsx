import ProfileCard from "./ProfileCard";

const EmployeeCard= () => {
  const employeeDetails = {
    "Employee Name": "Prashanth",
    "Employee ID": "EMP101",
    Department: "Frontend",
    Salary: "₹50,000",
    Experience: "2 Years",
  };

  return (
    <ProfileCard
      title="Employee Profile"
      data={employeeDetails}
    />
  );
};

export default EmployeeCard;