import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        variant="gradient" 
        hover={true}
        className="h-full group"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <ApperIcon name={service.icon} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 font-display group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6 font-body leading-relaxed flex-grow">
            {service.description}
          </p>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700 font-display">
              Key Features:
            </h4>
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                  <ApperIcon name="CheckCircle" className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;