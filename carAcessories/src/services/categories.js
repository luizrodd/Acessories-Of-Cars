import instance from "../common/config/api"

const categoriesService = {
    getCategories: async () => {
        const response = await instance.get('/categories')
        return response.data
    },
    getCategoryById: async (id) => {
        const response = await instance.get(`/categories/${id}`)
        return response.data
    }
}

export default categoriesService