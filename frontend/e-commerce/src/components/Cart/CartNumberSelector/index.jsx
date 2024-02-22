import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import "./CartNumberSelector.css";

function CartNumberSelector({ quantity=1, handleNumberChange }) {
  return (
    <div className="CartNumberSelector">
      <span
        className={
          quantity == 1 ? "NumberSelectorIconDisabled" : "NumberSelectorIcon"
        }
      >
        <AiOutlineMinusCircle
          onClick={() => handleNumberChange(quantity - 1)}
        />
      </span>
      <h1>{quantity}</h1>
      <span className="NumberSelectorIcon">
        <AiOutlinePlusCircle onClick={() => handleNumberChange(quantity + 1)} />
      </span>
    </div>
  );
}

CartNumberSelector.propTypes = {
  quantity: PropTypes.number,
  handleNumberChange: PropTypes.func,
};

export { CartNumberSelector };
