import { useContext } from 'react'
import { Rating } from './Rating'
import './RatingFilter.css'
import { SearchContext } from '../../../contexts/SearchContext'

function RatingFilter () {

    const { setFilter, setSelectedStar } = useContext(SearchContext);
    const handleRatingClick = (rateSelected) => {
        setSelectedStar(rateSelected);
        const filter = {
            rate: rateSelected,
        };
        setFilter((prevState) => ({
            ...prevState,
            ...filter,
        }));
    };

    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'>
                <Rating stars={5} onClick={handleRatingClick} disableClick={true} isRatingFilter={true} />
            </div>
        </div>
    )
}

export { RatingFilter }