import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SubList() {

    return (
        <div>
            <p><Link to="/products/category2/subcategory1" >Products Cat 2 Sub Cat 1</Link></p>
            <p><Link to="/products/category2/subcategory2" >Products Cat 2 Sub Cat 2</Link></p>
        </div>
      )

}

export default function Category2() {
    const [isVisible, setVisible] = useState(false);
    const nav = useNavigate();

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        !isVisible && nav("/products/category2")
    }

    return (
        <div>
            <div>
            <p onClick={handleClick}>Category2</p>
            { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}