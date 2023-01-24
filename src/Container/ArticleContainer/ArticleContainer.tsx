
import React from 'react'
import './ArticleContainer.css';
import Article from '../../Component/Article/Article';
import { ArticleDetails } from '../../Component/Models/ArticleDetails';
const ArticleContainer = () => {
 return (
  <div className='article-container'>
   {ArticleDetails.map((value: any) => {
    return (<Article image={value.image}
    title={value.title} /> ); })}
  </div>
 )
}

export default ArticleContainer


