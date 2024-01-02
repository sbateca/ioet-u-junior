import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { Card } from './Card'
import { Modal } from '../Modal'
import './ResultTable.css'

function ResultTable () {
    const {
        searchedProducts,
        isLoading,
        isOpen,
      } = useContext(SearchContext);
    return (
        <div className='ResultContainer'>
            <h2>Results:</h2>
            <div className='CardResultsContainer'>
                {   isLoading ?
                    <span className="loader"></span>
                    :
                    searchedProducts.map((product, index) => 
                        <Card
                            key={index}
                            image = {product.image}
                            title = {product.title}
                            price = {product.price}
                            description = {product.description}
                        />
                    )
                }
            </div>
            {isOpen && <Modal />}
        </div>
    )
}

export { ResultTable }


[{"id": 1, "title": 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', "price": 109.95, "description": 'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday'},{"id": 2, "title": 'Mens Casual Premium Slim Fit T-Shirts ', "price": 22.3, "description": 'Slim-fitting style, contrast raglan long sleeve, t…e round neckline includes a three-button placket.'},{"id": 3, "title": 'Mens Cotton Jacket', "price": 55.99, "description": 'great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.'},{"id": 4, "title": 'Mens Casual Slim Fit', "price": 15.99, "description": 'The color could be slightly different between on t…uld be reviewed below on the product description.'}]
