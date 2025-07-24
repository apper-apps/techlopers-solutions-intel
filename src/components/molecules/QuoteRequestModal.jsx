import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Select from "@/components/atoms/Select";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import { submitQuoteRequest } from "@/services/api/contactService";

const QuoteRequestModal = ({ isOpen, onClose, services = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: ""
      });
      setErrors({});
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    
    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }
    
    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await submitQuoteRequest(formData);
      toast.success(response.message);
      onClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">
                    Request Custom Quote
                  </h2>
                  <p className="text-gray-600 font-body mt-1">
                    Get a personalized proposal for your project
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ApperIcon name="X" className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Enter your full name"
                  />
                  
                  <Input
                    label="Email Address *"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                  
                  <Input
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Service Required *"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    error={errors.service}
                  >
                    <option value="">Select a service</option>
                    <option value="software-development">Software Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="it-infrastructure">IT Infrastructure</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </Select>
                  
                  <Select
                    label="Project Type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Select project type</option>
                    <option value="new-development">New Development</option>
                    <option value="enhancement">Enhancement/Upgrade</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="migration">Migration</option>
                    <option value="integration">Integration</option>
                    <option value="consulting">Consulting Only</option>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Budget Range *"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    error={errors.budget}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="over-250k">Over $250,000</option>
                  </Select>
                  
                  <Select
                    label="Timeline *"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    error={errors.timeline}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush)</option>
                    <option value="1-2-months">1-2 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6-12-months">6-12 Months</option>
                    <option value="over-12-months">Over 12 Months</option>
                    <option value="flexible">Flexible</option>
                  </Select>
                </div>
                
                <Textarea
                  label="Project Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, goals, and any specific technical needs..."
                  rows={4}
                />
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? "Submitting..." : "Request Quote"}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteRequestModal;