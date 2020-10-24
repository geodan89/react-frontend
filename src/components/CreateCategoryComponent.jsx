import React, { Component } from 'react';

class CreateCategoryComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories: []
        }
    }
    render() {
        return (
            <div>
                <h1>Category Form</h1>
            </div>
        );
    }
}

export default CreateCategoryComponent;