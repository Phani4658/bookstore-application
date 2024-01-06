import React from "react";

const CartContext = React.createContext({
    cartList: [],
    addCartItem: () => {},
    deleteCartItem: () => {},
    changeCartItemQuantity: () => {},
    emptyCart: () => {},
})

export default CartContext