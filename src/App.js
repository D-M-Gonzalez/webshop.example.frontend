import React from "react";
import {Routes, Route} from "react-router-dom";
import Products from "./container/Products/Products";
import Contact from "./container/Contact/Contact";
import Home from "./container/Home/Home";
import Layout from "./container/Layout/Layout";
import Error404 from "./components/Error404/Error404";
import HomeContact from "./container/Home/HomeContact/HomeContact";
import HomeIntro from "./container/Home/HomeIntro/HomeIntro";
import HomeProducts from "./container/Home/HomeProducts/HomeProducts";

export default function App() {
    return (
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route path="home/*" element={<Home />}>
        <Route path="intro" element={<HomeIntro />}/>
        <Route path="products" element={<HomeProducts />}/>
        <Route path="contact" element={<HomeContact />}/>
      </Route>
      <Route path="products/*" element={<Products />}>
        <Route path="category1/*" element={<HomeIntro />}>
          <Route path="subcategory1" element={<HomeProducts />}/>
          <Route path="subcategory2" element={<HomeProducts />}/>
          <Route path="subcategory3" element={<HomeProducts />}/>
          <Route path="subcategory4" element={<HomeProducts />}/>
          <Route path="subcategory5" element={<HomeProducts />}/>
        </Route>
        <Route path="category2/*" element={<HomeProducts />}>
        <Route path="subcategory1" element={<HomeProducts />}/>
        <Route path="subcategory2" element={<HomeProducts />}/>
        </Route>
        <Route path="category3/*" element={<HomeContact />}>
        <Route path="subcategory1" element={<HomeProducts />}/>
        <Route path="subcategory2" element={<HomeProducts />}/>
        <Route path="subcategory3" element={<HomeProducts />}/>
        </Route>
        <Route path="category4/*" element={<HomeContact />}>
        <Route path="subcategory1" element={<HomeProducts />}/>
        <Route path="subcategory2" element={<HomeProducts />}/>
        </Route>
      </Route>
       <Route path="contact" element={<Contact />}/>
      </Route>
      <Route path="*" element={<Error404 />}/>        
    </Routes>     
    );
}