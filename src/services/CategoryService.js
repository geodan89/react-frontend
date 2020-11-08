import axios from 'axios';

const CATEGORY_API_BASE_URL = "https://my-budget-app-1604840039915.azurewebsites.net/api/v1/categories";
const CATEGORY_API_CREATE_URL = "https://my-budget-app-1604840039915.azurewebsites.net/api/v1/category";
const CATEGORY_API_BASE_URL2 = "https://my-budget-app-1604840039915.azurewebsites.net/api/v1/category";

class CategoryService{

    getCategories(){
        return axios.get(CATEGORY_API_BASE_URL);
    }

    createCategory(category){
        return axios.post(CATEGORY_API_CREATE_URL, category);
    }

    getCategoryById(categoryId){
        return axios.get(CATEGORY_API_BASE_URL2 + '/' + categoryId);
    }

    updateCategory(category, categoryId){
        return axios.put(CATEGORY_API_BASE_URL2 + '/' + categoryId, category);
    }

    deleteCategory(categoryId){
        return axios.delete(CATEGORY_API_BASE_URL2 + '/' + categoryId);
    }
}

export default new CategoryService()