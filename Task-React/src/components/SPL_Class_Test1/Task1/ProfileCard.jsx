const ProfileCard = ({ title, data }) => {
  return (
    <div className=" text-center min-h-screen flex flex-col items-center">
      <h1 className="text-xl font-bold underline mb-4 mt-4">
        {title}
      </h1>

      <div className="bg-white shadow-md w-60 rounded-xl p-5 m-5 h-50">
        <div className="flex flex-col gap-2">
          {Object.entries(data).map(([key, value]) => (
            <h2 key={key}>
              {key}: {value}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;