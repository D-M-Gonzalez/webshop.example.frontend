import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ProductsDetail from '../ProductsDetail/ProductsDetail';
import styles from './ProductsContainer.module.css'

export default function ProductsContainer(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [detail, setDetail] = useState(false);
  const [propsDetail, setPropsDetail] = useState();
  const URL = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      fetch("db.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }
    fetchData()
    .catch(console.error);
  }, [])

 useEffect(()=>{
   setDetail(false);
   let arr = [];
   items.items && (arr = items.items);
   const arrURL = URL.pathname.split("/");
   arrURL[2] && (arr = arr.filter((el)=>el.brand.includes(arrURL[2])))
   arrURL[3] && (arr = arr.filter((el)=>el.category.includes(arrURL[3])))

   setFilterItems(arr);

 },[URL])

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
          <div className={styles.gridItem} onClick={handleClick(item)} key={item.id}>
            {item.name} {item.price}<img className={styles.image} src={item.image_url}></img>
          </div>
        ))}
      </div>}
    </div>
    );
  }
}
