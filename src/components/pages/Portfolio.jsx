import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Card from "@/components/atoms/Card";
import Select from "@/components/atoms/Select";
import Input from "@/components/atoms/Input";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { getAllProjects } from "@/services/api/portfolioService";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    serviceType: "",
    industry: "",
    search: ""
  });

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllProjects();
        setProjects(data);
        setFilteredProjects(data);
      } catch (err) {
        setError(err.message);
        toast.error("Failed to load portfolio projects");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    let filtered = [...projects];

    // Filter by service type
    if (filters.serviceType) {
      filtered = filtered.filter(project => 
        project.serviceType === filters.serviceType
      );
    }

    // Filter by industry
    if (filters.industry) {
      filtered = filtered.filter(project => 
        project.industry === filters.industry
      );
    }

    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.clientName.toLowerCase().includes(searchTerm) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm)
        )
      );
    }

    setFilteredProjects(filtered);
  }, [projects, filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      serviceType: "",
      industry: "",
      search: ""
    });
  };

  // Extract unique service types and industries
  const serviceTypes = [...new Set(projects.map(p => p.serviceType))].sort();
  const industries = [...new Set(projects.map(p => p.industry))].sort();

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-secondary/10 h-48 mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <ApperIcon 
              name="FolderOpen" 
              size={48} 
              className="text-primary/30 group-hover:text-primary/50 transition-colors duration-300" 
            />
          </div>
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'Completed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="space-y-3 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <ApperIcon name="Briefcase" size={16} className="mr-2" />
              <span>{project.serviceType}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <ApperIcon name="Building" size={16} className="mr-2" />
              <span>{project.industry}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <ApperIcon name="Calendar" size={16} className="mr-2" />
              <span>{new Date(project.completedDate).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <ApperIcon name="User" size={16} className="mr-2" />
              <span>{project.clientName}</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">
                Duration: {project.duration}
              </span>
              <ApperIcon 
                name="ExternalLink" 
                size={16} 
                className="text-gray-400 group-hover:text-primary transition-colors duration-300" 
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects across various industries and service types.
            Each project represents our commitment to delivering exceptional technology solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-1">
              <Select
                label="Service Type"
                value={filters.serviceType}
                onChange={(e) => handleFilterChange('serviceType', e.target.value)}
              >
                <option value="">All Service Types</option>
                {serviceTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </Select>
            </div>

            <div className="md:col-span-1">
              <Select
                label="Industry"
                value={filters.industry}
                onChange={(e) => handleFilterChange('industry', e.target.value)}
              >
                <option value="">All Industries</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </Select>
            </div>

            <div className="md:col-span-1">
              <Input
                label="Search"
                placeholder="Search projects..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <button
                onClick={clearFilters}
                className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ApperIcon name="X" size={16} />
                <span>Clear Filters</span>
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
            {(filters.serviceType || filters.industry || filters.search) && (
              <span className="text-primary font-medium">
                Filters applied
              </span>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <Empty 
            message="No projects found matching your criteria"
            description="Try adjusting your filters or search terms"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.Id}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">
                {projects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">
                {serviceTypes.length}
              </div>
              <div className="text-gray-600">Service Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {industries.length}
              </div>
              <div className="text-gray-600">Industries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;