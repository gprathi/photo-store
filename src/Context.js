import React, {useState,useEffect} from "react"
import CartItem from "./components/CartItem"


const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(response => response.json())
        .then(data => setAllPhotos(data))
    }, [])

    function checkItemInCart(id){
        const itemIndex = cartItems.findIndex(
            (item) => item.props.photo.id === id
          );
          return itemIndex ? false : true
    }

    function cartAction(props, action){
        
        if (action === "add") {

        console.log(checkItemInCart(props.photo.id))
        if(!checkItemInCart(props.photo.id)) {   
            const updatedCart = [
                ...cartItems,
                <CartItem key={props.photo.id} photo={props.photo} />,
            ];
            setCartItems(updatedCart);
        }
        } 
        else if( action === "remove"){
            console.log(action)
          const itemIndex = cartItems.findIndex(
            (item) => item.props.photo.id === props.photo.id
          );
        console.log(itemIndex)    
          const updatedCart = [
            ...cartItems.slice(0, itemIndex),
            ...cartItems.slice(itemIndex + 1),
          ];
          setCartItems(updatedCart);
        }
        
        for (const item of cartItems){
            console.log(item)
        }
        
    }

    function toggleFavorite(id){
        const updatedPhotos = allPhotos.map(
            (photo) => {
                
                if(photo.id === id ){
                    console.log(id)
                    return {...photo, isFavorite: !photo.isFavorite}
                }
                else{
                    return photo
                }
                    
                   })
           setAllPhotos(updatedPhotos)        
                }

    return (
        <Context.Provider value={{allPhotos , toggleFavorite,checkItemInCart,cartItems, cartAction}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}