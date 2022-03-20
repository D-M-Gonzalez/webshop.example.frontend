import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import styles from './ManageUsersContainer.module.css';
import Button from 'react-bootstrap/Button';
import { deleteUser } from '../../controllers/deleteUser';

const MySwal = withReactContent(Swal)

export default function ManageUsersContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://webshop-example-backend.herokuapp.com/api/users")
      const users = await response.json();
      setItems(users.docs);
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
          deleteUser(id);
          Swal.fire({title:'Deleted!',
          showConfirmButton:true,
          confirmButtonColor:"lightslategray",
      })
          nav("/admin/readproducts"); 
        } else if (result.isDenied) {
            Swal.fire({title:'Nothing was deleted!',
            showConfirmButton:true,
            confirmButtonColor:"lightslategray",
        })
        }
      })
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
            <b className={styles.name}>{item.user_name}</b>{' '}
            {item.user_name !== "admin" && <Button variant="secondary" size="sm" onClick={handleDelete(item._id)}>Delete</Button>}{' '}
          </div>
        ))}
      </div>
    </div>
    );
  }
}