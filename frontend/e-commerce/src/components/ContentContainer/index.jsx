import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Filter } from '../Filter';
import { ResultTable } from '../ResultTable';
import {Cart} from '../Cart';
import './ContentContainer.css'; 

function ContentContainer() {
  const { isCartVisible } = useContext(CartContext);

  return (
    <div className={`${ isCartVisible ? 'ContentContainerWithCart' : 'ContentContainerWithoutCart'}`}>
      <div className="content-ResultandFilter">
        <Filter />
        <ResultTable />
      </div>
      {isCartVisible && <Cart />}
    </div>
  );
}

export { ContentContainer };
