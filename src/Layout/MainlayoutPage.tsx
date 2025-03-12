import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Leftside from "../Left-side/Leftside";

export default function MainlayoutPage() {
  return (
    <div className="flex flex-col h-screen">
    
    <Navbar />

    <div className="flex flex-1">
     <div className="w-1/4  p- hidden md:block">
        <Leftside />
     </div>
      <div className="flex-1 p-4  ">
        <Outlet /> {/* Yeh jagah dynamic content load karega */}
      </div>
      </div>
      </div>  
  )
}
