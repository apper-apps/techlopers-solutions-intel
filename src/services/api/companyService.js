const { ApperClient } = window.ApperSDK;

const apperClient = new ApperClient({
  apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
  apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
});

export const getCompanyInfo = async () => {
  try {
    const params = {
      fields: [
        { field: { Name: "Name" } },
        { field: { Name: "established" } },
        { field: { Name: "registration" } },
        { field: { Name: "location" } },
        { field: { Name: "address" } },
        { field: { Name: "phone" } },
        { field: { Name: "email" } },
        { field: { Name: "website" } },
        { field: { Name: "tagline" } },
        { field: { Name: "description" } },
        { field: { Name: "mission" } },
        { field: { Name: "vision" } },
        { field: { Name: "values" } }
      ],
      pagingInfo: {
        limit: 1,
        offset: 0
      }
    };
    
    const response = await apperClient.fetchRecords('company_info', params);
    
    if (!response.success) {
      console.error("Error fetching company info:", response.message);
      throw new Error(response.message);
    }
    
    // Return first record or empty object if no data
    if (!response.data || response.data.length === 0) {
      return {};
    }
    
    const companyData = response.data[0];
    
    // Transform values field from comma-separated string to array
    if (companyData.values) {
      companyData.values = companyData.values.split(',').map(v => v.trim());
    }
    
    return companyData;
  } catch (error) {
    if (error?.response?.data?.message) {
      console.error("Error fetching company info:", error?.response?.data?.message);
    } else {
      console.error("Error fetching company info:", error.message);
    }
    throw error;
  }
};