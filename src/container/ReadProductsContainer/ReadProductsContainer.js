import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../controllers/deleteProduct';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import styles from './ReadProductsContainer.module.css';
import Button from 'react-bootstrap/Button';

const MySwal = withReactContent(Swal)

export default function ReadProductsContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [detail, setDetail] = useState(false);
  const URL = useLocation();
  const nav = useNavigate();

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

  const handleDelete = id => async () => {
    await MySwal.fire({
        title: <strong>Are you sure?</strong>,
        html: <i>Changes can't be reverted!</i>,
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: "Delete it!",
        confirmButtonColor: "darkred",
        denyButtonText: "Cancel",
        denyButtonColor: "lightslategray"
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id);
          Swal.fire({title:'Deleted!',
          showConfirmButton:true,
          confirmButtonColor:"lightslategray",
      })
          nav(0); 
        } else if (result.isDenied) {
            Swal.fire({title:'Nothing was deleted!',
            showConfirmButton:true,
            confirmButtonColor:"lightslategray",
        })
        }
      })
  }

  const handleModify = item => async () => {
      nav(`/admin/modifyproduct?name=${item.name}&category=${item.category}&description=${item.description}&price=${item.price}&brand=${item.brand.brand_name}&imgurl=${item.image_url}&logourl=${item.brand.logo_url}&id=${item._id}&brandid=${item.brand._id}`)  
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <div>
      <div className={styles.gridContainer}>
        {items && items.map(item => (
          <div className={styles.gridItem} key={item._id}>
            <b><img className={styles.brandimage} src={item.brand.logo_url} alt="brandimg"></img></b>
            <b className={styles.name}>{item.name}</b>
            <div className={styles.imgDiv}><img className={styles.image} src={item.image_url} alt="carimage"></img></div>
            <div>
                <Button variant="secondary" size="sm" onClick={handleDelete(item._id)}>Delete</Button>{' '}
                <Button variant="secondary" size="sm" onClick={handleModify(item)}>Modify</Button>{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  }
}
