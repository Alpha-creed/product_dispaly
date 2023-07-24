import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import Product from './Product';
import axios from 'axios';
import { setProducts } from '../redux/actions/productAction';


const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts =async()=>{
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err)=>{
                console.log("Err",err);
            })
            dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log("Products :",products);
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
