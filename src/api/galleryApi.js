import axiosInstance from "../utils/axiosInstance";

export const getGalleryItems = async () => {
  try {
    const response = await axiosInstance.get("/api/admin/gallery");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching gallery items:", error);
    throw error;
  }
};