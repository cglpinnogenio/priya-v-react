import React from "react";
import Product from "../../Component/ProductCard/Product";

import { ProductArray } from "../../Component/Models/ProductDetails";

import "./ProductItemOne.css";

const ProductItemOne = () => {
  return (
    <div className="third-container">
      <div className="header-paragraph">Enjoy our feature products</div>

      <div className="product-label">
        {ProductArray.map((value: any) => {
          return (
            <Product
              image={value.image}
              title={value.title}
              price={value.price}
            />
          );
        })}
      </div>

      <div className="shop-all">SHOP ALL</div>
    </div>
  );
};

export default ProductItemOne;
