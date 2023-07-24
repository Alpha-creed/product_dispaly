import React from 'react'
import "./Product.css";
import { useSelector } from 'react-redux';
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Product = () => {    
    const products = useSelector((state)=>state.allProducts.products);
    const renderList = products&& products.map((product)=>{
        const {id,title,image,price,category} = product
         return(
            <>
            <div key={id}>
            <Link to={`/product/${id}`}>
                 <div className='link_cards' >
                  <div className='card'>
                    <div className='image'>
                        <img src={image} alt="Card Image"/>
                    </div>
                    <hr/>
                 <div className='content'>
                     <div className='header'>{title}</div>
                     <div className='meta price'>$ {price}</div>
                     <div className='meta'>{category}</div>
                 </div>
            
         </div>
       </div>
       </Link>
       </div>
       </>
        )
     })
    
    return (
        <ProductStyled>
         
            {
            renderList
         }
           </ProductStyled> 
  )
}

const ProductStyled = styled.div`

`;

export default Product
