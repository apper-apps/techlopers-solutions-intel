import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No data available", 
  description = "There's nothing to show here right now.",
  actionLabel = "Get Started",
  onAction
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name="Search" className="w-10 h-10 text-primary" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-3 font-display">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-8 font-body leading-relaxed">
          {description}
        </p>
        
        {onAction && (
          <Button onClick={onAction} variant="primary" size="lg">
            <ApperIcon name="Plus" className="w-5 h-5 mr-2" />
            {actionLabel}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Empty;