import React, { Component } from 'react';
import CategoryService from '../services/CategoryService';

class UpdateCategoryComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            categoryId: this.props.match.params.categoryId,
           categoryName: '',
           initialAmount: ''
        }

        this.changeCategoryNameHandler = this.changeCategoryNameHandler.bind(this);
        this.changeInitialAmountHandler = this.changeInitialAmountHandler.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    componentDidMount(){
        CategoryService.getCategoryById(this.state.categoryId).then((res) =>{
            let category = res.data;
            this.setState({categoryName: category.categoryName,
                         initialAmount: category.initialAmount});
        });
    }

    changeCategoryNameHandler= (event) => {
        this.setState({categoryName: event.target.value});
    }

    changeInitialAmountHandler= (event) =>{
        this.setState({initialAmount: event.target.value});
    }

    updateCategory= (e) =>{
        e.preventDefault();
        let category = {categoryName: this.state.categoryName, initialAmount: this.state.initialAmount};
        console.log('category =>' + JSON.stringify(category));

        CategoryService.updateCategory(category, this.state.categoryId).then( res => {
            this.props.history.push('/categories');
        });
    }

    cancel(){
        this.props.history.push('/categories');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Category</h3>
                                <div className ="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Category Name</label>
                                            <input placeholder="Category Name" name="categoryName" 
                                            className="form-control"
                                            value={this.state.categoryName} 
                                            onChange={this.changeCategoryNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Initial Amount</label>
                                            <input placeholder="Initial Amount" name="initialAmount" 
                                            className="form-control"
                                            value={this.state.initialAmount} 
                                            onChange={this.changeInitialAmountHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateCategory}>Save</button>
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

    export default UpdateCategoryComponent;