import { createContext, useEffect, useState } from "react"
import { food_list } from "../assets/frontend_assets/assets"
export const StoreContext = createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // Increment count or initialize to 1
        }));
    };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] > 1) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            } else {
                const updatedCart = { ...prev };
                delete updatedCart[itemId]; // Remove the item from the cart
                return updatedCart;
            }
        });
    };
    
    const getTotalCartAmonut=()=>{
        let totalAmonut=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmonut+=itemInfo.price*cartItems[item];
            }
        }
        return totalAmonut;
    }
    
    
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmonut
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
