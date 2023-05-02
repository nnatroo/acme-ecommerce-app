import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import products from "../../products-listing.json";
import Footer from '../components/Footer'

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilteredArray(
        products.filter((product) =>
          product.name.toLowerCase().includes(search)
        )
      );
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  const changeHandler = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Header onChange={changeHandler} />
      <Products filteredArray={filteredArray} search={search} />
      <hr/>
      <Footer />
    </>
  );
};

export default Search;
