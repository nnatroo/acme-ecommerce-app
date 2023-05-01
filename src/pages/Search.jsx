import React, { useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";

const Search = () => {
  const [search, setSearch] = useState("");

  const changeHandler = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Header onChange={changeHandler} />
      <Products filter={search}/>
    </>
  );
};

export default Search;
