import { useContext, useState } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';
import { CartContext } from '../../contexts/CartContext';
import { AddToCartButton } from '../CardActionButtons/AddToCart';
import { NumberSelector } from '../NumberSelector';

function Modal () {
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        descriptionProduct,
        rate
    } = useContext(SearchContext);
    const { itemSelected, cartItems, setCartItems } = useContext(CartContext);
    const [productQuantity, setProductQuantity] = useState(1);

    const setCloseModal = () => {
        setIsOpen(false)
    }

    const handleAddToCart = () => {
        let newProduct = [...cartItems];
        const productIndex = getItemIndex();
        if (productIndex != -1) {
            const product = getProductById(itemSelected.id);
            product.quantity += productQuantity;
            newProduct[productIndex] = product;
        }else{
            newProduct.push(itemSelected);
        }
        setCartItems(newProduct);
        setIsOpen(false);
    }

    const getItemIndex = () => {
        return cartItems.findIndex((item) => item.id === itemSelected.id);
    }

    const getProductById = (id) => {
        const cartElement = cartItems.find((product) => product.id === id);
        return cartElement;
    }

    const handleSingleTotalQuantity = (value) => {
        setProductQuantity(value);
    }

    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={setCloseModal}/>
                    <img src={imageProduct}/>
                </div>
                <div className="DetailsModalContainer">
                    <div className="HeaderDetailModalContainer">
                        <h3>{titleProduct}</h3>
                        <h3>${itemSelected?.price * productQuantity}</h3>
                    </div>
                    <Rating stars={Math.round(rate)}/>
                    <h6>{descriptionProduct}</h6>
                    <div className='DetailsButtonsActions'>
                        <NumberSelector handleSingleTotalPrice={handleSingleTotalQuantity} />
                        <AddToCartButton onAddToCart={handleAddToCart} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal }