import {FiGrid, FiBell, } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
   
    <header className="flex  justify-between items-center bg-white  text-gray-700  px-4 pr-8 pt-1.5 pb-2.5 lg:pt-1 lg:pb-1 shadow-sm ">
      {/* Left Section */}
      <div className="flex items-center  gap-4 ">
        <img
          src="https://akhilgraphics.in/wp-content/uploads/2021/11/cropped-logo-1-1-300x300.png"
          alt="Logo"
          className="md:h-16 h-8"
        />

     
        <div className=" items-center gap-4 hidden md:block  lg:text-xl  pl-[20vh] cursor-pointer">
          <Link to="/">
          
          <span>Home</span>
          </Link>
        </div>
        <div className="lg:text-xl items-center gap-4 hidden md:block cursor-pointer">
        <Link to="/services">
          
          <span>Service</span>
          </Link>
        </div>
        <div className="lg:text-xl items-center gap-4 hidden md:block cursor-pointer">
        <Link to="/PortfolioPage">
          
          <span>Portfolio </span>
          </Link>
        </div>
        <div className="lg:text-xl items-center gap-4 hidden md:block cursor-pointer">
        <Link to="/contact">
          
          <span>Contact Us</span>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
       <FiGrid className="text-gray-600 text-sm md:text-lg cursor-pointer" />
        <FiBell className="text-gray-600 text-sm md:text-lg cursor-pointer hidden md:block relative">
          <span className="absolute -top-1 -right-1 bg-red-500 text-white hidden md:block text-xs rounded-full px-1">
            •
          </span>
        </FiBell>
        
          <div className=" text-center text-sm rounded-2xl  ">
            <Link to="/login">
            
             <p className="text-white  font-bold bg-blue-500 justify-center text-sm  rounded-full px-3 py-2  hover:bg-orange-500 "> Login ✌️</p>

            </Link>
          </div>
     
      </div>
    </header>

  );
};

export default Navbar;
