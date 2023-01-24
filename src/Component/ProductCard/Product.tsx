import react from "react";
import React, { FC, useEffect } from "react";
import "./Product.css";

const Product= ({
  image, title, price,click,select
}:any)  => {
  useEffect( () => {
    console.log("ProductDetailes")
 }, []);
  return (
    <div
      className="product-input"
      style={{ backgroundColor: select ? "salmon" : "" }}
    >
      <img
        onClick={click}
        src={image}
        alt=""
        id="product"
        className="image-input"
      />
      <div className="price-info1">
        <div className="product-name">{title}</div>
        <div className="product-price">{price}</div>
      </div>
    </div>
  );
}

export default React.memo(Product);

 
 