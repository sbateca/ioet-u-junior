import { useState, useContext, useEffect } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { SearchContext } from "../../contexts/SearchContext";
import { CartContext } from "../../contexts/CartContext";
import "./NumberSelector.css";
import PropTypes from 'prop-types'

function NumberSelector({ handleSingleTotalPrice }) {
  const { productId, priceProduct, imageProduct } = useContext(SearchContext);

  const { itemSelected, setItemSelected } = useContext(CartContext);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    setItemSelected({
      id: productId,
      imageProduct: imageProduct,
      price: priceProduct,
      quantity: 1,
    });
  }, []);

  const handleNumberChange = (value) => {
    if (value < 1) return;
    setNumber(value);
    handleSingleTotalPrice(value);
    setItemSelected({
      ...itemSelected,
      quantity: value,
      price: priceProduct,
    });
  };

  return (
    <div className="NumberSelector">
      <span
        className={
          number == 1 ? "NumberSelectorIconDisabled" : "NumberSelectorIcon"
        }
      >
        <AiOutlineMinusCircle onClick={() => handleNumberChange(number - 1)} />
      </span>
      <h1>{number}</h1>
      <span className="NumberSelectorIcon">
        <AiOutlinePlusCircle onClick={() => handleNumberChange(number + 1)} />
      </span>
    </div>
  );
}

NumberSelector.propTypes = {
  handleSingleTotalPrice: PropTypes.func,
};

export { NumberSelector };
