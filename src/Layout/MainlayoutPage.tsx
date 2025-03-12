import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Leftside from "../Left-side/Leftside";

export default function MainlayoutPage() {
  return (
    <div className="flex flex-col h-screen">
    <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-sm">
    <Navbar />

    </div>

    <div className="flex py-[9vh] flex-1">
     <div className=" p- hidden md:block">
        <Leftside />
     </div>
      <div className="flex-1 p-4 pl-[15vw] bg-gray-100 lg:pl-2 ">
        <Outlet /> {/* Yeh jagah dynamic content load karega */}
      </div>
      </div>
      </div>  
  )
}
