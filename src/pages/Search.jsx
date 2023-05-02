import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
// import products from "../../products-listing.json";
import Footer from "../components/Footer";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/listing")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setproducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

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
  }, [search, products]);

  const changeHandler = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Header onChange={changeHandler} />
      <Products filteredArray={filteredArray} search={search} />
      <hr />
      <Footer />
    </>
  );
};

export default Search;
