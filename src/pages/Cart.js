import React, {useContext} from "react"
import {Context } from "../Context"

function Cart(){

  
  const {cartItems} = useContext(Context)

  console.log(cartItems)

    return (
      <div>
      
          <h2>Cart Page</h2>
          {cartItems}
        
      </div>
    );
}

export default Cart