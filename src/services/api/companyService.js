import companyData from "@/services/mockData/companyInfo.json";

export const getCompanyInfo = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...companyData });
    }, 200);
  });
};