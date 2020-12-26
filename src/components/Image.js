import React, {useContext, useState} from "react"
import PropTypes from 'prop-types';
import {Context} from "../Context"

function Image(props){
    
    // const [hoverState, setHoverState] = useState(false);
    const {toggleFavorite, cartAction,checkItemInCart} = useContext(Context)
    const [isCart, setIsCart] = useState(checkItemInCart(props.photo.id))


    
    
    const additionalClass = props.photo.isFavorite ? "ri-heart-fill" : "ri-heart-line"
    // const isCarted =  isImageInCart(props.photo.id) ?  "ri-shopping-cart-fill" : "ri-add-circle-line" 
    
    const cartClass = isCart ? "ri-shopping-cart-fill" : "ri-add-circle-line"

    // const heartIcon = hoverState && <i className="ri-heart-line favorite" onClick={() => console.log("favorited")}></i>
    // const cartIcon = hoverState && <i className="ri-add-circle-line ri-lg cart" onClick={() => console.log("favorited")}></i>

    return(
        <div className="image-container big">
            <img src={props.photo.url} className="image-grid " alt="NA" 
                // onMouseOver={() => setHoverState(true)} 
                // onMouseLeave={() => setHoverState(false)}
             /> 
             

             <i className={` ri-1x favorite ${additionalClass}`} onClick={() => toggleFavorite(props.photo.id)}></i> 
             <i className={`${cartClass} cart `} onClick={() => {
                 if(!isCart){
                    cartAction(props, "add") 
                    setIsCart(true)
                                    }
                 else{
                    cartAction(props,"remove")
                    setIsCart(false)
                    
                 }  
             }
             }></i>
            {/* {heartIcon} */}
            {/* {cartIcon} */}
        </div>
    )
}

Image.propTypes = {
    
    props: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}    

export default Image


/*
# Challenge

Setup context to manage items in an array called `cartItems`. This will be an array of image objects.

1. Add the `cartItems` state to context. (Array)
2. Add function to add an image to the cart. (Takes the full image object as parameter)
3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)
*/