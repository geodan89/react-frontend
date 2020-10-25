import React, { Component } from 'react';
import CategoryService from '../services/CategoryService';

class ListCategoriesComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories: []
        }
        this.addCategory = this.addCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
    }

    editCategory(categoryId){
        this.props.history.push(`/update-category/${categoryId}`);
    }

    addCategory(){
        this.props.history.push('/add-category');
    }

    //res means response
    componentDidMount(){
        CategoryService.getCategories().then((res) =>{
            this.setState({categories: res.data}); //stored response data into categories array
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Budget Category List</h2>
                    <div className = "row">
                        <button className = "btn btn-primary" onClick={this.addCategory}>Add Category</button>
                    </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Initial Amount</th>
                                <th>Current Amount</th>
                                <th>Created Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.categories.map(
                                    category => 
                                    <tr key = {category.categoryId}>
                                        <td>{category.categoryName}</td>
                                        <td>{category.initialAmount}</td>
                                        <td>{category.currentAmount}</td>
                                        <td>{category.createdDate}</td>
                                        <td>
                                            <button onClick={ () => this.editCategory(category.categoryId)}
                                            className="btn btn-info">Update</button>
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

export default ListCategoriesComponent;