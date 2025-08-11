// Skills Component
const Skills = () => {
  const skills = [
    'React.js', 'Tailwind CSS', 'JavaScript', 'CSS', 'HTML', 'Responsive Design'
  ];
  return (
    <div className="mb-14 border-gray-200">
      <h1 className="text-gray-500 text-sm pb-2">SKILLS</h1>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-white border-2 border-teal-600 text-teal-800 px-2 lg:px-2 py-1 lg:py-2 lg:text-lg 
          font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills