
import React from 'react'
import { useSelector } from 'react-redux';
import { styled } from 'styled-components'

const Product = () => {    
    const products = useSelector((state)=>state.allProducts.product);
    const{id,title} = products[0]
    return (
    <ProductStyled>
      <h1>Product</h1>
      <div className='link_cards'>
        <div className='card'>
            <div className='image'>
                <div className='content'>
                    <div className='header'>{title}</div>
                </div>
            </div>
        </div>
      </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`

`;

export default Product
