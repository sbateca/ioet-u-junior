import { CartNumberSelector } from "../CartNumberSelector";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../contexts/CartContext";
import PropTypes from "prop-types";
import "./CartItem.css";

function CartItem({ id }) {
  const [currentProduct, setcurrentProduct] = useState({});
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    setcurrentProduct(getProductById(id));
  }, []);

  useEffect(() => {
    const updatedItems = updateCartItems(currentProduct);
    setCartItems(updatedItems);
  }, [currentProduct]);

  const getProductById = (id) => {
    const cartElement = cartItems.find((product) => product.id === id);
    return cartElement;
  };

  const updateCartItems = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    const newCartItems = [...cartItems];
    newCartItems[index] = product;
    return newCartItems;
  };

  const handleNumberChange = (value) => {
    if (value < 1) return;
    setcurrentProduct({
      ...currentProduct,
      quantity: value,
    });
  };

  return (
    <div className="CardItem">
      <img src={currentProduct?.imageProduct} />
      <h4>${(currentProduct?.price * currentProduct?.quantity).toFixed(2)}</h4>
      <CartNumberSelector
        quantity={currentProduct?.quantity}
        handleNumberChange={handleNumberChange}
      />
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export { CartItem };
