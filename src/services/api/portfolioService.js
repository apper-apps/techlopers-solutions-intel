import portfolioData from "@/services/mockData/portfolioData.json";

export const getAllProjects = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...portfolioData]);
    }, 300);
  });
};

export const getProjectById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const project = portfolioData.find(p => p.Id === parseInt(id));
      if (project) {
        resolve({ ...project });
      } else {
        reject(new Error("Project not found"));
      }
    }, 250);
  });
};

export const createProject = async (projectData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newId = Math.max(...portfolioData.map(p => p.Id)) + 1;
      const newProject = {
        Id: newId,
        ...projectData,
        createdAt: new Date().toISOString()
      };
      portfolioData.push(newProject);
      resolve({ ...newProject });
    }, 400);
  });
};

export const updateProject = async (id, projectData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = portfolioData.findIndex(p => p.Id === parseInt(id));
      if (index !== -1) {
        portfolioData[index] = {
          ...portfolioData[index],
          ...projectData,
          Id: parseInt(id),
          updatedAt: new Date().toISOString()
        };
        resolve({ ...portfolioData[index] });
      } else {
        reject(new Error("Project not found"));
      }
    }, 400);
  });
};

export const deleteProject = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = portfolioData.findIndex(p => p.Id === parseInt(id));
      if (index !== -1) {
        const deletedProject = portfolioData.splice(index, 1)[0];
        resolve({ ...deletedProject });
      } else {
        reject(new Error("Project not found"));
      }
    }, 300);
  });
};