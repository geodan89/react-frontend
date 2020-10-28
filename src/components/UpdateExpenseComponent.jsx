import React, { Component } from 'react';
import ExpenseService from '../services/ExpenseService';

class UpdateExpenseComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            categoryId: this.props.match.params.categoryId,
            expenseId: this.props.match.params.expenseId,
           expenseName: '',
           expensePrice: ''
        }

        this.changeExpenseNameHandler = this.changeExpenseNameHandler.bind(this);
        this.changeExpensePriceHandler = this.changeExpensePriceHandler.bind(this);
        this.updateExpense = this.updateExpense.bind(this);
    }

    changeExpenseNameHandler= (event) => {
        this.setState({expenseName: event.target.value});
    }

    changeExpensePriceHandler= (event) =>{
        this.setState({expensePrice: event.target.value});
    }

    updateExpense= (e) =>{
        e.preventDefault();
        let expense = {expenseName: this.state.expenseName, expensePrice: this.state.expensePrice};
        console.log('expense =>' + JSON.stringify(expense));
        ExpenseService.updateExpense(this.state.categoryId, expense, this.state.expenseId).then( res => {
            this.props.history.push(`/view-category/${this.state.categoryId}`);
        });
    }

    cancel(){
        this.props.history.push(`/view-category/${this.state.categoryId}`);
    }

    componentDidMount(){
        ExpenseService.getExpenseById(this.state.categoryId, this.state.expenseId).then((res) =>{
            let expense = res.data;
            this.setState({expenseName: expense.expenseName,
                         expensePrice: expense.expensePrice});
        });
    }


    render() {
        return (
            <div>
                <div className="container">
                   <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Expense</h3>
                                <div className ="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Expense Name</label>
                                            <input placeholder="Expense Name" name="expenseName" 
                                            className="form-control"
                                            value={this.state.expenseName} 
                                            onChange={this.changeExpenseNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Expense Price</label>
                                            <input placeholder="Expense Price" name="expensePrice" 
                                            className="form-control"
                                            value={this.state.expensePrice} 
                                            onChange={this.changeExpensePriceHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateExpense}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                        </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default UpdateExpenseComponent;