import React, { Component } from 'react';
import CategoryService from '../services/CategoryService';

class ListCategoriesComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories: []
        }
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
                <h2 className="text-center">Category List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Category Initial Amount</th>
                                <th>Category Current Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.categories.map(
                                    category => 
                                    <tr key = {category.id}>
                                        <td>{category.categoryName}</td>
                                        <td>{category.initialAmount}</td>
                                        <td>{category.currentAmount}</td>
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