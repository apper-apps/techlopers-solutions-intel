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

export const submitQuoteRequest = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.service || !formData.budget || !formData.timeline) {
        reject(new Error("Please fill in all required fields"));
        return;
      }
      
      // Simulate successful submission
      resolve({
        success: true,
        message: "Thank you for your quote request! We'll prepare a customized proposal and get back to you within 24 hours.",
        submittedAt: new Date().toISOString(),
        quoteId: `QR-${Date.now()}`
      });
    }, 500);
  });
};