import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import ApperIcon from "@/components/ApperIcon";
import { getCompanyInfo } from "@/services/api/companyService";

const About = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCompanyInfo();
  }, []);

  const loadCompanyInfo = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getCompanyInfo();
      setCompanyInfo(data);
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
    return <Error message={error} onRetry={loadCompanyInfo} />;
  }

  const timeline = [
    {
      year: "2016",
      title: "Company Establishment",
      description: "Techlopers Solutions was founded in Delhi with a vision to provide innovative IT solutions"
    },
    {
      year: "2017",
      title: "Legal Registration",
      description: "Officially registered under the Companies Act 2013, establishing our legal foundation"
    },
    {
      year: "2018",
      title: "Service Expansion",
      description: "Expanded our service portfolio to include cloud solutions and cybersecurity"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Helped 50+ businesses navigate digital transformation during the pandemic"
    },
    {
      year: "2022",
      title: "Technology Leadership",
      description: "Became a recognized leader in cutting-edge technology solutions"
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Serving 100+ clients with a team of 25+ skilled professionals"
    }
  ];

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
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Techlopers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-body leading-relaxed">
              {companyInfo?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card variant="highlighted" className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Calendar" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 font-display mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Since {companyInfo?.established}
                </h3>
                <p className="text-gray-600 font-body">Years of Excellence</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="highlighted" className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="MapPin" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 font-display mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Delhi
                </h3>
                <p className="text-gray-600 font-body">Headquartered in India</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="highlighted" className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Award" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 font-display mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Registered
                </h3>
                <p className="text-gray-600 font-body">Companies Act 2013</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="gradient" className="h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <ApperIcon name="Target" className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">Our Mission</h2>
                </div>
                <p className="text-gray-600 font-body leading-relaxed text-lg">
                  {companyInfo?.mission}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="gradient" className="h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <ApperIcon name="Eye" className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">Our Vision</h2>
                </div>
                <p className="text-gray-600 font-body leading-relaxed text-lg">
                  {companyInfo?.vision}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-display mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
              The principles that guide our work and define our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo?.values?.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="gradient" hover={true} className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ApperIcon name="CheckCircle" className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 font-display">
                    {value}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-display mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
              From humble beginnings to becoming a trusted technology partner
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <Card variant="gradient" className="relative">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 font-display">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 font-body leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card variant="highlighted" className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <ApperIcon name="Shield" className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">
                Legal & Compliance Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Company Name</h3>
                  <p className="text-gray-600 mb-4">{companyInfo?.name}</p>
                  
                  <h3 className="font-semibold text-gray-800 mb-2">Registration</h3>
                  <p className="text-gray-600 mb-4">Registered under {companyInfo?.registration}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Established</h3>
                  <p className="text-gray-600 mb-4">{companyInfo?.established}</p>
                  
                  <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-600 mb-4">{companyInfo?.location}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center pt-6">
                <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-600 font-medium">Fully Licensed & Compliant</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;