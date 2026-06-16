

const CompanyInfo = () => {

    const company={
        name:"Dell",
        location:"Chennai",
        Founder:"Prashanth",
        year:"2002"
        
    }

  return (
    <div className="flex justify-center">
    
    <div  className="bg-blue-400 h-100vh w-100 text-center p-10 text-white rounded-xl">
        <h1>Task 5</h1>
        <h2>Company Name: {company.name}</h2>
        <h2>Company Location: {company.location}</h2>
        <h2>Company Founder: {company.Founder}</h2>
        <h2>Established Year: {company.year}</h2>
    </div>
    </div>
  )
}

export default CompanyInfo