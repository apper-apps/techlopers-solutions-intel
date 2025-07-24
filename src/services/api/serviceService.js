const { ApperClient } = window.ApperSDK;

const apperClient = new ApperClient({
  apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
  apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
});

export const getAllServices = async () => {
  try {
    const params = {
      fields: [
        { field: { Name: "Name" } },
        { field: { Name: "title" } },
        { field: { Name: "description" } },
        { field: { Name: "icon" } },
        { field: { Name: "features" } },
        { field: { Name: "technologies" } }
      ],
      orderBy: [
        {
          fieldName: "Id",
          sorttype: "ASC"
        }
      ]
    };
    
    const response = await apperClient.fetchRecords('service', params);
    
    if (!response.success) {
      console.error("Error fetching services:", response.message);
      throw new Error(response.message);
    }
    
    if (!response.data || response.data.length === 0) {
      return [];
    }
    
    // Transform multi-picklist fields from comma-separated strings to arrays
    return response.data.map(service => ({
      ...service,
      features: service.features ? service.features.split(',').map(f => f.trim()) : [],
      technologies: service.technologies ? service.technologies.split(',').map(t => t.trim()) : []
    }));
  } catch (error) {
    if (error?.response?.data?.message) {
      console.error("Error fetching services:", error?.response?.data?.message);
    } else {
      console.error("Error fetching services:", error.message);
    }
    throw error;
  }
};

export const getServiceById = async (id) => {
  try {
    const params = {
      fields: [
        { field: { Name: "Name" } },
        { field: { Name: "title" } },
        { field: { Name: "description" } },
        { field: { Name: "icon" } },
        { field: { Name: "features" } },
        { field: { Name: "technologies" } }
      ]
    };
    
    const response = await apperClient.getRecordById('service', parseInt(id), params);
    
    if (!response.success) {
      console.error(`Error fetching service with ID ${id}:`, response.message);
      throw new Error(response.message);
    }
    
    if (!response.data) {
      throw new Error("Service not found");
    }
    
    const service = response.data;
    
    // Transform multi-picklist fields
    return {
      ...service,
      features: service.features ? service.features.split(',').map(f => f.trim()) : [],
      technologies: service.technologies ? service.technologies.split(',').map(t => t.trim()) : []
    };
  } catch (error) {
    if (error?.response?.data?.message) {
      console.error(`Error fetching service with ID ${id}:`, error?.response?.data?.message);
    } else {
      console.error(`Error fetching service with ID ${id}:`, error.message);
    }
    throw error;
  }
};