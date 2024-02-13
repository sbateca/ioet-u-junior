import { useContext, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai';
import { SearchContext } from '../../../../contexts/SearchContext'
import './Rating.css'

function Rating ( {stars, onClick, disableClick=false, isRatingFilter=false} ) {

    const {selectedStar, setSelectedStar} = useContext(SearchContext);

    const fillStars = () => {
        const starsArray = [];
        for (let i = 1; i <= 5; i++) {
            starsArray.push(
                <div key={i} onClick={() => handleRatingClick(i)} className={getClassName(i)}>
                    {i <= stars ? <AiFillStar /> : <AiOutlineStar />}
                </div>
            );
        }
        return starsArray;
    };

    const handleRatingClick = (index) => {
        if(disableClick){
            setSelectedStar(index);
            onClick(index);
        }
    }

    const getClassName = (index) => {
        let className = '';
        if(isRatingFilter){
            index <= selectedStar ? className = 'StarFilled' : className = 'StarNotFilled';
        }else{ 
            index <= stars ? className = 'StarFilled' : className = 'StarNotFilled';
        }
        return className;
    };

    return (
        <div className='RatingContainer'>
            {fillStars(stars)}
            <h3>& up</h3>
        </div>
    )
}

export { Rating }