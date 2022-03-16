import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SubList() {

    return (
        <div>
            <p><Link to="/products/category1/subcategory1" >Products Cat 1 Sub Cat 1</Link></p>
            <p><Link to="/products/category1/subcategory2" >Products Cat 1 Sub Cat 2</Link></p>
            <p><Link to="/products/category1/subcategory3" >Products Cat 1 Sub Cat 3</Link></p>
            <p><Link to="/products/category1/subcategory4" >Products Cat 1 Sub Cat 4</Link></p>
            <p><Link to="/products/category1/subcategory5" >Products Cat 1 Sub Cat 5</Link></p>
        </div>
      )

}

export default function Category1() {
    const [isVisible, setVisible] = useState(false);
    const nav = useNavigate();

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        !isVisible && nav("/products/category1")
    }

    return (
        <div>
            <div>
            <p onClick={handleClick}>Category1</p>
            { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}
