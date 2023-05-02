import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Item = (props) => {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <Header />
      {/* INFO: {sku} */}
      <Footer />
    </>
  );
};

export default Item;
