import ProfileCard from "./ProfileCard";

const StudentProfile = () => {
  const studentDetails = {
    Name: "Prashanth",
    Age: 25,
    Course: "React",
    City: "Chennai",
  };

  return (
    <ProfileCard
      title="Student Profile"
      data={studentDetails}
    />
  );
};

export default StudentProfile;