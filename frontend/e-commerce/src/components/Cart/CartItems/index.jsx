import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CartItem } from "../CartItem";
import { CartTotal } from "../CartTotal";
import "./CartItems.css";

function CartItems() {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <CartTotal />
      <div className="CartItems">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} id={item.id} />;
          })
        ) : (
          <h3>The cart is empty</h3>
        )}
      </div>
    </>
  );
}

export { CartItems };
