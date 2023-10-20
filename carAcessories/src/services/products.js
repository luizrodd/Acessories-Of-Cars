import instance from "../common/config/api";

const productsService = {
  getProducts: async () => {
    const response = await instance.get("/products");
    return response.data;
  },
  getProductById: async (id) => {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  },
  updateFavorite: async (id, favorite) => {
    const response = await instance.put(`/products/${id}`, { favorite });
    return response.data;
  },
};

export default productsService;
