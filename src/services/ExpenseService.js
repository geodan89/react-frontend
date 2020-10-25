import axios from 'axios';

const EXPENSE_API_BASE_URL2 = "http://localhost:8080/api/v1/category";


class ExpenseService{

    getExpenses(categoryId){
        return axios.get(EXPENSE_API_BASE_URL2 + "/" + categoryId + "/expenses");
    }

    createExpense(categoryId, expense){
        return axios.post(EXPENSE_API_BASE_URL2 + "/" + categoryId + "/expense", expense);
    }

    getExpenseById(categoryId, expenseId){
        return axios.get(EXPENSE_API_BASE_URL2 + "/" + categoryId + "/expense" + "/" + expenseId);
    }

    updateExpense(categoryId, expense, expenseId){
        return axios.put(EXPENSE_API_BASE_URL2 + "/" + categoryId + "/expense" + "/" + expenseId, expense);
    }

    deleteExpense(categoryId, expenseId){
        return axios.delete(EXPENSE_API_BASE_URL2 + "/" + categoryId + "/expense/" + expenseId);
    }
}

export default new ExpenseService()
