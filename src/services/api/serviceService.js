import servicesData from "@/services/mockData/services.json";

export const getAllServices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(servicesData.map(service => ({ ...service })));
    }, 300);
  });
};

export const getServiceById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const service = servicesData.find(s => s.Id === parseInt(id));
      if (service) {
        resolve({ ...service });
      } else {
        reject(new Error("Service not found"));
      }
    }, 250);
  });
};