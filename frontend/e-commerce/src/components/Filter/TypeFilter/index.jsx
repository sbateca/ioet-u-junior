import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import "./TypeFilter.css";

function TypeFilter({ name, options }) {
  const { setFilter } = useContext(SearchContext);

  const [checkedValues, setCheckedValues] = useState(() => {
    const initialValues = {};
    options.forEach((option) => {
      initialValues[option.id] = false;
    });
    return initialValues;
  });

  useEffect(() => {
    const filter = {
      categories: getCategoriesAsArray(),
    };
    setFilter((prevState) => ({
      ...prevState,
      ...filter,
    }));
  }, [checkedValues]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedValues((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const getCategoriesAsArray = () => {
    const categoriesSelected = Object.keys(checkedValues).filter((key) => checkedValues[key]);
    return categoriesSelected;
  }

  return (
    <div className="TypeFilterContainer">
      <h2>{name}:</h2>
      {options.map((option, id) => (
        <div key={id} className="CheckBox">
          <input
            type="checkbox"
            id={option.id}
            name={option.label}
            checked={checkedValues[option.id]}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export { TypeFilter };
