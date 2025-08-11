// Projects Component
import Netflix from '../assets/Netflix.png'
import Kartavya from '../assets/Kartavya.png'
import Grocify from '../assets/Grocify.png'
import AppleVisonPro from '../assets/AppleVisonPro.png'
import Cleanvoice from '../assets/Cleanvoice.png'

const Projects = () => {
  const projects = [
    {
      title: "NETFLIX CLONE",
      link: "https://ntflx-project.vercel.app/",
      technologies: ['React', 'Tailwind CSS', 'React Router', 'API', 'Responsive'],
      description: "This project is a Netflix Clone built using React and Tailwind CSS. It leverages the TMDB API to dynamically fetch and display real movie and TV show data. The application is fully responsive, ensuring a seamless user experience across all devices.",
      imgUrl: Netflix
    },
    {
      title: "KARTAVYA",
      link: "https://kartavvya.vercel.app/",
      technologies: ['React', 'TAILWIND CSS', 'React Router', 'Responsive'],
      description: "Kartavy, a fully functional multi page website built with React and Tailwind CSS. It incorporates robust user authentication using Clerk and handles form submissions through Email.js. The website is designed to be fully responsive.",
      imgUrl: Kartavya
    },
    {
      title: "GROCIFY",
      link: "https://grocify-project.vercel.app/",
      technologies: ['React', 'TAILWIND CSS', 'React Router', 'Responsive'],
      description: "This project is a modern, responsive multi-page e-commerce website named 'Grocify.' It's built with React and styled using Tailwind CSS for a sleek, utility-first design. The application showcases a strong understanding of front-end development.",
      imgUrl: Grocify
    },
    {
      title: "APPLE VISION PRO CLONE",
      link: "https://apple-vision-proo.vercel.app/",
      technologies: ['HTML', 'Tailwind CSS', 'Responsive'],
      description: "Built Apple Vision Pro website landing page clone using HTML and Tailwind CSS. It's mobile-friendly and visually appealing with optimized image and masonry layout.",
      imgUrl: AppleVisonPro
    },
    {
      title: "CLEANVOICE LANDING PAGE CLONE",
      link: "https://clean-voice.vercel.app/",
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      description: "Created a Cleanvoice website landing page clone using HTML, CSS and JavaScript. It's responsive. This project showcase my understanding of HTML and CSS.",
      imgUrl: Cleanvoice
    },
  ];

  return (
    <div className="mb-12 lg:mb-0 border-gray-200">
      <h1 className="text-gray-500 text-sm pb-2 tracking-wide">PROJECTS</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className=" w-full mb-8 lg:mb-4 lg:flex  justify-between gap-5">
            <div className="lg:h-55 flex flex-col ">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <a href={project.link} target="_blank" className="hover:underline flex items-center justify-center gap-1 font-bold text-xl">
                  {project.title}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </h3>
              <div className="flex flex-wrap gap-1 mt-1 mb-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs border-2 border-gray-500 text-gray-600 px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-900 text-md lg:text-md mt-2">{project.description}</p>
            </div>
            <div className="flex-shrink-0">
              <img
                className="object-contain mt-2 lg:mt-0 w-full h-44 lg:w-86 lg:h-43 hover:scale-105
                transform transition-all duration-300"
                src={project.imgUrl}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
