import axiosInstance from "../utils/axiosInstance";

export const getBlogs = async () => {
  try {
    const response = await axiosInstance.get("/api/admin/media-blogs");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    throw error;
  }
};