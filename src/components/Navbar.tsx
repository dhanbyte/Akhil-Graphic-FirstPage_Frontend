import { FiSearch, FiGrid, FiBell, FiSettings } from "react-icons/fi";
import { FaFlagUsa } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex  justify-between items-center bg-white  px-6 pr-12 shadow-sm ">
      {/* Left Section */}
      <div className="flex items-center gap-4 ">
        <img
          src="https://akhilgraphics.in/wp-content/uploads/2021/11/cropped-logo-1-1-300x300.png"
          alt="Logo"
          className="md:h-16 h-8"
        />

     
        <div className=" items-center gap-2 hidden md:block    pl-[10vw] cursor-pointer">
          <span>Components ▼</span>
        </div>
        <div className=" items-center gap-2 hidden md:block cursor-pointer">
          <span>Categories ▼</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <FiSearch className="text-gray-600 text-sm md:text-lg cursor-pointer" />
        <FaFlagUsa className="text-gray-600 text-sm md:text-lg cursor-pointer" />
        <FiGrid className="text-gray-600 text-sm md:text-lg cursor-pointer" />
        <FiBell className="text-gray-600 text-sm md:text-lg cursor-pointer relative">
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            •
          </span>
        </FiBell>
        <FiSettings className="text-gray-600 text-lg cursor-pointer" />
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
