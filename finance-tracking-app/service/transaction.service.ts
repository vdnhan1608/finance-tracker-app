import api from "@/api/axios";

const transactionService = {
  getTransactions: async () => {
    try {
      const { data } = await api.get("/transactions");
      return data;
    } catch (error) {
      console.error("Axios connection error:", error);
    }
  },
};

export default transactionService;
