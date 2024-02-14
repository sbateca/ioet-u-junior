import { Rating } from "../../../Filter/RatingFilter/Rating";
import PropTypes from 'prop-types';
import './Detail.css';


function Detail ({title, price, rate }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating stars={Math.round(rate)}/>
            <h3>${price}</h3>
        </div>
    )
}

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
};

export { Detail }
