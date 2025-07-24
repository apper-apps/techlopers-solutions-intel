const { ApperClient } = window.ApperSDK;

const apperClient = new ApperClient({
  apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
  apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
});

export const getAllProjects = async () => {
  try {
    const params = {
      fields: [
        { field: { Name: "Name" } },
        { field: { Name: "title" } },
        { field: { Name: "description" } },
        { field: { Name: "service_type" } },
        { field: { Name: "industry" } },
        { field: { Name: "technologies" } },
        { field: { Name: "completed_date" } },
        { field: { Name: "duration" } },
        { field: { Name: "client_name" } },
        { field: { Name: "status" } },
        { field: { Name: "image_url" } },
        { field: { Name: "features" } }
      ],
      orderBy: [
        {
          fieldName: "Id",
          sorttype: "DESC"
        }
      ]
    };
    
    const response = await apperClient.fetchRecords('portfolio', params);
    
    if (!response.success) {
      console.error("Error fetching portfolio projects:", response.message);
      throw new Error(response.message);
    }
    
    if (!response.data || response.data.length === 0) {
      return [];
    }
    
    // Transform multi-picklist fields from comma-separated strings to arrays
    return response.data.map(project => ({
      ...project,
      technologies: project.technologies ? project.technologies.split(',').map(t => t.trim()) : [],
      features: project.features ? project.features.split(',').map(f => f.trim()) : [],
      serviceType: project.service_type,
      completedDate: project.completed_date,
      clientName: project.client_name,
      imageUrl: project.image_url
    }));
  } catch (error) {
    if (error?.response?.data?.message) {
      console.error("Error fetching portfolio projects:", error?.response?.data?.message);
    } else {
      console.error("Error fetching portfolio projects:", error.message);
    }
    throw error;
  }
};

export const getProjectById = async (id) => {
  try {
    const params = {
      fields: [
        { field: { Name: "Name" } },
        { field: { Name: "title" } },
        { field: { Name: "description" } },
        { field: { Name: "service_type" } },
        { field: { Name: "industry" } },
        { field: { Name: "technologies" } },
        { field: { Name: "completed_date" } },
        { field: { Name: "duration" } },
        { field: { Name: "client_name" } },
        { field: { Name: "status" } },
        { field: { Name: "image_url" } },
        { field: { Name: "features" } }
      ]
    };
    
    const response = await apperClient.getRecordById('portfolio', parseInt(id), params);
    
    if (!response.success) {
      console.error(`Error fetching project with ID ${id}:`, response.message);
      throw new Error(response.message);
    }
    
    if (!response.data) {
      throw new Error("Project not found");
    }
    
    const project = response.data;
    
    // Transform fields for compatibility
    return {
      ...project,
      technologies: project.technologies ? project.technologies.split(',').map(t => t.trim()) : [],
      features: project.features ? project.features.split(',').map(f => f.trim()) : [],
      serviceType: project.service_type,
      completedDate: project.completed_date,
      clientName: project.client_name,
      imageUrl: project.image_url
    };
  } catch (error) {
    if (error?.response?.data?.message) {
      console.error(`Error fetching project with ID ${id}:`, error?.response?.data?.message);
    } else {
      console.error(`Error fetching project with ID ${id}:`, error.message);
    }
    throw error;
  }
};

