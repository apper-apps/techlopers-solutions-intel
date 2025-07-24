import { motion } from "framer-motion";
import Logo from "@/components/molecules/Logo";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const services = [
    "Software Development",
    "Cloud Solutions",
    "Cybersecurity",
    "IT Infrastructure",
    "Digital Transformation",
    "IT Consulting"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Logo className="text-white" />
            <p className="text-gray-300 leading-relaxed">
              Leading IT services and software development company in Delhi, 
              established in 2016. Registered under Companies Act 2013.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <ApperIcon name="Linkedin" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <ApperIcon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <ApperIcon name="Facebook" className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold font-display">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a 
                    href={link.path} 
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ApperIcon name="ChevronRight" className="w-4 h-4" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold font-display">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold font-display">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <ApperIcon name="MapPin" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">New Delhi, Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <ApperIcon name="Phone" className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+91-11-4567-8900" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  +91-11-4567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@techlopers.com" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  info@techlopers.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Techlopers Solutions Private Limited. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <ApperIcon name="Award" className="w-4 h-4 text-primary" />
              <span>Registered under Companies Act 2013</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;