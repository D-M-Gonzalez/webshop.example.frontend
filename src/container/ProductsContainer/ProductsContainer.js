import React, { useState, useEffect } from 'react'
import { Badge } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductsDetail from '../../components/ProductsDetail/ProductsDetail';
import styles from './ProductsContainer.module.css'

export default function ProductsContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [detail, setDetail] = useState(false);
  const [propsDetail, setPropsDetail] = useState();
  const URL = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://webshop-example-backend.herokuapp.com/api/products?size=99")
      const cars = await response.json();
      setItems(cars.docs);
      setIsLoaded(true); 
    }
    fetchData()
    .catch(console.error);
  }, [])

 useEffect(()=>{
  isLoaded && handleFilters();
 },[URL,isLoaded])

  const handleFilters = () => {
    setDetail(false);
    let arr = [];
    items && (arr = items);
    const arrURL = URL.pathname.split("/");
    arrURL[2] && (arr = arr.filter((el)=>el.brand.brand_name.includes(arrURL[2])))
    arrURL[3] && (arr = arr.filter((el)=>el.category.includes(arrURL[3])))
    setFilterItems(arr); 
  }

  const handleClick = item => () => {
    setDetail(true);
    setPropsDetail(item);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <div>
      {detail ? 
      <ProductsDetail array={propsDetail}/> 
      : 
      <div className={styles.gridContainer}>
        {filterItems && filterItems.map(item => (
          <div className={styles.gridItem} onClick={handleClick(item)} key={item._id}>
            <b><img className={styles.brandimage} src={item.brand.logo_url} alt="brandimg"></img></b>
            <b className={styles.name}>{item.name}</b>
            <b className={styles.imgDiv}><img className={styles.image} src={item.image_url} alt="carimage"></img></b>
            <b><Badge bg="secondary">Price: {item.price} u$d</Badge></b>
          </div>
        ))}
      </div>}
    </div>
    );
  }
}
