import axiosInstance from "../utils/axiosInstance";

export const getNews = async () => {
  try {
    const response = await axiosInstance.get("/api/admin/news");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching news:", error);
    throw error;
  }
};