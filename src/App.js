import React from "react";
import {Routes, Route} from "react-router-dom";
import Products from "./container/Products/Products";
import Contact from "./container/Contact/Contact";
import Home from "./container/Home/Home";
import Layout from "./components/Layout";
import Error404 from "./components/Error404";

export default function App() {
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="products" element={<Products />}/>
                    <Route path="contact" element ={<Contact />}/>
                    <Route path="home/*" element={<Home />}>                           
                    </Route>
                    <Route path="*" element ={<Error404 />}/>
                </Route>
            </Routes>
    );
}