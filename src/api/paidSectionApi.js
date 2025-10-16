import axiosInstance from "../utils/axiosInstance";

export const getPaidBenefits = async () => {
  try {
    const response = await axiosInstance.get("/api/admin/benefits");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching paid benefits:", error);
    throw error;
  }
};