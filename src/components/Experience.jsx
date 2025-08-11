// Experience Component
const Experience = () => {
  const experiences = [
    {
      title: 'SAFFRONTECH PVT LTD',
      role: 'Jr.Quality Analyst',
      duration: 'Feb 2024 - March 2025'
    },
    {
      title: 'FULL CREATIVE',
      role: 'Test Engineeer Inern',
      duration: 'March 2023 - April 2023'
    },
    {
      title: 'INLINGUA DELHI',
      role: 'Student',
      duration: 'October 2022 - March 2023'
    },
    {
      title: 'AAPNA INFOTHEEK PVT LTD',
      role: 'Associate Consultant',
      duration: 'April 2022 - October 2022'
    }
    
  ];
  return (
    <div className="mb-14 border-gray-200">
     <h1 className="text-gray-500 text-sm pb-2 tracking-wide">EXPERIENCE</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg lg:text-xl font-bold tracking-wide">{exp.title}</h3>
          <p className="text-md lg:text-lg text-gray-600 tracking-wide">{exp.role} | {exp.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience