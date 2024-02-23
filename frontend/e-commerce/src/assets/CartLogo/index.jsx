import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CartLogo.css'

function CartLogo () {

    const { isCartVisible, setIsCartVisible, setShowCart } = useContext(CartContext);
    const toggleCartVisibility = () => {
      setIsCartVisible(!isCartVisible);
      setShowCart(!isCartVisible);
    };

    return (
        <div className='cartLogoContainer' onClick={()=> toggleCartVisibility()}>
            <img src='src/assets/CartLogo/shopping-cart.png'/>
        </div>
    )
}

export { CartLogo }