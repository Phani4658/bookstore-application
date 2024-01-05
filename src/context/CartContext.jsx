import React from "react";

const CartContext = React.createContext({
    cartList: [],
    addCartItem: () => {},
    deleteCartItem: () => {},
    changeCartItemQuantity: () => {}
})

export default CartContext