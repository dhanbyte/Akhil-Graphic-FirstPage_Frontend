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

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(false);
  const [order, setOrder] = useState(false);

  const toggleSection = (section: string) => {
    if (section === "product") setProduct(!product);
    if (section === "order") setOrder(!order);
  };

  return (
    <div>
      <aside className="w-64   bg-white h-screen shadow-xl p-4 text-gray-700">
        <nav>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">DASHBOARDS</h2>

          <Link to="/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiMonitor />
            <span className="flex-1">Sales</span>
            <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">5+</span>
          </Link>

          {/* E-commerce Dropdown */}
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 w-full text-left justify-between"
            >
              <div className="flex items-center gap-3">
                <FiMonitor /> <span className="flex-1">E-commerce</span>
              </div>
              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <FiChevronDown />
              </motion.div>
            </button>

            {open && (
              <div className="ml-6 mt-2">
                <button
                  onClick={() => toggleSection("product")}
                  className="cursor-pointer flex justify-between w-full px-4 py-2 hover:bg-gray-100 rounded"
                >
                  <span className="flex items-center gap-3">
                    <AiOutlineProduct /> Products
                  </span>
                  <motion.div animate={{ rotate: product ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <FiChevronDown />
                  </motion.div>
                </button>

                {product && (
                  <div>
                    <Link to="/productslist" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <MdChecklist /> Product List
                      </span>
                    </Link>
                    <Link to="/productsdetails" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <TbListDetails /> Product Details
                      </span>
                    </Link>
                    <Link to="/addproduct" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <MdAddBusiness /> Add Product
                      </span>
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => toggleSection("order")}
                  className="cursor-pointer flex justify-between w-full px-4 py-2 hover:bg-gray-100 rounded"
                >
                  <span className="flex items-center gap-3">
                    <MdOutlineFavoriteBorder /> Orders
                  </span>
                  <motion.div animate={{ rotate: order ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <FiChevronDown />
                  </motion.div>
                </button>

                {order && (
                  <div>
                    <Link to="/customerdetails" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <FaUsers /> Customer Details
                      </span>
                    </Link>
                    <Link to="/billing" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <FaMoneyBillTransfer /> Billing
                      </span>
                    </Link>
                    <Link to="/invoice" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="flex items-center gap-3">
                        <AiOutlineProduct /> Invoice
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Applications Section */}
          <h2 className="text-sm font-semibold text-gray-400 mt-4 mb-2">APPLICATIONS</h2>
          <Link to="/calendar" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiCalendar /> <span className="flex-1">Calendar</span>
          </Link>

          <Link to="/chat" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiMessageSquare /> <span className="flex-1">Chat</span>
            <span className="bg-red-200 text-red-600 text-xs px-2 py-1 rounded-full">Hot</span>
          </Link>

          <Link to="/kanban" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiColumns /> <span className="flex-1">Kanban Board</span>
          </Link>

          <Link to="/filemanager" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiFolder /> <span className="flex-1">File Manager</span>
          </Link>

          <h2 className="text-sm font-semibold text-gray-400 mt-4 mb-2">LAYOUTS</h2>
          <Link to="/horizontal" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
            <FiLayout /> <span>Horizontal</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
}
