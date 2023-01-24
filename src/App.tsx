import React from "react";
import { Button } from "./Component/Button/Button";
import { Input } from "./Component/Input/Input";
import "./App.css";
import { ProductDetails } from "./Component/Models/ProductDetails";
import Product from "./Component/ProductCard/Product";
import { ArticleDetails } from "./Component/Models/ArticleDetails";
import Article from "./Component/Article/Article";
import Navbar from "./Container/Navbar/NavBar";
import NavBar from "./Container/Navbar/NavBar";
import Arusa from "./Container/AboutArusa/Arusa";
import ProductItem from "./Container/ProductItem/ProductItem";
import LightChair from "./Container/LightChairContainer/LightChair";
import ProductTwo from "./Container/ProductContainer2/ProductTwo";
import ProductItemOne from "./Container/ProductItemOne/ProductItemOne";
import Lookbook from "./Container/LookbookContainer/Lookbook";
import Detail from "./Container/DetailContainer/Detail";
import ArticleSofa from "./Container/ArticleSofa/Article";
import ArticleContainer from "./Container/ArticleContainer/ArticleContainer";
import Promotion from "./Container/PromotionContainer/Promotion";
import Footer from "./Container/FooterContainer/Footer";

function App() {
  return (
    <div className="Container">
      <div className="MainContainer">
        {/* <Button name="SHOP ALL" class="living-button"
        handleclick={() => {
          console.log("Button Clicked");
        }}
      />
      <Button name="READ ABOUT US" class="image-readme "
        handleclick={() => {
          console.log("Button Clicked",);
        }}
      />
    
<Input value="YOUR EMAIL"   handleChange={()=>console.log()}/>
{ProductDetails.map((value:any)=>{
return (<Product image={value.image} title={value.title} price={value.price}/>) })}

{ArticleDetails.map((value: any) => {

  return (<Article image={value.image} title={value.title} /> ); })}  */}

        <NavBar />
        <Arusa />
        <ProductItem />
        <LightChair/>
        <ProductTwo/>
        <ProductItemOne/>
        <Lookbook/>
        <Detail/>
        <ArticleSofa />

        <ArticleContainer/>

        <Promotion/>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
