import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import './CartTotal.css';

function CartTotal() {
  const { cartItems } = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = calculateTotalCart();
    setCartTotal(total);
  }, [cartItems])
  
  const calculateTotalCart = () => {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return total;
  }

  return (
    <div className='CartTotal'>
      <h3>Total:</h3>
      <h4>{cartTotal.toFixed(2)}</h4>
      <button>Continue</button>
    </div>);
}

export { CartTotal };