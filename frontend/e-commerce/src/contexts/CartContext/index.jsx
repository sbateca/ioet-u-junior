import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

function CartProvider({ children }) {
    const [ isCartVisible, setIsCartVisible ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ itemSelected, setItemSelected ] = useState({});
    const [ showCart, setShowCart ] = useState(false);

    return (
        <CartContext.Provider
            value={{
                isCartVisible,
                setIsCartVisible,
                cartItems,
                setCartItems,
                itemSelected,
                setItemSelected,
                showCart,
                setShowCart
            }}>
                {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { CartContext, CartProvider };
