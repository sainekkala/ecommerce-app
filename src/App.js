import './App.css';
import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import NavbarComponent from './Navbar';
import HomeComponent from './home/Home';
import FooterComponent from './Footer';
import CounterComponent from './Counter';
import ProductsComponent from './Products';
import ProductDetailsComponent from './ProductDetails';
import RatingReviews from './RatingReviews';
import ProductDescription from './ProductDescription';
import ProductSpecifications from './Specifications';
import EmployeesComponent from './employees/Employees';
import UsersComponent from './users/Users';
import RegisterComponent from './Register';
import TodoComponent from './Todo';
import UseCallbackCartsComponent from './UserCarts';
import CartComponent from './Cart';

import PageNotFoundComponent from './PageNotFound';
import LoginComponent from './Login';

export const CartContext = createContext();

function App() {
  const [cartInfo, setCartInfo] = useState([]);
  return (
    <div className="App">
      <NavbarComponent />
        <CartContext.Provider value={{cartInfo, setCartInfo}}>
          <Routes>
            <Route path="" element={<HomeComponent />}/>
            <Route path="counter" element={<CounterComponent />}/>
            <Route path="products" element={<ProductsComponent />}/>
            <Route path="product-details/:productId/:productName" element={<ProductDetailsComponent />}> 
              <Route path="specifications" element={<ProductSpecifications />} />
              <Route path="description" element={<ProductDescription />} />
              <Route path="rating-reviews" element={<RatingReviews />} />
            </Route>
            <Route path="employees" element={<EmployeesComponent/>}></Route>
            <Route path="users" element={<UsersComponent />}></Route>
            <Route path="register" element={<RegisterComponent />}></Route>
            <Route path="login" element={<LoginComponent />}></Route>
            <Route path="todo" element={<TodoComponent />}></Route>
            <Route path="useCallbackCarts" element={<UseCallbackCartsComponent/>}></Route>
            <Route path="cart" element={<CartComponent />}></Route>
            <Route path="*" element={<PageNotFoundComponent />}/>
          </Routes>
        </CartContext.Provider>
      <FooterComponent />
    </div>
  );
}

export default App;
