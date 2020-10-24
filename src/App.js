import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListCategoriesComponent from './components/ListCategoriesComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <HeaderComponent>
        <div className="container">
          <ListCategoriesComponent />
        </div>
      </HeaderComponent>
    </div>
    
  );
}

export default App;
