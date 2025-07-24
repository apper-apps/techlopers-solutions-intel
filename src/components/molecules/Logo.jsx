import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Logo = ({ className = "" }) => {
  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
          <ApperIcon name="Code" className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
          <ApperIcon name="Zap" className="w-2 h-2 text-white" />
        </div>
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
  );
};

export default Logo;