const Header = () => {
  return (
    <div className="flex justify-end items-center">
      <div className="flex gap-2">
        <a href="https://surajkumarsatya.netlify.app/assets/Suraj%20Kumar%20Satya_Frontend%20Developer_Fresher.pdf"
         target="_blank" className="bg-teal-600 text-white border border-white px-4 py-2 my-5 text-sm
         hover:bg-white hover:text-teal-600 hover:border hover:border-teal-600 transition-colors">Download CV ⤓</a>
        {/* <button className="bg-teal-600 text-white border border-white rounded-lg px-4 py-2 text-sm hover:bg-gray-100 transition-colors">LANG 🌐</button> */}
      </div>
    </div>
  );
};

export default Header 