import axiosInstance from "../utils/axiosInstance";

export const getFaqs = async () => {
  try {
    const response = await axiosInstance.get("/api/admin/faqs");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching FAQs:", error);
    throw error;
  }
};