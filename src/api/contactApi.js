import axiosInstance from "../utils/axiosInstance";

export const sendContactMessage = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/admin/contact-messages", payload);
    return response.data;
  } catch (error) {
    console.error("❌ Error sending contact message:", error);
    throw error;
  }
};