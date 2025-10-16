// src/api/missionApi.js
import axiosInstance from "../utils/axiosInstance";

export const getMissionCards = async () => {
  try {
    const response = await axiosInstance.get("/api/admin/mission-cards");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching mission cards:", error);
    throw error;
  }
};
