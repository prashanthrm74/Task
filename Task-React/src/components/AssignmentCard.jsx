
const AssignmentCard = ({ title, children }) => {
  return (
    < div className="bg-orange-300 rounded-xl m-5">
        
        <h2 className="text-lg font-bold p-3">{title}</h2>
        <div>
            {children}
           
        </div>
      
        
      
    </div>
  );
};

export default AssignmentCard;