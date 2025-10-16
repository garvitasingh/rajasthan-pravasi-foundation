import axiosInstance from "../utils/axiosInstance";

export const getFeaturedEvents = async () => {
  try {
    const response = await axiosInstance.get("/api/admin/events");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching featured events:", error);
    throw error;
  }
};