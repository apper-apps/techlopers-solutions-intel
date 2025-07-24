import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/molecules/ServiceCard";
import Card from "@/components/atoms/Card";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import { getAllServices } from "@/services/api/serviceService";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      setError("");
      const servicesData = await getAllServices();
      setServices(servicesData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading type="services" />;
  }

  if (error) {
    return <Error message={error} onRetry={loadServices} />;
  }

  if (services.length === 0) {
    return (
      <Empty 
        title="No Services Available"
        description="We're currently updating our service offerings. Please check back soon!"
        actionLabel="Contact Us"
        onAction={() => window.location.href = "/contact"}
      />
    );
  }

  return (
    <div className="min-h-screen py-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 font-display mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-body leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey. 
              From software development to cloud migration, we have the expertise to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.Id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
              A proven methodology that ensures successful project delivery and exceptional client satisfaction
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your requirements and understand your business objectives",
                icon: "Search"
              },
              {
                step: "02",
                title: "Planning",
                description: "Strategic planning and solution architecture tailored to your needs",
                icon: "FileText"
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development with regular updates and quality assurance",
                icon: "Code"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Seamless deployment with ongoing support and maintenance",
                icon: "Rocket"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="gradient" className="text-center relative h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {process.step}
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ApperIcon name={process.icon} className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 font-display mb-4">
                      {process.title}
                    </h3>
                    
                    <p className="text-gray-600 font-body leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
              We work with the latest and most reliable technologies to build scalable solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", icon: "Code" },
              { name: "Node.js", icon: "Server" },
              { name: "Python", icon: "Terminal" },
              { name: "AWS", icon: "Cloud" },
              { name: "Docker", icon: "Package" },
              { name: "MongoDB", icon: "Database" },
              { name: "PostgreSQL", icon: "HardDrive" },
              { name: "Flutter", icon: "Smartphone" },
              { name: "Java", icon: "Coffee" },
              { name: "Azure", icon: "CloudSnow" },
              { name: "Kubernetes", icon: "Settings" },
              { name: ".NET", icon: "Code2" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <ApperIcon name={tech.icon} className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;