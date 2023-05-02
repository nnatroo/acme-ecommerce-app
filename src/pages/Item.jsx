import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Item = (props) => {
  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get("name");
  console.log(window.location);

  return (
    <>
      <Header />
      INFO: {urlParams}
      <Footer />
    </>
  );
};

export default Item;
