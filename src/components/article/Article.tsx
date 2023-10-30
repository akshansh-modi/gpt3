import React from 'react'
import './article.css';
// rafce for functional component
const Article = ({imgUrl,date,title}:any) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-img'>
<img src={imgUrl} />

      </div>
<div className='gpt3__blog-container_article-content'>
<p>{date}</p>
<h3 >{title}</h3>
  
</div>
<p>Read Full Article</p>
    </div>
  )
}

export default Article