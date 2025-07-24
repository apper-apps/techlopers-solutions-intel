import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ServiceCard from "@/components/molecules/ServiceCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import ApperIcon from "@/components/ApperIcon";
import { getAllServices } from "@/services/api/serviceService";
import { getCompanyInfo } from "@/services/api/companyService";

const Home = () => {
  const [services, setServices] = useState([]);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");
      
      const [servicesData, companyData] = await Promise.all([
        getAllServices(),
        getCompanyInfo()
      ]);
      
      setServices(servicesData.slice(0, 3)); // Show first 3 services on homepage
      setCompanyInfo(companyData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} onRetry={loadData} />;
  }

  const stats = [
    { label: "Years of Experience", value: "8+", icon: "Calendar" },
    { label: "Projects Completed", value: "150+", icon: "CheckCircle" },
    { label: "Happy Clients", value: "100+", icon: "Users" },
    { label: "Team Members", value: "25+", icon: "UserCheck" }
  ];

  return (
    <div className="min-h-screen">
{/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523FF6B35%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 font-display leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Innovative 
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> IT Solutions</span>
                  <br />for Modern Businesses
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed font-body"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {companyInfo?.description}
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    <ApperIcon name="MessageCircle" className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </Button>
                </Link>
                
                <Link to="/services">
                  <Button variant="outlined" size="lg" className="w-full sm:w-auto">
                    <ApperIcon name="ArrowRight" className="w-5 h-5 mr-2" />
                    View Our Services
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Award" className="w-5 h-5 text-primary" />
                  <span className="text-sm text-gray-600 font-medium">
                    Since {companyInfo?.established}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <ApperIcon name="MapPin" className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-gray-600 font-medium">
                    Delhi Based
                  </span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <motion.div 
                  className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {["Code", "Cloud", "Shield", "Server"].map((icon, index) => (
                      <motion.div
                        key={icon}
                        className="bg-white/80 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <ApperIcon name={icon} className="w-12 h-12 text-primary" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <ApperIcon name="Zap" className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ApperIcon name={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-900 font-display mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-display mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
              We deliver comprehensive IT solutions that drive innovation and business growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={service.Id} service={service} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/services">
              <Button variant="primary" size="lg">
                <ApperIcon name="Grid" className="w-5 h-5 mr-2" />
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-display mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Techlopers?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "Proven Expertise",
                description: "8+ years of experience delivering successful IT projects across diverse industries"
              },
              {
                icon: "Users",
                title: "Dedicated Team",
                description: "Skilled professionals committed to understanding and exceeding your expectations"
              },
              {
                icon: "Zap",
                title: "Latest Technology",
                description: "We leverage cutting-edge technologies to build future-ready solutions"
              },
              {
                icon: "Clock",
                title: "Timely Delivery",
                description: "We respect deadlines and ensure projects are completed on time, every time"
              },
              {
                icon: "Shield",
                title: "Secure Solutions",
                description: "Security-first approach with robust protection for your data and systems"
              },
              {
                icon: "HeadphonesIcon",
                title: "24/7 Support",
                description: "Round-the-clock support to ensure your systems run smoothly"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="gradient" hover={true} className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <ApperIcon name={feature.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 font-display mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-display">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-body leading-relaxed">
              Let's discuss how our IT solutions can drive your business forward. 
              Get a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <ApperIcon name="Phone" className="w-5 h-5 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outlined" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <ApperIcon name="Info" className="w-5 h-5 mr-2" />
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;