import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CartLogo.css'

function CartLogo () {

    const { isCartVisible, setIsCartVisible } = useContext(CartContext);
    const toggleCartVisibility = () => {
      setIsCartVisible(!isCartVisible);
    };

    return (
        <div className='cartLogoContainer' onClick={()=> toggleCartVisibility()}>
            <img src='src/assets/CartLogo/shopping-cart.png'/>
        </div>
    )
}

export { CartLogo }