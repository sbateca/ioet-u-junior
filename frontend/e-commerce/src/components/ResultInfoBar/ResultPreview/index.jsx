import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import "./ResultPreview.css";

function ResultPreview() {
  const { searchValue, searchedProducts } = useContext(SearchContext);
  return (
    <div className="ResultPreviewContainer">
      <h3>
        1-{searchedProducts.length} of over {searchedProducts.length} results
        for{" "}
      </h3>
      <h3 className="SearchWord">{searchValue}</h3>
    </div>
  );
}

export { ResultPreview };
