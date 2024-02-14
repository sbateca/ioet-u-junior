import { TypeFilter } from './TypeFilter';
import { RatingFilter } from './RatingFilter';
import './Filter.css';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { capitalizeText } from '../../utils/string';

function Filter () {

    const {products} = useContext(SearchContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if(products.length > 0)
        setCategories(getCategories());
    }, [products]);
    
    const getCategories = () => {
        const categories = [];
        products.forEach(product => {
            if(idExists(product.category, categories) === false){
                categories.push({
                    id: product.category,
                    label: capitalizeText(product.category)
                });
            }
        });
        return categories;
    };

    const idExists = (idToCheck, array) => {
        return array.some(item => item.id === idToCheck);
    };

    return (
        <div className='FilterContainer'>
            <TypeFilter
                name='Category'
                options={categories}
            />
            <RatingFilter />
        </div>
    )
}

export { Filter }