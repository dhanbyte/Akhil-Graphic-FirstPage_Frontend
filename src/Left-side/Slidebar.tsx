import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMonitor,
  FiCalendar,
  FiMessageSquare,
  FiColumns,
  FiFolder,
  FiLayout,
  FiChevronDown,
} from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import {
  MdOutlineFavoriteBorder,
  MdAddBusiness,
  MdChecklist,
} from "react-icons/md";
import { FaMoneyBillTransfer, FaUsers } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import  AnimatedWrapper from "../components/AnimatedWrapper";
export default function Sidebar() {
  const [product, setProduct] = useState(false);
  const [order, setOrder] = useState(false);

  const toggleSection = (section: string) => {
    if (section === "product") setProduct(!product);
    if (section === "order") setOrder(!order);
  };

  return (
    <div className="overflow-y-auto">
      <aside className="w-64 text-sm  bg-white h-screen shadow-xl p-4 text-gray-700">
        <AnimatedWrapper from="left">
        <nav>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">User Dashboard</h2>

          <Link to="/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiMonitor />
            <span className="flex-1">User Portal </span>
            <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">5+</span>
          </Link>

          {/* E-commerce Dropdown */}
          <div>
            <button
             
              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 w-full text-left justify-between"
            >
              <div className="flex items-center gap-3">
                <FiMonitor /> <span className="flex-1">E-commerce</span>
           
              </div>
            
            </button>

           
              <div className="ml-6 mt-2">
                <button
                  onClick={() => toggleSection("product")}
                  className="cursor-pointer flex justify-between w-full px-4 py-2 hover:bg-gray-100 rounded"
                >
                  <span className="flex items-center gap-3">
                    <AiOutlineProduct /> Printing Services
                  </span>
                  <motion.div animate={{ rotate: product ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <FiChevronDown />
                  </motion.div>
                </button>

                {product && (
                  <div>
                    <Link to="/businesscards" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <MdChecklist /> Business Cards
                      </span>
                    </Link>
                    <Link to="/flersbrochures" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <TbListDetails /> Flyers & Brochures
                      </span>
                    </Link>
                    <Link to="/posterebanners" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <MdAddBusiness /> Posters & Banners
                      </span>
                    </Link>
                    <Link to="/logodesign" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <MdAddBusiness /> Logo Design
                      </span>
                    </Link>
                    <Link to="/flexbanner" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <MdAddBusiness /> Flex Banner
                      </span>
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => toggleSection("order")}
                  className="cursor-pointer flex justify-between w-full px-4 py-2 hover:bg-gray-100 rounded"
                >
                  <span className="flex items-center gap-2.5 text-sm">
                    <MdOutlineFavoriteBorder />Orders & Support
                  </span>
                  <motion.div animate={{ rotate: order ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <FiChevronDown />
                  </motion.div>
                </button>

                {order && (
                  <div>
                    <Link to="/customerdetails" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <FaUsers /> My Orders
                      </span>
                    </Link>
                    <Link to="/billing" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <FaMoneyBillTransfer /> Track Order
                      </span>
                    </Link>
                    <Link to="/invoice" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <AiOutlineProduct /> FAQs
                      </span>
                    </Link>
                    <Link to="/invoice" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <AiOutlineProduct /> Support Center

                      </span>
                    </Link>
                  </div>
                )}
              </div>
        
          </div>

          {/* Applications Section */}
          <h2 className="text-sm font-semibold text-gray-400 mt-4 mb-2">APPLICATIONS</h2>
          <Link to="/calendar" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiCalendar /> <span className="flex-1">
          Web Design Services</span>
          </Link>

          <Link to="/chat" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiMessageSquare /> <span className="flex-1">Creative Resources</span>
            <span className="bg-red-200 text-red-600 text-xs px-2 py-1 rounded-full">Hot</span>
          </Link>

          <Link to="/kanban" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiColumns /> <span className="flex-1">Promotions</span>
          </Link>

          <Link to="/filemanager" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiFolder /> <span className="flex-1">Insights </span>
          </Link>

          <h2 className="text-sm font-semibold text-gray-400 mt-4 mb-2">Help & Support</h2>
          <Link to="/horizontal" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiLayout /> <span>Get a Quote</span>
          </Link>
          <Link to="/horizontal" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiLayout /> <span>About Us</span>
          </Link>

        </nav>
    </AnimatedWrapper>
      </aside>
    </div>
  );
}
