import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
    
  );
}

export default App;
