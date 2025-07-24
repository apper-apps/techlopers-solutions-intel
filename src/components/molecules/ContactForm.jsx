import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Select from "@/components/atoms/Select";
import { submitContactForm } from "@/services/api/contactService";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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
      const response = await submitContactForm(formData);
      toast.success(response.message);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      
      <Select
        label="Service of Interest"
        name="service"
        value={formData.service}
        onChange={handleChange}
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
      
      <Textarea
        label="Message *"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us about your project requirements..."
        rows={5}
      />
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </motion.form>
  );
};

export default ContactForm;