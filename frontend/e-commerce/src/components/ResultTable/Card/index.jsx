import { useContext } from 'react';
import { Detail } from './Detail';
import PropTypes from 'prop-types';
import { SearchContext } from '../../../contexts/SearchContext';
import './Card.css'

function Card ({ id, image, title, price, description, rate }) {
    const {
        setIsOpen,
        setProductId,
        setImageProduct,
        setTitleProduct,
        setPriceProduct,
        setDescriptionProduct,
        setRateProduct,
    } = useContext(SearchContext);

    const openModal = () => {
        setIsOpen(true)
        setProductId(id)
        setImageProduct(image)
        setTitleProduct(title)
        setPriceProduct(price)
        setDescriptionProduct(description)
        setRateProduct(rate)
    }

    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image}/>
            </div>
            <Detail 
                title = {title}
                price = {price}
                rate = {rate}
            />
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
};

export { Card }
