import React, {useContext} from "react"
import { Context } from "../Context"


function CartItem(props){
    
    // const [hoverState, setHoverState] = useState(false);
    const {cartAction} = useContext(Context)
      
    return(
        <div className="cart-item">
            <img src={props.photo.url}  alt="NA" />
            <label>$5.94</label>    
            <button onClick={() => cartAction(props, "remove")}>Remove</button>    
        </div>
    )
}

export default CartItem