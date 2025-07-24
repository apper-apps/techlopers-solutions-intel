import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name="AlertCircle" className="w-8 h-8 text-red-600" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2 font-display">
          Oops! Something went wrong
        </h3>
        
        <p className="text-gray-600 mb-6 font-body leading-relaxed">
          {message}
        </p>
        
        {onRetry && (
          <Button onClick={onRetry} variant="primary">
            <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Error;