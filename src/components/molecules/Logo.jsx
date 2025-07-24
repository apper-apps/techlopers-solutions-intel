import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/">
      <motion.div 
        className={`flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity ${className}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <img 
            src="https://content.jdmagicbox.com/v2/comp/delhi/k4/011pxx11.xx11.160322121532.x7k4/catalogue/techlopers-solutions-pvt-ltd-laxmi-nagar-delhi-logo-designers-ucan4jlj72.jpg"
            alt="Techlopers Solutions Logo"
            className="w-10 h-10 object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-800 font-display">
            Techlopers
          </span>
          <span className="text-xs text-primary font-medium -mt-1">
            Solutions
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo;