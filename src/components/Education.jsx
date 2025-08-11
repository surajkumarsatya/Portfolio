// Education Component
const Education = () => {
  const educationItems = [
    {
      degree: 'B.tech (CSE)',
      university: 'GL BAJAJ GROUP OF INSTITUTIONS, MATHURA',
      duration: '2017 - 2021'
    },
    {
      degree: '12th',
      university: 'KENDRIYA VIDYALAYA NTPC BADARPUR, NEW DELHI',
      duration: '2016 - 2017'
    },
    {
      degree: '10th',
      university: 'KENDRIYA VIDYALAYA NTPC BADARPUR, NEW DELHI',
      duration: '2014 - 2015'
    }
  ];
  return (
    <div className="mb-14 border-gray-200">
      <h1 className="text-gray-500 text-sm pb-2 tracking-wide">EDUCATION</h1>
      {educationItems.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg lg:text-xl font-bold tracking-wide">{edu.university}</h3>
          <p className="text-md lg:text-lg text-gray-600 tracking-wide">{edu.degree} | {edu.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Education