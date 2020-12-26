import React, {useContext} from "react"
import {Link} from "react-router-dom";
import {Context} from "../Context"


function Header(){
  const {cartItems} = useContext(Context)
   
  const length = cartItems.length
  const cartClass = length > 0? "ri-shopping-cart-fill ri-fw ri-2x": "ri-shopping-cart-line ri-fw ri-2x"
    return (
      <div>
        <header>
         <Link to="/">
            <h2>Pic Some</h2>
         </Link>

         <Link to="/cart">
           <i className={cartClass}></i>
           { length > 0 && <label>{length}</label>}
         </Link>
 
        </header>
      </div>
    );
}

export default Header