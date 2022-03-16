import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SubList() {

    return (
        <div>
            <p><Link to="/products/category3/subcategory1" >Products Cat 3 Sub Cat 1</Link></p>
            <p><Link to="/products/category3/subcategory2" >Products Cat 3 Sub Cat 2</Link></p>
            <p><Link to="/products/category3/subcategory3" >Products Cat 3 Sub Cat 3</Link></p>
        </div>
      )

}

export default function Category3() {
    const [isVisible, setVisible] = useState(false);
    const nav = useNavigate();

    const handleClick = () => {
        isVisible ? setVisible(false) : setVisible(true)
        !isVisible && nav("/products/category3")
    }

    return (
        <div>
            <div>
            <p onClick={handleClick}>Category3</p>
            { isVisible ? <SubList/> : <></>}
            </div>
        </div>
      )
}