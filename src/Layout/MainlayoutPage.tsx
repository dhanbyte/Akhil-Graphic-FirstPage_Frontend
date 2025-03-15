import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Leftside from "../Left-side/Leftside";
import ScrollToTop from "../components/ScrollToTop";
export default function MainlayoutPage() {
  return (
    <div className="flex flex-col h-screen">
      <ScrollToTop />
    <div className="fixed top-1   left-0 w-full z-10 bg-white shadow-sm">
    <Navbar />

    </div>

    <div className="flex py-[9vh] flex-1">
      <div className=" p- hidden lg:block">
        <Leftside />
     </div>
      <div className="flex-1 p-4 bg-gray-100  lg:pl-[4vw]  ">
        <Outlet /> {/* Yeh jagah dynamic content load karega */}
      </div>

    
      </div>
      </div>  
  )
}
