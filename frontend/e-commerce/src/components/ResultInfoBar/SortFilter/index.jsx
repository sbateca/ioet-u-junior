import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import "./SortFilter.css";

function SortFilter() {

  const { setOrderValue } = useContext(SearchContext);
  const setEventName = (event) => {
    setOrderValue(event.target.value);
  }

  return (
    <div className="SortFilterContainer">
      <select name="order" id="order" onChange={(event)=>setEventName(event)}>
        <option value="Name">Name</option>
        <option value="Price_Low">Price: Low to High</option>
        <option value="Price_High">Price: High to Low</option>
      </select>
    </div>
  );
}

export { SortFilter };
