import React, { Component } from 'react';
import CategoryService from '../services/CategoryService';
import ExpenseService from '../services/ExpenseService';

class ViewCategoryComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            categoryId: this.props.match.params.categoryId,
            category: {},
            expenses: []
        }

        this.addExpense = this.addExpense.bind(this);
        this.editExpense = this.editExpense.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
        this.viewExpense = this.viewExpense.bind(this);
    }

    viewExpense(expenseId){
        this.props.history.push(`/view-expense/${expenseId}`);
    }

    deleteExpense(expenseId){
        //rest api call
        ExpenseService.deleteExpense(this.state.categoryId, expenseId).then( res => {
            this.setState({expenses: this.state.expenses.filter(expense => expense.expenseId !== expenseId)});
        });
    }

    editExpense(expenseId){
        this.props.history.push(`/update-expense/${expenseId}`);
    }

    addExpense(){
        this.props.history.push('/add-expense');
    }
    //make rest api call or ajax call (this method is called right after a component is mounted)
    componentDidMount(){
        CategoryService.getCategoryById(this.state.categoryId).then( res => {
            this.setState({category: res.data});
        });

        ExpenseService.getExpenses(this.state.categoryId).then((res) =>{
            this.setState({expenses: res.data}); //stored response data into expense array
        });
    }

    //this method shows data in the webpage
    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Category Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Category Name: </label>
                            <div>{this.state.category.categoryName}</div>
                        </div>
                        <div className = "row">
                            <label>Initial Amount: </label>
                            <div>{this.state.category.initialAmount}</div>
                        </div>
                        <div className = "row">
                            <label>Current Amount: </label>
                            <div>{this.state.category.currentAmount}</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-center">Expense List</h2>
                    <div className = "row">
                        <button className = "btn btn-primary" onClick={this.addExpense}>Add Expense</button>
                    </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Expense Name</th>
                                <th>Expense Price</th>
                                <th>Created Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.expenses.map(
                                    expense => 
                                    <tr key = {expense.expenseId}>
                                        <td>{expense.expenseName}</td>
                                        <td>{expense.expensePrice}</td>
                                        <td>{expense.createdDate}</td>
                                        <td>
                                            <button onClick={ () => this.editExpense(expense.expenseId)}
                                            className="btn btn-info">Update</button>
                                            <button style = {{marginLeft: "10px"}} onClick={ () => this.deleteExpense(expense.expenseId)}
                                            className="btn btn-danger">Delete</button>
                                            <button style = {{marginLeft: "10px"}} onClick={ () => this.viewExpense(expense.expenseId)}
                                            className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ViewCategoryComponent;