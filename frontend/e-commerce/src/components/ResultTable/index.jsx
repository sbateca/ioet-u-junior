import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { Card } from './Card'
import { Modal } from '../Modal'
import './ResultTable.css'
import { CartContext } from '../../contexts/CartContext';

function ResultTable () {
    const {
        searchedProducts,
        isLoading,
        isOpen,
      } = useContext(SearchContext);
      const {showCart} = useContext(CartContext);
    return (
        <div className='ResultContainer'>
            <h2>Results:</h2>
            <div className={showCart?'CardResultsContainerWithCart':'CardResultsContainer'}>
                {   isLoading ?
                    <span className="loader"></span>
                    :
                    searchedProducts.length > 0 ? ( searchedProducts.map((product, index) => 
                        {
                        return <Card
                            key={index}
                            id = {product.id}
                            image = {product.image}
                            title = {product.title}
                            price = {product.price}
                            description = {product.description}
                            rate = {Math.round(product.rating.rate)}
                        />}
                    )):
                    <h3>No results found</h3>
                }
            </div>
            {isOpen && <Modal />}
        </div>
    )
}

export { ResultTable }
