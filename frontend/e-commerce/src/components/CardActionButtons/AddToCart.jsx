import PropTypes from 'prop-types';
import './AddToCart.css';

function AddToCartButton({ onAddToCart }) {
  return (
    <button className='CardActionBtn' onClick={onAddToCart}>Add to cart</button>
  )
}

AddToCartButton.propTypes = {
  onAddToCart: PropTypes.func,
};

export { AddToCartButton };
