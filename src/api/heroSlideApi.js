// src/api/heroSlideApi.js
import axiosInstance from "../utils/axiosInstance";

export const getHeroSlides = async () => {
  try {
    const response = await axiosInstance.get("/api/admin/hero-slides");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching hero slides:", error);
    throw error;
  }
};
