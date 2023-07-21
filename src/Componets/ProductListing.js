import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'
import Product from './Product';

const ProductListing = () => {
    const products = useSelector((state)=>state);
    console.log(products);
  return (
    <ProductListingStyled >
      <div className='grid_container'>
        <Product/>
      </div>
    </ProductListingStyled >
  )
}

const ProductListingStyled = styled.div`

`;

export default ProductListing
