export const submitContactForm = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        reject(new Error("Please fill in all required fields"));
        return;
      }
      
      // Simulate successful submission
      resolve({
        success: true,
        message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
        submittedAt: new Date().toISOString()
      });
    }, 500);
  });
};