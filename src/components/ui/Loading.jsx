import { motion } from "framer-motion";

const Loading = ({ type = "default" }) => {
  if (type === "services") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-32"></div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-4/5"></div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex items-center space-x-3">
        <motion.div
          className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        />
      </div>
    </div>
  );
};

export default Loading;