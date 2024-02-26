import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CartItem } from "../CartItem";
import { CartTotal } from "../CartTotal";
import "./CartItems.css";

function CartItems() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [productToRemove, setProductToRemove] = useState(0);

  useEffect(() => {
    removeProduct(productToRemove);
  }, [productToRemove]);

  const removeProduct = (productId) => {
    if (productId !== 0) {
      const updatedItems = cartItems.filter(
        (product) => product.id !== productToRemove
      );
      setCartItems(updatedItems);
      setProductToRemove(0);
    }
  };

  return (
    <>
      <CartTotal />
      <div className="CartItems">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                setProductToRemove={setProductToRemove}
              />
            );
          })
        ) : (
          <h3>The cart is empty</h3>
        )}
      </div>
    </>
  );
}

export { CartItems };
