import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import style from "./searchbox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name); 

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value)); 
  };

  return (
    <label className={style.labelForm} htmlFor="search">
      Find contacts by name
      <input
        value={filterValue} 
        onChange={handleChange} 
        className={style.inputSearch}
        type="text"
        name="search"
        id="search"
      />
    </label>
  );
}
