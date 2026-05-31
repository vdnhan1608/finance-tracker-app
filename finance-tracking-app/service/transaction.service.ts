import api from "@/api/axios";

const transactionService = {
  getTransactions: async () => {
    try {
      const response = await api.get("/transactions");

      console.log("alooo", response.data);
    } catch (error) {
      console.error("Axios connection error:", error);
    }
  },
};

export default transactionService;
