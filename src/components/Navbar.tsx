import { FiSearch, FiGrid, FiBell, } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
   
    <header className="flex  justify-between items-center bg-white  text-gray-700  px-6 pr-12 shadow-sm ">
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
        <FiSearch className="text-gray-600 text-sm md:text-lg cursor-pointer" />
        <FiGrid className="text-gray-600 text-sm md:text-lg cursor-pointer" />
        <FiBell className="text-gray-600 text-sm md:text-lg cursor-pointer relative">
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            •
          </span>
        </FiBell>
        
          <div className="  ">
            <Link to="/">
            
             <p className="text-white  font-bold bg-blue-500  rounded-full px-4 py-2 hover:bg-orange-500 "> Login ✌️</p>
            </Link>
          </div>
     
      </div>
    </header>

  );
};

export default Navbar;
