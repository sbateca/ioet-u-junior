import { useContext, useEffect } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

import './Search.css'

function Search () {
    const {
        searchValue,
        setSearchValue,
        setFilter
    } = useContext(SearchContext);

    useEffect(() => {
        const filter = {
          title: searchValue,
        };
        setFilter((prevState) => ({
          ...prevState,
          ...filter,
        }));
      }, [searchValue]);

      return (
        <div className='SearchContainer'>
            <input
                placeholder='Search...'
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <img src='src/assets/loupe.png'/>
        </div>
    )
}

export { Search }