export const createProject = async (projectData) => {
  try {
    // Only include Updateable fields
    const updateableData = {
      Name: projectData.Name || projectData.title,
      title: projectData.title,
      description: projectData.description,
      service_type: projectData.service_type || projectData.serviceType,
      industry: projectData.industry,
      technologies: Array.isArray(projectData.technologies) ? projectData.technologies.join(',') : projectData.technologies,
      completed_date: projectData.completed_date || projectData.completedDate,
      duration: projectData.duration,
      client_name: projectData.client_name || projectData.clientName,
      status: projectData.status,
      image_url: projectData.image_url || projectData.imageUrl,
      features: Array.isArray(projectData.features) ? projectData.features.join(',') : projectData.features
    };
    
    const params = {
      records: [updateableData]
    };
    
    const response = await apperClient.createRecord('portfolio', params);
    
    if (!response.success) {
      console.error("Error creating portfolio project:", response.message);
      throw new Error(response.message);
    }
    
    if (response.results) {
      const successfulRecords = response.results.filter(result => result.success);
      const failedRecords = response.results.filter(result => !result.success);
      
      if (failedRecords.length > 0) {
        console.error(`Failed to create portfolio project ${failedRecords.length} records:${JSON.stringify(failedRecords)}`);
        
        failedRecords.forEach(record => {
          record.errors?.forEach(error => {
            throw new Error(`${error.fieldLabel}: ${error.message}`);
          });
          if (record.message) throw new Error(record.message);
        });
      }
      
      return successfulRecords[0]?.data;
    }
  } catch (error) {
    if (error?.response?.data?.message) {
      console.error("Error creating portfolio project:", error?.response?.data?.message);
    } else {
      console.error("Error creating portfolio project:", error.message);
    }
    throw error;
  }
};

export const updateProject = async (id, projectData) => {
  try {
    // Only include Updateable fields
    const updateableData = {
      Id: parseInt(id),
      Name: projectData.Name || projectData.title,
      title: projectData.title,
      description: projectData.description,
      service_type: projectData.service_type || projectData.serviceType,
      industry: projectData.industry,
      technologies: Array.isArray(projectData.technologies) ? projectData.technologies.join(',') : projectData.technologies,
      completed_date: projectData.completed_date || projectData.completedDate,
      duration: projectData.duration,
      client_name: projectData.client_name || projectData.clientName,
      status: projectData.status,
      image_url: projectData.image_url || projectData.imageUrl,
      features: Array.isArray(projectData.features) ? projectData.features.join(',') : projectData.features
    };
    
    const params = {
      records: [updateableData]
    };
    
    const response = await apperClient.updateRecord('portfolio', params);
    
    if (!response.success) {
      console.error("Error updating portfolio project:", response.message);
      throw new Error(response.message);
    }
    
    if (response.results) {
      const successfulUpdates = response.results.filter(result => result.success);
      const failedUpdates = response.results.filter(result => !result.success);
      
      if (failedUpdates.length > 0) {
        console.error(`Failed to update portfolio project ${failedUpdates.length} records:${JSON.stringify(failedUpdates)}`);
        
        failedUpdates.forEach(record => {
          record.errors?.forEach(error => {
            throw new Error(`${error.fieldLabel}: ${error.message}`);
          });
          if (record.message) throw new Error(record.message);
        });
      }
      
      return successfulUpdates[0]?.data;
    }
  } catch (error) {
    if (error?.response?.data?.message) {
      console.error("Error updating portfolio project:", error?.response?.data?.message);
    } else {
      console.error("Error updating portfolio project:", error.message);
    }
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const params = {
      RecordIds: [parseInt(id)]
    };
    
    const response = await apperClient.deleteRecord('portfolio', params);
    
    if (!response.success) {
      console.error("Error deleting portfolio project:", response.message);
      throw new Error(response.message);
    }
    
    if (response.results) {
      const successfulDeletions = response.results.filter(result => result.success);
      const failedDeletions = response.results.filter(result => !result.success);
      
      if (failedDeletions.length > 0) {
        console.error(`Failed to delete portfolio project ${failedDeletions.length} records:${JSON.stringify(failedDeletions)}`);
        
        failedDeletions.forEach(record => {
          if (record.message) throw new Error(record.message);
        });
      }
      
      return successfulDeletions.length > 0;
    }
  } catch (error) {
    if (error?.response?.data?.message) {
      console.error("Error deleting portfolio project:", error?.response?.data?.message);
    } else {
      console.error("Error deleting portfolio project:", error.message);
    }
    throw error;
  }
};