import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protecded from "./Protected";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protecded Cmp={AddProduct}/>/*<AddProduct />*/} />
          <Route path="/update" element={<Protecded Cmp={UpdateProduct}/>/*<UpdateProduct />*/} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
