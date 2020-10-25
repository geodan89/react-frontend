import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UpdateExpenseComponent from './components/UpdateExpenseComponent';
import CreateExpenseComponent from './components/CreateExpenseComponent';
import ViewCategoryComponent from './components/ViewCategoryComponent';
import UpdateCategoryComponent from './components/UpdateCategoryComponent';
import CreateCategoryComponent from './components/CreateCategoryComponent';
import ListCategoriesComponent from './components/ListCategoriesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch> localhost:3000/
                <Route path = "/" exact component = {ListCategoriesComponent}></Route>
                <Route path = "/categories" component = {ListCategoriesComponent}></Route>
                <Route path = "/add-category" component = {CreateCategoryComponent}></Route>
                <Route path = "/update-category/:categoryId" component = {UpdateCategoryComponent}></Route>
                <Route path = "/view-category/:categoryId" component = {ViewCategoryComponent}></Route>
                <Route path = "/add-expense" component = {CreateExpenseComponent}></Route>
                <Route path = "/update-expense/:expenseId" component = {UpdateExpenseComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
    
  );
}

export default App;
