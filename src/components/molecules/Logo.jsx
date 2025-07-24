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
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FDelhi%2FOnline-Branding-in-Nehru-Place%2Fnct-10887645%2Fpage-5&psig=AOvVaw32KLrDdEBkCHzmFUT1ACRB&ust=1753460690137000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJidscH01Y4DFQAAAAAdAAAAABAE"
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