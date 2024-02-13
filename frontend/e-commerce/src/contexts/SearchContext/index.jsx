import { useState, useEffect, createContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [rate, setRateProduct] = useState(0);
  const [orderValue, setOrderValue] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [selectedStar, setSelectedStar] = useState(5);
  const [filter, setFilter] = useState({
    title: "",
    rate: 5,
    categories: []
  });

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    sortProductsList(orderValue);
  }, [orderValue]);
  
  useEffect(() => {
    filterProducts();
  }, [products, searchValue]);
  
  useEffect(() => {
    filterProducts();
  }, [filter]);

  const filterProducts = () => {
    const filteredProducts = products.filter(product => {
      if (filter.title && !product.title.toLowerCase().includes(filter.title.toLowerCase())) {
        return false;
      }
      if (filter.rate !== 0 && product.rating.rate > filter.rate) {
        return false;
      }
      if (filter.categories.length > 0 && !filter.categories.includes(product.category)) {
        return false;
      }
      return true;
    });
    setSearchedProducts(filteredProducts);
  };  
  
  const sortProductsList = (eventName) => {
    let sortedProducts = [...searchedProducts];
    if (eventName === "Name") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (eventName === "Price_Low") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (eventName === "Price_High") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setSearchedProducts(sortedProducts);
  };

  return (
    <SearchContext.Provider
      value={{
        setFilter,
        setOrderValue,
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        rate,
        setRateProduct,
        selectedStar,
        setSelectedStar
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
