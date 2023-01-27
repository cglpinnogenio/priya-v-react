import React, { useEffect, useState } from "react";
import Product from "../../Component/ProductCard/Product";
import "./ProductItem.css";
const ProductItem = () => {
  const [isSelect, setIsSelect] = useState(0);
  const [products, setProducts] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const [name, setName] = useState("Enjoy");

  const handleClick = (index: number) => {
    setIsSelect(index);
  };

  const fetchData = async () => {
    const productDetails = await fetch(
      "https://8f3c64a7-e390-4c93-ba85-88d5d6517c92.mock.pstmn.io/users"
    );
    const json: Array<any> = await productDetails.json();
    setUsers(json);
  };
  const fetchDetails = async () => {
    const productArray = await fetch(
      "https://4206707f-5f30-4679-86c2-1b8b5cd7de28.mock.pstmn.io/images"
    );
    const json = await productArray.json();
    setProducts(json);
  };
  const dataFetch = () => {
    if (isSelect === 2) {
      fetchDetails();
    } else {
      fetchData();
    }
  };
  useEffect(() => {
    dataFetch();
  }, [isSelect]);
  return (
    <div className="third-container">
      <div className="header-paragraph">{name} our feature products</div>
      <button onClick={() => setName("")}>Reset</button>
      <div className="product-label">
        {isSelect === 2? products &&
            products.length &&
            products.map((value: any, index: number) => {
              return (
                <Product
                  key={`${value.product_name} ${index}`}
                  click={() => handleClick(index)}
                  select={index === isSelect}
                  image={value.url}
                  title={value.product_name}
                  price={value.product_price}
                />
              );
            })
          : users &&
            users.map((value: any, index: number) => {
              return (
                <Product
                  key={`${value.product_name} ${index}`}
                  click={() => handleClick(index)}
                  select={index === isSelect}
                  image={value.url}
                  title={value.product_name}
                  price={value.product_price}
                />
              );
            })}
      </div>
      <div className="shop-all">SHOP ALL</div>
    </div>
  );
};
export default ProductItem;
