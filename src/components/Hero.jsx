const Hero = () => {
  return (
    <div className="flex flex-col gap-2 mt-4 pb-6 mb-6 border-gray-200">
      <div className="flex items-center gap-2">
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-2V1h-2v2H9V1H7v2H5C3.89 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 21V8h14v13H5zM19 6H5V5h14v1z"/>
        </svg> */}
        <h1 className="text-2xl lg:text-4xl font-bold">SURAJ KUMAR SATYA</h1>
      </div>
      <p className="text-black text-md lg:text-lg">Front-end Developer | QA Tester</p>
      <div className="text-md lg:text-lg text-gray-600">
        <p>Haryana, India | <a href="https://surajkumarsatya.netlify.app/" target="_blank" className="">surajkumarsatya</a> | <a href="mailto:surajmail.799@gmail.com" className="">surajmail.799@gmail.com</a> | <a href="tel:+91 9873322730 " class="link">+91 9873322730</a></p>
      </div>
      <p className="text-gray-700 text-md lg:text-lg">
        Creative, meticulous and highly motivated front-end developer with a goal to make engaging and practical user experiences. Very passionate about accessibility, aesthetics and UI.
      </p>
    </div>
  );
};

export default Hero