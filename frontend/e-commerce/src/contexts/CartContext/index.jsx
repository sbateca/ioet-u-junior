import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

function CartProvider({ children }) {
    const [ isCartVisible, setIsCartVisible ] = useState(false);
    return (
        <CartContext.Provider
            value={{
                isCartVisible,
                setIsCartVisible
            }}>
                {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { CartContext, CartProvider };
