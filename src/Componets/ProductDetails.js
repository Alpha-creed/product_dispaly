
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productAction';

const ProductDetails = () => {
    const product = useSelector((state)=>state.product)
    const {productId} =useParams();
    const dispatch = useDispatch();
    const {image,title,price,category,description} = product
    console.log(productId);

    const fechProductDetail = async()=>{
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err)=>{
                console.log("Err",err);
            });
            dispatch(selectedProduct(response.data));
    }
    useEffect(()=>{
        if(productId&&productId !==" ")
            fechProductDetail();
        return ()=>{
            dispatch(removeSelectedProduct())
        }
    },[productId])
    return (
    <ProductDetailsStyled>
      <h2>ProductDetails</h2>
      <div>
        {Object.keys(product).length === 0?(
            <div>...loading</div>
        ):(
            <div>
                <div className='overallDetails'>
                    <div className="imageDetail">
                        <img src={image}/>
                    </div>              
                <div className="otherDetails">
                    <div className='title'>{title}</div>
                    <div className='priceTag'>{price}</div>
                    <div className='category'>{category}</div>
                    <div className='desc'>{description}</div>
                    <div>
                    <button>Add to Cart</button>
                    </div>
                </div>
                </div>
            </div>
        )}
      </div>
    </ProductDetailsStyled>
  )
}

const ProductDetailsStyled =styled.div`

h2{
    text-align:center;
    font-size:30px;
    font-style:italic;
}
.overallDetails{
    display:flex;
    justify-content:space-between;
}
.imageDetail{
    margin:10px 20px;
    box-shadow: -4px -3px 14px -1px rgba(88,73,73,0.75);
-webkit-box-shadow: -4px -3px 14px -1px rgba(88,73,73,0.75);
-moz-box-shadow: -4px -3px 14px -1px rgba(88,73,73,0.75);
    img{
        width:700px;
        heigth:auto;
        object-fit:cover;
    }
}
.otherDetails{
    margin:10px 20px;
    .title{
        font-size:25px;
        coor:gray;
    }
    .priceTag{
        width:100px;
        height:30px;
        border-radius: 200px 22px 24px 200px;
        -webkit-border-radius: 200px 22px 24px 200px;
        -moz-border-radius: 200px 22px 24px 200px;
        background: #1b96c5;
        border: 1px solid #453634;
        color:white;
        padding:2px 0;
        margin:30px 0;
        text-align:center;
        font-size:20px;
    }
    .category{
        width:500px;
        heigth:200px;
        border-radius:12px;
        background:gray;
        color:#FFDA75;
        padding:12px 20px;
        text-align:left;
        font-size:25px;
    }
    .desc{
        width:auto;
        height:auto;
        font-size:20px;
        margin:30px 0;
    }
    button{
        padding:20px 10px;
        border:none;
        outline:none;
        background:red;
        color:white;
        border-radius:12px;
        font-size:20px;
    }

}
.
`;

export default ProductDetails
