import React from "react";
import {Routes, Route} from "react-router-dom";
import Products from "./container/Products/Products";
import Home from "./container/Home/Home";
import Layout from "./container/Layout/Layout";
import Error404 from "./container/Error404/Error404";
import HomeContact from "./container/HomeContact/HomeContact";
import HomeIntro from "./container/HomeIntro/HomeIntro";
import HomeProducts from "./container/HomeProducts/HomeProducts";
import AdminPage from "./container/AdminPage/AdminPage";
import CreateProductForm from "./components/Form/CreateProductForm/CreateProductForm";
import ModifyProductForm from "./components/Form/ModifyProductForm/ModifyProductForm";
import LoginForm from "./components/Form/LoginForm/LoginForm";
import ContactForm from "./components/Form/ContactForm/ContactForm";
import MediaContainer from "./container/MediaContainer/MediaContainer";
import ReadProductsContainer from "./container/ReadProductsContainer/ReadProductsContainer";
import ManageUsersContainer from "./container/ManageUsersContainer/ManageUsersContainer";

export default function App() {
    return (
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route path="home/*" element={<Home />}>
        <Route path="intro" element={<HomeIntro />}/>
        <Route path="products" element={<HomeProducts />}/>
        <Route path="contact" element={<HomeContact />}/>
      </Route>
      <Route path="products/*" element={<Products />}/>
       <Route path="contact" element={<ContactForm />}/>
       <Route path="media" element={<MediaContainer />}/>
       <Route path="login" element={<LoginForm />}/>
       <Route path="admin/*" element={<AdminPage />}>
        <Route path="createproduct" element={<CreateProductForm />}/>
        <Route path="readproducts" element={<ReadProductsContainer />}/>
        <Route path="manageusers" element={<ManageUsersContainer />}/>
        <Route path="modifyproduct/*" element={<ModifyProductForm />}/>       
       </Route>
      </Route>
      <Route path="*" element={<Error404 />}/>        
    </Routes>     
    );
}