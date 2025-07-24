import { motion } from "framer-motion";
import ContactForm from "@/components/molecules/ContactForm";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Office Address",
      details: ["New Delhi", "Delhi, India"],
      color: "from-primary to-accent"
    },
    {
      icon: "Phone",
      title: "Phone Number",
      details: ["+91-11-4567-8900"],
      color: "from-secondary to-blue-600"
    },
    {
      icon: "Mail",
      title: "Email Address",
      details: ["info@techlopers.com", "support@techlopers.com"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: "Clock",
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const socialLinks = [
    { icon: "Linkedin", href: "#", label: "LinkedIn" },
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Facebook", href: "#", label: "Facebook" },
    { icon: "Instagram", href: "#", label: "Instagram" }
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
              Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-body leading-relaxed">
              Ready to transform your business with innovative IT solutions? 
              Let's discuss your project requirements and how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="gradient" hover={true} className="text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <ApperIcon name={info.icon} className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 font-display mb-4">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 font-body">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="gradient" className="h-full">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 font-display mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 font-body leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours. 
                    Let's start building your digital future together.
                  </p>
                </div>
                
                <ContactForm />
              </Card>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Contact Us */}
              <Card variant="gradient">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <ApperIcon name="MessageCircle" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-display">
                    Why Contact Us?
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Free consultation and project assessment",
                    "Customized solutions for your business needs",
                    "Expert guidance from experienced professionals",
                    "Transparent pricing with no hidden costs",
                    "Ongoing support and maintenance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ApperIcon name="CheckCircle" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-600 font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Response Time */}
              <Card variant="highlighted">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                    <ApperIcon name="Clock" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-display">
                    Quick Response
                  </h3>
                </div>
                
                <p className="text-gray-600 font-body leading-relaxed mb-4">
                  We understand that time is crucial for your business. That's why we guarantee:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-600 font-body">Initial response within 4 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-gray-600 font-body">Detailed proposal within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600 font-body">Project kickoff within 1 week</span>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card variant="gradient">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 font-display mb-4">
                    Follow Us
                  </h3>
                  <p className="text-gray-600 font-body mb-6">
                    Stay connected with us on social media for updates and insights
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center hover:from-primary hover:to-accent transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <ApperIcon 
                          name={social.icon} 
                          className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" 
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location */}
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
              Visit Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Office</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
              Located in the heart of Delhi, we're easily accessible and always ready to meet with clients
            </p>
          </motion.div>

          <Card variant="gradient" className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-display mb-6">
                  Techlopers Solutions Private Limited
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ApperIcon name="MapPin" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600">New Delhi, Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <ApperIcon name="Building" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Registration</p>
                      <p className="text-gray-600">Companies Act 2013</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <ApperIcon name="Calendar" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Established</p>
                      <p className="text-gray-600">2016</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name="Building2" className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 font-display mb-2">
                  Modern Office Space
                </h4>
                <p className="text-gray-600 font-body">
                  State-of-the-art facilities designed for collaboration and innovation
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;