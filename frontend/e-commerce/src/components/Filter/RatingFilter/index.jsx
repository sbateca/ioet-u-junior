import { useContext } from 'react'
import { Rating } from './Rating'
import './RatingFilter.css'
import { SearchContext } from '../../../contexts/SearchContext'

function RatingFilter () {

    const { setFilter } = useContext(SearchContext);
    const handleRatingClick = (rating) => {
        console.log(rating);
    };

    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'>
                <div onClick={()=>handleRatingClick(4)}><Rating stars={4} /></div>
                <div onClick={()=>handleRatingClick(3)}><Rating stars={3} /></div>
                <div onClick={()=>handleRatingClick(2)}><Rating stars={2} /></div>
                <div onClick={()=>handleRatingClick(1)}><Rating stars={1} /></div>
            </div>
        </div>
    )
}

export { RatingFilter }