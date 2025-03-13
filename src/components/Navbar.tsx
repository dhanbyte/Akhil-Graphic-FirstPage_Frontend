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
        <Link to="/services">
          
          <span>Portfolio </span>
          </Link>
        </div>
        <div className="lg:text-xl items-center gap-4 hidden md:block cursor-pointer">
        <Link to="/services">
          
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
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/1.jpg"
            alt="Profile"
            className="w-6 h-6 md:w-8 md:h-8 rounded-full"
          />
          <div>
            <span className="hidden md:block  font-semibold">Kate Dudley</span>
            <span className="text-xs hidden md:block  text-gray-500">
              Administrator
            </span>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
